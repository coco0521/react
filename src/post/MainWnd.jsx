import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Button, Menu, Breadcrumb, Icon, Table } from 'antd';
import { AddPostModal, EditPostModal } from './components/lib'
import * as actions from './actions';
import './style.scss'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const columns = [{
  title: '岗位名称',
  dataIndex: 'name',
  key:'name'
},{
  title: '排序号',
  dataIndex: 'sort',
  key: 'sort'
}];

class MainWnd extends React.Component {
  constructor(props) {
    super(props);
    this.deletePost = this.deletePost.bind(this);
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

  deletePost() {
    const selectedRows = this.props.selectedRows;
    let id = selectedRows[0].id;
    this.props.dispatch(actions.deletePost(id));
  }

  componentWillMount() {
    this.props.dispatch(actions.getSessionList());
    this.props.dispatch(actions.getPostList());
  }

  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  render() {
    const { postList, selectedRows } = this.props;

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.props.dispatch(actions.getSelectedRows(selectedRows));
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };

    //console.log('>>>>>>' + JSON.stringify(selectedRows));
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
              <Breadcrumb.Item><a href="" style={{fontWeight:'bold'}}>岗位</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="">职务级别</a></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="main-mid">
              <div style={{margin:"10px 0 10px 10px"}}>
                <div style={{width:'85px', float:'left'}}>
                  <AddPostModal 
                    dispatch={this.props.dispatch}
                  />
                </div>
                <div style={{width:'85px', float:'left'}}>
                  <EditPostModal 
                    dispatch={this.props.dispatch}
                    selectedRows={selectedRows}
                  />
                </div>
                <Button type="danger" onClick={this.deletePost}>删除岗位</Button>
              </div>
              <Table rowSelection={rowSelection}  columns={columns} dataSource={postList[0]} />
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
      sessionList: state.postReducer.sessionList || {},
      postList: state.postReducer.postList || [],
      selectedRows: state.postReducer.selectedRows || [],
    };
  }
  // mapDispatchToProps
  // mergeProps
  // options
)(MainWnd);
