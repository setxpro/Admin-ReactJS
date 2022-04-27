import React from 'react';
import { OpenProjectsDB } from '../../../db/HomeInfo';
import OpenProjectsItems from './OpenProjectsItems';

import * as C from './styles';

function OpenProjects() {
  return (
    <C.Container>
          <div><h2>Open Projects</h2> <p>Your data status</p></div>
          {OpenProjectsDB.map((item, index) => (
              <OpenProjectsItems
                key={index}
                title={item.title}
                subtitle={item.subTitle}
                icon={item.icon}
                time={item.time}
                tasks={item.totailTasks}
                issues={item.totailInssues}
              />
          ))}
          
    </C.Container>
  );
}

export default OpenProjects;