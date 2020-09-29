import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100vw;
  background: lightgrey;
  padding: 40px;
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
`;

const InputsWrapper = styled.div`
  display: flex;
`;

const InputWrapper = styled.div`
  width: 100%;
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

const value = ["a", "b", "c"];
const formDisplay = (parameters, result) => {
  return (
    <FormWrapper>
      <InputsWrapper>
        {parameters.map((parameter, i) => {
          return (
            <InputWrapper>
              <Label for={`${parameter}`}>Value {value[i]}</Label>
              <Input id={`${parameter}`} type="text" />
            </InputWrapper>
          );
        })}
      </InputsWrapper>
      <ResultContainer>
        Result: <Result>{result}</Result>
      </ResultContainer>
    </FormWrapper>
  );
};

export default formDisplay;
