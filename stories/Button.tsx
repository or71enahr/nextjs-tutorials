import React from 'react';
import { css } from '@emotion/css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={storybookButton(primary, size)}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

const storybookButton = (primary: boolean, size: string) => css`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${primary
    ? css`
        color: white;
        background-color: #1ea7fd;
      `
    : css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `}

  ${size === 'large' &&
  css`
    font-size: 16px;
    padding: 12px 24px;
  `}
  ${size === 'medium' &&
  css`
    font-size: 14px;
    padding: 11px 20px;
  `}
  ${size === 'small' &&
  css`
    font-size: 12px;
    padding: 10px 16px;
  `}
`;
