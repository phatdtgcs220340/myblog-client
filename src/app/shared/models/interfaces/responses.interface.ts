export interface PartialPost {
  id : number,
  title : string,
  type : string,
  dateAudit : string,
  userId : number,
  fullName : string,
  totalLike : number,
  totalReply : number,
  images : Array<string>
}

export interface TokenResponse {
  access_token : string,
  refresh_token : string
}
