import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { OneModule } from './one/one.module';
import { TwoModule } from './two/two.module';

@Module({
  imports: [TwoModule, OneModule],
})
export class ApplicationModule implements NestModule {
  configure(_: MiddlewareConsumer) {}
}
