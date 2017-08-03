import React from 'react';
// import classNames from 'classNames'
import { Table } from 'antd';
import './SelectPersonByOrg.table.scss';

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

class SelectPersonByOrg extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		const { personList } = this.props;
		const rowSelection = {
	      onChange: (selectedRowKeys, selectedRows) => {
	        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	      },
	      getCheckboxProps: record => ({
	        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
	      }),
	    };
		return (
			<div>
				<Table rowSelection={rowSelection}  columns={columns} dataSource={personList[0]} />
			</div>
		)
	}
}
export default SelectPersonByOrg;


