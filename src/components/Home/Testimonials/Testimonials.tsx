import type { FC } from 'react';
import type { ITestimonials } from '../../../types/home/testimonials';
import styles from './Testimonials.module.scss';
const Testimonials: FC<ITestimonials> = ({ data }) => {
  const { title, testimony } = data;
  console.log({ testimony });
  return (
    <div className={styles.testimonials}>
      <div className={styles.title}>{title}</div>
      <div className={styles.testimonials}></div>
    </div>
  );
};

export default Testimonials;
