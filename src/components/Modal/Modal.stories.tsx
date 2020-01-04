/** @jsx jsx */
import { jsx } from '@emotion/core';
import Modal from './Modal';

export default {
  title: 'components|Modal',
  component: Modal,
  parameters: {
    componentSubtitle: 'modal',
    docs: {
      inlineStories: false
    },
  },
};

export const DefaultModal = () => {
  return (
    <Modal title="결제하시겠습니까?"  visible>
      content
    </Modal>
  );
}

