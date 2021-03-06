import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
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

const PointWrapper = styled.div`
  margin-top: 20px;
  display: block;
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

const PointHeading = styled.div`
  font-size: 24px;
  font-weight: 700;
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

const distanceBetweenPoints = (object1, object2) => {
  const xvalue1 = object1.x;
  const yvalue1 = object1.y;
  const xvalue2 = object2.x;
  const yvalue2 = object2.y;

  const xdistance = Math.abs(xvalue2 - xvalue1);
  const ydistance = Math.abs(yvalue2 - yvalue1);

  const finalDistance = Math.sqrt(
    Math.pow(xdistance, 2) + Math.pow(ydistance, 2)
  ).toFixed(4);
  console.log(finalDistance);
  return finalDistance;
};

const FormDisplay = ({ answers, addAnswer }) => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [valueC, setValueC] = useState(0);
  const [valueD, setValueD] = useState(0);
  const [updateAnswers, setUpdateAnswers] = useState(false);
  return (
    <FormWrapper id="Question 5">
      <AboutText>
        <Heading>Distance Between Two Points?</Heading>
        <Text>
          Given two object literals A and B being the two points coordinates (x
          and y), implement a function that returns the distance between the
          points and round to the nearest thousandth.{" "}
        </Text>
      </AboutText>
      <PointWrapper>
        <InputsWrapper>
          <PointHeading>Point 1:</PointHeading>
          <InputWrapper>
            <Label for="a">X value</Label>
            <Input
              onChange={(e) => setValueA(Number(e.currentTarget.value))}
              id="a"
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
            <Label for="b">Y value</Label>
            <Input
              onChange={(e) => setValueB(Number(e.currentTarget.value))}
              id="b"
              type="text"
            />
          </InputWrapper>
        </InputsWrapper>
        <InputsWrapper>
          <PointHeading>Point 2:</PointHeading>
          <InputWrapper>
            <Label for="c">X Value</Label>
            <Input
              id="c"
              type="text"
              onChange={(e) => setValueC(Number(e.currentTarget.value))}
            />
          </InputWrapper>
          <InputWrapper>
            <Label for="d">Y Value</Label>
            <Input
              id="d"
              type="text"
              onChange={(e) => setValueD(Number(e.currentTarget.value))}
            />
          </InputWrapper>
        </InputsWrapper>
      </PointWrapper>
      <ResultContainer>
        Result:{" "}
        <Result id="result5">
          {distanceBetweenPoints(
            { x: valueA, y: valueB },
            { x: valueC, y: valueD }
          )}
        </Result>
      </ResultContainer>
      <div
        onClick={() => {
          setUpdateAnswers(!updateAnswers);
        }}
      >
        <AddAnswerButton
          onClick={() =>
            addAnswer(4, document.querySelector("#result5").textContent)
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
    answers: state.answers[4],
  };
};

export default connect(mapStateToProps, { addAnswer })(FormDisplay);
