// @flow
import React, { PureComponent } from 'react';
import styled, { injectGlobal } from 'styled-components';
import RcSlider, { createSliderWithTooltip } from 'rc-slider';

import { COLORS } from '../../constants';

import Label from '../Label';

type Props = {
  width: number,
  label: string,
  min?: number,
  max?: number,
  step?: number,
  value?: number,
  defaultValue?: number,
  onChange: (val: number) => void,
};

const RcSliderWithTooltip = createSliderWithTooltip(RcSlider);

class Slider extends PureComponent<Props> {
  render() {
    const { width, label, onChange, ...delegatedProps } = this.props;

    return (
      <div style={{ width }}>
        {label && <Label>{label}</Label>}

        <RcSliderWithTooltip
          {...delegatedProps}
          onChange={val => onChange(Number(val))}
          tipProps={{ placement: 'bottom' }}
        />
      </div>
    );
  }
}

// HACK: RC Slider uses specific class names for styling, so we'll just use
// those.
const SLIDER_HEIGHT = 24;
const SLIDER_BAR_HEIGHT = 2;

injectGlobal`
  .rc-slider {
    position: relative;
    height: ${SLIDER_HEIGHT + 'px'};
    padding-top: ${SLIDER_HEIGHT / 2 + 'px'};
  }

  .rc-slider .rc-slider-rail, .rc-slider .rc-slider-track {
    position: absolute;
    height: ${SLIDER_BAR_HEIGHT + 'px'};
  }

  .rc-slider .rc-slider-rail {
    width: 100%;
    background: ${COLORS.gray[300]};
  }

  .rc-slider .rc-slider-track {
    background: ${COLORS.gray[700]};
  }

  .rc-slider .rc-slider-handle {
    position: absolute;
    top: ${SLIDER_HEIGHT / 2 + SLIDER_BAR_HEIGHT / 2 + 'px'};
    background: ${COLORS.gray[700]};
    width: ${SLIDER_HEIGHT + 'px'};
    height: ${SLIDER_HEIGHT + 'px'};
    transform: translate(-50%, -50%);
    border-radius: 50%;
    cursor: grab;
    touch-action: pan-x;
  }

  .rc-slider .rc-slider-handle:active {
    cursor: grabbing;
  }

  .rc-slider-tooltip {
    position: absolute;
    opacity: 1;
    will-change: opacity;
    transition: opacity 500ms;
    border-radius: 2px;
  }

  .rc-slider-tooltip-content {
    height: 21px;
    line-height: 21px;
    padding: 0 5px;
    background: ${COLORS.gray[300]};
    font-size: 11px;
    font-weight: 300;
    transform: translateY(5px);

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-bottom: 3px solid ${COLORS.gray[300]};
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      transform: translateY(-100%);
    }
  }

  .rc-slider-tooltip-hidden {
    opacity: 0;
  }
`;

export default Slider;
