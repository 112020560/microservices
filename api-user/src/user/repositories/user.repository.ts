import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities";
import { MongoRepository } from "typeorm";
import { CreateUserDto, UpdateUserDto } from "../dto";

@Injectable()
export class  UserRepository {
    constructor(
        @InjectRepository(User)
        private userRepository: MongoRepository<User>,
      ) {}

      async create(createUserDto: CreateUserDto) {
        return await this.userRepository.save(createUserDto);
      }
    
      findAll() {
        return `This action returns all user`;
      }
    
      findOne(id: number) {
        return `This action returns a #${id} user`;
      }
    
      update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
      }
    
      remove(id: number) {
        return 
        }
}