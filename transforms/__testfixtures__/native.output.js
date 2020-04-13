/* eslint-disable */
import styled, { css } from 'styled-components/native';
import other from 'styled-components/native';

// Transforms numbers
// Uses styled.View notation
styled.View`
  top: 10px;
  right: 1.5px;
  bottom: 1e3px;
  left: -1.5e3px;
`;

// Uses styled(View) notation
styled(View)`
  top: 10px;
  right: 1.5px;
  bottom: 1e3px;
  left: -1.5e3px;
`;

// Does not attach units twice
styled.View`
  top: 10px;
  right: 1.5px;
  bottom: 1e3px;
  left: -1.5e3px;
`;

// Transforms when using shorthands
styled.View`
  margin: 10px 20px;
  border-radius: 20px 30px;
  font: bold italic 12px/16px "Helvetica";
`;

// Does not transform unitless numbers
styled.View`
  flex: 1;
  z-index: 5;
`;

// Does not add units to interpolated values in properties that need units
styled.View`
  top: ${top};
  padding: 0px ${horizontal};
  margin: ${top} 0px ${bottom} 0px;
`;

// Transforms with substitutions
styled.View`
  color: ${color};
  background-color: ${props => props.backgroundColor};
`;

// Transforms with mixin substitutions
styled.View`
  color: ${color};
  ${props => props.customStyles};
`;

// Transforms font family
styled.View`
  font-family: "Helvetica";
`;

// Do not transform quoted font family
styled.View`
  font-family: "Helvetica";
  font-family: "${fontFamily}";
`;

// Transforms special cases of shorthands
styled.View`
  flex: 1 2 3px;
  font: bold italic 12px/16px "Helvetica";
  font: 12px "Helvetica";
`;

// Transforms css
css`
  top: 10px;
`;

// Does not require 'styled' name
other.View`
  top: 10px;
`;

// Doesn't incorrectly scope
function test(styled) {
  styled.View`
    top: 10;
  `;
}
