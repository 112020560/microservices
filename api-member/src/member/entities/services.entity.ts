import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ServicesDocument = HydratedDocument<ServiceEntity>;

@Schema({collection: 'Service', strict: false})
export class ServiceEntity {
    @Prop()
    service_code: string;
    @Prop()
    service_name: string;
    @Prop()
    service_description: string;
    @Prop()
    price: number;
    @Prop()
    fee: number;
    @Prop()
    enable: boolean;
    @Prop()
    create_date: Date;
}

export const ServicesSchema = SchemaFactory.createForClass(ServiceEntity);