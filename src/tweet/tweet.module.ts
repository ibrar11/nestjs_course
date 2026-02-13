import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { UserModule } from 'src/users/users.module';

@Module({
  imports:[
    UserModule
  ],
  controllers: [TweetController],
  providers: [TweetService]
})
export class TweetModule {}
