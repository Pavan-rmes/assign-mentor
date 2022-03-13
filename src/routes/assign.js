import express from "express"
import {createMentor,createStudent,assignStudent} from "./heper.js"


export const assignStu = express.Router()

assignStu.post("/mentor",express.json(),async (req,res)=>{
    const response = await createMentor(req.body)
    res.send(response)
})


assignStu.post("/student",express.json(),async (req,res)=>{
    const response = await createStudent(req.body)
    res.send(response)
})


assignStu.post("/assign",express.json(),async (req,res)=>{
    const response = await assignStudent(req.body)
    res.send(response)
})

assignStu.post("/change",express.json(),async (req,res)=>{
    const response = await changeMentor(req.body)
    res.send(response)
})
