import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { test } from '@/utils/constants';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
