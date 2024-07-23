import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CommentEntity,
  CommentSchema,
  MemberEntity,
  MemberSchema,
  ServiceEntity,
  ServicesSchema,
} from './entities';
import { MemberRepository } from './repositories';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MemberEntity.name, schema: MemberSchema },
      { name: CommentEntity.name, schema: CommentSchema },
      { name: ServiceEntity.name, schema: ServicesSchema },
    ]),
  ],
  controllers: [MemberController],
  providers: [MemberRepository, MemberService],
})
export class MemberModule {}
