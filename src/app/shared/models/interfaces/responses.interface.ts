export interface PartialPost {
  id : number,
  title : string,
  type : string,
  dateAudit : string,
  images : Array<string>
}

export interface TokenResponse {
  access_token : string,
  refresh_token : string
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
