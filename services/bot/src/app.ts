import { Elysia } from "elysia";

const app = new Elysia().get("/ping", () => "pong").listen(3001);

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
