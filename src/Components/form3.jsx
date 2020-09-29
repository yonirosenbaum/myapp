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

const isOdd = (number) => {
  const divisible = number % 2;
  return divisible !== 0 && number > 1 ? "true" : "false";
};

const FormDisplay = () => {
  const [valueA, setValueA] = useState(0);
  return (
    <FormWrapper>
      <AboutText>
        <Heading>Odd Number?</Heading>
        <Text>
          Create a function that takes a number and return true if it is an odd
          number;
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
      </InputsWrapper>
      <ResultContainer>
        Result: <Result>{isOdd(valueA)}</Result>
      </ResultContainer>
    </FormWrapper>
  );
};

export default FormDisplay;
