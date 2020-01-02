/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

export type ModalProps = {
  visible: boolean;
  description?: string;
  children?: React.ReactNode;
  hideButtons?: boolean;
  cancellable?: boolean;
  cancelText: string;
  confirmText: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const Modal = ({  }: ModalProps) => {
  return (
    <div>
      
    </div>
  );
};

export default Modal;