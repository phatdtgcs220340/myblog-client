import { UserRole } from "../types/constants.type"

interface TokenResponse {
  access_token : string,
  refresh_token : string,
  id_token : string
}

interface Page<T> {
  content: Array<T>;
  page: Pageable;
}

interface Pageable {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}

interface PartialPost {
  id : number,
  title : string,
  type : string,
  dateAudit : string,
  images : Array<string>
}

interface FullPost extends PartialPost{
  content : string,
  totalLikes : number,
  totalReplies : number
}

interface Reply {
  userId : number,
  username : string,
  avatar : string,
  content : string,
  dateAudit : string
}

interface User {
  id : number,
  fullName : string,
  username : string,
  avatarUrl : string,
  role : Array<UserRole>,
  participatedDate : string
}

export { TokenResponse, PartialPost, FullPost, Reply, User, Page }
