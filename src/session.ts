import MongoStore from 'connect-mongo'
import { mongodb_uri } from './secrets'
export const store = MongoStore.create({
  mongoUrl: mongodb_uri
})
