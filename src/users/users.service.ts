import { Injectable } from "@nestjs/common"

export type UserType = {
    id: number
    name: string
    age: number
    gender?: string
    email: string
    isMarried: boolean
    password: string
}

@Injectable()
export class UsersService{
    users: UserType[] = [
        {
            id: 1,
            name: 'John',
            gender: 'Male',
            age: 28,
            email: 'john@mail.com',
            isMarried: false,
            password: '123454'
        },
        {
            id: 2,
            name: 'mark',
            gender: 'Male',
            age: 24,
            email: 'mark@mail.com',
            isMarried: true,
            password: '12345'
        },
        {
            id: 3,
            name: 'jean',
            gender: 'Female',
            age: 24,
            email: 'jean@mail.com',
            isMarried: true,
            password: '12345334'
        },
    ]

    getAllUsers(): UserType[] {
        return this.users;
    }

    getUserById(id: number): UserType | undefined {
        return this.users.find(user => user.id === id);
    }

    createUser(user: UserType) {
        try {
            this.users.push(user)
        } catch (err) {
            console.log("error creating new user: ",err)
        }
    }
}