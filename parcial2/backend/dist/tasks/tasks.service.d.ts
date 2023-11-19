import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { TaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    getAllTasks(): Promise<Task[]>;
    createTask(task: TaskDto): void;
    updateTask(id: number, task: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
}
