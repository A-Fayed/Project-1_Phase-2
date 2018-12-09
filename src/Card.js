import React, { Component } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

import DynamicButton from './DynamicButton';
import { StaticButton } from './StaticButton';
import { CommentButton } from './CommentButton';
import ModalContent from './ModalContent';

export default class Card extends Component {
static propTypes = {
	imgSrc: PropTypes.string
}

static defaultProps = {
	imgSrc: ''
}

 state = {
	popupVisible: false,
	loveCount: 100,
	viewsCount: 300,
	loved: false
	}

 showPopup = () => {
	this.setState ({
		popupVisible: true
	})
	this.incrementView();
 }

 handleLike = () => {
	this.setState((state) => ({
	 loveCount: state.loveCount + (state.loved ?  - 1 :  + 1 ),
	 loved: !state.loved
	}))
 }

 incrementView = () => {
	this.setState({
		viewsCount: this.state.viewsCount + 1
	});
 }

	render () {
		let {
			imgSrc
		} = this.props

		let {
			popupVisible,
			loved,
			loveCount,
			viewsCount
		} = this.state

		let {
			showPopup,
			handleLike
		} = this
		
		return (
			<>
				<div>
					<div
					className={css`
						border-radius: 5px;
						height: auto;
						box-shadow: 0.5px 0.5px 0.5px 0.5px #ddd;
						padding: 10px;
						padding-bottom: 0;
						margin-bottom: 15px;
						`}>
							<div
							className={css`
								text-align: right;
								border-radius: inherit;
								`}>
								<div
									className={css`
										height: auto;
										overflow: hidden;
									`}>
									<img
										onClick={showPopup}
										src={ require(`${imgSrc}`) }
										alt='Test'
										className={css`
											display: block;
											width:100% ;
											cursor: pointer;
											`}/>
								</div>
								<ul
									className={css`
										margin: 0;
										padding: 0;
										display: inline-block;
										li {
											display: inline-block;
											width: auto;
											padding: 0;
											margin-left: 3px;
										}`}>
										
									<li><CommentButton count = {100} openModal={showPopup} /></li>
									<li><StaticButton  count = {viewsCount} type = 'view'  /></li>
									<li><DynamicButton count={loveCount} handleClick={handleLike} openModal={showPopup} loved={loved}  type = 'heart' /></li>
								</ul>
							</div>
					</div>
					<div
						className={css`
							display: inline-block;
							height: 16px;
							width: 16px;
							border-radius: 16px;
							overflow: hidden;
							vertical-align: middle;
							`}
					>
						<img
						src={require("./images/card-icon.png")}
						alt={'User Avatar '}  
						className={css`
							width: 130%;
							transform: translate(-24%, 0%);
							border-radius: inherit;
							`}
						/>
					</div>
					<h5
						className={css`
							display: inline-block;
							color: #3e8cb9;
							padding: 0;
							margin: 0;
							margin-left: 5px;
							font-size: 13px;
							transition: all ease-in-out 0.3s;

						&:hover{
							color: #4aa4d9;
							cursor: pointer;
						}
						`}>
					someonename </h5>
				</div>
				<ModalContent viewsCount={viewsCount} loved={loved} handleLike={handleLike}  imgSrc={imgSrc} visible = {popupVisible} onClose={()=> this.setState({ popupVisible: false})}></ModalContent>
			</>
		)
	}
}

