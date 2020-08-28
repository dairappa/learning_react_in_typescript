import * as React from 'react';
import {useReducer} from 'react';

type UserData = {
    firstName: string;
    lastName: string;
    city: string;
    admin: boolean;
    id: string;
    state: string;
    email: string
};
const firstUser: UserData = {
    id: "1234-5678",
    firstName: "Bill",
    lastName: "Wilson",
    city: "Missoula",
    state: "Montana",
    email: "bwilson@gmail.com",
    admin: false
};

export const User: React.FC = () => {
    const [user, setUser] = useReducer(
        (user: UserData, newDetail: Partial<UserData>) => ({...user, ...newDetail}),
        firstUser)
    return (
        <div>
            <h1>
                {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
            </h1>
            <p>Email: {user.email}</p>
            <p>Location: {user.city}, {user.state}</p>
            <button onClick={() => {
                setUser({admin: true})
            }}>Make Admin
            </button>
        </div>
    )
}