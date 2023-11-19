import { TasksService } from './tasks.service';
import { TaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    createUser(newTask: TaskDto): void;
    getAllTasks(): Promise<Task[]>;
    updateTask(id: number, task: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
}
