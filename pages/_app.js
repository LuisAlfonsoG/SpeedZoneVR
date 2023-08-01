import '../styles/global.css';
import {DM_Mono} from 'next/font/google';
import {Poppins} from 'next/font/google';

export default function App({ Component, pageProps }) {
  return (
    <main> 
      <Component {...pageProps} />
    </main>
  );
}
