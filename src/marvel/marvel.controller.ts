import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarvelService } from './marvel.service';
import { CreateMarvelDto } from './dto/create-marvel.dto';
import { UpdateMarvelDto } from './dto/update-marvel.dto';

@Controller('marvel')
export class MarvelController {
  constructor(private readonly marvelService: MarvelService) {}

  @Post()
  create(@Body() createMarvelDto: CreateMarvelDto) {
    return this.marvelService.create(createMarvelDto);
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
  update(@Param('id') id: string, @Body() updateMarvelDto: UpdateMarvelDto) {
    return this.marvelService.update(+id, updateMarvelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marvelService.remove(+id);
  }
}
