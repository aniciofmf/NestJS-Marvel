import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateCharacterDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  number: number;

  @IsString()
  @MinLength(2)
  name: string;
}
