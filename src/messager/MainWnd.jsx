import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';

import { Row, Col } from 'antd';

import {Contacts, MsgCate} from './layouts/lib';
import {ChatBox} from './components/lib';

import * as actions from './actions';
import './style'

class MainWnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sysMenuType: '',
      cateMenuType: '',
      chatList: []
    };
  }

  onClickSysMenu(e) {
    const sysMenuType = e.target.getAttribute('data-sysMenuType');
    this.setState({
      sysMenuType
    });
  }

  getSubMenu(menu, key) {
    return (
      <li key={key} onClick={this.onClickSysMenu.bind(this)} >
        <img width="25"
          className="media-object"
          data-sysMenuType={menu.type}
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWJlYzRjODhjOSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1YmVjNGM4OGM5Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy4yMjY1NjI1IiB5PSIzNi41MzI4MTI1Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true"
          />
        <span>{menu.name}</span>
      </li>
    );
  };

  onClickBeginToChat(e) {
    this.setState({
      cateMenuType: 'CHAT_BOX'
    });
  }

  getCateComponent(sysMenuType) {
    const params = {};
    switch (sysMenuType) {
      case 'CONTACTS':
        return <Contacts {...params}
          onClickBeginToChat={this.onClickBeginToChat.bind(this)}
          />

      case 'MSG_CATE':
        return <MsgCate {...params}/>

      default:
        break;

    }
  }

  // 分发最右侧组件
  getMainComponent(cateMenuType) {
    const props = this.props;
    const commonParams = {
      dispatch: props.dispatch
    };
    switch (cateMenuType) {
      case 'CHAT_BOX':
        return (
          <ChatBox {...commonParams}
            chatList={props.chatList}
          />
        );

      default:
        break;

    }
  }

  getStyle() {
    return {
      overflow: "scroll"
    }
  }

  render() {
    const state = this.state;
    const sysMenus = [
      {name: '交流', type: 'CONTACTS'},
      {name: '消息', type: 'MSG_CATE'},
      {name: '待办', type: 'CONTACTS'},
      {name: '找人', type: 'CONTACTS'},
    ];

    return (
      <Row>
        <Col xs={2} sm={2} md={2} lg={2} xl={2} className="layout-system">
          <div className="avatar">
            <img width="48" className="img-circle" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWJlNzg3Mzc2NiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1YmU3ODczNzY2Ij48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQzLjcxODc1IiB5PSI3NC41MzI4MTI1Ij4xNDB4MTQwPC90ZXh0PjwvZz48L2c+PC9zdmc+" data-holder-rendered="true"/>
          </div>
          <ul>
            {sysMenus.map((menu, key) => {
              return this.getSubMenu(menu, key);
            })}
          </ul>
        </Col>
        <Col xs={8} sm={8} md={8} lg={8} xl={8} className="layout-category" style={this.getStyle()}>
          {this.getCateComponent(state.sysMenuType)}
        </Col>
        <Col xs={14} sm={14} md={14} lg={14} xl={14} className="layout-main">
          {this.getMainComponent(state.cateMenuType)}
        </Col>
      </Row>
    );

    // return (
    //   <div className="container-fluid">
    //     <div className="row">
    //         <div className="col-xs-1 layout-system">
    //           <div className="avatar">
    //             <img width="48" className="img-circle" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWJlNzg3Mzc2NiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1YmU3ODczNzY2Ij48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQzLjcxODc1IiB5PSI3NC41MzI4MTI1Ij4xNDB4MTQwPC90ZXh0PjwvZz48L2c+PC9zdmc+" data-holder-rendered="true"/>
    //           </div>
    //           <ul>
    //             {sysMenus.map((menu, key) => {
    //               return this.getSubMenu(menu, key);
    //             })}
    //           </ul>
    //         </div>
    //         <div className="col-xs-4 layout-category" style={this.getStyle()}>
    //           {this.getCateComponent(state.sysMenuType)}
    //         </div>
    //         <div className="col-xs-7 layout-main">
    //           {this.getMainComponent(state.cateMenuType)}
    //         </div>
    //     </div>
    //   </div>
    // );
  }
}

module.exports = connect(
  // mapStateToProps
  (state) => {
    return {
      chatList: state.messagerReducer.chatList || [],
    };
  }
  // mapDispatchToProps
  // mergeProps
  // options
)(MainWnd);
