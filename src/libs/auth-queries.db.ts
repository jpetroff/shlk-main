/* eslint-disable no-useless-catch */
import User from '../models/user'
import _ from 'underscore'
import { GraphQLError } from 'graphql' 


export async function createOrUpdateUser( args: NewUser ) : Promise<UserDocument | null> {
  const user = await User.findOneAndUpdate(
    { email: args.email},
    args,
    {upsert: true}
  )

  return user
}