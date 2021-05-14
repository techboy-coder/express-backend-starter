import dotenv from "dotenv"
dotenv.config()
export const mongodb_uri = process.env.MONGODB_URI
export const session_secret = process.env.SESSION_SECRET