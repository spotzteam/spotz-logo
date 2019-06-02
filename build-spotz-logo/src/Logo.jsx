import React from 'react';
import PropTypes from 'prop-types';

export default class Logo extends React.Component {
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  getRandomColorWithBrightness(minBrightness, grayOnly = false) {
    function randomChannel(brightness) {
      const r = 255 - brightness;
      const n = 0 | (Math.random() * r + brightness);
      const s = n.toString(16);
      return s.length === 1 ? '0' + s : s;
    }
    if (grayOnly) {
      const channel = randomChannel(minBrightness);
      return '#' + channel + channel + channel;
    }
    return (
      '#' +
      randomChannel(minBrightness) +
      randomChannel(minBrightness) +
      randomChannel(minBrightness)
    );
  }
  getRandomGray() {
    const value = (Math.random() * 0xff) | 0;
    const grayscale = (value << 16) | (value << 8) | value;
    const color = '#' + grayscale.toString(16);
    return color;
  }
  renderDotWithinSvg(width, height) {
    const MIN_DOT_SIZE = width / 25;
    const MAX_DOT_SIZE = width / 2;
    const MIN_DURATION = 3;
    const MAX_DURATION = 10;
    const MIN_BRIGHTNESS = 120;

    const x = Math.floor(Math.random() * (width + 1));
    const y = Math.floor(Math.random() * (height + 1));
    const r =
      Math.floor(Math.random() * (MAX_DOT_SIZE - MIN_DOT_SIZE + 1)) +
      MIN_DOT_SIZE;
    const color = this.getRandomColorWithBrightness(
      MIN_BRIGHTNESS,
      this.props.blackAndWhite,
    );
    const duration =
      Math.floor(Math.random() * (MAX_DURATION - MIN_DURATION + 1)) +
      MIN_DURATION +
      's';
    const key = Math.random() * 999999 + ' ';

    return (
      <g key={key}>
        <circle cx={x} cy={y} r={r} fill={color} opacity="0">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur={duration}
            repeatCount="indefinite"
          />
        </circle>
      </g>
    );
  }

  renderDotsWithinSvg(noOfDots, width, height) {
    let dots = [];
    for (let i = 0; i < noOfDots; i++) {
      dots.push(this.renderDotWithinSvg(width, height));
    }
    return dots;
  }

  render() {
    // This is the only variable that needs to be changed to modify the size
    const GROSS_WIDTH = 50;

    const NO_OF_DOTS = 50;

    const STROKE_WIDTH = 0;
    const WIDTH = GROSS_WIDTH - STROKE_WIDTH * 2;
    const WIDTH_HALF = WIDTH / 2;
    const HEIGHT = WIDTH * 1.5;
    const HEIGHT_OF_UPPER_CUP = HEIGHT / 3;
    const HEIGHT_OF_BOTTOM_SPIKE = (HEIGHT / 3) * 2; //20

    const UPPER_CUP_LEFT_HALF = `a${WIDTH_HALF} ${HEIGHT_OF_UPPER_CUP} 0 0 0 -${WIDTH_HALF} ${HEIGHT_OF_UPPER_CUP}`;
    const BOTTOM_SPIKE_LEFT_HALF = `c0 ${(HEIGHT_OF_BOTTOM_SPIKE / 20) *
      9} ${WIDTH_HALF} ${HEIGHT_OF_BOTTOM_SPIKE} ${WIDTH_HALF} ${HEIGHT_OF_BOTTOM_SPIKE}`;
    const BOTTOM_SPIKE_RIGHT_HALF = `s${WIDTH_HALF} -${(HEIGHT_OF_BOTTOM_SPIKE /
      20) *
      11} ${WIDTH_HALF} -${HEIGHT_OF_BOTTOM_SPIKE}`;
    const UPPER_CUP_RIGHT_HALF = `a${WIDTH_HALF} ${HEIGHT_OF_UPPER_CUP} 0 0 0 -${WIDTH_HALF} -${HEIGHT_OF_UPPER_CUP}`;

    const d = `M ${WIDTH_HALF +
      STROKE_WIDTH} ${STROKE_WIDTH} ${UPPER_CUP_LEFT_HALF} ${BOTTOM_SPIKE_LEFT_HALF} ${BOTTOM_SPIKE_RIGHT_HALF} ${UPPER_CUP_RIGHT_HALF} z m0 ${HEIGHT /
      3} a${WIDTH / 10} ${HEIGHT / 15} 0 1 1 ${WIDTH / 10} -${HEIGHT /
      15} a ${WIDTH / 10} ${HEIGHT / 15} 0 0 1 -${WIDTH / 10} ${HEIGHT / 15} z`;

    return (
      <svg
        //className="border border-primary"
        viewBox="0 0 50 75"
        width={this.props.width}
        align="right"
      >
        <defs>
          <clipPath id="clipPath">
            <path d={d} />
          </clipPath>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
        </defs>
        <path
          //fill="lightgray"
          fillOpacity="0"
          style={{ stroke: 'black' }}
          strokeWidth={STROKE_WIDTH}
          d={d}
          data-name="marker"
        />
        <g clipPath="url(#clipPath)" filter="url(#blurMe)">
          {this.renderDotsWithinSvg(NO_OF_DOTS, WIDTH, HEIGHT)}
        </g>
      </svg>
    );
  }
}

Logo.propTypes = {
  width: PropTypes.number,
  blackAndWhite: PropTypes.bool,
};
Logo.defaultProps = {
  width: 50,
  blackAndWhite: false,
};
