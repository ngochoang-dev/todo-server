import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/user/user.schema';

export class CreateTodoInput {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  deadline: string;

  @IsBoolean()
  is_finished?: boolean;

  @IsString()
  created_by: User;
}
