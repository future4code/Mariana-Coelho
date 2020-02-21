import React from "react";
import { List } from 'rsuite';
import { connect } from "react-redux";
import { getAllTasks } from "../../actions";
import styled from 'styled-components';


const TaskDiv = styled.div`
    border: 1px solid black;
    margin: 5px;
    max-width: 300px;
    padding: 5px;
`


class TaskList extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchTasks();
    }

    render(){
        return(
            <div>
                <List bordered>
                    {this.props.tasks && this.props.tasks.map((task)=>
                        <List.Item>
                            <TaskDiv>
                                <h3>{task.day}</h3>
                                <p>{task.text}</p>
                            </TaskDiv>
                        </List.Item>
                     )}
                </List>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    tasks: state.tasks.allTasks
})

const mapDispatchToProps = dispatch => ({
    fetchTasks: ()=> dispatch(getAllTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList); 