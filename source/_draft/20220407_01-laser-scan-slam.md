---
title: 01_laser scan SLAM
categories: [Study, SLAM]
tags: [SLAM, Underwater]
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
date: 2022-04-07 14:07:30
updated: 2022-04-07 14:07:30
---
01_laser scan SLAM
<!-- more -->
# 잡담
내가 가진 상황에 맞게 수중로봇에서 Pose Graph SLAM를 빠르게 구현해서 실험까지 해내야 한다. 시뮬레이터도 있고 수조실험 일정도 잡혔다.

그 전에 해야할 일의 목록을 정리해보면

* 시뮬레이션에서 목표한 움직임대로 수행하여 rosbag 제작
* rosbag에 대하여 pose graph slam을 활용한 자체 알고리즘 제작/테스트
* 작은 수조에서 bricks들에 대한 dataset 제작, YOLOv4 학습, Laser Scan test
* 수조 실험 수행 (4월 18일 주)
* 논문 초안 작성 (4월 중)
* 논문 투고 (5월 초)

지금까지 되어있는 부분 목록

* 논문 제목 Underwater Recursive Rotational SLAM 이라고 URR-SLAM으로 이름 지음. 시작이 반이다.
* 로봇 시뮬레이터. 매번 고맙게 활용하는 UUV Sim.. 내 로봇을 기반으로 이식해두어서 언제든지 간이 실험을 수행해볼 수 있음
* 시뮬레이터 맵 생성. 아래와 같은 전략이다. 벽돌 모형도 실제 크기와 같이 구현해두고, 4가지 부분을 사각형으로 이동해서 Loop Closure를 보여줄 듯
![image](https://user-images.githubusercontent.com/11154693/162125870-db29424d-f838-459e-b389-3abfe465e297.png)
* Bricks들 YOLOv4 학습. 4가지 종류의 Bricks를 4가지 구분해서 125장 정도씩 data set 구성하고 일반 YOLOv4에 학습했다. 실제 로봇에서는 Tiny 모델로 써야함.
* Laser Scan Sensor를 Gazebo에서 구현된 값 그대로 활용하지 않고, 로봇 앞부분의 Camera로 Image 읽고 다시 3차원 laser scan으로 계산하도록 Vision 처리하는 코드 작성. 실제 로봇에서 해당 node Package를 사용해야 하기 떄문에 구조상 미리 작성

뭔가 많이 한 것 같지만 개뿔 pose graph slam 구현하는 부분이 제일 중요하고 어렵다. 다른건 그냥 시간만 있으면 되는데 이 부분은 머리싸매고 차근차근 빠르게 해내야 한다.

우선 SLAM의 Backend 부분은 어찌저찌 ceres solver 활용하면 가능할 것 같아서 감이 슬쩍 잡히는데

Frontend 부분은 map 구성도 그렇고, Line Laser Matching도 그렇고 해야할 부분이 많다.

할게 많을때는 할 수 있는 것부터 하라고 했다. 그래서 rosbag부터 만들고, 그걸로 반복반복 할 수 있도록 해야겠다.

# 고찰

아쉽게도.. 이번달에 완성해서 투고까지가 목표이므로, 투고 이후에 Laser Scan SLAM 부분을 다시 작성해야 겠다.

# 마무리
로봇의 DVL이 고장나서.. 프로젝트는 중단..