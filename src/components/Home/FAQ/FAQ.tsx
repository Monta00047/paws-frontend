import type { FC } from 'react';
import type { IFAQ } from '../../../types/home/faq';
import styles from './FAQ.module.scss';
import BG from '../../../assets/images/home/faqBG.png';
import minus from '../../../assets/icons/home/minus.svg';
import plus from '../../../assets/icons/home/plus.svg';
const FAQ: FC<IFAQ> = ({ data }) => {
  const { title, subtitle, faqItem } = data;
  return (
    <div className={styles.faq}>
      <img className={styles.BG} src={BG} alt="backgorund" />
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.items}>
        {faqItem?.map((item) => {
          const { id, answer, question } = item;
          return (
            <div className={styles.item} key={id}>
              <div className={styles.top}>
                <div className={styles.question}>{question}</div>
                <img className={styles.icon} src={plus} alt="plus icon" />
              </div>
              <div className={styles.answer}>{answer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
