import type { FC } from 'react';
import type { ITestimonials } from '../../../types/home/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Testimonials.module.scss';
import arrow from '../../../assets/icons/home/testimonials/Arrow 05.svg';
import BG from '../../../assets/images/testimonials/testimonyBackground.png';

const Testimonials: FC<ITestimonials> = ({ data }) => {
  const { title, testimony } = data;
  return (
    <div className={styles.testimonials}>
      <img className={styles.arrow} src={arrow} alt="" />
      <div className={styles.title}>{title}</div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={32}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={styles.swiper}
        breakpoints={{
          768: { slidesPerView: 1 },
          1200: { slidesPerView: 1 },
        }}
      >
        {testimony.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.slide}>
              <img src={BG} className={styles.cardBG} />
              <div className={styles.cardContent}>
                <div className={styles.text}>{item.description}</div>
                <div className={styles.fullname}>{item.fullname}</div>
              </div>
              <div className={styles.imageWrapper}>
                <img
                  src={
                    import.meta.env.VITE_BASE_URL +
                      item.image?.formats?.thumbnail?.url || item.image.url
                  }
                  alt={item.fullname}
                  className={styles.image}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
