import React from 'react';
import { css } from 'emotion';

export const SignInButton = () => {    
  return (
    <button 
      className={css`
        display: block;
        background-color: transparent;
        margin-bottom: 10px;
        margin: 0 auto;
        color: #3e8cb9;
        border: none;
        font-weight: bold;
        height: 40px;
        width: 450px;
        border-radius: 5px;
          
      &:hover{
        cursor:pointer;
      }`}
    > Or Sign In</button>
    )
}