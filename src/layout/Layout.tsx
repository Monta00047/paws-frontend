import type { Dispatch, FC, ReactNode } from 'react';
import styles from './Layout.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

interface LayoutProps {
  children: ReactNode;
  loading: boolean;
}

const Layout: FC<LayoutProps> = ({ children, loading }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>{children}</main>
      {loading && <Footer />}
    </div>
  );
};

export default Layout;
