import React from 'react'
import { connect } from 'react-redux';

class InputField extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            value : "What's new"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <form>
                <input 
                    value = { this.state.value } 
                    onChange = { this.handleChange }    
                />
                <button type="submit">Add Category</button>
            </form>
        )
    }
}

export default connect()(InputField);
