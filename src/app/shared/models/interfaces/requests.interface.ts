import { BlogType } from "../types/constants.type"

export interface LoginForm {
  username : string,
  password : string
}

export interface RegisterForm {
  fullName : string,
  username : string,
  password : string,
}

export interface UploadPostForm {
  title : string,
  type : BlogType,
  content : string,
  files : Array<ImageFile>
}

export interface ImageFile {
  input : HTMLInputElement,
  blobUrl : string
}
