import type { FC } from 'react';
import type { ITeam } from '../../../types/home/team';
import styles from './Team.module.scss';

const Team: FC<ITeam> = ({ data }) => {
  const { title, item } = data;

  return (
    <div className={styles.team}>
      <div className={styles.title}>{title}</div>
      <div className={styles.items}>
        {item?.map((item) => {
          const { id, title, subtitle, icon } = item;
          const { url } = icon;
          return (
            <div className={styles.item} key={id}>
              <img
                className={styles.itemsImage}
                src={
                  // import.meta.env.VITE_BASE_URL +
                  url
                }
              />
              <div className={styles.itemsTitle}>{title}</div>
              <div className={styles.itemsSubitle}>{subtitle}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
