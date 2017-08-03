import fetch from 'isomorphic-fetch';
import {API_HOST} from '../../configureAction';

function treeloadFilter(menus){
    if(menus.length==1)return menus;
        var mapdata = {};
        //第一次组织树节点内容
        for(var i=0;i<menus.length;i++)
        {
            var node = menus[i];
            var menuname = node['name'];

            var parentNo = node['parentId'];
            var aid = node['id'] ;

            var directUserCount = node['directUserCount'];
            var orgType = node["orgType"];
             
            mapdata["id_"+aid]= {
                id:aid,
                text:menuname,
                parentNo:parentNo,
                 
                attributes:{
                    "directUserCount":directUserCount, 
                    parentId:parentNo,
                    orgType:orgType
                }
            }; 

        }
        var ret = [];
        for(var key in mapdata)
        {
            var node = mapdata[key];
            var pid = mapdata[key]['parentNo'];
            if(mapdata["id_"+pid])
            {
                if(typeof mapdata["id_"+pid]['children'] == 'undefined')
                {
                    mapdata["id_"+pid]['children'] = [];
                }
                mapdata["id_"+pid]['children'].push(mapdata[key]);
            }else
            {
                ret.push(mapdata[key]);
            }

        }
        for(var key in mapdata)
        {
            var node = mapdata[key];
            if(node['children'] == null){
                node['state'] = 'open';
            }

        } 
        if(ret.length>0){ret[0]['state'] = 'open';}
        return ret;
}

export default function getOrgTree() {
  return function(dispatch) {
    const url = `${API_HOST}orgs/getOrgs/`;
    return fetch(url,{method:'GET'})
        .then(response => response.json())
        .then(json => {
            if(json.success) {
                dispatch(receiveOrgTree(treeloadFilter(json.result)));
            }
        })
  }
}

function receiveOrgTree(data) {
	return {
		type: 'RECEIVE_ORG_TREE',
		orgtreedata: data
	}
}
