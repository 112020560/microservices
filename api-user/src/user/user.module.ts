import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DataBaseModule } from 'src/config';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [DataBaseModule],
  controllers: [UserController],
  providers: [UserRepository ,UserService],
})
export class UserModule {}
