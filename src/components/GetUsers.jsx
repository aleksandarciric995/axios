import axios from 'axios';
import { useState, useEffect } from 'react';
import api from '../settings/api';

const GetUsers = () => {
    const [users, setUsers] = useState([]);

    // kada se hocemo da jhe ucitamo, useeffect
    useEffect(()=> {
        api.get('/users')
        .then((res) => {
            console.log(res); // res - response
            setUsers(res.data);
        })
    }, [])

    return <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
}

export default GetUsers;