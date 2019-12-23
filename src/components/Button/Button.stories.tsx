/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Button from './Button';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|Button/Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'mutiple button',
  },
};

export const DefaultButton = () => {
  const label = text('children', 'BUTTON');
  const size = select('size', ['small', 'medium', 'big'], 'medium');
  const theme = select(
    'theme',
    ['primary', 'secondary', 'tertiary'],
    'primary'
  );
  const disabled = boolean('disabled', false);
  const width = text('width', '');

  return (
    <Button size={size} theme={theme}
      disabled={disabled} width={width} onClick={action('onClick')}>
      {label}
    </Button>
  );
};

DefaultButton.story = {
  name: 'Default'
};

export const Primary = () => {
  return <Button theme='primary'>PRIMARY</Button>;
};

export const Secondary = () => {
  return <Button theme='secondary'>secondary</Button>
};

export const Tertiary = () => {
  return <Button theme='tertiary'>tertiary</Button>
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="small">BUTTON</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="medium">BUTTON</Button>
      </div>
      <div>
        <div className="description">Big</div>
        <Button size="big">BUTTON</Button>
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div className="description">Disabled</div>
      <div>
        <Button theme="primary" disabled>Disabled</Button>
      </div>
      <div>
        <Button theme="secondary" disabled>Disabled</Button>
      </div>
      <div>
        <Button theme="tertiary" disabled>Disabled</Button>
      </div>
    </div>
  );
}

export const CustomWidth = () => {
  return (
    <div css={buttonWrapper}>
      <div className="description">Custom Button</div>
      <div>
        <Button width="20rem">Custom Button</Button>
      </div>
      <div>
        <Button width="100%">Full Width</Button>
      </div>
    </div>
  );
}

export const CustomColor = () => {
  return (
    <div css={buttonWrapper}>
      <div className="description">Custom Button</div>
      <div>
        <Button mainColor={"#6699ff"}>Custom Button</Button>
      </div>
      <div>
        <Button mainColor={"#6699ff"} disabled>Custom Button</Button>
      </div>

      <div>
        <Button theme={"tertiary"} mainColor={"#6699ff"}>Custom Button</Button>
      </div>
      <div>
        <Button theme={"tertiary"} mainColor={"#6699ff"} disabled>Custom Button</Button>
      </div>
    </div>
  );
};
