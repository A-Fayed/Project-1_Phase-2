import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Response from './Response';
import ModalHeader from './ModalHeader'

import { css } from 'emotion';
import classname from 'classnames';

const portalRoot = document.createElement('div');

export default class ModalContent extends Component {

  componentDidMount () {
    document.body.appendChild(portalRoot);
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount () {
    document.body.removeChild(portalRoot);
    document.removeEventListener("keydown", this.escFunction, false);
  }

  escFunction = (event) => {
    if(event.keyCode === 27) {
      this.props.onClose()
    }
  }

  render() {
    let { 
      imgSrc,
      visible, 
      onClose,
      handleLike,
      loved  
    } = this.props;
      
    return visible && ReactDOM.createPortal(
      <>
      <div
      onClick={onClose}
      className={css`
        position: absolute;
        top:0;
        bottom: 0;
        right: 0;
        left:0;
        background-color: black;
        opacity: 0.8;
        `}
      >
        <button 
          onClick= {onClose}
          className={classname('fas fa-times', css`
            position: absolute;
            cursor: pointer;
            width: auto;
            height: auto;
            background: none;
            border: none;
            right: 10px;
            top: 10px;
            color: white;
            font-size: 20px;
          
            &:hover {
              color: #777;
            }
          `)} 
        >
        </button>
      </div>
      <div 
        id="modal"
        className={classname('modal',css`
          display: inline-block;
          width: 672px;
          height: 85%;
          position: fixed;
          top: 10%;
          left: 50%;
          background-color: #F4F4F4;
          border-radius: 8px;
          padding-bottom:44px;
          overflow-y: auto; 
          transform: translateX(-50%);
        `)} 
      >
        <ModalHeader imgSrc={imgSrc} handleLike={handleLike} loved={loved} />

        <div 
          className={classname('modal__media',css`
            height: auto;
            width: 100%;
            padding: 24px;
            background-color: white;
            border: solid 1px #E5E5E5;

            & > img {
              width: 100%;
            }
          `)}
        >
          <img 
            src={require(`${imgSrc}`)} 
            alt="dribble media"
          ></img>
        </div>
        <div 
          className={classname('modal__footer clearfix',css`
            padding: 24px;
          `)}
        >
        <div 
          className={classname('modal__info col--2',css`
            float: left;
            width: 70%;
            padding-right: 12px;
            
            & p {
              margin-top: 0;
            }

            & img {
              height: 24px;
              width: 24px;
            }
          
          `)}
        >
          <p>Lorem ipsum amet dolore occaecat dolor ex excepteur ullamco nulla adipisicing aute in consectetur dolor cillum aliquip culpa culpa pariatur ullamco sint sit irure esse amet est ullamco cupidatat mollit sint tempor.</p>

          <div>
            <h3 
              className={css`
                border-top: solid 1px #aaa;
            `}
          >
          Responses</h3>
            <Response />
            <Response />
            <Response />
      </div>
    </div>
    <div 
      className={classname('modal__statistics',css`
        float: left;
        padding-left: 12px;
      `)}
    >
      <button 
        type="button"
        className={classname('modal_btn',css`
          border-radius: 5px;
          font-weight: bold;
          border: solid 1px;
          cursor: pointer;
          border-color: #777;
          color: #777;
          background-color: white;
          height: 24px;
          min-width: 68px;
          padding: 0 8px;
          margin-left: 8px;
          float: right;
        `)} 
        >
        <h4>Copy link</h4>
      </button>

      <ul 
        className={classname('modal__actions list',css`
          li {
            a {
              color: #777;
              margin-right: 5px; 
            }
          }
        `)}
      >
        <li>
          <a 
            className="fas fa-eye" 
            href="#" 
          >
            <span className="sr-only">viewed</span>
          </a>
          <h5>4,234</h5>
          <span className="sr-only">times</span>
        </li>

        <li>
          <a 
            className="fas fa-comments" 
            href="#"> 
            <span className="sr-only">commented</span>
          </a>
          <h5>42</h5>
          <span className="sr-only">times</span>
        </li>

        <li>
          <a 
            className="fas fa-folder-plus" 
            href="#">
            <span className="sr-only">saved</span>
          </a>
          <h5>42</h5>
          <span className="sr-only">times</span>
        </li>
        
      </ul>
    </div>
    </div>
    </div>
      </>
  , portalRoot )
    }
}