import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from '../CatShow.js'

Enzyme.configure({ adapter: new Adapter() })

it('does not blow up when it has no cats', () => {
    const catShow = shallow(<CatShow />)
    expect(catShow.find('h4').text()).toEqual('no cat')
})

it('should display a cat card with info', () => {
    const cat = { id: 1, name: 'Mint', age: 4, enjoys: 'sleeping all the time' }
    const catShow = mount(<CatShow cat={cat} />)
    expect(catShow.find('div').at(0).text()).toEqual('Mint')
})