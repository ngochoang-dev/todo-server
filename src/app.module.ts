import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ngochoangdev:ngochoangdev2505@cluster0.kxtn5jt.mongodb.net/test',
    ),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
