import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class MarvelService {
  constructor(
    @InjectModel(Character.name)
    private readonly characterModel: Model<Character>,
  ) {}

  async create(createMarvelCharDto: CreateCharacterDto) {
    createMarvelCharDto.name = createMarvelCharDto.name.toLowerCase();

    try {
      const character = await this.characterModel.create(createMarvelCharDto);

      return character;
    } catch (error) {
      throw new BadRequestException('Your character could not be created.');
    }
  }

  async findAll() {}

  async findOne(id: number) {}

  async update(id: number, updateMarvelCharDto: UpdateCharacterDto) {
    return updateMarvelCharDto;
  }

  async remove(id: number) {}
}
