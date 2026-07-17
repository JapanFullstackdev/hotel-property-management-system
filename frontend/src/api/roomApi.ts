import api from './api'


export interface Room {

  id:number

  number:string

  type:string

  price:number

  status:string

}



export async function getRooms(){

  const response =
    await api.get<Room[]>('/rooms')


  return response.data

}

export async function createRoom(data:{
  number:string
  type:string
  price:number
}){

  const response = await api.post(
    '/rooms',
    data
  )

  return response.data

}
