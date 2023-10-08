import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){}

    @Post()
    createUser(@Body() newTask: TaskDto){
        this.tasksService.createTask(newTask)
    }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks()
    }
       
    
}
