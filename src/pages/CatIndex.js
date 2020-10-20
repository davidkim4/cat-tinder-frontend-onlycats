import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class CatIndex extends Component {
    render() {
        return (
            <>
                <h3>Cat Index</h3>
                <br />
                <Col sm="6">
                    {this.props.cats.map((cat, index) => {
                        return (
                            <Card key={index}>
                                <CardTitle>
                                    <NavLink to={`/catshow/${cat.id}`}>
                                        {cat.name}
                                    </NavLink>
                                </CardTitle>
                            </Card>
                        )
                    })}
                </Col>
            </>
        )
    }
}