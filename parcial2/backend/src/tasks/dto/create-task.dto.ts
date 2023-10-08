import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class TaskDto {
    
    @IsString()
    @IsNotEmpty({ message: 'El título es obligatorio' })
    title: string

    @IsString()
    @IsNotEmpty({ message: 'La Descripción es obligatoria' })
    description: string

    @IsString()
    @IsNotEmpty({ message: 'El estado es obligatoria' })
    status: string

}