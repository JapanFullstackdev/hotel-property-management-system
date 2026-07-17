import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateReservationDto } from './dto/create-reservation.dto'


@Injectable()
export class ReservationsService {


constructor(
private prisma:PrismaService
){}



findAll(){

return this.prisma.reservation.findMany({

include:{
room:true
}

})

}



create(data:CreateReservationDto){


return this.prisma.reservation.create({

data:{

guestName:data.guestName,

roomId:data.roomId,

checkIn:new Date(data.checkIn),

checkOut:new Date(data.checkOut)
},

include:{
room:true
}

})


}


}
