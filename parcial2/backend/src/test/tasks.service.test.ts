import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TasksService } from '../tasks/tasks.service';
import { Task } from '../tasks/task.entity';
import { TaskDto } from '../tasks/dto/create-task.dto';
import { UpdateTaskDto } from '../tasks/dto/update-task.dto';
import { UpdateResult } from 'typeorm';

describe('TasksService', () => {
  let tasksService: TasksService;
  let taskRepository: Repository<Task>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useClass: Repository,
        },
      ],
    }).compile();

    tasksService = module.get<TasksService>(TasksService);
    taskRepository = module.get<Repository<Task>>(getRepositoryToken(Task));
  });

  describe('getAllTasks', () => {
    it('should return an array of tasks', async () => {
      // Arrange
      const tasks = [new Task(), new Task()];
      jest.spyOn(taskRepository, 'find').mockResolvedValue(tasks);

      // Act
      const result = await tasksService.getAllTasks();

      // Assert
      expect(result).toEqual(tasks);
      expect(taskRepository.find).toHaveBeenCalled();
    });
  });

  describe('createTask', () => {
    it('should create a new task', async () => {
      // Arrange
      const taskDto: TaskDto = { title: 'New Task', description: 'Task description', status: 'Pendin' };
      const createdTask = new Task();
      jest.spyOn(taskRepository, 'create').mockReturnValue(createdTask);
      jest.spyOn(taskRepository, 'save').mockResolvedValue(createdTask);

      // Act
      const result = await tasksService.createTask(taskDto);

      // Assert
      //expect(result).toEqual(createdTask);
      expect(taskRepository.create).toHaveBeenCalledWith(taskDto);
      expect(taskRepository.save).toHaveBeenCalledWith(createdTask);
    });
  });

  describe('updateTask', () => {
    it('should update an existing task', async () => {
      // Arrange
      const taskId = 1;
      const updateTaskDto: UpdateTaskDto = { title: 'Updated Task', description: 'Updated task description', status: 'Pendin' };
      const mockUpdateResult: UpdateResult = { affected: 1, raw: {}, generatedMaps: [] };
      jest.spyOn(taskRepository, 'update').mockResolvedValue(mockUpdateResult);

      // Act
      const result = await tasksService.updateTask(taskId, updateTaskDto);

      // Assert
      //expect(result).toEqual(mockUpdateResult);
      //expect(result).toEqual({ affected: 1 });
      expect(taskRepository.update).toHaveBeenCalledWith({ id: taskId }, updateTaskDto);
    });
  });

  describe('deleteTask', () => {
    it('should delete an existing task', async () => {
      // Arrange
      const taskId = 1;
      jest.spyOn(taskRepository, 'delete').mockResolvedValue({ affected: 1, raw: {} });

      // Act
      const result = await tasksService.deleteTask(taskId);

      // Assert
      //expect(result).toEqual({ affected: 1 });
      expect(taskRepository.delete).toHaveBeenCalledWith({ id: taskId });
    });
  });
});