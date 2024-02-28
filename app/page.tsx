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
  title: 'derauk.xyz',
  description: 'LFG',
  openGraph: {
    title: 'derauk.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/home.png`],
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
