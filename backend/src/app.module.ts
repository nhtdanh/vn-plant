import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule, // có ở đây thì không thêm PrismaService ở dưới
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
