
export type UserType = {
    id: number
    name: string,
    age: number,
    gender: string,
    isMarried: boolean
}

export class UsersService{
    users: UserType[] = [
        {
            id: 1,
            name: 'John',
            gender: 'Male',
            age: 28,
            isMarried: false
        },
        {
            id: 2,
            name: 'mark',
            gender: 'Male',
            age: 24,
            isMarried: true
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