import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'See my transactions!',
    }
  ],
  image: {
    src: 'https://base-transaction-frame.vercel.app/api/images/home',
    aspectRatio: '1:1',
  },
  postUrl: 'https://base-transaction-frame.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'derauk.xyz',
  description: 'LFG',
  openGraph: {
    title: 'derauk.xyz',
    description: 'LFG',
    images: ['https://base-transaction-frame.vercel.app/api/images/home'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>derauk.xyz</h1>
    </>
  );
}
