import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataApi } from '../hooks/useDataApi'


export const FormPage = () => {
    const [query, setQuery] = useState('redux')
    const [{ data, isLoading, isError }, doFetch] = useDataApi();


    return (
        <div>
            <p>ここを順番に。次は <a href="https://qiita.com/ossan-engineer/items/c3853315f59dc20bc9dc#%E3%83%87%E3%83%BC%E3%82%BF%E5%8F%96%E5%BE%97%E7%94%A8%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%95%E3%83%83%E3%82%AF">これをやる</a></p>



            <form onSubmit={event => {
                doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
                event.preventDefault()
            }}>
                <input type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)} />
                <button>検索</button>
            </form>
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
