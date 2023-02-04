import { endpoint } from "../endpoints";

export const user = {
  createUser: () => `${endpoint.baseUrl}/user`,
  listUsers: () => `${endpoint.baseUrl}/user`,
  userById: (id: string) => `${endpoint.baseUrl}/user/${id}`,
};
