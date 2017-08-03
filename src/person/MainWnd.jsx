import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Button, Menu, Breadcrumb, Icon, Table } from 'antd';
import { AddPersonModal, EditPersonModal } from './components/lib'
import * as actions from './actions';
import './style.scss'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name'
},{
  title: '邮箱',
  dataIndex: 'email',
  key: 'email'
},{
  title: '手机号',
  dataIndex: 'mobile',
  key: 'mobile'
},{
  title: '企业邮箱',
  dataIndex: 'orgEmail',
  key: 'orgEmail'
},{
  title: '工号',
  dataIndex: 'jobNumber',
  key: 'jobNumber'
},{
  title: '办公电话',
  dataIndex: 'officePhone',
  key: 'officePhone'
}];

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
    this.props.dispatch(actions.getPersonList());
  }

  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  render() {
    const { personList } = this.props;

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.props.dispatch(actions.getSelectedRows(selectedRows));
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };

    return (
      <div className="main-container">
          <div className="main-header">
              <a className="header-title" href="index.html">通讯录管理后台</a>
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
              <Breadcrumb.Item><a href="#">未分配人员</a></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="main-mid">
              <div style={{margin:"10px 0 10px 10px"}}>
                <div style={{width:'85px', float:'left'}}>
                  <AddPersonModal 
                    dispatch={this.props.dispatch}
                  />
                </div>
                <div style={{width:'85px', float:'left'}}>
                  <EditPersonModal 
                    dispatch={this.props.dispatch}
                    selectedRows={this.props.selectedRows}
                    orgData={this.props.orgData}
                    postList={this.props.postList}
                  />
                </div>
                <Button type="danger">删除人员</Button>
              </div>
              <Table rowSelection={rowSelection}  columns={columns} dataSource={personList[0]} />
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
      sessionList: state.personReducer.sessionList || {},
      personList: state.personReducer.personList || [],
      selectedRows: state.personReducer.selectedRows || [],
      orgData: state.personReducer.orgData || [],
      postList: state.personReducer.postList || [],
    };
  }
  // mapDispatchToProps
  // mergeProps
  // options
)(MainWnd);
