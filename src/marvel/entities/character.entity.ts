import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Thumbnail<T, U> {
  path: string;
  extension: string;
}

@Schema()
export class Character extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  number: number;

  @Prop()
  description: string;

  @Prop()
  thumbnail: Thumbnail<string, string>;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
