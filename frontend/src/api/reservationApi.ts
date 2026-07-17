import api from './api'


export interface Reservation {

  id:number

  guestName:string

  checkIn:string

  checkOut:string

  roomId:number

  room:{
    id:number
    number:string
    type:string
    price:number
    status:string
  }

}



export async function getReservations(){

  const response =
    await api.get<Reservation[]>('/reservations')

  return response.data

}



export async function createReservation(data:{
  guestName:string
  roomId:number
  checkIn:string
  checkOut:string
}){

  const response =
    await api.post(
      '/reservations',
      data
    )

  return response.data

}
