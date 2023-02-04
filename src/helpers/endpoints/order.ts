import { endpoint } from "../endpoints";

export const order = {
  createOrder: () => `${endpoint.baseUrl}/order`,
};
