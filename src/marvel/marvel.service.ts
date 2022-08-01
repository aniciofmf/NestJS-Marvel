import { Injectable } from '@nestjs/common';
import { CreateMarvelDto } from './dto/create-marvel.dto';
import { UpdateMarvelDto } from './dto/update-marvel.dto';

@Injectable()
export class MarvelService {
  create(createMarvelDto: CreateMarvelDto) {
    return 'This action adds a new marvel';
  }

  findAll() {
    return `This action returns all marvel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marvel`;
  }

  update(id: number, updateMarvelDto: UpdateMarvelDto) {
    return `This action updates a #${id} marvel`;
  }

  remove(id: number) {
    return `This action removes a #${id} marvel`;
  }
}
