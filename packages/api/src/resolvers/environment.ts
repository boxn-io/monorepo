import { Arg, Query, Resolver } from "type-graphql";
import { Environment } from "../types/environment";

@Resolver()
export class Environments {
  @Query((returns) => Environment)
  async environment(@Arg("id") id: string) {
    return { id };
  }
}
