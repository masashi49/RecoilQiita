import { VFC, useState, useEffect } from 'react';
import axios from 'axios';
import { resolve } from 'path';
import { rejects } from 'assert';


// データ取得専用のhookになった。
export const useDataApi = (initialUrl: string, initialData: { hits: [] }) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl)
    const [isLoading, setIsLodading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        console.log(url)
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
        console.log("アンマウントされる！");

        // これはクリーンアップ関数
        return () => {

            console.log("bye!");
            run1sec();
        };

        function run1sec() {
            console.log("run1sec ing....");
            const start = performance.now();
            while (performance.now() - start < 1000);
        }

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

    const promiseFunc = (value: number) => {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                resolve(value * 2)
            }, 2000)
        })
    }

    async function asyncFunc() {
        // const a = await promiseFunc(1)
        // console.log(a + '1111')
        // const b = await promiseFunc(2)
        // console.log(b + '2222')
        // const c = await promiseFunc(3)
        // console.log(c + '3333')

        // 非同期処理をまとめて並列で行い、全部完了したら返す。
        const values = await Promise.all([
            promiseFunc(1),
            promiseFunc(2),
            promiseFunc(3)
        ])
        console.log(values)
        return values
    }

    // asyncFunc().then(value => {
    //     console.log('4444')
    //     console.log(value)
    // })


    // async function rejectFunc() {
    //     //return "resolv"
    //     return Promise.reject(new Error("エラーです"))
    // }
    // rejectFunc().catch(value => console.log(value))


    return [{ data, isLoading, isError }, setUrl];
}
