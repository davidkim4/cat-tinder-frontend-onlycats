import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

export default class CatNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: "",
                age: "",
                enjoys: ""
            },
            success: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createNewCat(this.state.form)
        this.setState({ success: true })
    }

    render() {
        return (
            <>
                <h3>Cat New</h3>
                <Form>
                    <FormGroup>
                        <Label for="name">Cat's Name</Label>
                        <Input type="text" name="name" onChange={this.handleChange}
                            value={this.state.form.name} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">Cat's Age</Label>
                        <Input type="number" name="age" onChange={this.handleChange}
                            value={this.state.form.age} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="enjoys">What does your cat enjoy doing?</Label>
                        <Input type="text" name="enjoys" onChange={this.handleChange}
                            value={this.state.form.enjoys} />
                    </FormGroup>
                    <Button name="submit" onClick={this.handleSubmit}>
                        Add a Cat
                    </Button>
                </Form>
                { this.state.success && <Redirect to="/catindex" />}
            </>
        )
    }
}