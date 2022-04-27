import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import ItemsDropdownNotify from '../ItemsDropdownNotify';
import { Notifications } from '../../../db/NavBarDb';
import * as C from './styles';
import { Link } from 'react-router-dom';

function DropdownNotify({openNotify}) {

  const { theme } = useContext(ThemeContext);

  return (
      <C.Container mode={openNotify} theme={theme}>
          <h3>Notificações</h3>
          {Notifications.map((notify, index) => (
            <Link to={`/notify/${notify.id}`} key={index}>
                <ItemsDropdownNotify
                  title={notify.title}
                  icon={notify.icon}
                  message={notify.message}
                />
            </Link>
          ))}
          
      </C.Container>
  );
}

export default DropdownNotify;