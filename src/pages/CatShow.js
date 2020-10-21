import React, { Component } from 'react';
import { Card, CardTitle, Col, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class CatShow extends Component {
    render() {
        return (
            <>
                <h3>Cat Show</h3>
                <Col sm="6">
                    <Card>
                        <CardTitle>
                            {this.props.cat.name}
                        </CardTitle>
                        <CardText>
                            Hi! I am {this.props.cat.age} years old. I enjoy {this.props.cat.enjoys}.
                        </CardText>
                        <NavLink to={`/catedit/${this.props.cat.id}`}>
                            <Button>
                                Edit Cat
                            </Button>
                            Back to index
                        </NavLink>
                        <NavLink to={'/catindex'}>
                            Back to index
                        </NavLink>
                    </Card>
                </Col>
            </>
        )
    }
}