import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from '../CatIndex.js'

Enzyme.configure({ adapter: new Adapter() })

it('does not blow up when it has no cats', () => {
    const catIndex = shallow(<CatIndex />)
    expect(catIndex.find('h4').text()).toEqual('no cats')
})

it('should display a cat card with info', () => {
    const cats = [{ id: 1, name: 'Mint', age: 4, enjoys: 'sleeping all the time' }, { id: 2, name: 'Matthew', age: 7, enjoys: 'eating all the time' }]
    const catIndex = mount(<CatIndex cats={cats} />)
    expect(catIndex.find('button').at(0).text()).toEqual('Mint')
    expect(catIndex.find('button').at(1).text()).toEqual('Matthew')
})