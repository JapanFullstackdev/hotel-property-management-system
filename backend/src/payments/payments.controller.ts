import { Controller, Post, Body, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';


@Controller('payments')
export class PaymentsController {


constructor(
 private service: PaymentsService
){}


@Post()
create(
 @Body() body:any
){

return this.service.create(body);

}



@Get()
findAll(){

return this.service.findAll();

}


}
