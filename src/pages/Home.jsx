import Hero from '../components/Hero';
import Stats from '../components/Stats';
import HowItWorks from '../components/HowItWorks';
import MapTeaser from '../components/MapTeaser';

export default function Home() {
  return (
    <main className="flex flex-col grow">
      <Hero />
      <Stats />
      <HowItWorks />
      <MapTeaser />
    </main>
  );
}