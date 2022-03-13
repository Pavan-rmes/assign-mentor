import express from "express"
import {createMentor,createStudent,assignStudent,getStudents,changeMentor} from "./heper.js"


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

assignStu.get("/show",async (req,res)=>{
    const {mentor} = req.query
    const response = await getStudents(mentor)
    res.send(response)
})
