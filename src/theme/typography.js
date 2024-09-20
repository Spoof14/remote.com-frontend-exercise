import { css } from 'styled-components';

const rem = (size) => `${parseInt(size) / 16}rem`;

function getTextStyles(fontWeight, fontSize, lineHeight) {
  return css`
    font-weight: ${fontWeight};
    font-size: ${rem(fontSize)};
    line-height: ${lineHeight};
    margin: 0;
  `;
}

const typography = {
  h1: getTextStyles(500, '30px', 1.34),
  h2: getTextStyles(500, '26px', 1.23),
  h3: getTextStyles(500, '24px', 1.25),
  h4: getTextStyles(500, '22px', 1.28),

  bodyLead: getTextStyles(400, '18px', 1.44),

  body: getTextStyles(400, '16px', 1.5),
  bodyMedium: getTextStyles(500, '16px', 1.5),
  bodyBold: getTextStyles(600, '16px', 1.5),

  bodySmall: getTextStyles(400, '14px', 1.57),
  bodySmallMuted: getTextStyles(400, '14px', 1.57),
  bodySmallBold: getTextStyles(600, '14px', 1.29),
  bodyCaption: getTextStyles(400, '13px', 1.23),

  tableHeader: getTextStyles(600, '11px', 1.45),
  tableCell: getTextStyles(400, '14px', 1.57),
  tableCellBold: getTextStyles(600, '14px', 1.57),

  checkboxLabel: getTextStyles(500, '14px', 1.57),

};

export default typography;
