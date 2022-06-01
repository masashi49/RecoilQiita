import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const SubPage = () => {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux')
    const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=redux')
    const [isLoading, setIsLodading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLodading(true)
            try {
                const result = await axios(url)
                setData(result.data)
            } catch (error) {
                setIsError(true);
            }
            setIsLodading(false)
        }
        fetchData()

    }, [url])

    return (
        <div>
            <p>ここを順番に。次は <a href="https://qiita.com/ossan-engineer/items/c3853315f59dc20bc9dc#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%81%A8-react-%E3%81%AB%E3%82%88%E3%82%8B%E3%83%87%E3%83%BC%E3%82%BF%E5%8F%96%E5%BE%97">これをやる</a></p>
            <input type="text"
                value={query}
                onChange={event => setQuery(event.target.value)} />
            <button
                type='button'
                onClick={() => setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)}></button>

            <br />
            <br />
            {isError && <div>Something went wrong ...</div>}
            <br />
            <br />

            {isLoading ?
                <div>Loading</div> :
                (
                    <ul>
                        {data.hits.map(item => (
                            <li key={item.objectID}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    )
}
