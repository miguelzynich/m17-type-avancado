import React, { ReactNode } from 'react';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type FlexJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';

interface FlexProps {
  direction: FlexDirection | string; // Aceita tanto FlexDirection quanto string
  align: FlexAlign;
  justify: FlexJustify;
  children: ReactNode;
}

const Flex: React.FC<FlexProps> = ({ direction, align, justify, children }) => {
  const directionClass = `direction-action-${direction}`;
  const alignClass = `align-action-${align}`;
  const justifyClass = `justify-action-${justify}`;

  return (
    <div className={`ds-flex ${directionClass} ${alignClass} ${justifyClass}`}>
      {children}
    </div>
  );
};

export default Flex;
