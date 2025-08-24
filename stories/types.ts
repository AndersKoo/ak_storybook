import { ReactNode, ButtonHTMLAttributes } from 'react';
import React from 'react';

// Button component types
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
}

// Header component types
export interface HeaderProps {
  /** User name to display */
  user?: {
    name: string;
  };
  /** Callback fired when the user logs out */
  onLogout?: () => void;
  /** Callback fired when the user logs in */
  onLogin?: () => void;
  /** Callback fired when the user creates an account */
  onCreateAccount?: () => void;
}

// Page component types
export interface PageProps {
  /** Page title */
  title?: string;
  /** Page content */
  children?: ReactNode;
}

// Story types for Storybook
export interface StoryMeta {
  title: string;
  component: React.ComponentType<any>;
  parameters?: {
    layout?: 'centered' | 'padded' | 'fullscreen';
    docs?: {
      description?: {
        component?: string;
      };
    };
  };
  argTypes?: Record<string, any>;
  decorators?: Array<(Story: any) => React.ReactElement>;
}
