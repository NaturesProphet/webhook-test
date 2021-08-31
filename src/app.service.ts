import { Injectable, Logger } from '@nestjs/common';
import { notifyDiscordSimpleMessage } from './DISCORD/notifications';

@Injectable()
export class AppService {
  getData ( req: Request ) {
    const log = {
      headers: req.headers,
      body: req.body,
      method: req.method,
      url: req.url
    }
    notifyDiscordSimpleMessage( log );
    Logger.verbose( log );
    console.log( '\n--------------------------------------------------' );

    return log;
  }
}
