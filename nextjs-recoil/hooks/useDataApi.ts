import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDataApi = () => {
    const [data, setData] = useState({ hits: [] });
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
    return [{ data, isLoading, isError }, setUrl];
}
