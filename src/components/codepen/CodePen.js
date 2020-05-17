import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Codepen from "react-codepen-embed";

import { Spinner } from "../../components";
import { media } from "../../utils";

const Container = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 100px;

  ${media.lessThan("tablet")`
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
  `}

  ${media.lessThan("mobile")`
    grid-template-columns: 1fr;
    grid-row-gap: 50px;
  `}
`;

export const CodePen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {isLoading && <Spinner />}
      <Codepen
        hash="mdezQaJ"
        user="bntnam"
        title="Nintedo Switch"
        defaultTab="result"
        preview="false"
      />
      <Codepen
        hash="zYvEjwQ"
        user="bntnam"
        title="Crystal"
        defaultTab="result"
        preview="false"
      />
      <Codepen
        hash="abvLVoE"
        user="bntnam"
        title="Sketch Logo"
        defaultTab="result"
        preview="false"
      />
      <Codepen
        hash="jObmGyV"
        user="bntnam"
        title="Koala"
        defaultTab="result"
        preview="false"
      />
    </Container>
  );
};
