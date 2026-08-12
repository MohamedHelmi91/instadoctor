import { Injectable,UnauthorizedException,ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from './prisma.service';
@Injectable() export class AuthService { constructor(private prisma:PrismaService,private jwt:JwtService){}
async register(dto:any){const exists=await this.prisma.user.findUnique({where:{email:dto.email}});if(exists)throw new ConflictException('Email already registered');const passwordHash=await bcrypt.hash(dto.password,12);const user=await this.prisma.user.create({data:{name:dto.name,email:dto.email,passwordHash,role:dto.role||'PATIENT',patient:dto.role==='DOCTOR'?undefined:{create:{}}}});if(user.role==='DOCTOR')await this.prisma.doctor.create({data:{userId:user.id,specialty:'General Medicine'}});return this.issue(user.id,user.role);}
async login(email:string,password:string){const user=await this.prisma.user.findUnique({where:{email}});if(!user||!(await bcrypt.compare(password,user.passwordHash)))throw new UnauthorizedException('Invalid email or password');return this.issue(user.id,user.role);}
private issue(id:string,role:string){return {accessToken:this.jwt.sign({sub:id,role}),role};}}
