import React from "react";
import { connect } from "react-redux";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import styled from 'styled-components';


const PlannerContainer = styled.div`
padding: 10px;
text-align: center;
`

class Planner extends React.Component {
  render() {
    return (
      <PlannerContainer>
        <TaskInput />
        <TaskList />
      </PlannerContainer>
    )
  }
}

export default connect()(Planner);