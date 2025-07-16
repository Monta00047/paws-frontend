import { useState, type FC } from 'react';
import './App.scss';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage/HomePage';

const App: FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      <Layout loading={loading}>
        <HomePage loading={loading} setLoading={setLoading} />
      </Layout>
    </div>
  );
};

export default App;
