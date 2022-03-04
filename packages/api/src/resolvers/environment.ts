import { Arg, Ctx, Query, Resolver } from "type-graphql"
import { Environment } from "../types/environment"
import type { Context } from "../"

@Resolver()
export class Environments {
  @Query((returns) => [Environment])
  async environments(@Ctx() ctx: Context) {
    return ctx.db.environment.findMany()
  }
}
