/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as S from './ButtonGroup.style';

type ButtonGroupProps = {
  /** set direction of the button */
  direction: 'row'|'column';
  /** set align items  */
  align: 'flex-start'|'center'|'flex-end';
  /** gap of the button */
  gap: number|string;
  /** buttons */
  children: React.ReactNode;
  /** custom styling */
  className?: string;
};

const ButtonGroup = ({
  direction,
  align,
  gap,
  children,
  className,
}: ButtonGroupProps) => {
  return (
    <div css={[
      {
        display: 'flex',
        flexDirection: direction,
      },
      S.alignStyle(direction, align, gap),
    ]} className={className}>
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  direction: 'row',
  align: 'flex-start',
  gap: '1rem',
  className: '',
}

export default ButtonGroup;