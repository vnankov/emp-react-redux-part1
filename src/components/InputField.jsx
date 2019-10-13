import React from 'react'
import { connect } from 'react-redux';
import { addNewCustomCategory } from '../actions/index'

class InputField extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            value : ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.dispatch(addNewCustomCategory(this.state.value))
        this.setState({ value: ""})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="What's new"
                    value = { this.state.value } 
                    onChange = { this.handleChange }    
                />
                <button type="submit">Add Category</button>
            </form>
        )
    }
}

export default connect()(InputField);
