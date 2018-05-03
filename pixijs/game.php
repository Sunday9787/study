<?php
/*
 * @Author: Edward
 * @Date: 2018-05-02 23:27:31
 * @Last Modified by: Edward
 * @Email: 809537981@qq.com
 * @Last Modified time: 2018-05-03 16:26:08
 */

header('Content-Type:application/json; charset=utf-8');

$post = $_POST['data'];
// var_dump($post);

$data = [
  '1' => '局',
  '11' => '外',
  '5' => '繁',
  '6' => '星',
  '7' => '春',
  '8' => '水',
  '13' => '极',
  '33' => '主',
  '18' => '浒',
  '21' => '人',
  '22' => '类',
  '23' => '简',
  '24' => '史',
  '28' => '传',
  '27' => '人',
  '26' => '名',
  '37' => '民',
  '46' => '梦',
  '47' => '的',
  '57' => '名',
  '48' => '解',
  '49' => '析',
  '64' => '三',
  '65' => '国',
  '66' => '演',
  '67' => '义',
  '67' => '义',
  '74' => '毛',
  '81' => '呼',
  '82' => '兰',
  '83' => '河',
  '84' => '传',
  '40' => '存',
  '41' => '在',
  '42' => '主',
  '43' => '义',
  '51' => '细',
  '61' => '雨',
  '71' => '中',
  '81' => '呼',
  '90' => '呐',
  '91' => '喊',
];

$flag = false;

foreach($post as $index => $arry) {
  // var_dump($arry['index'], $arry['value'], $data[$arry['index']]);
  if ($data[$arry['index']] == $arry['value']) {
    $flag = true;
  } else {
    $flag = false;
  }
}

if ($flag) {
  echo '{"status": "1"}';
} else {
  echo '{"status": "0"}';
}
// echo json_encode($post);
