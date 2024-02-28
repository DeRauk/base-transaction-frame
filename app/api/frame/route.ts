import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { ethers } from "ethers";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  let transactionCount: number | undefined = 0;

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];

    console.log("Account address: " + accountAddress);
    
    const url = 'https://mainnet.base.org';
    const provider = new ethers.providers.JsonRpcProvider(url);
    transactionCount = await provider.getTransactionCount(accountAddress);
    console.log("Transaction count: " + transactionCount);
  } else {
    transactionCount = 0;
  }

  return new NextResponse(
    getFrameHtmlResponse({
      image: {
        src: `${NEXT_PUBLIC_URL}/api/image/count?count=` + transactionCount,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
