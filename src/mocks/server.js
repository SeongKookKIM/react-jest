import { setupServer } from "msw/node";
import { handlers } from "./handlers";

const server = setupServer(...handlers);
server.listen();

export default server;
