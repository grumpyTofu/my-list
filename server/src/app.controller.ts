import { AppService } from './app.service';
import { Controller, Get } from './utils/api.decorator';

@Controller()
export class AppController {
  private readonly appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  @Get({ name: 'Get Hello', responseType: String })
  getHello(): string {
    return this.appService.getHello();
  }
}
