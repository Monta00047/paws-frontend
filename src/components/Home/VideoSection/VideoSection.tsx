import type { FC } from 'react';
import { useState, useRef, useEffect } from 'react';
import type { IVideoSection } from '../../../types/home/videoSection';
import styles from './VideoSection.module.scss';
import Button from '../../Button/Button';
import arrow from '../../../assets/icons/home/videoSectionArrow.svg';

const VideoSection: FC<IVideoSection> = ({ data }) => {
  const { title, subtitle, description, button, video } = data;
  const { href, label, variant } = button;
  const { url } = video;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const [showPauseIcon, setShowPauseIcon] = useState(false);

  const isVideoFile =
    url &&
    (url.includes('.mp4') || url.includes('.webm') || url.includes('.ogg'));
  const isEmbeddableUrl =
    url &&
    (url.includes('youtube.com') ||
      url.includes('youtu.be') ||
      url.includes('vimeo.com'));

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setShowPlayIcon(true);
      setTimeout(() => setShowPlayIcon(false), 500);
    };

    const handlePause = () => {
      setIsPlaying(false);
      setShowPauseIcon(true);
      setTimeout(() => setShowPauseIcon(false), 500);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const PlayIcon = () => (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className={styles.playIcon}
    >
      <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)" />
      <path d="M32 25L58 40L32 55V25Z" fill="#333" />
    </svg>
  );

  const PauseIcon = () => (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className={styles.pauseIcon}
    >
      <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)" />
      <rect x="28" y="25" width="8" height="30" fill="#333" rx="2" />
      <rect x="44" y="25" width="8" height="30" fill="#333" rx="2" />
    </svg>
  );

  const renderVideo = () => {
    if (isVideoFile) {
      return (
        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            className={`${styles.video} ${
              isPlaying ? styles.playing : styles.paused
            }`}
            controls
            preload="metadata"
          >
            <source
              src={
                // import.meta.env.VITE_BASE_URL +
                url
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Play Icon Overlay */}
          <div
            className={`${styles.iconOverlay} ${
              showPlayIcon ? styles.show : ''
            }`}
          >
            <PlayIcon />
          </div>

          {/* Pause Icon Overlay */}
          <div
            className={`${styles.iconOverlay} ${
              showPauseIcon ? styles.show : ''
            }`}
          >
            <PauseIcon />
          </div>

          {/* Optional: Show play state indicator */}
          {isPlaying && (
            <div className={styles.playingIndicator}>Playing...</div>
          )}
        </div>
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
