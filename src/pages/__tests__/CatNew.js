import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from '../CatNew.js'

Enzyme.configure({ adapter: new Adapter() })

it('Footer renders content', () => {
    const catNew = shallow(<CatNew />)
    expect(catNew.find('h3').text()).toEqual('Cat New')
})