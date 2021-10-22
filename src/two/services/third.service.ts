import { Injectable, OnModuleInit } from '@nestjs/common';
import { SecondService } from '../../one/services/second.service';

@Injectable()
export class ThirdService implements OnModuleInit {
  constructor(private readonly secondService: SecondService) {}

  onModuleInit() {
    console.log('third service module init');
  }
}
