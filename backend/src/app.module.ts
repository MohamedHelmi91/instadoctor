import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from './prisma.service';
import { AuthController } from './auth.controller';
import { DoctorsController } from './doctors.controller';
import { AppointmentsController } from './appointments.controller';
import { AuthService } from './auth.service';
@Module({imports:[JwtModule.register({secret:process.env.JWT_SECRET||'dev-secret',signOptions:{expiresIn:'7d'}})],controllers:[AuthController,DoctorsController,AppointmentsController],providers:[PrismaService,AuthService]})
export class AppModule {}
