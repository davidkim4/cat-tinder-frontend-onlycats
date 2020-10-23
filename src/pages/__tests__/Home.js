import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home.js'

Enzyme.configure({ adapter: new Adapter() })

//TODO come back to this later after we merge for styling
xit('Footer renders content', () => {
    const home = shallow(<Home />)
    expect(home.find('h3').text()).toEqual('Home')
})