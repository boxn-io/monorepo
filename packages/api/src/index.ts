import "reflect-metadata"

import { ApolloServer } from "apollo-server"
import { resolvers } from "./resolvers"
import { buildSchema } from "type-graphql"
import { PrismaClient } from "@prisma/client"

const PORT = process.env.PORT || 4000

export type Context = {
  db: PrismaClient
}

const prismaClient = new PrismaClient()

async function bootstrap() {
  const schema = await buildSchema({ resolvers })

  const server = new ApolloServer({
    schema,
    cors: true,
    context: () => {
      return {
        db: prismaClient,
      }
    },
  })

  const { url } = await server.listen(PORT)
  console.log(`Server is running at ${url}`)
}

bootstrap()
