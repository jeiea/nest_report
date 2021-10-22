import { Module } from '@nestjs/common';
import { OneModule } from '../one/one.module';
import { ThirdService } from './services/third.service';

@Module({
  imports: [OneModule],
  providers: [ThirdService],
})
export class TwoModule {}
