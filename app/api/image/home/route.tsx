export const runtime = 'edge';

export async function GET() {
  const { ImageResponse } = await import('@vercel/og');

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
        }}
      >
        See how many base transactions you have!
      </div>
    ),
    {
      width: 600,
      height: 600,
    },
  );
}

export const dynamic = 'force-dynamic';
