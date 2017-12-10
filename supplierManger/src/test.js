// const data = [{
//     "id": 1,
//     "name": "移动执法",
//     "parent": 0,
//     "level": 0,
//     "sub_depts": [{
//       "id": 3,
//       "name": "市场监督管理局",
//       "parent": 1,
//       "level": 1,
//       "sub_depts": [{
//           "id": 4,
//           "name": "横溪分局",
//           "parent": 3,
//           "level": 2,
//           "sub_depts": [],
//           "state": 1
//         },
//         {
//           "id": 5,
//           "name": "白塔分局",
//           "parent": 3,
//           "level": 2,
//           "sub_depts": [],
//           "state": 1
//         },
//         {
//           "id": 6,
//           "name": "南峰所",
//           "parent": 3,
//           "level": 2,
//           "sub_depts": [],
//           "state": 1
//         },
//         {
//           "id": 7,
//           "name": "安洲所",
//           "parent": 3,
//           "level": 2,
//           "sub_depts": [],
//           "state": 1
//         },
//         {
//           "id": 8,
//           "name": "福应所",
//           "parent": 3,
//           "level": 2,
//           "sub_depts": [],
//           "state": 1
//         },
//         {
//           "id": 9,
//           "name": "下各所",
//           "parent": 3,
//           "level": 2,
//           "sub_depts": [],
//           "state": 1
//         }
//       ],
//       "state": 1
//     }],
//     "state": 1
//   },
//   {
//     "id": 2,
//     "name": "食安办",
//     "parent": 0,
//     "level": 0,
//     "sub_depts": [],
//     "state": 1
//   }
// ];

// var i = 0;
// function eachObject(arry, pargm) {
//   arry.forEach((value) => {
//     console.log(value['name']);
//     console.log(i+=1);
//     if (value[pargm].length > 0) {
//       return eachObject(value[pargm], pargm);
//     }
//   });
// }
// eachObject(data, 'sub_depts');
/* eslint-disable*/
var d = {"ReturnCode":0,"ReturnInfo":"Success","ReturnData":"[{\"AUTOID\":23,\"MENU_CODE\":\"information\",\"MENU_NAME\":\"概况\",\"PARENT_MENU_CODE\":\"parent\",\"MENU_DESCRIPTION\":\"概况\",\"SORT\":1,\"MENU_URL\":\"informations.html\",\"HOSNO\":\"1\",\"SYSTEMNO\":\"qr\",\"IMAGE_URL\":\"../img/icon/icon_computer.png\"},{\"AUTOID\":24,\"MENU_CODE\":\"live_qr\",\"MENU_NAME\":\"活码\",\"PARENT_MENU_CODE\":\"parent\",\"MENU_DESCRIPTION\":\"活码\",\"SORT\":2,\"MENU_URL\":\"informations.html\",\"HOSNO\":\"1\",\"SYSTEMNO\":\"qr\",\"IMAGE_URL\":\"../img/icon/icon_book.png\"},{\"AUTOID\":27,\"MENU_CODE\":\"add_single\",\"MENU_NAME\":\"新建活码\",\"PARENT_MENU_CODE\":\"live_qr\",\"MENU_DESCRIPTION\":\"新建活码\",\"SORT\":3,\"MENU_URL\":\"QR_Create.html\",\"HOSNO\":\"1\",\"SYSTEMNO\":\"qr\",\"IMAGE_URL\":null},{\"AUTOID\":28,\"MENU_CODE\":\"live_list\",\"MENU_NAME\":\"活码列表\",\"PARENT_MENU_CODE\":\"live_qr\",\"MENU_DESCRIPTION\":\"活码列表\",\"SORT\":4,\"MENU_URL\":\"QueryList.html\",\"HOSNO\":\"1\",\"SYSTEMNO\":\"qr\",\"IMAGE_URL\":null},{\"AUTOID\":29,\"MENU_CODE\":\"add_batch\",\"MENU_NAME\":\"新建批量生码\",\"PARENT_MENU_CODE\":\"live_qr\",\"MENU_DESCRIPTION\":\"新建批量生码\",\"SORT\":5,\"MENU_URL\":\"plsm.html\",\"HOSNO\":\"1\",\"SYSTEMNO\":\"qr\",\"IMAGE_URL\":null},{\"AUTOID\":30,\"MENU_CODE\":\"batch_list\",\"MENU_NAME\":\"批量生码列表\",\"PARENT_MENU_CODE\":\"live_qr\",\"MENU_DESCRIPTION\":\"批量生码列表\",\"SORT\":6,\"MENU_URL\":\"batch.html\",\"HOSNO\":\"1\",\"SYSTEMNO\":\"qr\",\"IMAGE_URL\":null},{\"AUTOID\":25,\"MENU_CODE\":\"statistics\",\"MENU_NAME\":\"统计\",\"PARENT_MENU_CODE\":\"parent\",\"MENU_DESCRIPTION\":\"统计\",\"SORT\":7,\"MENU_URL\":\"informations.html\",\"HOSNO\":\"1\",\"SYSTEMNO\":\"qr\",\"IMAGE_URL\":\"../img/icon/icon_tablet.png\"},{\"AUTOID\":31,\"MENU_CODE\":\"analysis_statistics\",\"MENU_NAME\":\"统计分析\",\"PARENT_MENU_CODE\":\"statistics\",\"MENU_DESCRIPTION\":\"统计分析\",\"SORT\":8,\"MENU_URL\":null,\"HOSNO\":\"1\",\"SYSTEMNO\":\"qr\",\"IMAGE_URL\":null},{\"AUTOID\":32,\"MENU_CODE\":\"share_statistics\",\"MENU_NAME\":\"分享统计\",\"PARENT_MENU_CODE\":\"statistics\",\"MENU_DESCRIPTION\":\"分享统计\",\"SORT\":9,\"MENU_URL\":null,\"HOSNO\":\"1\",\"SYSTEMNO\":\"qr\",\"IMAGE_URL\":null},{\"AUTOID\":26,\"MENU_CODE\":\"system_manage\",\"MENU_NAME\":\"用户管理\",\"PARENT_MENU_CODE\":\"parent\",\"MENU_DESCRIPTION\":\"用户管理\",\"SORT\":10,\"MENU_URL\":\"informations.html\",\"HOSNO\":\"1\",\"SYSTEMNO\":\"qr\",\"IMAGE_URL\":\"../img/icon/icon_computer.png\"},{\"AUTOID\":33,\"MENU_CODE\":\"system_user\",\"MENU_NAME\":\"平台用户\",\"PARENT_MENU_CODE\":\"system_manage\",\"MENU_DESCRIPTION\":\"平台用户\",\"SORT\":11,\"MENU_URL\":\"systemUser.html\",\"HOSNO\":\"1\",\"SYSTEMNO\":\"qr\",\"IMAGE_URL\":null},{\"AUTOID\":34,\"MENU_CODE\":\"role_manage\",\"MENU_NAME\":\"角色管理\",\"PARENT_MENU_CODE\":\"system_manage\",\"MENU_DESCRIPTION\":\"角色管理\",\"SORT\":12,\"MENU_URL\":\"roleManage.html\",\"HOSNO\":\"1\",\"SYSTEMNO\":\"qr\",\"IMAGE_URL\":null}]"};

