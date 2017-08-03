import React from 'react';
import classNames from 'classnames';
import * as actions from '../actions';

import { Row, Col } from 'antd';
import { Mention, Button } from 'antd';
const { toString, toContentState } = Mention;

export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatValue: ''
    };
  }

  onClickSendChatMessage(e) {
    const props = this.props;
    const state = this.state;
    const message = state.chatValue;
    props.dispatch(actions.setChatMessage(message));
  }

  onChangeMsgBox(editorState) {
    const chatValue = toString(editorState);
    this.setState({
      chatValue
    });
  }

  render() {
    const props = this.props;
    const state = this.state;

    return (
      <div className="layout-main">
        <div className="chat-box">
            <div className="chat-list">
              <ul>
                {props.chatList.map((message, key) => {
                  return <li key={key}>{message}</li>
                })}
              </ul>
            </div>
            <div className="chat-input">
              <Mention
                style={{ width: '100%', height: 100 }}
                onChange={this.onChangeMsgBox.bind(this)}
                suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
                multiLines
              />
            </div>
            <Button type="primary"
              onClick={this.onClickSendChatMessage.bind(this)}
              >发送</Button>
        </div>
      </div>
    );
  }
}
