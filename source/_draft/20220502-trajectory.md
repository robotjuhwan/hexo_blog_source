---
title: ROS1 rviz에서 로봇의 이동경로를 표시하는 방법
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
date: 2022-05-02 00:47:43
updated: 2022-05-02 00:47:43
---
ROS1 rviz에서 로봇의 이동경로를 표시하는 방법
<!-- more -->
# 잡담
제대로 rviz상에 어떠한 경로나 로봇이 보이는 형태가 필요하다

아직까지는 터미널에 좌르륵 값들이 내려가는 형태로 모니터링을 많이 수행하지만

rviz에 멋있게 현재 상태를 파악할 수 있으면 좋겠다.

# 방법
현재 나의 수중로봇에는 DVL이라는 장비가 장착되어 있다.

초음파 센서를 4방향으로 쏴서 들어오는 신호를 바탕으로 뭐 복잡하게 도플러 효과? 등을 활용해서

결과적으로 로봇의 속도를 매우 정확하게 파악할 수 있다. 이를 측정간격시간으로 적분하여

이동경로를 구하는 형태이며, 생각보다 정확하게 수중로봇의 경로를 구할 수 있다.

그래도 오차는 점점 축적되는게 당연하고, 이를 SLAM으로 보정하는게 나의 목표이다.

DVL는 시리얼로 데이터를 받는데, 이를 따로 custom msg로 만들어서 publish를 하고있다.

이를 rosbag하여 데이터를 받았는데, rviz로 표시하고 싶다면 알맞은 msg로 변환할 수 있어야 한다.

그 msg로 적합한 것이 바로 nav_msgs의 Odomerty msg이다.

``` bash
git init
```

--작성중