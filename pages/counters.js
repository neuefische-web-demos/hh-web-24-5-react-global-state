import InfoBox from '../components/InfoBox';
import Navigation from '../components/Navigation';
import CounterList from '../components/CounterList';
import Link from '../components/Link';

export default function CountersPage({ animals, onAdd, onSubtract }) {
  return (
    <>
      <Link href="/">← Back</Link>

      <CounterList animals={animals} onAdd={onAdd} onSubtract={onSubtract} />

      <InfoBox />

      <Navigation />
    </>
  );
}
