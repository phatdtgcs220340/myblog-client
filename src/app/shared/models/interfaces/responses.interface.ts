export interface PartialPost {
  id : number,
  title : string,
  type : string,
  dateAudit : string,
  userId : number,
  fullName : string,
  totalLike : number,
  totalReply : number
}

export interface TokenResponse {
  access_token : string,
  refresh_token : string
}
