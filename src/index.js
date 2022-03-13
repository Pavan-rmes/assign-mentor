import express from "express"
import dotenv from "dotenv"
import {MongoClient} from "mongodb"
import {assignStu} from "./routes/assign.js"

dotenv.config()

const app = express()

app.listen(process.env.PORT,()=>console.log(`app listening on port ${process.env.PORT}`))

async function createDbConection(){
    const client = new MongoClient(process.env.MONGO_DB)
    await client.connect()
    console.log("Db connecetd")
    return client
}

app.use("/assign",assignStu)
export const client = await createDbConection()


