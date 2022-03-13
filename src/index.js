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


app.get("/",(req,res)=>{
    res.send({"How this server works":"https://documenter.getpostman.com/view/17248871/UVsJvmT7"})
})
app.use("/assign",assignStu)
export const client = await createDbConection()


