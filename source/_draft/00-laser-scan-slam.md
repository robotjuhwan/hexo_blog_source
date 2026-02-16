---
title: 00_laser scan SLAM
tags: [SLAM, Underwater]
date: 2022-04-06 17:31:20
updated: 2022-04-07 14:00:20
categories: [Study, SLAM]
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
---
title: 00_laser scan SLAM

<!-- more -->
# 잡담
수중에서는 3차원 측정을 위한 센서가 매우 부족하다.

스테레오 비전을 쓰기도 하지만, 워낙 피쳐가 부족한 환경이라서 잘 되는지는 의문

Lidar 같은 장비나 리얼센스 같은 장비가 수중용이 없다.. 돈이 안되서 그런가

보통 이러한 장비들은 육상용의 경우 사람 눈에 영향을 줄 수 있어서 매우 제한적인 파워로 극도의 성능을 뽑아낸다.

수중에는 사람도 없으니까 파워 왕창 높히면 장비 사용할 수 있을텐데.. 아쉽

수중생물에 영향을 줄 수 있어 환경단체의 반대를 받을 수 있다. 조심

# Line Laser scan
수중에서는 고전적일 수 있는 찐 레이저를 쓴다. 왜 찐 레이저라고 했냐면, 눈에 보이는 레이저이기 때문.

보통 육상에서 쓰는 대부분의 레이저 장비들은 가시광선이 아니라서 눈에 보이지 않는다.

하지만 수중에서는 그런거 없고 파워풀하게 녹색이나 파란색 레이저를 쓴다.

빨간 레이저는 쓰지 않는다. 빨간색은 수중에서 감쇄가 심하기 때문이다.

그리고 수중 카메라로 색상 인식을 해서 그 laser 부분의 3차원 위치정보를 얻는다.

매우 고전적이지만 확실한 방법이다.

(수중에서 Structured Light를 이용해서 한번에 depth를 얻는 장비도 구현되어 있더라. 없으니까 패스)

나는 이러한 laser scan 방법론을 활용하여 수중에서 간단하게 SLAM을 구현해보고자 한다.

# 고찰
SLAM은 흔히 camera 기반 슬램이 있고 라이다나 뎁스 센서로 이루어지는 SLAM이 있고, 방식 등으로는 여러가지가 있지만 Graph based SLAM 방식을 많이들 쓴다

Pose Graph SLAM 이라고도 하던데, 간단하게 말하면 시간에 따라서 Robot의 Pose들을 시리얼하게 딱딱 이어 묶고는 그 사이의 Transformation을 각각 계산해둔다.

그러면 일자로 이어진 그래프?가 될 것인데, Loop Closure가 발생하면 이를 보정하기 위해서 각각의 Pose들을 최적화시키게 된다. 이때 Pose는 Position과 Attitude를 포함한 Robot의 정보다.

쉽게말해서 원형으로 로봇이 움직인다고 했을 때 출발한 지점으로 Robot이 돌아오게 되면, 출발지의 Pose와 지금껏 Robot이 추정하여 현재 있을 것이라고 예측했던 위치가 알맞지 않을 것이다 (오차가 계속해서 누적되었기 때문).

이를 바로잡아 주는 과정이 Loop Closure이다.

SLAM 영상들을 보면 지도가 만들어지다가 갑자기 뚝뚝 일부의 지도들이 갑작스럽게 어디론가 딱 붙는다던지 하는 모습을 보여주는데, 그게 Loop Closure이다.

Loop Closure과정을 보면 일부의 생선된 지도들이 딱딱 알맞게 붙어들어가게 되는데, 이는 생각보다 간단한 과정으로 해결가능하다 (물론 그 과정 자체의 계산은 매우 복잡하지만).

Solver를 사용하면 이를 풀어낼 수 있다. Solver가 무었이냐 하면 쉽게말하면 연립방정식을 풀어주는 것이다.

(학부시절에 쓰던 CASIO 공학계산기에도 Solver기능이 있어서 매우 편하게 문제를 풀 수 있었다. 그때 생각해보면 해의 범위를 설정해줘야 해서 이게 왜 필요한가 생각했었는데, Solver의 의미를 알고나니 이해가 된다.)

여튼 Solver가 Loop Closure에서 작동하는 원리는 간단하다. 우선 Robot의 Pose들이 이어져 있을때, 그 Pose 사이에는 Transform Matrix가 존재한다. 3차원 이동과 회전이 동시에 이루어지는 그 행렬이다. 이를 Edge라고 표현하더라

여튼 Loop Closure가 시작된 Pose에서 현재의 Pose사이에는 여러차례 알맞은 Edge가 곱해져서 표현이 된다. Edge로써 현재의 Pose가 추정된 것이다.

이 모든 Edge에 어떠한 미지수를 각각 곱했을 때 현재의 Pose가 시작된 Pose에 가장 가까워질 수 있도록 (거의 일치하도록) 하고 Solver를 활용하여 그 미지수를 구하는 것이다.

그 미지수를 구하게되면, 실제 그 미지수를 각 Edge에 곱해서 Pose들을 다시 Update하면 지도가 찰싹 붙는 것을 보여줄 수 있는 것이다.

그래서 이러한 Loop Closure 과정은 일반적으로 컴퓨팅 양이 많기때문에 SLAM 알고리즘에서 Backend 과정으로 분류한다. 가끔 일어나지만 시간을 오래걸리니 조금 뒷단에서 처리하겠다는 느낌

자연스럽게 Frontend는 실시간으로 현재의 Pose를 추정하여 Node를 구성하는 것이다 (말은 안했지만 Node가 Graph에서 현재의 Pose들을 나타내는 용어임 Graph는 Node와 Edge로 구성되어 있다.)


자 위 과정을 이해했다면 Pose Graph SLAM을 이해한 것이다. 물론.. 나도 잘 이해한 건지는 모르겠다.