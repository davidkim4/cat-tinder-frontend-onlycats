import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound.js'

Enzyme.configure({ adapter: new Adapter() })

it('Footer renders content', () => {
    const notFound = shallow(<NotFound />)
    expect(notFound.find('h3').text()).toEqual('Not Found')
})