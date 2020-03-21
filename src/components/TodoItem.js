import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: this.props.todo.completed ? 
                '#EEEEEE':'white',
            color: this.props.todo.completed ? 
                'gray' : 'black',
            padding: '20px',
            marginTop: '10px',
            borderRadius: "5px",
            textDecoration: this.props.todo.completed ? 
                'line-through' : 'none'
        }
    }

    getBtnStyle = () => {
        return this.props.todo.completed ? 'checkDoneBtn': 'checkBtn'
        
    }
    
    

    render() {

        const {id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p >
                    <label 
                        className={`${this.getBtnStyle()}`}
                        onClick={this.props.markComplete.bind(this, id)}
                     />
                    {title}
                    <input 
                        onClick={this.props.delTodo.bind(this, id)} 
                        type="click"
                        value="Delete"
                        className="btn"
                        style={delBtnStyle} 
                    />
                </p>
            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const delBtnStyle = {
    content: 'Delete',
    background: 'red',
    display: 'inline-block', 
    border: 'none',
    padding: '5px 5px',
    textAlign: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    float: 'right',
}




/*const checkBtn = {

}*/

export default TodoItem
