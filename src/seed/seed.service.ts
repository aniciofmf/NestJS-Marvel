import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICharacterResponse } from '../../dist/seed/interfaces/character-result';
import { Character } from '../marvel/entities/character.entity';
import {
  MARVEL_ENDPOINT,
  MARVEL_API_KEY,
  MARVEL_TS,
  MARVEL_LIMIT,
} from '../common/constants';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Character.name) private readonly character: Model<Character>,
  ) {}

  async runSeed() {
    await this.character.deleteMany();

    const { data } = await this.axios.get<ICharacterResponse>(
      `${MARVEL_ENDPOINT}/characters?ts=${MARVEL_TS}&apikey=${MARVEL_API_KEY}&limit=${MARVEL_LIMIT}`,
    );

    const {
      data: { results },
    } = data;

    let charactersToInsert: {
      number: number;
      name: string;
      description: string;
    }[] = [];

    results.forEach(({ id, name, description }) => {
      const number: number = id;
      charactersToInsert.push({
        number: number,
        name: name,
        description: description,
      });
    });

    await this.character.insertMany(charactersToInsert);

    return 'Seed Finished';
  }
}
