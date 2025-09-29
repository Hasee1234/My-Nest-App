import { Injectable, NotFoundException } from '@nestjs/common';
import { get } from 'http';

@Injectable()
export class StudentService {
    private students=[
        {id:1,name:'John',age:20},
        {id:2,name:'Smith',age:22},
    ]
    getAllStudents(){
        return this.students;
    }
    getStudentById(id:number){
        const student=this.students.find((s)=>s.id===id);
        if(!student) throw new NotFoundException('Student not found');
        return student;
    }

    //POST
    createStudent(data: {name:string; age:number}){
        const newStudent={
            id:Date.now(),
            ...data,
        };
        this.students.push(newStudent);
        return newStudent;
        }
    
    //PUT:it will update all the entities of student
    updateStudent(id:number,data:{name:string; age:number}){
        const index=this.students.findIndex((s)=>s.id===id);
        if(index===-1)throw new NotFoundException('Student not found');
        this.students[index]={id,...data};
        return this.students[index];
    }

    //Patch:it will update some entities not all entities of student 
    patchStudent(id:number,data:Partial<{name:string; age:number}>){
        const student=this.getStudentById(id);//you can use both logic find index or getStudentById
        Object.assign(student,data);
        return student;
    }

    //Delete
    deleteStudent(id:number){
        const index=this.students.findIndex((s)=>s.id===id);
        if(index===-1)throw new NotFoundException('Student not found');
        const deleted=this.students.splice(index,1);
        return {message:'Student deleted',student: deleted[0]};
    }
};
