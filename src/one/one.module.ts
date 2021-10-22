import { Module } from '@nestjs/common';
import { FirstService } from './services/first.service';
import { SecondService } from './services/second.service';

@Module({
  providers: [FirstService, SecondService],
  exports: [SecondService],
})
export class OneModule {}
