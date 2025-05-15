import type { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
interface IButtonProps {
  href: string;
  variant: 'primary' | 'secondary' | 'tertiary';
}
const Button: FC<IButtonProps & PropsWithChildren> = ({
  href,
  variant,
  children,
}) => {
  const buttonClasses = `${styles.button} ${styles[variant]}`;
  return (
    <div className={buttonClasses}>
      <a href={href}>{children}</a>
    </div>
  );
};

export default Button;
