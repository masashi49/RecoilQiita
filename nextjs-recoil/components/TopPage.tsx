import React, {useState , useEffect} from "react"
import axios from "axios"

type User = {
    userId: String
    id: number
    title: string
    body: string
}

export const TopPage = () => {

    const [post, setPosts] = useState()
    
    const fetchEmployees = async () => {
        const response = await axios(
            `https://jsonplaceholder.typicode.com/posts`
        );
        console.log(response);
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div>
            this is Top Page

            <ul>

            </ul>
        </div>
    )
}
