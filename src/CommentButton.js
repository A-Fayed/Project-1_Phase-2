import React from 'react';
import GenericActionButton from './GenericActionButton';

export const CommentButton = (props) => {
	return (
		<>
			<GenericActionButton icon = 'fas fa-comment' verb= 'comment' {...props} />
		</>
	)
}


