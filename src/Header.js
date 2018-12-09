import React from 'react';
import { css } from 'emotion';
import classname from 'classnames';


const Header = () => (
	<header 
		className={classname('clearfix',css`
			background-color: #333;
			color: #aaa; 
			height: 40px;
		`)}
	>
		<div 
			className={classname('clearfix', css`
				max-width: 960px;
				margin: 0 auto;
			`)}
		>
			<div 
				className={css`
					display: inline-block;
					float: left;
				`}
			>
				<h1 
					className={css`
						margin: 0;
						color: #eee;
						padding: 0;
						font-size: 22px;
						display: inline-block;
						margin-right: 30px;
					`}
				>
				Dribble </h1>
				<ul 
					className={css`
						display: inline-block;
						margin: 0px;
						padding: 0;
						
					li {
						display: inline-block;
						margin-right: 10px;

						a {
							color: #aaa;
							transition: color ease-in-out 0.35s;

							&:hover {
								color: #eee;
							}
						}
					}
				`}
				>
					<li><a href='#' >Dribbles</a></li>
					<li><a href='#' >Buckets</a></li>
					<li><a href='#' >Users</a></li>
					<li><a href='#' >Lists</a></li>
				</ul>
			</div>
			<div 
				className={css`
					display: inline-block;
					height: 40px;
					float: right;
					position: relative;;
					top: 6.5px;
				`}
			>
			<ul 
				className={css`
					margin: 0px;
					padding: 0;
					display: inline-block;
					
					li {
						display: inline-block;
						margin-right: 10px;

						a {
							color: #aaa;
							transition: color ease-in-out 0.35s;

							&:hover {
									color: #eee;
								}
							}
					}`}
				>
					<li><a href='#'>Sign up</a></li>
					<li><a href='#'>Sign in</a></li>
				</ul>
				<form 
					className={css`
						display: inline-block;
						margin-left: 20px;`}>
					<label 
						htmlFor='search' 
						className='sr-only'>
						Search
					</label>
					<input 
						name='search' 
						id='search' 
						type='text'
						placeholder='Search Dribble ...'
						className={css`
							background-color: #aaa;
							border: solid 1px #aaa;
							border-radius: 5px;
							padding: 2.5px 10px;

							&::placeholder {
								color: #eee;    
							}
						`}
					>
					</input>
				</form>
			</div>
		</div>
	</header>
) 

export default Header;