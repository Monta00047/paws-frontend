import type { FC } from 'react';
import type { IVideoSection } from '../../../types/home/videoSection';
import styles from './VideoSection.module.scss';
import Button from '../../Button/Button';
import arrow from '../../../assets/icons/home/videoSectionArrow.svg';

const VideoSection: FC<IVideoSection> = ({ data }) => {
  const { title, subtitle, description, button, video } = data;
  const { href, label, variant } = button;
  const { url } = video;

  const isVideoFile =
    url &&
    (url.includes('.mp4') || url.includes('.webm') || url.includes('.ogg'));
  const isEmbeddableUrl =
    url &&
    (url.includes('youtube.com') ||
      url.includes('youtu.be') ||
      url.includes('vimeo.com'));

  const renderVideo = () => {
    if (isVideoFile) {
      return (
        <video className={styles.video} controls preload="metadata">
          <source src={import.meta.env.VITE_BASE_URL + url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (isEmbeddableUrl) {
      return (
        <iframe
          src={url}
          className={styles.video}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
      return (
        <div className={styles.videoPlaceholder}>
          <p>Video cannot be embedded due to security restrictions.</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.videoLink}
          >
            Open Video in New Tab
          </a>
        </div>
      );
    }
  };

  return (
    <div className={styles.videoSection}>
      <div className={styles.left}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.group}>
          <Button className={styles.button} href={href} variant={variant}>
            {label}
          </Button>
          <img src={arrow} className={styles.arrow} alt="arrow icon" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.videoContainer}>{renderVideo()}</div>
      </div>
    </div>
  );
};

export default VideoSection;
