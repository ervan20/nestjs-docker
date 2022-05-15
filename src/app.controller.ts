import { Controller, Get } from '@nestjs/common';
import { AppService, Picture } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getImages(): Picture[] {
    return this.appService.getImages();
  }
}
