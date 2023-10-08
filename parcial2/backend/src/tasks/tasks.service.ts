import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { TaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

    constructor(@InjectRepository(Task) private taskRepository: 
    Repository<Task>){}

    getAllTasks(){
        return this.taskRepository.find()
    }
    createTask(task:TaskDto ){
        const newTask = this.taskRepository.create(task)
        this.taskRepository.save(newTask)
    }
    updateTask(id: number, task: UpdateTaskDto ){
        return this.taskRepository.update({id}, task)
    }
    deleteTask(id: number){
        return this.taskRepository.delete({id})
    }


}
