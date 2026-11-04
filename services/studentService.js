import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async() =>{
    const students = await studentModel.fetch();
    return students;
}
export const createStudent = async(student) =>{ 
    const studentId = await studentModel.insert(student);  
    return studentId;
}
export const updateStudent = async(student) =>{
    const updateStudent = await studentModel.update(student);
    return updateStudent;
}
export const deleteStudent = async(id) => {
    const deleteStudent = await studentModel.remove(id);
    return deleteStudent;
}