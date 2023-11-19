import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from '../tasks/tasks.controller';
import { TasksService } from '../tasks/tasks.service';
import { TaskDto } from '../tasks/dto/create-task.dto';
import { Task } from '../tasks/task.entity';
import { UpdateTaskDto } from '../tasks/dto/update-task.dto';

describe('TasksController', () => {
  let controller: TasksController;
  let tasksService: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    tasksService = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createUser', () => {
    it('should call tasksService.createTask with the provided newTask', () => {
      const newTask: TaskDto = {
          title: 'Test Task',
          description: 'This is a test task',
          status: 'Pendin'
      };
      const createTaskSpy = jest.spyOn(tasksService, 'createTask');

      controller.createUser(newTask);

      expect(createTaskSpy).toHaveBeenCalledWith(newTask);
    });
  });

  describe('getAllTasks', () => {
    it('should return the result of tasksService.getAllTasks', async () => {
      const tasks: Task[] = [{
        id: 1,
        title: 'Test Task 1',
        description: 'This is a test task',
        status: 'OPEN',
      },
      {
        id: 2,
        title: 'Test Task 2',
        description: 'This is another test task',
        status: 'IN_PROGRESS',
      },];
      jest.spyOn(tasksService, 'getAllTasks').mockResolvedValue(tasks);

      const result = await controller.getAllTasks();

      expect(result).toBe(tasks);
    });
  });

  describe('updateTask', () => {
    it('should call tasksService.updateTask with the provided id and task', () => {
      const id = 1;
      const updateTask: UpdateTaskDto = {
         title: 'Updated Test Task',
        description: 'This is an updated test task',
        status: 'IN_PROGRESS', 
      };
      const updateTaskSpy = jest.spyOn(tasksService, 'updateTask');

      controller.updateTask(id, updateTask);

      expect(updateTaskSpy).toHaveBeenCalledWith(id, updateTask);
    });
  });

  describe('deleteTask', () => {
    it('should call tasksService.deleteTask with the provided id', () => {
      const id = 1;
      const deleteTaskSpy = jest.spyOn(tasksService, 'deleteTask');

      controller.deleteTask(id);

      expect(deleteTaskSpy).toHaveBeenCalledWith(id);
    });
  });
});
