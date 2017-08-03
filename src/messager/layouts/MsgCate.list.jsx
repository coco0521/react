import React from 'react';
import classNames from 'classnames';

import {Icon} from 'antd';

export default class MsgCate extends React.Component {
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
    return (
      <li key={key} >
        <Icon type="exception" style={this.getStyle().icon}/>
        <span>{name}</span>
      </li>
    );
  };

  render() {
    const msgCate = [
      '消息列表1',
      '消息列表2',
      '消息列表3',
      '消息列表4',
      '消息列表5',
      '消息列表6',
      '消息列表11',
    ];

    return (
      <ul className="cmp-msgCate">
        {msgCate.map((name, key) => {
          return this.getSubItem(name, key);
        })}
      </ul>
    );
  }
}
