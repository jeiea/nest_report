import { Injectable, OnModuleInit } from '@nestjs/common';
import { FirstService } from './first.service';

@Injectable()
export class SecondService implements OnModuleInit {
  constructor(private readonly firstService: FirstService) {}

  onModuleInit() {
    console.log('second service module init');
  }
}
