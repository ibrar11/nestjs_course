import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto{
  @IsNumber()
  id: number;

  @IsString({message: 'name should be a string value'})
  @IsNotEmpty()
  @MinLength(3, {message: 'Name should have a minimum of 3 characters.'})
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  isMarried: boolean;

}
