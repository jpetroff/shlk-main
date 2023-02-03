/* eslint-disable no-useless-catch */
import { 
  createShortlink, 
  createShortlinkDescriptor,
  getShortlink
} from '../../libs/public-queries.db'

export default {
  Mutation: {
    createShortlink: ( parent : any, args : { location: string }, context: any) => {
      return createShortlink(args.location, context.req?.session?.userId)
    },
  
    createDescriptiveShortlink: ( parent : any, args: {location: string, userTag?: string, descriptionTag: string, hash?: string }, context: any) => {
      return createShortlinkDescriptor(args)
    }
  },

  Query: {
    getShortlinkByHash: ( parent : any, args: { hash: string }, context: any ) => {
      return getShortlink(args)
    },
  
    getShortlinkByDescription: ( parent : any, args: { userTag?: string, descriptionTag: string }, context: any ) => {
      return getShortlink(args)
    }
  }
}