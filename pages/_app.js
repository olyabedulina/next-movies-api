import NextNprogress from 'nextjs-progressbar';
import { Provider } from 'react-redux'
import '../styles/main.css'

import store from '../redux/store'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height="3"
            />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
            {/*<style jsx global>{`*/}
            {/*    body {*/}
            {/*      font-family: 'Roboto, sans-serif;*/}
            {/*    }*/}
            {/*`}</style>*/}
        </>
    )
}
