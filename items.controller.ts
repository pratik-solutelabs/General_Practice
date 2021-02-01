import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class itemController {
 @Get()
 findAll() {
   return 'get all items';
 }
}
