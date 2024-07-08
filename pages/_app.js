import GlobalStyle from '../styles';
import Layout from '../components/Layout';
import { useState } from 'react';

const initalAnimals = [
  { id: 1, name: 'Cats', count: 0 },
  { id: 2, name: 'Dogs', count: 0 },
  { id: 3, name: 'Sheep', count: 0 },
  { id: 4, name: 'Dragons', count: 0 },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(initalAnimals);

  const animalCounts = animals.map((animal) => animal.count);
  const countSum = animalCounts.reduce((acc, count) => acc + count);
  const countAverage = countSum / animals.length;
  const dragonCount = animals.find((animal) => animal.name === 'Dragons').count;

  //  averageCount, countSum, dragonCount,

  function handleAdd(id) {
    setAnimals(
      animals.map((animal) =>
        animal.id === id ? { ...animal, count: animal.count + 1 } : animal
      )
    );
  }

  function handleSubtract(id) {
    setAnimals(
      animals.map((animal) =>
        animal.id === id
          ? { ...animal, count: Math.max(0, animal.count - 1) }
          : animal
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout dragonCount={dragonCount} countSum={countSum}>
        <Component
          {...pageProps}
          animals={animals}
          onAdd={handleAdd}
          onSubtract={handleSubtract}
          countSum={countSum}
          countAverage={countAverage}
          dragonCount={dragonCount}
        />
      </Layout>
    </>
  );
}
