import React from 'react';
import { css } from 'emotion';

export const SignUpButton = () => {
    return (
        <button 
          className={css`
            display: block;
            margin: 0 auto;
            margin-bottom: 10px;
            color: white;
            border: none;
            background-color: #e84f89;
            font-weight: bold;
            height: 40px;
            width: 450px;
            border-radius: 5px;
            
            &:hover{
              cursor:pointer;
          }`}
        >
        Sign Up to continue </button>
    )
}