var data = JSON.parse(d.ReturnData);

// console.log(data);

function getMenuTree(arry,keyMenu) {
  arry.forEach((e, i) => {
    let s = e.MENU_URL;
    if (e.PARENT_MENU_CODE === 'parent') {
      // console.log(e.MENU_URL, e.MENU_CODE);
      let MENU_CODE = {
        MENU_CODE: e.MENU_CODE,
        MENU_NAME: e.MENU_NAME,
        MENU_DESCRIPTION: e.MENU_DESCRIPTION,
        PARENT_MENU_CODE: e.PARENT_MENU_CODE,
        MENU_URL: e.MENU_URL,
        HOSNO: e.HOSNO,
        SYSTEMNO: e.SYSTEMNO,
        IMAGE_URL: e.IMAGE_URL,
        CHILDREN: [],
      }
      MenuTree.push(MENU_CODE);
    }
  });
  MenuTree.forEach((value, index) => {
    arry.forEach((e, i) => {
      if (value.MENU_CODE === arry[i].PARENT_MENU_CODE) {
        MenuTree[index].CHILDREN.push({
          MENU_CODE: e.MENU_CODE,
          MENU_NAME: e.MENU_NAME,
          MENU_DESCRIPTION: e.MENU_DESCRIPTION,
          PARENT_MENU_CODE: e.PARENT_MENU_CODE,
          MENU_URL: e.MENU_URL,
          HOSNO: e.HOSNO,
          SYSTEMNO: e.SYSTEMNO,
          IMAGE_URL: e.IMAGE_URL,
          CHILDREN: [],
        })
      }
    })
  })
}
let MenuTree = [];
getMenuTree(data);
console.log(MenuTree);

if (true) {
  let a = 10;
  console.log('if 语句内',a);
}
console.log(a);