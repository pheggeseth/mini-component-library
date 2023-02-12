import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const ref = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (ref.current && value) {
      setWidth(ref.current.offsetWidth);
    }
  }, [ref.current, value]);

  return (
    <>
      <Wrapper>
        <StyledSelect aria-label={label} value={value} onChange={onChange} style={{ width }}>
          {children}
        </StyledSelect>
        <Chevron id="chevron-down" />
      </Wrapper>
      <VisuallyHidden aria-hidden>
        <StyledSelect value={value} ref={ref}>
          <option>{displayedValue}</option>
        </StyledSelect>
      </VisuallyHidden>
    </>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

const Chevron = styled(Icon)`
  position: absolute;
  right: 5px;
`;

const StyledSelect = styled.select`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: ${COLORS.gray700};
  appearance: none;

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
