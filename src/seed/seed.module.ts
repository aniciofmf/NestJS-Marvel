import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MarvelModule } from '../marvel/marvel.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [MarvelModule, ConfigModule],
})
export class SeedModule {}
