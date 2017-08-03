import _ from 'lodash';
import uuid from 'uuid';
import objectAssign from 'object-assign';

function initState () {
  return {
    sessionList: {},
    orgTreeData:[],
    subList:{},
    orgInfo:{},
    industryList: [],
    scaleList: [],
    personList: [],
  }
}

export default function indexReducer(state = initState(), action) {
  switch (action.type) {
    case 'RECEIVE_SESSION_LIST':
      let sessionList = _.clone(state.sessionList);
      return objectAssign({}, state, {sessionList: action.sessionlist});

    case 'RECEIVE_ORG_TREE':
      let orgTreeData = _.clone(state.orgTreeData);
      orgTreeData.push(action.orgtreedata);
      return objectAssign({}, state, {orgTreeData});

    case 'RECEIVE_SUB_LIST':
      let subList = _.clone(state.subList);
      return objectAssign({}, state, {subList: action.subdata});
    
    case 'GET_ORG_INFO':
      let orgInfo = _.clone(state.orgInfo);
      return objectAssign({}, state, {orgInfo: action.info});

    case 'RECEIVE_INDUSTRY_LIST':
      let industryList = _.clone(state.industryList);
      industryList.push(action.industrylist);
      return objectAssign({}, state, {industryList});  
    
    case 'RECEIVE_SCALE_LIST':
      let scaleList = _.clone(state.scaleList);
      scaleList.push(action.scalelist);
      return objectAssign({}, state, {scaleList});
    
    case 'UPDATE_ENTERPRISE_INFO':
    {
      let sessionListt = _.clone(state.sessionList);
      sessionListt.enterpriseName = action.updateInfo.name;
      return objectAssign({}, state, {sessionList: sessionListt});
    }

    case 'UPDATE_DEPART_INFO':
    {
      let orgTreeDataa = _.cloneDeepWith(state.orgTreeData,(item) => {
        if(typeof(item) == 'object' && _.has(item,'id') && item.id == action.updateInfo.id) {
          item.text = action.updateInfo.name;
        }
      })
      return objectAssign({}, state, {orgTreeData: orgTreeDataa});
    }

    case 'RECEIVE_PERSON_LIST':
      let personList = [];
      personList.push(action.personlist);
      return objectAssign({}, state, {personList});

    default:
      return state;
  }
}
