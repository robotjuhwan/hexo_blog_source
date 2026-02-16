---
title: ros_ceres_pcl 패키지
categories: [Study, SLAM]
tags: [SLAM, ROS]
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
date: 2022-04-11 15:05:07
updated: 2022-04-11 15:05:07
---
ros_ceres_pcl 패키지
<!-- more -->
# 잡담
ROS1만 주구장창 하는게 맞나싶긴 하지만

일단 빨리빨리 할수있는걸 하는게 맞는 듯. ROS2도 빨리 플젝하나 해버려야하는데..

SLAM에서 중요한 부분이 PCL 라이브러리를 추가해서 포인트클라우드를 조금 만지작 거려야 하고

ceres solver 활용해서 loop closure를 구현해야 한다. 그러니 이 두개를 ROS에서 사용해야 한다.

# 깃허브 올리기
깃허브에 기존 패키지 올리기를 통해서 이번 패키지도 추가해서 한번 올려보았다.

[깃허브에 이전에 작성된 코드를 올리는 방법](https://poul.kr/2022/04/07/20220407_github-upload)

이번 패키지는 아래 블로그를 참조하여 작성하였다. 매우 감사한 블로그. 다 정독할 듯

[Hyungtae Lim](https://limhyungtae.github.io/)

여튼 아래와 같이 crese solver와 pcl 라이브러리 추가해서 ros에서 빨리 간단한 SLAM을 구현해봐야함..

할일이 많다.

[ros_ceres_pcl_template](https://github.com/robotjuhwan/ros_ceres_pcl_template.git)