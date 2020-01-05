
import React from 'react';
import { css } from '@emotion/core';
// import * as S from './Modal.style';

import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

export type ModalProps = {
  /** hide Modal when is true */
  visible: boolean;
  /** modal title */
  title: string;
  /** modal content */
  children?: React.ReactNode;
  /** modal color */
  color?: string;
  /** hide button when is true */
  hideButtons?: boolean;
  /** exist cancel button */
  cancellable?: boolean;
  /** cancel button content */
  cancelText: string;
  /** confirm button content */
  confirmText: string;
  /** call the cancel function when you press cancel button */
  onCancel?: () => void;
  /** call the confirm function when you press confirm button */
  onConfirm?: () => void;
};

const Modal = ({ 
  visible,
  title,
  children,
  color,
  hideButtons,
  cancellable,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
 }: ModalProps) => {
  if (!visible) return null;

  return (
    <>
      <div></div>
      <div>
        <div>
          {title && <h3>{title}</h3>}
          {children && <p>{children}</p>}

          {!hideButtons && (
            <ButtonGroup css={{ marginTop: '3rem' }} align='flex-start'>
              {cancellable && (
                <Button mainColor={color} theme="tertiary" onClick={onCancel}>
                  {cancelText}
                </Button>
              )}
              <Button 
                mainColor={color} 
                theme="primary"
                onClick={onConfirm}
              >
                {confirmText}
              </Button>
            </ButtonGroup>
          )}
        </div>
      </div>
    </>
  );
};

Modal.defaultProps = {
  cancelText: '취소',
  confirmText: '확인',
  color: "#20c997",
};

export default Modal;