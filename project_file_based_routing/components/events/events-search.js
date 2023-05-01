import styled from "styled-components";
import Button from "../ui/button";
import { useRef } from "react";

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMon = monInputRef.current.value;
    props.onSearch(selectedYear, selectedMon);
  }
  return (
    <Form onSubmit={submitHandler}>
      <Controls>
        <Control>
          <label htmlFor="year">Year</label>
          <select name="" id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </Control>
        <Control>
          <label htmlFor="month">Month</label>
          <select name="" id="month" ref={monInputRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </Control>
      </Controls>
      <Button>Find Events</Button>
    </Form>
  );
}

export default EventsSearch;

const Form = styled.form`
  margin: 2rem auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background-color: white;
  border-radius: 6px;
  width: 90%;
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  button {
    width: 100%;
    font: inherit;
    padding: 0.25rem 0.5rem;
    background-color: #03be9f;
    border: 1px solid #03be9f;
    color: #dafff7;
    border-radius: 4px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    button {
      width: 20%;
    }
  }
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 80%;
    flex-direction: row;
  }
`;

const Control = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  label {
    font-weight: bold;
  }
  select {
    font: inherit;
    background-color: white;
    border-radius: 6px;
    width: 70%;
    padding: 0.25rem;
  }

  @media (min-width: 768px) {
    select {
      width: 100%;
    }
  }
`;
