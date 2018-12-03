import React from 'react';
import { css } from 'emotion';
import classname from 'classnames';
import DynamicButton from "./DynamicButton";

 const ModalHeader = ({imgSrc, handleLike, loved}) => (
  <div 
    className={classname('modal__header',css`
      height: 88px;
      border: solid 1px #E5E5E5;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      vertical-align: middle;
      padding: 24px;
      position: relative;
    `)}
  >
      <div>
        <div class="modal__icon">
          <img 
            src={require(`${imgSrc}`)} 
            alt="user icon"
            className={css`
              height: 40px;
              width: 40px;
              border-radius: 50%;
              float: left;
              margin-right:16px;
            `} 
          ></img>
        </div>
        <div className={classname('modal_details',css`
          float: left;
          `)}
        >
          <h3 
            className={css`
              font-size: 16px;
              line-height: 1.5;
              margin: 0px;
            `}
          >
          Pay Junctio - Paper Receipts</h3>
          <p>by 
            <span 
              className={css`
                display: inline-block;
                font-weight: bold;
                font-size: 13px;
                line-height: 1.54;
                color: #3e8cb9;
                margin: 0px;`}
            >
            Eddie Lobani </span> on <span> August 20,2018 </span>
          </p>                    
        </div>
      </div>
      <div 
      className={css`
        position: relative;
        top: 9px;

        & .btn {
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
        }

        & h4 {
          margin: 0;
          display: inline-block;
        }
      `}
      >
        <button className='btn' type="button"> 
          <h4>Save</h4>
        </button>

        <button 
          type="button"
          onClick={handleLike} 
          className={classname('btn',css`
            color: ${loved ? '#3e8cb9' : '#777' };
          `)} 
        > 
          < DynamicButton loved={loved} />
          <h4>Like</h4>
        </button>
        
      </div>
  </div>
)

export default ModalHeader;