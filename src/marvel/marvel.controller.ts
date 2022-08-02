import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { MarvelService } from './marvel.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('marvel')
export class MarvelController {
  constructor(private readonly marvelService: MarvelService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() createMarvelCharDto: CreateCharacterDto) {
    return this.marvelService.create(createMarvelCharDto);
  }

  @Get()
  findAll() {
    return this.marvelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marvelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMarvelCharDto: UpdateCharacterDto,
  ) {
    return this.marvelService.update(+id, updateMarvelCharDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marvelService.remove(+id);
  }
}
