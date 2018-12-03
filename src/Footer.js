import React from 'react';
import { css } from 'emotion';
import { SignInButton } from './SignInButton';
import { SignUpButton }  from './SignUpButton';

export const Footer = () => (
  <footer>
    <SignUpButton />
    <SignInButton />
    <hr></hr>
    <h5
      className={css`
        text-align: center;
        font-size: 12px;
    `}>
    Copyrights &#9400; 2018</h5>
  </footer>
)
