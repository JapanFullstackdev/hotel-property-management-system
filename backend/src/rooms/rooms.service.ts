
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomsService {

  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.room.findMany();
  }

  findOne(id:number) {
    return this.prisma.room.findUnique({
      where:{id}
    });
  }

  create(dto:CreateRoomDto) {
    return this.prisma.room.create({
      data:dto
    });
  }

  remove(id:number) {
    return this.prisma.room.delete({
      where:{id}
    });
  }
}


