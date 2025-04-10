import AboutMe from '@/components/aboutMe';
import GradientBackground from '@/components/GredientBackground/GradientBackground';
import TechSkills from '@/components/techSkills';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bubble Background - Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/vite.svg" />
      </Head>
      <main> 
        <div className='w-full h-screen'>
          <GradientBackground />
          <AboutMe />
          <TechSkills />
        </div>
      </main>
    </>
  );
}
