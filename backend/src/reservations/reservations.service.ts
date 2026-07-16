import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReservationsService {

  constructor(private prisma: PrismaService){}

  findAll(){
    return this.prisma.reservation.findMany({
      include:{
        room:true
      }
    });
  }

  create(data:any){
    return this.prisma.reservation.create({
      data
    });
  }

}
