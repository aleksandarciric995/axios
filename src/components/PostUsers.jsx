import { useState } from "react";
import axios from "axios";
import api from "../settings/api";

const PostUsers = () => {
    const [name, setName] = useState(``);
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    api.post('/users', {user: {name},
    })
    .then(res => {
        console.log(res);
    })

    return <>
    <form onSubmit={handleSubmit}>
    Person Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <button type="submit">Submit</button>
    </form>
    </>
}

export default PostUsers;