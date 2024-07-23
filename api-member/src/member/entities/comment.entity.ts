import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<CommentEntity>;


@Schema({collection: 'Comment', strict: false})
export class CommentEntity {
    @Prop()
    username: string;
    @Prop()
    text: string;
    @Prop()
    created_at: Date;
}


export const CommentSchema = SchemaFactory.createForClass(CommentEntity);