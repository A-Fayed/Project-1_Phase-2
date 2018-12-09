import React, { Component } from 'react';
import { css } from 'emotion';
import classname from 'classnames';
import Card from './Card';



class CardsList extends Component  {
  state = {
    imagesSrc: [
      "./images/card-media-1.jpg",
      "./images/card-media-2.jpg",
      "./images/card-media-3.jpg",
      "./images/card-media-4.jpg",
      "./images/card-media-5.jpg",
      "./images/card-media-1.jpg",
      "./images/card-media-2.jpg",
      "./images/card-media-3.jpg",
      ],
      liked: false
    }

  render (){
    let { imagesSrc } = this.state
      return (
        <main
          className={css`
            margin-bottom: 30px;
          `}>

          <div
            className={classname('mianContectWrapper clearfix',css`
              max-width: 960px;
              margin: 0 auto;
          `)}>
  
          <h2
            className={css`
              margin: 0;
              margin-inline-start: -10px;
              padding-inline-start: 10px;
              `}>
              Dribbles </h2>

              <ul
                className={classname('list',css`
                  list-style: none;
                  display: inline-block;
                  margin: 0 -10px;

                li {
                  width: 25%;
                  list-style: none;
                  float: left;
                  padding: 10px;
                  transition: all ease-in-out 0.35s;

                  @media (max-width: 700px)  {
                  width: 33%;
                  }

                  @media (max-width: 550px)  {
                  width: 50%;
                  }

                  @media (max-width: 350px)  {
                  width: 100%;
                  }
              }
              `)}>

                {
                  imagesSrc.map((imageSrc, index) => <li key={index} className='listItem'><Card  imgSrc = {imageSrc} /></li> )
                }

              </ul>
          </div>
            </main>

            )

    }
}

export default CardsList;