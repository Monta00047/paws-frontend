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
import nextButton from '../../../assets/icons/home/testimonials/swiperNextButton.svg';
import prevButton from '../../../assets/icons/home/testimonials/swiperPrevButton.svg';
import { useRef, useEffect, useState } from 'react';

const Testimonials: FC<ITestimonials> = ({ data }) => {
  const { title, testimony } = data;
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // Swiper needs the refs to be set before initialization
  const [navReady, setNavReady] = useState(false);
  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <div className={styles.testimonials}>
      <img className={styles.arrow} src={arrow} alt="" />
      <div className={styles.title}>{title}</div>
      <div style={{ position: 'relative', width: '100%' }}>
        <button
          ref={prevRef}
          className={styles.swiperButtonPrev}
          aria-label="Previous"
          style={{ position: 'absolute', left: 0, top: '50%', zIndex: 10, background: 'none', border: 'none', padding: 0 }}
        >
          <img src={prevButton} alt="Previous" />
        </button>
        <button
          ref={nextRef}
          className={styles.swiperButtonNext}
          aria-label="Next"
          style={{ position: 'absolute', right: 0, top: '50%', zIndex: 10, background: 'none', border: 'none', padding: 0 }}
        >
          <img src={nextButton} alt="Next" />
        </button>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={32}
          slidesPerView={1}
          navigation={navReady ? { prevEl: prevRef.current, nextEl: nextRef.current } : false}
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
    </div>
  );
};

export default Testimonials;
