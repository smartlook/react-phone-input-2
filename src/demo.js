import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import ReactPhoneInput from './index'

class Test extends Component {
	state = {
		defaultCountry: '',
	}

	handleChange = (e) => {
		this.setState({ defaultCountry: e.target.value })
		console.log(this.state.defaultCountry)
	}

	render() {
		return (
			<Fragment>
				<ReactPhoneInput
					defaultCountry={this.state.defaultCountry || 'kz'}
				/>
				<select onChange={this.handleChange}>
					<option value="us">US</option>
					<option value="cz">CZ</option>
          <option value="fuck">Oh shhit</option>
				</select>
			</Fragment>
		)
	}
}

ReactDOM.render(<Test />, document.getElementById('root'))
