import { Controller, Delete, Get, Patch, Post, Put, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller( '*' )
export class AppController {
  constructor( private readonly appService: AppService ) { }

  @Get()
  get ( @Request() req: Request ) {
    return this.appService.getData( req );
  }

  @Post()
  post ( @Request() req: Request ) {
    return this.appService.getData( req );
  }

  @Put()
  put ( @Request() req: Request ) {
    return this.appService.getData( req );
  }

  @Patch()
  patch ( @Request() req: Request ) {
    return this.appService.getData( req );
  }

  @Delete()
  delete ( @Request() req: Request ) {
    return this.appService.getData( req );
  }
}
