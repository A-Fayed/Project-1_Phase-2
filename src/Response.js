import React, { Component } from 'react';

import { css } from 'emotion';
import classname from 'classnames';
import PropTypes from 'prop-types';
import DynamicButton from './DynamicButton';


export default class Response extends Component {
  static propTypes = {
    type: PropTypes.string
  };

  static defaultProps = {
    type: ''
  }
  
  state = {
    count: 12,
    loved: false
  }

  handleClick = () => {
    this.setState((state) => ({
      count: state.count + (state.loved ?  - 1 :  + 1 ),
      loved: !state.loved 
    }), () => console.log(this.state))
  }


  render () {
    let { handleClick, state } = this
    let { count } = this.state
    return (
      <div 
        className={classname('modal__comment',css`
          padding-left: 16px;
          border-bottom: solid 1px #aaa;
          margin-top: 10px;
        `)}
      >
        <div>
          <img 
            src={require("./images/card-icon.png")}
            alt="user icon"
            className={classname('modal__comment-icon',css`
            	height: 40px;
              width: 40px;
              border-radius: 50%;
              float: left;
              margin-right:16px;
            `)}
          ></img>
        </div>
        <div 
          className={classname('comment__content',css`
            overflow: auto;
          `)}
        >
          <h4 
            className={css`
              font-size: 13px;
              line-height: 1.54;
            `}
          >
          username</h4>
          <p>Lorem ipsum amet dolore occaecat dolor ex excepteur ullamco nulla adipisicing aute in consectetur dolor cillum aliquip culpa culpa pariatur ullamco sint sit irure esse amet est ullamco cupidatat mollit sint tempor.</p>
          <h5 className="time">August 20,2018</h5>
          <div 
            className={classname('comment__actions',css`
              float:right;
            `)}
          >   
            <DynamicButton count={count} type = 'heart' handleClick={handleClick} {...state} />
          </div>
        </div>
      </div>
    )
  }
}