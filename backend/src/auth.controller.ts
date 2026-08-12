import {Body,Controller,Post} from '@nestjs/common';
import {IsEmail,IsIn,IsString,MinLength} from 'class-validator';
import {AuthService} from './auth.service';
class RegisterDto{@IsString() name!:string;@IsEmail() email!:string;@IsString() @MinLength(8) password!:string;@IsIn(['PATIENT','DOCTOR']) role?:'PATIENT'|'DOCTOR';}
class LoginDto{@IsEmail() email!:string;@IsString() password!:string;}
@Controller('auth') export class AuthController{constructor(private auth:AuthService){} @Post('register') register(@Body() d:RegisterDto){return this.auth.register(d)} @Post('login') login(@Body() d:LoginDto){return this.auth.login(d.email,d.password)}}
