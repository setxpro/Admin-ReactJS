import React from 'react';

import * as C from './styles';

function OpenProjectsItems({ title, subtitle, icon, time, tasks, issues }) {
  return (
      <C.Container>
          <C.ContentLeft>
              <C.Icon>{icon}</C.Icon>
              <C.AreaTitle>
                  <h3>{title}</h3>
                  <h4>{subtitle}</h4>
              </C.AreaTitle>
          </C.ContentLeft>
          <C.ContentRight>
            <C.AreaTime>
                <span>{time}</span>
            </C.AreaTime>
            <C.AreaRight>
                  <span><p>{tasks} Tasks</p>,&nbsp;<p>{issues} Issues</p></span>
            </C.AreaRight>
          </C.ContentRight>
      </C.Container>
  );
}

export default OpenProjectsItems;