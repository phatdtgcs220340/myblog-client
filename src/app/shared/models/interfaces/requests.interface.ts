import { BlogType } from "../types/constants.type"

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
  type : BlogType,
  content : string,
  files : Array<ImageFile>
}

interface ImageFile {
  input : HTMLInputElement,
  blobUrl : string
}

interface UploadReplyForm {
  content : string,
  blogId : number
}

export { LoginForm, RegisterForm, UploadPostForm, ImageFile, UploadReplyForm }
