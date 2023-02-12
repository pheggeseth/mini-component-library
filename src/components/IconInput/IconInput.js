import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 24,
    fontSize: 14,
    iconSize: 16,
    paddingLeft: 24,
    borderWidth: 1,
  },
  large: {
    height: 36,
    fontSize: 16,
    iconSize: 24,
    paddingLeft: 36,
    borderWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper style={{ '--width': width + 'px' }}>
      <IconWrapper style={{ '--size': STYLES[size].iconSize + 'px' }}>
        <Icon id={icon} size={STYLES[size].iconSize} strokeWidth={2} />
      </IconWrapper>
      <NativeInput
        placeholder={placeholder}
        style={{
          '--height': STYLES[size].height + 'px',
          '--font-size': STYLES[size].fontSize + 'px',
          '--padding-left': STYLES[size].paddingLeft + 'px',
          '--border-width': STYLES[size].borderWidth + 'px',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  height: var(--height);
  width: 100%;
  font-size: var(--font-size);
  padding-left: var(--padding-left);
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  outline-offset: 3px;
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  height: var(--size);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
`;

export default IconInput;
