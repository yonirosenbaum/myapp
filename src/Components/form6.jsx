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
const StringLi = styled.div`
  display: flex;
`;

const returnRepeatStrings = (stringArray) => {
  console.log(stringArray);
  let validString = [];
  if (stringArray) {
    stringArray.filter((string, index) => {
      const splitString = string.split("");
      for (let i = 0; i < splitString.length - 1; i++) {
        let prevCharactersEquals = 0;
        if (splitString[i + 1] !== splitString[i]) {
          break;
        }
        if (i == splitString.length - 2) {
          validString.push(splitString.join(""));
        }
      }
    });
    console.log(validString);
  }
  const mappedStrings = validString.map((string) => {
    return <StringLi>{string}</StringLi>;
  });
  return mappedStrings;
};

const FormDisplay = () => {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [valueC, setValueC] = useState("");
  return (
    <FormWrapper>
      <AboutText>
        <Heading>Filter Repeating Character Strings?</Heading>
        <Text>
          Create a function that keeps only strings with repeating identical
          characters.
        </Text>
      </AboutText>
      <InputsWrapper>
        <InputWrapper>
          <Label for="a">Value a</Label>
          <Input
            onChange={(e) => setValueA(e.currentTarget.value)}
            id="a"
            type="text"
          />
        </InputWrapper>
        <InputWrapper>
          <Label for="b">Value b</Label>
          <Input
            onChange={(e) => setValueB(e.currentTarget.value)}
            id="b"
            type="text"
          />
        </InputWrapper>
        <InputWrapper>
          <Label for="c">Value c</Label>
          <Input
            id="c"
            type="text"
            onChange={(e) => setValueC(e.currentTarget.value)}
          />
        </InputWrapper>
      </InputsWrapper>
      <ResultContainer>
        Result: <Result>{returnRepeatStrings([valueA, valueB, valueC])}</Result>
      </ResultContainer>
    </FormWrapper>
  );
};

export default FormDisplay;
