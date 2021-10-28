import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({
  children,
  withoutMargin,
  startTransparent = false,
}) => {
  return (
    <React.Fragment>
      <Header startTransparent={startTransparent}/>
      <WrapStyled $startTransparent={startTransparent}>{children}</WrapStyled>
      <Footer />
    </React.Fragment>
  );
};

const WrapStyled = styled.div`
  ${(props) =>
    !props.$startTransparent &&
    `
    padding: 77px;
  `}
`;
