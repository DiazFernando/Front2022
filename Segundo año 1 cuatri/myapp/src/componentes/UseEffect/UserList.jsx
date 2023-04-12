import React, {useState, useEffect} from "react";

export const UserList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data)
    }

    useEffect

}