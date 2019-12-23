/** @jsx jsx */
import { css } from '@emotion/core';
import { rgba } from '../../lib/util';

export const button = css`
  cursor: pointer;
  user-select: none;
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;

  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

// background: #20c997;
// &:hover {
//   background: #38d9a9;
// }
// &:active {
//   background: #12b886;
// }
export const themes = (theme: string, mainColor: string) => {
  let btnTheme;

  if (theme === 'primary') {
    btnTheme = css`
      background: ${mainColor};
      color: white;
      &:hover:enabled {
        opacity: 0.8;
      }
      &:active:enabled {
        opacity: 0.8;
      }
      &:disabled {
        opacity: 0.8;
      }
    `;
  } else if (theme === 'secondary') {
    btnTheme = css`
      background: #e9ecef;
      color: #343a40;

      &:hover:enabled {
        opacity: 0.8;
      }
      &:active:enabled {
        opacity: 0.8;
      }
      &:disabled {
        opacity: 0.8;
      }
    `;
  } else if (theme === 'tertiary') {
    btnTheme = css`
      background: none;
      color: ${mainColor};
      &:hover:enabled {
        background: rgba(${rgba(mainColor, 0.2)});
      }
      &:active:enabled {
        background: rgba(${rgba(mainColor, 0.2)});
      }
      &:disabled {
        background: rgba(${rgba(mainColor, 0.2)});
      }
    `;
  }

  return btnTheme;
}

export const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `
};
