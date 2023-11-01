import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class UpdateTaskDto {
  title?: string;

  description?: string;

  status?: string;
}
