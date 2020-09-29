import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100vw;
  background: lightgrey;
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Heading = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-size: 14px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  text-align: left;
  margin-left: 5px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  width: 200px;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;

const ResultContainer = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: left;
`;

const Result = styled.div`
  font-size: 48px;
  display: inline;
  padding-left: 20px;
`;

const triangleArea = (side1, side2, side3) => {
  const p = (side1 + side2 + side3) / 2;
  const area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
  console.log(area);
  if (side1 === 0 || side2 === 0 || side3 === 0) {
    return "";
  } else {
    return area;
  }
};

const FormDisplay = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [valueC, setValueC] = useState(0);
  return (
    <FormWrapper>
      <AboutText>
        <Heading>Triangle Area?</Heading>
        <Text>
          Create a function to calculate a triangle area using the 3 sides?
        </Text>
      </AboutText>
      <InputsWrapper>
        <InputWrapper>
          <Label for="a">Value a</Label>
          <Input
            onChange={(e) => setValueA(Number(e.currentTarget.value))}
            id="a"
            type="text"
          />
        </InputWrapper>
        <InputWrapper>
          <Label for="b">Value b</Label>
          <Input
            onChange={(e) => setValueB(Number(e.currentTarget.value))}
            id="b"
            type="text"
          />
        </InputWrapper>
        <InputWrapper>
          <Label for="c">Value c</Label>
          <Input
            id="c"
            type="text"
            onChange={(e) => setValueC(Number(e.currentTarget.value))}
          />
        </InputWrapper>
      </InputsWrapper>
      <ResultContainer>
        Result:{" "}
        <Result>
          {triangleArea(Number(valueA), Number(valueB), Number(valueC))}
        </Result>
      </ResultContainer>
    </FormWrapper>
  );
};

export default FormDisplay;
