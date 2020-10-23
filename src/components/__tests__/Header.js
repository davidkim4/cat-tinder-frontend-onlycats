import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header.js'

Enzyme.configure({ adapter: new Adapter() })

it('Footer renders content', () => {
    const header = shallow(<Header />)
    expect(header.find('h1').text()).toEqual('OnlyCats')
})