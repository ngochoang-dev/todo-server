import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ngochoangdev:ByXQ2havPMwJBReE@cluster0.obvmoum.mongodb.net/',
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
