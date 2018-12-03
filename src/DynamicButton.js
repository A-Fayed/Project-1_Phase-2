import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GenericActionButton from './GenericActionButton';


export default class DynamicButton extends Component {  
	static propTypes = {
		type: PropTypes.string,
		handleClick: PropTypes.func
	};

	static defaultProps = {
		type: '',
		handleClick: () => null
	}

	render(){
		let {
			handleClick,
			loved,
			count
		} = this.props

		return (
			<>
				<GenericActionButton loved={loved} onClick={handleClick} icon ='fa fa-heart' verb='Times' count={count}  />
			</>
		)
	}
}
