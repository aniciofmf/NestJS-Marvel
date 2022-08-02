import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Injectable()
export class MarvelService {
  create(createMarvelCharDto: CreateCharacterDto) {
    createMarvelCharDto.name = createMarvelCharDto.name.toLowerCase();

    return createMarvelCharDto;
  }

  findAll() {}

  findOne(id: number) {}

  update(id: number, updateMarvelCharDto: UpdateCharacterDto) {
    return updateMarvelCharDto;
  }

  remove(id: number) {}
}
