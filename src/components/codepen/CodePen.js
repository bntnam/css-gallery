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
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <Container>
      {isLoading && <Spinner />}
      <Codepen
        hash="ZEbKzPj"
        user="bntnam"
        title="3Circles"
        defaultTab="result"
        preview="true"
      />
      <Codepen
        hash="ZEbKzPj"
        user="bntnam"
        title="3Circles"
        defaultTab="result"
        preview="true"
      />
      <Codepen
        hash="ZEbKzPj"
        user="bntnam"
        title="3Circles"
        defaultTab="result"
        preview="true"
      />
      <Codepen
        hash="ZEbKzPj"
        user="bntnam"
        title="3Circles"
        defaultTab="result"
        preview="true"
      />
      <Codepen
        hash="ZEbKzPj"
        user="bntnam"
        title="3Circles"
        defaultTab="result"
        preview="true"
      />
      <Codepen
        hash="ZEbKzPj"
        user="bntnam"
        title="3Circles"
        defaultTab="result"
        preview="true"
      />
    </Container>
  );
};
