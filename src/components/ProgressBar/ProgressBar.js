/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const BORDER_RADIUS = 4;
const styles = {
  default: {
    '--wrapper-border-radius': `${BORDER_RADIUS}px`,
    '--wrapper-padding': 0,
  },
  large: {
    '--progress-height': '16px',
    '--wrapper-padding': '4px',
    '--wrapper-border-radius': `${BORDER_RADIUS * 2}px`,
  },
  medium: {
    '--progress-height': '12px',
  },
  small: {
    '--progress-height': '8px',
  },
};

const ProgressBar = ({ value, size }) => {
  const clampedValue = Math.min(Math.max(0, value), 100);

  return (
    <Wrapper aria-valuenow={clampedValue} style={{ ...styles.default, ...styles[size] }}>
      <ProgressWrapper>
        <Progress style={{ width: `${clampedValue}%` }} />
      </ProgressWrapper>
      <VisuallyHidden>{clampedValue}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs({
  role: 'progressbar',
  'aria-valuemin': 0,
  'aria-valuemax': 100,
})`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--wrapper-border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--wrapper-padding);
`;

const ProgressWrapper = styled.div`
  height: var(--progress-height);
  border-radius: 4px;
  overflow: clip;
`;

const Progress = styled.div`
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
