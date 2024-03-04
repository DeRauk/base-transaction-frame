export const runtime = 'edge';

export async function GET(request: Request) {
  const { ImageResponse } = await import('@vercel/og');
  
  try {
    const { searchParams } = new URL(request.url);
    const hasCount = searchParams.has('count');
    const count = hasCount
      ? searchParams.get('count')?.slice(0, 100)
      : '0';

      return new ImageResponse(
        (
          <div
            style={{
              fontSize: 30,
              color: 'black',
              background: 'white',
              width: '100%',
              height: '100%',
              padding: '25px 100px',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            No valid addresses linked to account.
          </div>
        ),
        {
          width: 600,
          height: 600,
        },
      );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

export const dynamic = 'force-dynamic';
