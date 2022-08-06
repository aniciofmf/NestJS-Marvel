import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarvelService } from './marvel.service';
import { MarvelController } from './marvel.controller';
import { Character, CharacterSchema } from './entities/character.entity';

@Module({
  controllers: [MarvelController],
  providers: [MarvelService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Character.name,
        schema: CharacterSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class MarvelModule {}
