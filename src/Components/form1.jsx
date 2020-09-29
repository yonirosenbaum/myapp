import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addAnswer } from "../Store/actions";

const FormWrapper = styled.div`
  width: 100vw;
  background: lightgrey;
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-bottom: 2px solid darkgrey;
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
const AddAnswerButton = styled.button`
  border: 1px solid white;
  background: red;
  color: white;
  width: 140px;
  font-weight: 700;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 2px 4px red;
  }
`;
const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const AnswersHeading = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
`;
const AnswersList = styled.ul`
  list-style: none;
  text-align: center;
  padding-left: 0;
  margin-top: 0;
`;

const lessThan1000 = (first, second, third) => {
  const sum = first + second + third;
  const result = sum < 1000 && sum > 0 ? "true" : "false";
  return result;
};

const FormDisplay = ({ addAnswer, answers }) => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [valueC, setValueC] = useState(0);
  const [updateAnswers, setUpdateAnswers] = useState(false);
  return (
    <FormWrapper id="Question 1">
      <AboutText>
        <Heading>Less than a 1000?</Heading>
        <Text>
          Given three numbers, return true if the sum of the numbers is less
          than 1000. Otherwise return false.
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
        <Result id="result1">{lessThan1000(valueA, valueB, valueC)}</Result>
      </ResultContainer>
      <div
        onClick={() => {
          setUpdateAnswers(!updateAnswers);
        }}
      >
        <AddAnswerButton
          onClick={() =>
            addAnswer(0, document.querySelector("#result1").textContent)
          }
        >
          Add Answer To Redux Store
        </AddAnswerButton>
      </div>
      <AnswersContainer>
        <AnswersHeading>Past Answers</AnswersHeading>
        <AnswersList>
          {answers.map((list, index) => {
            return <li key={index}>{list}</li>;
          })}
        </AnswersList>
      </AnswersContainer>
    </FormWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    answers: state.answers[0],
  };
};

export default connect(mapStateToProps, { addAnswer })(FormDisplay);
