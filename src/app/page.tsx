import Head from 'next/head';
import GradientBackground from '@/components/GredientBackground/GradientBackground';
// import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bubble Background - Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/vite.svg" />
      </Head>
      <main> 
        <div className='bg-red-400 w-full h-screen p-4'>
          <div className=' bg-green-500'>
            <GradientBackground />
             Lorem ipsum dolor sit amet consect
          </div>
        </div>
      </main>
    </>
  );
}
