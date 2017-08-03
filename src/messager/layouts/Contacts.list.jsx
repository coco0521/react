import React from 'react';
import classNames from 'classnames';
import { ChatBox } from '../components/lib';

import {Icon} from 'antd';

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  getStyle() {
    return {
      icon: {
        "fontSize": "20px",
        "paddingLeft": "10px"
      }
    }
  }

  getSubItem(name, key) {
    const props = this.props;
    return (
      <li key={key}
        onClick={props.onClickBeginToChat}
        >
        <Icon type="user" style={this.getStyle().icon}/>
        <span>{name}</span>
      </li>
    );
  };

  render() {
    const contacts = [
      '联系人1',
      '联系人2',
      '联系人3',
      '联系人4',
      '联系人5',
      '联系人6',
      '联系人7',
      '联系人8',
      '联系人8',
      '联系人8',
      '联系人8',
      '联系人8',
      '联系人9',
      '联系人10',
      '联系人11',
      '联系人9',
      '联系人10',
      '联系人11',
      '联系人9',
      '联系人10',
      '联系人11',
      '联系人9',
      '联系人10',
      '联系人11',
      '联系人9',
      '联系人10',
      '联系人11',
    ];

    return (
      <ul className="cmp-contacts">
        {contacts.map((name, key) => {
          return this.getSubItem(name, key);
        })}
      </ul>
    );
  }
}
