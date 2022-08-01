import { PartialType } from '@nestjs/mapped-types';
import { CreateMarvelDto } from './create-marvel.dto';

export class UpdateMarvelDto extends PartialType(CreateMarvelDto) {}
