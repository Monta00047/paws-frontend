import type { FC } from 'react';
import './App.scss';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage/HomePage';

const App: FC = () => {
  return (
    <div className="app">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
};

export default App;
