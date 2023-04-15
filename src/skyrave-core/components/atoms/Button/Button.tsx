import { useState } from 'react';
import { getStyleFromVariantAndSize } from './Button.styles';

export type ButtonProps = {
  text: React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  isDisabled?: boolean
  modal?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  isDisabled = false,
  text,
  modal,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleOnClick = () => {
    if (!isDisabled) {
      if (modal) {
        setShowModal(!showModal);
      } else {
        onClick();
      }
    }
  };
  return (
    <div>
      {modal && showModal ? modal : null}
      <button
        style={getStyleFromVariantAndSize(variant, size)}
        onClick={handleOnClick}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button