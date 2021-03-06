import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import type {IUser} from "@autodomkst/shared/data-access/interfaces";

@Entity({
  name: 'users'
})
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 50, unique: true})
  username: string;

  @CreateDateColumn()
  created: string;

  @UpdateDateColumn()
  updated: string;

  @Column()
  email: string;

  @Column()
  password: string;



}
