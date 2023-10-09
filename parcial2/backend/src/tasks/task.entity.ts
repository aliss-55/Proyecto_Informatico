import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum TaskStatus {
  Pending = 'PENDING',
  In_Progress = 'IN_PROGRESS',
  Done = 'DONE',
}

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;
}
