import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.2dzfduq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
