import { Entity, ObjectIdColumn, ObjectId, Column, BaseEntity } from 'typeorm';

@Entity()
export class User{
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'confirm_password'})
  confirmPassword: string;

  @Column()
  type: string;

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createAt: Date

  @Column({ type: 'timestamp', default: null, nullable: true })
  updatedAt: Date;
}
