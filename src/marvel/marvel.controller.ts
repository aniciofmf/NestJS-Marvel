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
  Query,
} from '@nestjs/common';
import { MarvelService } from './marvel.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { MongoIdPipe } from '../common/pipes/mongo-id.pipe';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('marvel')
export class MarvelController {
  constructor(private readonly marvelService: MarvelService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() createMarvelCharDto: CreateCharacterDto) {
    return this.marvelService.create(createMarvelCharDto);
  }

  @Get()
  findAll(@Query() paramsPagination: PaginationDto) {
    return this.marvelService.findAll(paramsPagination);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marvelService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMarvelCharDto: UpdateCharacterDto,
  ) {
    return this.marvelService.update(id, updateMarvelCharDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.marvelService.remove(id);
  }
}
