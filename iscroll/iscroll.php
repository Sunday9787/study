<?php
# @Author: Edward
# @Date:   2017-09-21T09:58:30+08:00
# @Email:  809537981@qq.com
# @Last modified by:   Edward
# @Last modified time: 2017-09-21T10:14:25+08:00



$array = [
  'FlexContainer' => [
    'flex-direction', 'align-items', 'align-content'
  ],
  'flex-wrap' => [
    'nowrap', 'wrap', 'wrap-reverse'
  ],
  'flex-flow' => [
    'flex-direction', 'flex-wrap'
  ],
  'justify-content' => [
    'flex-start', 'flex-end', 'center', 'space-between', 'space-around'
  ],
  'align-items' => [
    'flex-start', 'flex-end', 'center', 'baseline', 'stretch'
  ]
];

echo json_encode($array);
