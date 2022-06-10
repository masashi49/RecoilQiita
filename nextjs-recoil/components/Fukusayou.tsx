import React, { useState, useEffect } from "react"


export const Fukusayou = () => {

    const [post, setPosts] = useState(0)

    useEffect(() => {
    
        console.log("更新")
        return function cleanup() {
            console.log("クリーン")
        }
    }, [post]);
    return (
        <div>
            this is post : {post}
            <button onClick={()=> setPosts(post +1)}></button>
        </div>
    )
}
