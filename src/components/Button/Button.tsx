import type { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
interface IButtonProps {
  className?: string;
  href: string;
  variant: 'primary' | 'secondary' | 'tertiary';
}
const Button: FC<IButtonProps & PropsWithChildren> = ({
  href,
  variant,
  children,
  className,
}) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${className}`;
  return (
    <div className={buttonClasses}>
      <a href={href}>{children}</a>
    </div>
  );
};

export default Button;
