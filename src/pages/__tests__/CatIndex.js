import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from '../CatIndex.js'

Enzyme.configure({ adapter: new Adapter() })

it('Footer renders content', () => {
    const catIndex = shallow(<CatIndex />)
    expect(catIndex.find('h3').text()).toEqual('Cat Index')
})