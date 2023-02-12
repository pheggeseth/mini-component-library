import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <VisibleSelect>
        {displayedValue}
        <Chevron id="chevron-down" strokeWidth={2} />
      </VisibleSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const VisibleSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 42px 12px 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Chevron = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export default Select;
