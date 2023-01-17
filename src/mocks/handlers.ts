import { rest } from "msw";
import products from "./database";

export interface APIResponse<T> {
  data: T;
}

const handlers = [
  rest.get<never, never, APIResponse<API.Product[]>>(
    "/products",
    (request, response, ctx) => {
      return response(
        ctx.json({
          data: products,
        })
      );
    }
  ),
];

export default handlers;
