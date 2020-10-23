import React, { Component } from 'react';
import { Card, CardTitle, Col, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class CatShow extends Component {
    render() {
        const { cat } = this.props

        console.log(cat);
        if (!cat) {
            console.log(cat);
            return (<h4>no cat</h4>)
        }

        return (
            <>
                <h3>Cat Show</h3>
                <Col sm="6">
                    <Card>
                        <CardTitle>
                            {cat.name}
                        </CardTitle>
                        <CardText>
                            Hi! I am {cat.age} years old. I enjoy {cat.enjoys}.
                        </CardText>
                        <NavLink to={`/catedit/${cat.id}`}>
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