import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ServiceEntity } from './services.entity';
import { CommentEntity } from './comment.entity';

export type MemberDocument = HydratedDocument<MemberEntity>;

export class AccountInformation {
  @Prop()
  bank: string;
  @Prop()
  money_target: string;
  @Prop()
  account: string;
}

@Schema({collection: 'Member'})
export class MemberEntity {
  @Prop()
  first_name: string;
  @Prop()
  second_name: string;
  @Prop()
  last_name: string;
  @Prop()
  second_last_name: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  birth_date: Date;
  @Prop()
  create_date: Date;
  @Prop()
  image_path: string;
  @Prop()
  description: string;
  @Prop()
  update_date: Date;
  @Prop()
  status: string;
  @Prop()
  account_information: AccountInformation;
  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Services'}]})
  service: ServiceEntity[]
  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]})
  comment: CommentEntity[]
}

export const MemberSchema = SchemaFactory.createForClass(MemberEntity);
