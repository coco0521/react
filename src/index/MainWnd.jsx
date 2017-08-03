import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Button, Menu, Breadcrumb, Icon, Checkbox } from 'antd';
import { OrgTree, SettingModal, AddDepartModal, AddPersonModal, AdjustDepartModal, SelectPersonByOrg } from './components/lib';
import * as actions from './actions';
import './style.scss'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MainWnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current:'mail',
    };
  }

  handleClick(e) {
    console.log('click',e);
    this.setState({
      current:e.key,
    });
  }

  componentWillMount() {
    this.props.dispatch(actions.getSessionList());
  }

  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  render() {
    const { sessionList, subList, orgInfo } = this.props;
    //设置title等的显示，如果是集团则显示公司，是企业显示部门
    let enterpriseType = sessionList.enterpriseType;
    let s_title = "";
    if(enterpriseType == "enterprise") {
      s_title = "部门";
    }else if(enterpriseType == "group"){
      s_title = "公司"
    }
    //选中左侧组织树后右侧显示相应的一级子组织
    let items = [];
    if(subList.length > 0) {
      _.map(subList,(value)=>{
      items.push(
        <div className="dept-item">
            <div className="dept-name">
               <span>{value.name}</span>  
            </div>
            <div className="dept-icon">
                <Icon type="right" />
            </div>
        </div>
      )
      })
    }else{
      items.push(
        <div>当前{s_title}不包含下级{s_title}</div>
      )
    }

    return (
      <div className="main-container">
          <div className="main-header">
              <p className="header-title">通讯录管理后台</p>
              <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <SubMenu title="通讯录">
                <Menu.Item><a href="person.html">未分配人员</a></Menu.Item>
              </SubMenu>
              <Menu.Item>用户设备管理</Menu.Item>
              <Menu.Item>工作台配置</Menu.Item>
              <Menu.Item>消息管理</Menu.Item>
              <Menu.Item>版本管理</Menu.Item>
              <Menu.Item>统计分析</Menu.Item>
            </Menu>
          </div>
          <div className="bread-crumb">
            <Breadcrumb>
              <Breadcrumb.Item><a href="index.html">组织与人员</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="post.html">岗位</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="">职务级别</a></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="main-mid">
              <div className="mid-l" style={{minHeight: '504px'}}>
                  <OrgTree 
                    dispatch={this.props.dispatch}
                    data={this.props.orgTreeData}
                    session={this.props.sessionList}
                  />
              </div>
              <div className="mid-r">
                 <div className="r-title-line">
                    <span className="r-title">{orgInfo.title || sessionList.enterpriseName}</span>
                    <i className="r-sign">全员群</i>
                    <div className="setting-btn">
                      <SettingModal
                        dispatch={this.props.dispatch}
                        orgInfo={this.props.orgInfo}
                        sessionList={this.props.sessionList}
                        industryList={this.props.industryList}
                        scaleList={this.props.scaleList}
                        orgTreeData={this.props.orgTreeData}
                        personList={this.props.personList}
                      />
                    </div>
                 </div>
                 <div className="next-level">
                    <Icon type="contacts" /><span>下级{s_title}</span>
                 </div>
                 <div className="child-depart">
                    <div className="child-btns">
                        <div className="setting-btn" style={{width:"100px", float:'left'}}>
                            <AddDepartModal 
                              dispatch={this.props.dispatch}
                              orgInfo={this.props.orgInfo}
                            />
                        </div>
                        <Button>调整位置</Button>
                    </div>
                    <div className="departs">
                      {items}
                    </div>
                 </div>
                 <div className="next-level">
                    <Icon type="usergroup-add" /><span>{s_title}人员</span>
                 </div>
                 <div className="child-depart">
                    <div className="child-btns">
                        <div style={{width:'90px', float:'left'}}>
                          <AddPersonModal />
                        </div>
                        <div style={{width:'90px', float:'left'}}>
                          <AdjustDepartModal />
                        </div>
                        <Button>调整排序</Button>
                        <Button className="p-delete">批量删除</Button>
                    </div>
                    <div className="check-all">
                        <span>查看所有未激活的成员</span>
                        <a href="person.html">查看</a>
                    </div>
                    <SelectPersonByOrg 
                      personList={this.props.personList}
                    />
                 </div>
              </div>
          </div>
      </div>
    );
  }
  componentDidMount() {
  
  }
}

module.exports = connect(
  // mapStateToProps
  (state) => {
    return {
      sessionList: state.indexReducer.sessionList || {},
      orgTreeData: state.indexReducer.orgTreeData || [],
      subList: state.indexReducer.subList || {},
      orgInfo: state.indexReducer.orgInfo || {},
      industryList: state.indexReducer.industryList || [],
      scaleList: state.indexReducer.scaleList || [],
      personList: state.indexReducer.personList || [],
    };
  }
  // mapDispatchToProps
  // mergeProps
  // options
)(MainWnd);
