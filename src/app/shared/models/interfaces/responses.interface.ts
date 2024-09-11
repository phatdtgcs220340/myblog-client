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
  tags : Array<string>,
  dateAudit : string,
  images : Array<string>
}

interface FullPost extends PartialPost{
  content : string,
  totalLikes : number,
  totalReplies : number
}

interface Reply {
  id : number,
  userId : number,
  username : string,
  avatarUrl : string,
  content : string,
  dateAudit : string,
  totalLikes : number
}

interface SearchPost {
  id : number,
  title : string
}

interface SearchTag {
  name : string
}

interface User {
  id : number,
  fullName : string,
  username : string,
  avatarUrl : string,
  role : Array<UserRole>,
  participatedDate : string
}

export { TokenResponse, PartialPost, FullPost, Reply, User, Page, SearchPost, SearchTag }
