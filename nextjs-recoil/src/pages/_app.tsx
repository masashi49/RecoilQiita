
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp

// https://forum.onflow.org/t/this-component-must-be-used-inside-a-recoilroot-component/911 これを試してみる
