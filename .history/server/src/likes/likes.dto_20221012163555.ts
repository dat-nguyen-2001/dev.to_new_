import { IsNotEmpty } from "class-validator";

export class CreateLikeDto {


  @IsNotEmpty()
  articleId: number;
}