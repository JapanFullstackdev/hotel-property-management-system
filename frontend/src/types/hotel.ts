export interface Room {

  id:number

  number:string

  type:string

  price:number

  status:string

}



export interface Reservation {

  id:number

  roomId:number

  userId:number

  checkIn:string

  checkOut:string

  status:string

}



export interface User {

  id:number

  name:string

  email:string

  role:string

}
