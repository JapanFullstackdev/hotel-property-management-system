import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController {

constructor(
 private service: ReservationsService
){}


@Get()
findAll(){
 return this.service.findAll();
}


@Post()
create(@Body() body:any){
 return this.service.create(body);
}

}
