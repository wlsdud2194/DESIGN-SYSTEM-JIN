/** @jsx jsx */
import { css } from '@emotion/core';


export const alignStyle = (
  direction: 'row' | 'column',
  align: 'flex-start'|'center'|'flex-end',
  gap: number | string,
) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  const alignType = direction === 'row' ? 'justifyContent' : 'alignItems';

  return css({
    '&': {
      [alignType]: align,
    },
    '* + *' : {
      [marginType]: gap,
    },
  });
};
