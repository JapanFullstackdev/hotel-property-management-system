import {
 Controller,
 Get,
 Post,
 Body,
 Param,
 Patch,
 Delete
} from '@nestjs/common';

import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';


@Controller('rooms')
export class RoomsController {

constructor(
 private readonly roomsService: RoomsService
){}


@Post()
create(
 @Body() dto: CreateRoomDto
){
 return this.roomsService.create(dto);
}


@Get()
findAll(){
 return this.roomsService.findAll();
}


@Get(':id')
findOne(
 @Param('id') id:string
){
 return this.roomsService.findOne(Number(id));
}


@Patch(':id')
update(
 @Param('id') id:string,
 @Body() dto:CreateRoomDto
){
 return this.roomsService.update(
  Number(id),
  dto
 );
}


@Delete(':id')
remove(
 @Param('id') id:string
){
 return this.roomsService.remove(Number(id));
}

}
