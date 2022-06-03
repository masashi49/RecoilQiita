import { VFC,useState, useEffect } from 'react';
import axios from 'axios';
import { resolve } from 'path';
import { rejects } from 'assert';

type Props = {
    initialUrl: string,
    initialData:{hits:[]}
}

// データ取得専用のhookになった。
export const useDataApi = ({ initialUrl }: Props) => {
    const [data, setData] = useState({hits:[]});
    const [url, setUrl] = useState(initialUrl)
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


    // const wait = ms => new Promise(resolve => setTimeout(() => {
    //     resolve(), ms
    // }));
    // async function awaitFunc() {
    //     console.log(100)
    //    await  wait(2000)
    //     console.log(200)
    // }
    // awaitFunc()

    const promiseFunc = (value:number) => {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                resolve(value * 2)
            },1000)
        })
    }

    async function asyncFunc() {
        const a = await promiseFunc(1)
        console.log(a)
        const b = await promiseFunc(2)
        console.log(b)
        const c = await promiseFunc(3)
        console.log(a)
        return a + b * c;
    }

    asyncFunc().then(value => {
        console.log(value)
    })


    // async function rejectFunc() {
    //     //return "resolv"
    //     return Promise.reject(new Error("エラーです"))
    // }
    // rejectFunc().catch(value => console.log(value))


    return [{ data, isLoading, isError }, setUrl];
}
