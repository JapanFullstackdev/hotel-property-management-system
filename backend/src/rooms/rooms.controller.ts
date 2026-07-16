import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {

  constructor(private service: RoomsService){}

  @Get()
  findAll(){
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id:string){
    return this.service.findOne(Number(id));
  }

  @Post()
  create(@Body() body:any){
    return this.service.create(body);
  }

  @Delete(':id')
  remove(@Param('id') id:string){
    return this.service.remove(Number(id));
  }
}
