import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from 'argon2'

@Injectable({})
export class AuthService {
async signup (dto: AuthDto) {
    const hash_password = argon.hash(dto.password)
    // TODO write in DB
    return {message: 'signed up'}
}

login () {
    return 'logged in'
}
}