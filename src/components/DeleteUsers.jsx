import { useState } from "react";
import api from "../settings/api";


const DeleteUsers = () => {
    const [id, setId] = useState(``);

    const deleteUserData = async (id) => {
        try {
            const response = api.delete(`/users/${id}`)
            return response;
        }
        catch (error) {
            console.log(`Error occured`, error);
        }
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await deleteUserData(id);
    }

    // const response = api.delete(`/users/${id}`).then(resp => {
    //     console.log(resp);
    //     return resp;
    // })

    

    return <>
    <h4>Delete users:</h4>
    <form onSubmit={handleSubmit}>
        <label>User id: <input type="text" onChange={e => setId(e.target.value)}></input></label>
        <button type="submit">Delete</button>
    </form>
    </>
}

export default DeleteUsers;