import request from "graphql-request"

export const fetcher = async (query: string) =>
  await request("http://localhost:4000", query)
