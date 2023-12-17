import React, { ReactNode } from 'react';
import 'tachyons/css/tachyons.min.css';
import './Button.css';

interface ButtonProps {
  align: string;
  variation: string;
  children?: ReactNode; // Adicionando a propriedade children ao tipo ButtonProps
}

const Button: React.FC<ButtonProps> = ({ align, variation, children }) => {
  const btnClasses = `btn align-${align} ${getVariationClass(variation)} font-custom f5 link dim br3 bn ph5 ma3 b pv3 mb2 dib`;

  return (
    <button className={btnClasses}>
      {getTextByVariation(variation)} {children}
    </button>
  );
};

const getVariationClass = (variation: string): string => {
  switch (variation) {
    case 'primary':
      return 'bg-green white';
    case 'secondary':
      return 'bg-hot-pink white';
    case 'tertiary':
      return 'bg-blue white';
    default:
      return '';
  }
};

const getTextByVariation = (variation: string): string => {
  switch (variation) {
    case 'primary':
      return 'Comprar';
    case 'secondary':
      return 'Comprar';
    case 'tertiary':
      return 'Comprar';
    default:
      return '';
  }
};

export default Button;
