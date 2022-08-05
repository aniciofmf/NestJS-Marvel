import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { ICharacterResponse } from '../../dist/seed/interfaces/character-result';
import {
  MARVEL_ENDPOINT,
  MARVEL_API_KEY,
  MARVEL_TS,
} from '../common/constants';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async runSeed() {
    const { data } = await this.axios.get<ICharacterResponse>(
      `${MARVEL_ENDPOINT}/characters?ts=${MARVEL_TS}&apikey=${MARVEL_API_KEY}&limit=60`,
    );

    const {
      data: { results },
    } = data;

    results.forEach(({ id, name, description }) => {
      const number: number = id;

      // Bulk Insert
    });
  }
}
