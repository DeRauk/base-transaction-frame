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
    src: `${NEXT_PUBLIC_URL}/home.png`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'base-transaction-frame.vercel.app',
  description: 'LFG',
  openGraph: {
    title: 'base-transaction-frame.vercel.app',
    description: 'See how many base transactions you have!',
    images: [`${NEXT_PUBLIC_URL}/home.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>base-transaction-frame.vercel.app</h1>
    </>
  );
}
