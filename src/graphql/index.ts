// For later use when more schemas are added
// import { mergeResolvers } from '@graphql-tools/merge'

import typeDefsPublic from './schema/shortlink.schema'
import resolversPublic from './resolvers/public.resolvers'

import typeDefsUser from './schema/user.schema'
import resolversUser from './resolvers/auth.resolvers'

import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'

const mergedTypeDefs = mergeTypeDefs([typeDefsPublic, typeDefsUser])
const mergedResolvers = mergeResolvers([resolversPublic, resolversUser])

const schema = makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: mergedResolvers
})

export default schema