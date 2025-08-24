import React from 'react';
import styles from './style.module.scss';

export interface CardProps {
  /** Card title */
  title: string;
  /** Card content */
  children: React.ReactNode;
  /** Card image URL */
  imageUrl?: string;
  /** Card variant */
  variant?: 'default' | 'elevated' | 'outlined';
  /** Card size */
  size?: 'small' | 'medium' | 'large';
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  imageUrl,
  variant = 'default',
  size = 'medium',
  onClick,
  className = '',
}) => {
  const cardClasses = [
    styles['storybook-card'],
    styles[`storybook-card--${variant}`],
    styles[`storybook-card--${size}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} onClick={onClick}>
      {imageUrl && (
        <div className={styles['storybook-card__image']}>
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className={styles['storybook-card__content']}>
        <h3 className={styles['storybook-card__title']}>{title}</h3>
        <div className={styles['storybook-card__body']}>
          {children}
        </div>
      </div>
    </div>
  );
};