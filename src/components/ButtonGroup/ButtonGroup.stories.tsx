/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ButtonGroup from './ButtonGroup';
import { DefaultButton } from '../Button/Button.stories';

export default {
  title: 'components|Button/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    componentSubtitle: 'layout of the Button (depend on Flexbox)',
  },
};

export const buttonGroup = () => {
  return (
    <ButtonGroup>
      <DefaultButton/>
      <DefaultButton/>
    </ButtonGroup>
  );
}

buttonGroup.story = {
  name: 'Default',
};

const buttonGroupWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const Row = () => {
  return (
    <div css={buttonGroupWrapper}>
      <div>
        <div className="description">flex-start</div>
        <ButtonGroup direction='row' align='flex-start'>
          <DefaultButton/>
          <DefaultButton/>
        </ButtonGroup>
      </div>
      <div>
        <div className="description">center</div>
        <ButtonGroup direction='row' align='center'>
          <DefaultButton/>
          <DefaultButton/>
        </ButtonGroup>
      </div>
      <div>
        <div className="description">flex-end</div>
        <ButtonGroup direction='row' align='flex-end'>
          <DefaultButton/>
          <DefaultButton/>
        </ButtonGroup>
      </div>
    </div>
  );
}

export const Column = () => {
  return (
    <div css={buttonGroupWrapper}>
      <div>
        <div className="description">flex-start</div>
        <ButtonGroup direction='column' align='flex-start'>
          <DefaultButton/>
          <DefaultButton/>
        </ButtonGroup>
      </div>
      <div>
        <div className="description">center</div>
        <ButtonGroup direction='column' align='center'>
          <DefaultButton/>
          <DefaultButton/>
        </ButtonGroup>
      </div>
      <div>
        <div className="description">flex-end</div>
        <ButtonGroup direction='column' align='flex-end'>
          <DefaultButton/>
          <DefaultButton/>
        </ButtonGroup>
      </div>
    </div>
  );
}

