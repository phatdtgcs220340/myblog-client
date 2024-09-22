import { SortDirection } from "../types/constants.type"

interface LoginForm {
  username : string,
  password : string
}

interface RegisterForm {
  fullName : string,
  username : string,
  password : string,
}

interface UploadPostForm {
  title : string,
  tags : Array<string>,
  content : string,
  files : Array<FileDetail>
}

interface ImageFile {
  input : HTMLInputElement,
  blobUrl : string
}

interface UploadReplyForm {
  content : string,
  blogId : number
}

interface BlogFilter {
  name : string,
  tags : Array<string>,
  direction : SortDirection
}


interface FileDetail {
  id : number,
  description : string
}
export { LoginForm, RegisterForm, UploadPostForm, ImageFile, UploadReplyForm, BlogFilter, FileDetail }
