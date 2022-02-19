import "reflect-metadata"

import { ApolloServer } from "apollo-server"
import { resolvers } from "./resolvers"
import { buildSchema } from "type-graphql"

const PORT = process.env.PORT || 4000

async function bootstrap() {
  const schema = await buildSchema({ resolvers })

  const server = new ApolloServer({
    schema,
    cors: true,
  })

  const { url } = await server.listen(PORT)
  console.log(`Server is running at ${url}`)
}

bootstrap()
