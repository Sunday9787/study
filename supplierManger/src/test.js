const data = [{
    "id": 1,
    "name": "移动执法",
    "parent": 0,
    "level": 0,
    "sub_depts": [{
      "id": 3,
      "name": "市场监督管理局",
      "parent": 1,
      "level": 1,
      "sub_depts": [{
          "id": 4,
          "name": "横溪分局",
          "parent": 3,
          "level": 2,
          "sub_depts": [],
          "state": 1
        },
        {
          "id": 5,
          "name": "白塔分局",
          "parent": 3,
          "level": 2,
          "sub_depts": [],
          "state": 1
        },
        {
          "id": 6,
          "name": "南峰所",
          "parent": 3,
          "level": 2,
          "sub_depts": [],
          "state": 1
        },
        {
          "id": 7,
          "name": "安洲所",
          "parent": 3,
          "level": 2,
          "sub_depts": [],
          "state": 1
        },
        {
          "id": 8,
          "name": "福应所",
          "parent": 3,
          "level": 2,
          "sub_depts": [],
          "state": 1
        },
        {
          "id": 9,
          "name": "下各所",
          "parent": 3,
          "level": 2,
          "sub_depts": [],
          "state": 1
        }
      ],
      "state": 1
    }],
    "state": 1
  },
  {
    "id": 2,
    "name": "食安办",
    "parent": 0,
    "level": 0,
    "sub_depts": [],
    "state": 1
  }
];

var i = 0;
function eachObject(arry, pargm) {
  arry.forEach((value) => {
    console.log(value['name']);
    console.log(i+=1);
    if (value[pargm].length > 0) {
      return eachObject(value[pargm], pargm);
    }
  });
}
eachObject(data, 'sub_depts');