import { rest } from "msw";
import products from "./database";

export interface APIResponse {
  data: API.Product[];
}

const handlers = [
  rest.get<never, never, APIResponse>("/products", (request, response, ctx) => {
    return response(
      ctx.json({
        data: products,
      })
    );
  }),
];

export default handlers;
