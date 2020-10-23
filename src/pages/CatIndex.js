import React, { Component } from 'react';
import { Card, CardTitle, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class CatIndex extends Component {
    render() {
        const { cats } = this.props
        return (
            <>
                <h3>Cat Index</h3>
                <br />
                <Col sm="6">{
                    !cats && <h4>no cats</h4>
                }
                    {cats && cats.map((cat, index) => {
                        return (
                            <Card key={index}>
                                <CardTitle>
                                    <Button to={`/catshow/${cat.id}`}>
                                        {cat.name}
                                    </Button>
                                </CardTitle>
                            </Card>
                        )
                    })}
                </Col>
            </>
        )
    }
}