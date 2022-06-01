import React, { useState, useEffect } from "react"
import axios from "axios"

type User = {
    userId: String
    id: number
    title: string
    body: string
}

export const TopPage = () => {

    const [post, setPosts] = useState([])

    const fetchEmployees = async () => {
        const response = await axios(
            `https://jsonplaceholder.typicode.com/posts`
        );
        setPosts(response.data);
    }
    useEffect(() => {
        fetchEmployees();
    }, []);
    return (
        <div>
            this is Top Page

            <ul>
                {
                    post.map((data: User) => {
                        return (
                            <li key={data.id}>
                                <dl>
                                    <dt>{data.title}</dt>
                                    <dd>{data.body}</dd>
                                </dl>
                            </li>)
                    })
                }
            </ul>
        </div>
    )
}
