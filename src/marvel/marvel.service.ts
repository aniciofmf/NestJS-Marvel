import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class MarvelService {
  constructor(
    @InjectModel(Character.name)
    private readonly characterModel: Model<Character>,
  ) {}

  async create(createMarvelCharDto: CreateCharacterDto): Promise<Character> {
    createMarvelCharDto.name = createMarvelCharDto.name.toLowerCase();

    try {
      const character = await this.characterModel.create(createMarvelCharDto);

      return character;
    } catch (error) {
      throw new BadRequestException('Your character could not be created.');
    }
  }

  async findAll() {}

  async findOne(id: string): Promise<Character> {
    let character: Character;

    if (!isNaN(+id)) {
      character = await this.characterModel.findOne({ number: id });
    }

    if (isValidObjectId(id)) {
      character = await this.characterModel.findById(id);
    }

    if (!character) {
      throw new NotFoundException('Character does not exist');
    }

    return character;
  }

  async update(id: string, updateMarvelCharDto: UpdateCharacterDto) {
    let character: Character = await this.findOne(id);

    try {
      if (updateMarvelCharDto.name) {
        updateMarvelCharDto.name = updateMarvelCharDto.name.toLowerCase();
      }

      await character.updateOne(updateMarvelCharDto);

      return { ...character.toJSON(), ...updateMarvelCharDto };
    } catch (error) {
      throw new BadRequestException('Your character could not be updated.');
    }
  }

  async remove(id: string) {}
}
