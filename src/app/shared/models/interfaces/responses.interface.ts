import { UserRole } from "../types/constants.type"

export interface TokenResponse {
  access_token : string,
  refresh_token : string,
  id_token : string
}

export interface PartialPost {
  id : number,
  title : string,
  type : string,
  dateAudit : string,
  images : Array<string>
}

export interface FullPost extends PartialPost{
  content : string,
  totalLikes : number,
  totalReplies : number
}

export interface Reply {
  userId : number,
  username : string,
  avatar : string,
  content : string,
  dateAudit : string
}

export interface User {
  id : number,
  fullName : string,
  username : string,
  avatarUrl : string,
  role : Array<UserRole>,
  participatedDate : string
}
