import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly userService: UsersService){}

    tweets: {text: string, date: Date, userId: number}[] = [
        {text: 'some text', date: new Date('2024-11-12'), userId: 1},
        {text: 'some other text', date: new Date('2024-08-12'), userId: 2},
        {text: 'some more text', date: new Date('2024-11-12'), userId: 1},
    ]

    getTweets(userId: number){
        const user = this.userService.users.find(user => user.id === userId)
        console.log("useruseruseruseruser",user)
        const tweets =  this.tweets.filter(tweet => tweet.userId === userId)
        console.log("tweetstweetstweets",tweets)
        const response = tweets.map(tweet => {
            return {...tweet, name: user?.name}
        })
        return response;
    }
}
