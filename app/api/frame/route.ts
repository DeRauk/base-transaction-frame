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
  } else {
    accountAddress = "0x934d4c153998a72AAb89Ad3eB53fDeccCf781fB2"
  }

  console.log("Account address: " + accountAddress);
  
  const url = 'https://mainnet.base.org';
  const provider = new ethers.providers.JsonRpcProvider(url);
  transactionCount = await provider.getTransactionCount(accountAddress);
  console.log("Transaction count: " + transactionCount);

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `Story: ${transactionCount} 🌲🌲`,
        },
      ],
      image: {
        src: 'https://base-transaction-frame.vercel.app/api/images/home',
      },
      postUrl: 'https://base-transaction-frame.vercel.app/api/frame',
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
