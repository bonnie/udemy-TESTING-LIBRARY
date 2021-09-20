import { handlers } from "./hanlders";
import { setupServer } from "msw/node";

export default setupServer(...handlers);
