import { HttpApi, HttpApiBuilder, HttpApiEndpoint, HttpApiGroup, HttpMiddleware, HttpServer } from "@effect/platform";
import { Console, Context, DateTime, Effect, Layer, Schema } from "effect";
import { NodeHttpServer, NodeRuntime } from "@effect/platform-node";
import { createServer } from "node:http";

// here is our api definition
class User extends Schema.Class<User>("User")({
  id: Schema.Number,
  name: Schema.String,
  createdAt: Schema.DateTimeUtc,
}) {}

class UsersApi extends HttpApiGroup.make("users").add(
  HttpApiEndpoint.get("findById", "/users/:id")
    .addSuccess(User)
    .setPath(
      Schema.Struct({
        id: Schema.NumberFromString,
      }),
    ),
) {}

class HealthCheckApi extends HttpApiGroup.make("healthCheck").add(
  HttpApiEndpoint.get("healthCheck", "/health-check")
    .addSuccess(Schema.String),
) {}

class MyApi extends HttpApi.empty
  .add(UsersApi)
  .add(HealthCheckApi) {}

class UsersRepository extends Context.Tag("UsersRepository")<
  UsersRepository,
  {
    readonly findById: (id: number) => Effect.Effect<User>;
  }
>() {}

// --------------------------------------------
// Implementation
// --------------------------------------------

const UsersRepositoryLive = Layer.succeed(UsersRepository, {
  findById: (id) =>
    Effect.gen(function* (_) {
      const now = yield* DateTime.now;
      Effect.log(`Finding user with id: ${id}`);

      return new User({
        id,
        name: "Alice",
        createdAt: now,
      });
    }),
});

// the `HttpApiBuilder.group` api returns a `Layer`
const UsersApiLive = HttpApiBuilder.group(
  MyApi,
  "users",
  (handlers) =>
    Effect.gen(function* () {
      const repository = yield* UsersRepository;

      return handlers
        .handle("findById", ({ path: { id } }) =>
          Effect.gen(function* (_) {
            const user = yield* repository.findById(id);
            return user;
          }));
    }),
);

const HealthCheckLive = HttpApiBuilder.group(
  MyApi,
  "healthCheck",
  (handlers) =>
    handlers
      // the parameters & payload are passed to the handler function.
      .handle("healthCheck", () => Effect.succeed("OK")),
);

const MyApiLive = HttpApiBuilder.api(MyApi).pipe(
  Layer.provide(UsersApiLive),
  Layer.provide(HealthCheckLive),
  Layer.provide(UsersRepositoryLive),
);

// use the `HttpApiBuilder.serve` function to register our API with the HTTP
// server
const HttpLive = HttpApiBuilder.serve(HttpMiddleware.logger).pipe(
  // Add CORS middleware
  Layer.provide(HttpApiBuilder.middlewareCors()),
  // Provide the API implementation
  Layer.provide(MyApiLive),
  // Log the address the server is listening on
  HttpServer.withLogAddress,
  // Provide the HTTP server implementation
  Layer.provide(NodeHttpServer.layer(createServer, { port: 3000 })),
);

// run the server
Layer.launch(HttpLive).pipe(NodeRuntime.runMain);
