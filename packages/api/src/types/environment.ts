import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class Environment {
  @Field((type) => ID)
  id!: string
}
