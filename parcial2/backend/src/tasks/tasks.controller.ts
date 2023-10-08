import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Post()
    createUser(@Body() newTask: TaskDto){
        this.tasksService.createTask(newTask)
    }

    @Get()
    getAllTasks(): Promise<Task[]> {
        return this.tasksService.getAllTasks()
    }

    @Patch(':id')
    updateTask(@Param('id', ParseIntPipe) id: number, @Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(id,task)
    }

    @Delete(':id')
    deleteTask(@Param('id', ParseIntPipe) id: number){
        return this.tasksService.deleteTask(id)
    }
    
}
