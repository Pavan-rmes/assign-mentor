import { client } from "../index.js";

async function createMentor(mentorData){
    if(mentorData.name){
        const response = await client.db("node-task3").collection("mentor").insertOne(mentorData)
        return response
    }
    else{
        return {status:"Name filed is mandetory"}
    }
}

async function createStudent(stuData){
    if(stuData.name){
        const response = await client.db("node-task3").collection("student").insertOne(stuData)
        return response
    }
    else{
        return {status:"Name filed is mandetory"}

    }
}


async function assignStudent(studentMentorData){
    const studentName = studentMentorData.student;
    const mentorName = studentMentorData.mentor;
    const checkStudent = await client.db("node-task3").collection("student").findOne({name:studentName})
    if(!checkStudent)return {status:"student dosen't exist"}
    const checkMentor = await client.db("node-task3").collection("mentor").findOne({name:mentorName})
    if(!checkMentor)return {status:"Mentor dosen't exist"}
    if(checkStudent.mentor)return {status:"Already assigned to a mentor"}
    const response = await client.db("node-task3").collection("student").updateOne({name:studentName},{$set:{mentor:mentorName}})
    return response
}

async function changeMentor(studentMentorData){
    const studentName = studentMentorData.student;
    const mentorName = studentMentorData.mentor;
    const checkStudent = await client.db("node-task3").collection("student").findOne({name:studentName})
    if(!checkStudent)return {status:"student dosen't exist"}
    const checkMentor = await client.db("node-task3").collection("mentor").findOne({name:mentorName})
    if(!checkMentor)return {status:"Mentor dosen't exist"}
    if(!checkStudent.mentor)return {status:"No mentor is assigned"}
    const response = await client.db("node-task3").collection("student").updateOne({name:studentName},{$set:{mentor:mentorName}})
    return response

}

async function getStudents(mentor){
    const students = await client.db("node-task3").collection("student").find({mentor:mentor}).toArray()
    if(students.length)return students
    return {status:"No student is assigned"}
}


export {createMentor,createStudent,assignStudent,getStudents,changeMentor}