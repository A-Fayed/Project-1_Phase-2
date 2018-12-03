import React from 'react';
import GenericActionButton from './GenericActionButton';

export const StaticButton = (props) =>  {
  let {
    type,
    count
  } = props;

  let icon, verb
    if ( type ==='view' ) {
      icon =  'fas fa-eye'
      verb = 'views'
    } else if (type ==='comments') {
      icon = 'fas fa-comment'
      verb = 'comment' 
    }

return (
  <GenericActionButton count={count} icon ={icon} verb={verb} />
  )
}

