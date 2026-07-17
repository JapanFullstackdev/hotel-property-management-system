import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomsService {

  constructor(
    private prisma: PrismaService
  ) {}

  async create(data: CreateRoomDto) {

    const existingRoom = await this.prisma.room.findUnique({
      where: {
        number: data.number
      }
    });

    if (existingRoom) {
      throw new ConflictException(
        'Room number already exists'
      );
    }

    return this.prisma.room.create({
      data: {
        ...data,
        status: data.status ?? 'AVAILABLE'
      }
    });
  }


  findAll() {
    return this.prisma.room.findMany();
  }


  findOne(id:number) {
    return this.prisma.room.findUnique({
      where:{ id }
    });
  }


  update(id:number, data:CreateRoomDto) {
    return this.prisma.room.update({
      where:{ id },
      data
    });
  }


  remove(id:number) {
    return this.prisma.room.delete({
      where:{ id }
    });
  }

}
