import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, SchemaType, SchemaTypes } from 'mongoose';

export type CustomerDocument = HydratedDocument<CustomerEntity>;

export class Tag {
  @Prop()
  key: string;
  @Prop()
  value: string;
}

export class MethodOfPayment {
  @Prop()
  method: string;
  @Prop()
  is_default: boolean;
  @Prop()
  value: string;
  @Prop()
  status: string;
  @Prop()
  tags: Array<Tag>;
}

@Schema({collection: 'Customer'})
export class CustomerEntity {
  @Prop({ type: SchemaTypes.ObjectId })
  id: mongoose.Types.ObjectId
  @Prop()
  first_name: string;
  @Prop()
  second_name: string;
  @Prop()
  last_name: string;
  @Prop()
  second_last_name: string;
  @Prop()
  identification_number: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  create_date: Date;
  @Prop()
  update_date: Date;
  @Prop()
  status: string;
  @Prop()
  method_of_payments: Array<MethodOfPayment>;
}

export const CustomerSchema = SchemaFactory.createForClass(CustomerEntity);

