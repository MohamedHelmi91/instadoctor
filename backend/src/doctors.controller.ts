import {Body,Controller,Get,Param,Post,Query} from '@nestjs/common';
import {PrismaService} from './prisma.service';
@Controller('doctors') export class DoctorsController{constructor(private prisma:PrismaService){}
@Get() list(@Query('search') search?:string){return this.prisma.doctor.findMany({where:{verified:true,...(search?{OR:[{specialty:{contains:search,mode:'insensitive'}},{user:{name:{contains:search,mode:'insensitive'}}}]}:{})},include:{user:{select:{id:true,name:true,email:true}}},orderBy:{rating:'desc'}})}
@Get(':id') get(@Param('id') id:string){return this.prisma.doctor.findUnique({where:{id},include:{user:{select:{id:true,name:true}},availability:true}})}
@Post('me/profile') profile(@Body() b:any){return this.prisma.doctor.update({where:{id:b.doctorId},data:{specialty:b.specialty,bio:b.bio,licenseNumber:b.licenseNumber,consultationFee:b.consultationFee}})}
@Post('me/availability') availability(@Body() b:any){return this.prisma.availability.create({data:{doctorId:b.doctorId,dayOfWeek:b.dayOfWeek,startTime:b.startTime,endTime:b.endTime}})}
}
