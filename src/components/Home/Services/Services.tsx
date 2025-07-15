import type { FC } from 'react';
import type { IServices } from '../../../types/home/services';
import Button from '../../Button/Button';
import styles from './Services.module.scss';
import BG from '../../../assets/images/home/ServicesBG.png';
import itemBG from '../../../assets/images/home/ServiceItem.png';
const Services: FC<IServices> = ({ data }) => {
  const { button, title, item } = data;
  const { href, label, variant } = button;

  return (
    <div className={styles.services}>
      <img src={BG} className={styles.bg} alt="" />
      <div
        dangerouslySetInnerHTML={{ __html: title }}
        className={styles.title}
      />
      <div className={styles.items}>
        {item?.map((item) => {
          const { id, title, subtitle, button, icon } = item;
          const { href, label, variant } = button;
          const { url } = icon;

          return (
            <div className={styles.item} key={id}>
              <img className={styles.itemBG} src={itemBG} alt="" />
              <div className={styles.itemIconWrapper}>
                <img
                  className={styles.itemIcon}
                  src={
                    // import.meta.env.VITE_BASE_URL +
                    url
                  }
                  alt="service icon"
                />
              </div>
              <div className={styles.itemTitle}>{title}</div>
              <div className={styles.itemSubtitle}>{subtitle}</div>
              <Button href={href} variant={variant}>
                {label}
              </Button>
            </div>
          );
        })}
      </div>
      <Button className={styles.button} href={href} variant={variant}>
        {label}
      </Button>
    </div>
  );
};

export default Services;
