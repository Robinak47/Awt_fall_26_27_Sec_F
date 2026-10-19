import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 30,
    default: 'meow',
    unique: true,
    nullable: true,
  })
  name: string;
  @Column({
    type: 'int',
    nullable: false,
  })
  age: number;

  @Column({
    name: 'userPassword',
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  password: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  UpdateDate: Date;
}
