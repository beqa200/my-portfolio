import styled from "styled-components";

const PaleText = styled.p`
  font-weight: 450;
  font-size: 16px;
  color: #607b96;
`;

const WhiteText = styled(PaleText)`
  color: #ffffff;
`;
const GreenText = styled(PaleText)`
  color: #43d9ad;
`;

const PurpleText = styled(PaleText)`
  color: #4d5bce;
`;

const OrangeText = styled(PaleText)`
  color: #e99287;
`;

export { PaleText, WhiteText, GreenText, PurpleText, OrangeText };
