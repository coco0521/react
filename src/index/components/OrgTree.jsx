import React from 'react';
import classNames from 'classnames';
import * as actions from '../actions';
import _ from 'lodash';

import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

export default class OrgTree extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.findOrgType = this.findOrgType.bind(this);
    this.state = {
      orgType: ''
    };
  }

  onSelect(selectedKeys,info) {
    const {data,session} = this.props;
    const orgInfo = new Object();
    let orgObj = this.findOrgType(data,selectedKeys[0]);
    orgInfo.id = selectedKeys[0];
    orgInfo.title = info.selectedNodes[0].props.title;
    orgInfo.type = orgObj.orgType? orgObj.orgType:session.enterpriseType;
    orgInfo.parentId = orgObj.parentId ? orgObj.parentId : 0;
    this.props.dispatch(actions.getOrgInfo(orgInfo));
    this.props.dispatch(actions.getSubList(selectedKeys[0]));
    this.props.dispatch(actions.getPersonList(selectedKeys[0]));
  }

  findOrgType(data,id) {
    let orgObj = new Object();
    let item = _.cloneDeepWith(data,(item) => {
      if(typeof(item) == 'object' && _.has(item,'id') && item.id == id) {
        orgObj.orgType = item.attributes.orgType;
        orgObj.parentId = item.attributes.parentId;
      }
    })
    return orgObj;
  }

  onCheck(checkedKeys,info) {
    console.log('onCheck',checkedKeys,info);
  }

  componentWillMount() {
    this.props.dispatch(actions.getOrgTree());
  }

  render() {
    const { data, session } = this.props;
    const rootNode = new Object();
    rootNode.id = 0;
    rootNode.text = session.enterpriseName;
    const treeData = [];
    treeData.push(rootNode);
    if(data.length > 0) {
      let treedata = data[0];
      rootNode.children = treedata;
      const loop = data => data.map((item) => {
        if(item.children) {
          return(
            <TreeNode key={item.id} title={item.text}>
              {loop(item.children)}
            </TreeNode>
          )
        }
        return <TreeNode key={item.id} title={item.text} />
      })
      return (
      <Tree
         onSelect={this.onSelect}
         onCheck={this.onCheck}
      >
        {loop(treeData)}       
      </Tree>
      );
    }
    return (
      <div>waiting...</div>
    );
  }
}
