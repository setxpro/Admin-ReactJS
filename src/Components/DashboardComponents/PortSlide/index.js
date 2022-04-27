import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthorExample, SlideShow } from '../../../db/HomeInfo';
import ItemsAuthor from './itemsAuthor';

import * as C from './styles';

function PortSlideComponent() {

  const [slide] = useState(SlideShow);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slide.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [slide, index])

  useEffect(() => {
      let slideI = setInterval(() => { setIndex(index + 1) }, 3000);
      return () => clearInterval(slideI);
  }, [index])

  return (
      <C.Container>
          <C.AreaTitle><h3>Portfólio Slider</h3><Link to='/portfolio'>View all</Link></C.AreaTitle>
          <C.SlideShow>
                {SlideShow.map((item, indexI) => {
                  const { id, img } = item;
                  let position = "nextSlide";
                    if (indexI === index) {
                      position = "activeSlide";
                    } 
                    if ((indexI === index - 1) || (index === 0 && indexI === slide.length - 1)) {
                      position= "lastSlide";
                    }

                    return (
                      <article className={position} key={id}>
                        <img src={img} alt='image'/>
                      </article>
                    )
                })}
          </C.SlideShow>
          <C.InfoAuthorArea>
            {AuthorExample.map((item, index) => (
                <ItemsAuthor
                    key={index}
                    name={item.name}
                    message={item.message}
                    avatar={item.avatar}
                    obs={item.obs}
                    progress={item.progress}
                    time={item.time}
                />
            ))}
          </C.InfoAuthorArea>
      </C.Container>
  );
}

export default PortSlideComponent;