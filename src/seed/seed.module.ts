import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MarvelModule } from '../marvel/marvel.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [MarvelModule],
})
export class SeedModule {}
