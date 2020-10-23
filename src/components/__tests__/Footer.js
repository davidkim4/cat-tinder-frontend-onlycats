import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer.js'

Enzyme.configure({ adapter: new Adapter() })

it('Footer renders content', () => {
    const footer = shallow(<Footer />)
    expect(footer.text()).toEqual('Created by Brian Hammond, David Kim, and Diem Tran')
})