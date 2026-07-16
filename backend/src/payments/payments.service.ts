import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentsService {

  constructor(
    private prisma: PrismaService
  ) {}


  create(data:any){

    return this.prisma.payment.create({
      data
    });

  }


  findAll(){

    return this.prisma.payment.findMany({
      include:{
        reservation:true
      }
    });

  }

}
