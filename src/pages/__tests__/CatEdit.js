import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from '../CatEdit.js'

Enzyme.configure({ adapter: new Adapter() })

it('Footer renders content', () => {
    const catEdit = shallow(<CatEdit />)
    expect(catEdit.find('h3').text()).toEqual('Cat Edit')
})