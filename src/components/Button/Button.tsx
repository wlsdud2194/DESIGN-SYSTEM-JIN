/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as S from './Button.style';

type ButtonProps = {
  /** content of the button */
  children: React.ReactNode;
  /** set type of the button */
  type?: 'button'|'submit'|'reset'; 
  /** make theme of the button */
  theme?: 'primary'|'secondary'|'tertiary';
  /** size of the button */
  size?: 'tiny'|'small'|'medium'|'big'|'large';
  /** width of the button arbitrarily set by the user */
  width?: string|number;
  /** if this props is true, the button is disabled */
  disabled?: boolean;
  /** When the button clicked, call this function */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

/** `Button` component is used when something process is triggered */
const Button = ({
  children,
  theme,
  type,
  size,
  width,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button 
      css={[ S.button, S.themes[theme], S.sizes[size], { width } ]} 
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  theme: 'primary',
  size: 'medium',
  disabled: false,
};

export default Button;