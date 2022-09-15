import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Intro from './components/Intro/Intro.jsx'
import Services from './components/services/services.jsx'
import BeforeAndAfterImages from './components/BeforeAndAfterImages/BeforeAndAfterImages.jsx'
import Contact from './components/Contact/Contact.jsx'

import './scss/main.scss'

require.context('./img', true, /\.(jpe?g|png|gif|svg|webp)$/)

const App = () => {
	return (
		<div className='body'>
			<Header />
			<Nav />
			<Intro />
			<Services />
			<BeforeAndAfterImages />
			<Contact />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
