---
title: Rosbag으로 image의 compressed만 record 했을 때, 이를 활용하기
categories: [Study, ROS]
tags: [ROS, Underwater]
toc: true
sidebar:
  left:
    sticky: true
  right:
    sticky: true
widgets:
  - type: toc
    position: right
  - type: categories
    position: right
  - type: archives
    position: right
  - type: recent_posts
    position: right
  - type: tags
    position: right
date: 2022-05-06 18:07:51
updated: 2022-05-06 18:07:51
---
Rosbag으로 image의 compressed만 record 했을 때, 이를 활용하기
<!-- more -->
# 잡담
ROS에서 토픽들을 record할 때 이미지들을 계속적으로 rosbag에 하게되면, 생각보다 용량이 어마어마해지곤 한다.

특히 Jetson TX2같은 단독 SBC는 용량도 턱없이 없어서, 실험데이터를 레코드하기 힘들때가 많다

그래서 어쩔 수 없이, 이미지 해상도를 버리고서라도 compressed 이미지만 rosbag record 하기도 하는데

이를 불러오면 기존의 image transport에서 읽어오는게 조금 편하지 않다

그냥 subscribe를 /compressed를 뒤에 붙여주면 될 줄 알았더니 그렇지 않다

그냥 어떤 rosrun을 실행할 때, 다음과 같은 옵션만 붙여주면 된다.

``` bash
_image_transport:=compressed
```

이번에 TF 구하려고 붙여놓은 카메라 영상을 compressed로 녹화했는데

하.. Aruco 인식이 안될 정도의 해상도다.

다음 시험때는 Aruco 마커좀 키우고 현장에서 바로 좌표 인식해서 좌표만 rosbag 해야겠다.