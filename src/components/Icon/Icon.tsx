/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as icons from './svg';

type IconType = keyof typeof icons;

export type IconProps = {
  /** icon type to use */
  icon: IconType;
  /** color of icon */
  color?: string;
  /** size of icon */
  size?: string | number;
  className?: string;
  /** click event function */
  onClick?: Function;
};

const Icon = ({
  icon,
  color,
  size,
  className,
  onClick,
}: IconProps) => {
  const SVGIcon = icons[icon];

  return (
    <SVGIcon
      className={className}
      onClick={onClick}
      css={{fill: color||'currentColor', width: size, height: 'auto'}}
    />
  );
};

export default Icon;