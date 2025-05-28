import { useState, type FC } from 'react';
import type { IFAQ } from '../../../types/home/faq';
import styles from './FAQ.module.scss';
import BG from '../../../assets/images/home/faqBG.png';
import minus from '../../../assets/icons/home/minus.svg';
import plus from '../../../assets/icons/home/plus.svg';

const FAQ: FC<IFAQ> = ({ data }) => {
  const { title, subtitle, faqItem } = data;
  const [expandedItem, setExpandedItem] = useState<string | number | null>(
    null
  );

  const toggleItem = (id: string | number) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.faq}>
      <img className={styles.BG} src={BG} alt="background" />
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.items}>
        {faqItem?.map((item) => {
          const { id, answer, question } = item;
          const isExpanded = expandedItem === id;

          return (
            <div
              className={`${styles.item} ${isExpanded ? styles.expanded : ''}`}
              key={id}
              onClick={() => toggleItem(id)}
            >
              <div className={styles.top}>
                <div className={styles.question}>{question}</div>
                <img
                  className={`${styles.icon} ${
                    isExpanded ? styles.rotated : ''
                  }`}
                  src={isExpanded ? minus : plus}
                  alt={isExpanded ? 'collapse' : 'expand'}
                />
              </div>
              <div
                className={`${styles.answer} ${
                  isExpanded ? styles.visible : styles.hidden
                }`}
              >
                {answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
