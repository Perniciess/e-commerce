import { PartialType } from "@nestjs/mapped-types"
import { signUpDto } from "src/auth/dto/signUp.dto";

export class UpdateUserDto extends PartialType(signUpDto) {

}
