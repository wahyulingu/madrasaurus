import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Todos from "../islands/Todos.tsx";
import { Task } from "../models/task.ts";
import { remultServer } from "./_middleware.ts";

export const handler: Handlers<Task[]> = {
  async GET(req, ctx) {
    const remult = await remultServer.getRemult(req);
    return ctx.render(await remult.repo(Task).find());
  },
};

export default function Home({ data }: PageProps<Task[]>) {
  return (
    <div>
      <Todos data={data} />
    </div>
  );
}
