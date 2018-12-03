import React from 'react';
import { css } from 'emotion';
import classname from 'classnames';

const GenericActionButton = ({
    icon,
    verb,
    count,
    onClick,
    loved,
    openModal,
}) => {
    return (
            <div 
                className={css`
                    display: inline-block;
                    margin-left: 5px; 
                `}>

                { icon === 'fa fa-heart' ? 
                <button onClick={onClick}
                className={classname(`${icon}`,css`
                    border: none;
                    padding: 0;
                    background: none;
                    color: ${loved ? '#3e8cb9' : '#777' };   
                    font-size: 16px;
                    vertical-align: middle;
                    margin-right: 4px;
                    transition: color ease-in-out 0.5s, transform ease-in-out 0.15s;
                    &:hover {
                        cursor: pointer;
                        transform: scale(1.2);
                    }

             `)}></button>

                :

                <a  onClick={openModal}
                    href='#'
                    className={classname(`${icon}`,css`
                        vertical-align: middle;
                        font-size: 16px;
                        margin-right: 4px;
                        color: #777;
                        transition: all ease-in-out 0.35s;
    
                        &:hover {
                            cursor: pointer;
                            color: #bbb;
                        }
                        
                        &:active {
                            transform: scale(1.35);
                        }
                        `)}>
                        <span className='sr-only'> { verb } </span>
                    </a >
    
                }
                <span className={css`
                        margin: 0;
                        display: inline-block;
                        font-weight: normal;
                        font-size: 11px;
                        line-height: 1.8;
                        color: #777;
                        `}>
                        {count}</span> 
                <span className='sr-only'> Times </span>
            </div>
    )
}

export default GenericActionButton