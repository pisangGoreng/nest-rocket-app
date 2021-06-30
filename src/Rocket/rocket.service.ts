import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import * as countdown from 'countdown';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';

@Injectable()
export class RocketService {
  client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    });
  }

  getNextLaunchRemainingTime() {
    return this.client.send<string, string>(
      'get-next-launch-remaining-time',
      '',
    );
  }
}
