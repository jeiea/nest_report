import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class FirstService implements OnModuleInit {
  onModuleInit() {
    console.log('first service module init');
  }
}
