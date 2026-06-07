---
title: 붕붕고라는 게임을 만들고 있다
categories:
  - Game
tags:
  - Game
  - BoongBoongGo
  - Codex
  - Unity
  - Web
cover: /img/posts/20260607-boongboonggo-intro/cover.svg
thumbnail: /img/posts/20260607-boongboonggo-intro/cover.svg
og_image: /img/posts/20260607-boongboonggo-intro/boong-bike-prototype.png
description: 자동 붕어빵 배달 오토바이로 작은 푸드테크 회사를 키우는 경영게임, 붕붕고를 간단히 소개한다.
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
date: 2026-06-07 13:26:00
updated: 2026-06-07 13:26:00
---
붕붕고라는 게임을 만들고 있다.
<!-- more -->

## 잡담
요즘 코덱스로 이것저것 많이 만들고 있는데,
그중에 은근히 정이 많이 가는 프로젝트가 하나 있다.

이름은 `붕붕고`.

한 줄로 말하면,
**자동으로 붕어빵을 굽는 배달 오토바이로 작은 푸드테크 회사를 키우는 경영게임**이다.

붕어빵을 직접 굽는 게임도 아니고,
오토바이를 직접 조종하는 게임도 아니다.

나는 창업자고,
고객 취향을 읽고,
자동조리 장비를 연구하고,
직원을 배치하고,
차량을 바꾸고,
매주 결과 리포트를 보면서
"이 사업이 진짜 될까?"를 증명해가는 쪽에 가깝다.

![붕붕고 소개 커버](/img/posts/20260607-boongboonggo-intro/cover.svg)

## 왜 하필 붕어빵 오토바이인가
처음 아이디어는 약간 이상하다.

그냥 붕어빵 가게를 키우는 것도 아니고,
배달앱을 만드는 것도 아니고,
오토바이에 자동 굽기 장비를 얹는다.

근데 이 이상함이 마음에 든다.

붕어빵은 되게 작고 익숙한 음식인데,
거기에 자동화, 배달, 고객 데이터, 맞춤 주문 같은 단어를 붙이면
갑자기 말도 안 되게 진지한 스타트업 아이템처럼 보인다.

아니 사실 실제로도 진지해질 수 있다.

고객마다 좋아하는 속재료가 다르고,
도착했을 때 따뜻해야 하고,
빠르게 가야 하고,
장비가 고장나면 안 되고,
행사장에서는 대량 주문도 버텨야 한다.

이걸 게임 안에서는 이런 차량들이 맡는다.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:16px;margin:20px 0;">
  <figure style="margin:0;">
    <img src="/img/posts/20260607-boongboonggo-intro/boong-bike-prototype.png" alt="붕붕고 1호기 자동 붕어빵 배달 오토바이" loading="lazy">
    <figcaption style="font-size:0.9em;text-align:center;color:#777;">붕붕고 1호기</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/img/posts/20260607-boongboonggo-intro/boong-bike-speedster.png" alt="점심 피크형 붕붕고 오토바이" loading="lazy">
    <figcaption style="font-size:0.9em;text-align:center;color:#777;">점심 피크형</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/img/posts/20260607-boongboonggo-intro/boong-bike-premium.png" alt="프리미엄 보온형 붕붕고 오토바이" loading="lazy">
    <figcaption style="font-size:0.9em;text-align:center;color:#777;">프리미엄 보온형</figcaption>
  </figure>
</div>

지금은 아직 완성 게임이라기보다는,
게임의 뼈대와 방향을 잡아가는 중이다.

그래도 저 오토바이 이미지를 보고 있으면
"아 이건 좀 귀엽게 끝까지 밀어볼 만한데?" 하는 생각이 든다.

## 핵심은 돈보다 증거
보통 경영게임이라고 하면
돈을 많이 벌고,
건물을 키우고,
직원을 늘리고,
숫자를 올리는 그림이 먼저 떠오른다.

붕붕고도 당연히 돈이 중요하긴 하다.
현금이 떨어지면 연구도 못 하고,
차량도 못 사고,
직원도 못 뽑는다.

근데 내가 붕붕고에서 더 중요하게 보고 있는 건 `증거`다.

이 사업이 될 것 같다는 증거.

예를 들면 이런 것들.

- 어떤 고객이 자기 취향을 기억해달라고 다시 온다.
- 오피스 거리에서 점심 피크를 버틴다.
- 겨울 장터에서 도착 온도 평가를 통과한다.
- 대학가에서 이상한 단짠 조합이 메뉴가 된다.
- 프랜차이즈 감사에서 여러 지역의 품질 편차를 줄인다.

게임 안에서는 이런 결과가 매주 리포트와 증거판에 남는다.

![붕붕고 주간 루프](/img/posts/20260607-boongboonggo-intro/core-loop.svg)

내가 좋아하는 지점은 여기다.

플레이어가 "이번 주 매출 얼마지?"만 보는 게 아니라,
"이번 주에 내가 무슨 가설을 증명했지?"를 보게 만들고 싶다.

창업 게임처럼 보이지만,
사실은 작은 실험 기록 게임에 가깝다.

## 필드는 대시보드가 아니라 작은 회사처럼
게임 화면도 처음부터 대시보드 느낌으로 가면 재미가 확 죽을 것 같았다.

숫자표, 버튼, 표, 리포트만 있으면
그건 게임이라기보다는 운영툴 같다.
내가 요즘 만드는 자산관리 UI들이랑 너무 비슷해진다.

붕붕고는 화면 한가운데에 작은 필드가 있고,
그 안에 본사, 연구소, 차고, 증거판, 고객 정류장, 도로가 보여야 한다.

플레이어가 버튼을 누르기 전에
먼저 "내 작은 회사가 돌아가고 있구나"를 봐야 한다.

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:16px;margin:20px 0;">
  <figure style="margin:0;">
    <img src="/img/posts/20260607-boongboonggo-intro/headquarters.png" alt="붕붕고 본사 컨셉 이미지" loading="lazy">
    <figcaption style="font-size:0.9em;text-align:center;color:#777;">본사</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/img/posts/20260607-boongboonggo-intro/research-lab.png" alt="붕붕고 연구소 컨셉 이미지" loading="lazy">
    <figcaption style="font-size:0.9em;text-align:center;color:#777;">연구소</figcaption>
  </figure>
  <figure style="margin:0;">
    <img src="/img/posts/20260607-boongboonggo-intro/staff-room.png" alt="붕붕고 직원실 컨셉 이미지" loading="lazy">
    <figcaption style="font-size:0.9em;text-align:center;color:#777;">직원실</figcaption>
  </figure>
</div>

실제로 스펙에서도 메인 화면은 필드 중심으로 잡아뒀다.

위쪽에는 주차, 현금, 명성, 만족도, 투자 신뢰 같은 HUD가 있고,
아래에는 연구, 직원, 차량, 지역/정책, 다음 주 버튼이 있다.

하지만 제일 큰 면적은 필드다.

내 기준에서 이건 꽤 중요하다.
숫자를 올리는 게임이어도,
플레이어가 기억하는 건 결국 움직이는 장면이어야 하니까.

## 24주짜리 창업 캠페인
붕붕고의 첫 목표는 24주짜리 캠페인이다.

동네에서 시작해서,
오피스 거리로 가고,
대학가로 확장하고,
터미널 축제장까지 가본 뒤,
마지막에는 전국 출시 심사를 받는다.

말만 전국 출시지,
사실 게임적으로는 이런 질문을 던지는 구조다.

"너의 붕붕고는 어떤 회사였나?"

![붕붕고 24주 캠페인 로드맵](/img/posts/20260607-boongboonggo-intro/campaign-roadmap.svg)

Week 12에는 투자 피치가 있다.
여기서 초반 증거를 묶어서
"이게 그냥 귀여운 발명품인지, 진짜 사업 가능성이 있는지"를 한 번 판정한다.

Week 24에는 전국 출시 심사가 있다.
여기서는 최종 점수와 엔딩 타이틀이 나온다.

나는 이 구조가 마음에 든다.

그냥 끝없이 돈 버는 게임보다,
일정 기간 안에 내 사업의 성격을 만든다는 쪽이 더 선명하다.

## 플레이 스타일도 남기고 싶다
붕붕고에서 만들고 싶은 엔딩은
단순히 `성공`, `실패`가 아니다.

플레이어가 어떤 선택을 많이 했는지에 따라
내 붕붕고의 성격이 남았으면 좋겠다.

예를 들면 이런 식이다.

![붕붕고 전략 아이덴티티](/img/posts/20260607-boongboonggo-intro/strategy-arcs.svg)

맞춤 주문을 계속 파고들면 초개인화 붕붕고.
보온과 속도를 밀면 따끈신속 붕붕고.
정비와 교육으로 안정성을 만들면 안정운영 붕붕고.
시식회와 엑스포를 잘 챙기면 행사스타 붕붕고.

물론 실제 게임에서는 이런 이름들이
그냥 문장 하나로만 끝나면 안 된다.

고객 주문, 증거판, 수상, 최종 리포트에서
"아 내가 이번 판을 이렇게 운영했구나"가 보여야 한다.

## 고객이 익명 숫자가 아니었으면
붕붕고에서 또 하나 중요하게 잡은 건 고객 기억이다.

`고객 120명`, `만족도 +3` 이런 숫자만 있으면
관리는 되는데 이야기가 안 남는다.

그래서 대표 고객들이 있다.

미나네 가족,
단골 후보 성우,
오피스 매니저 지은,
미식 리뷰어 하루,
대학생 나래,
여행객 민수.

이런 식으로 이름이 붙은 고객들이
특정 주차에 등장하고,
다시 돌아오고,
자기 취향 주문을 남기는 구조를 생각하고 있다.

예를 들면 미나네 가족은 알레르기와 취향이 섞인 주문을 하고,
성우는 지난주 팥 농도를 기억해달라고 하고,
지은은 점심시간에 식지 않는 붕어빵을 원한다.

이런 것들이 쌓이면
경영 수치가 아니라 기억이 된다.

![붕붕고 픽셀 에셋 보드](/img/posts/20260607-boongboonggo-intro/pixel-asset-board.svg)

픽셀 에셋도 이런 방향에 맞춰 잡고 있다.
작아도 알아볼 수 있고,
차량과 건물과 고객이 한 화면에서 같이 살아야 한다.

엄청 화려한 그래픽보다
작은 아이콘들이 꾸준히 움직이는 쪽이 더 맞는 게임 같다.

## 이벤트는 보너스가 아니라 공개 검증
중간중간 이벤트도 있다.

동네 붕어빵 시식회,
겨울 장터 예선,
투자 피치 데이,
대학가 푸드 배틀,
프랜차이즈 운영 감사,
전국 브랜드 엑스포.

이름만 보면 그냥 보상 이벤트 같지만,
내가 생각하는 역할은 조금 다르다.

이벤트는 "공개 검증"이다.

평소에는 고객 반응을 내부적으로 읽는다면,
이벤트에서는 그동안 쌓은 증거가 밖에서 평가받는다.

![붕붕고 겨울 축제 이벤트 컨셉](/img/posts/20260607-boongboonggo-intro/taiyaki-festival.png)

겨울 장터라면 따뜻함과 장비 안정성이 중요하고,
대학가 푸드 배틀이라면 메뉴 다양성과 고객 기억이 중요하고,
프랜차이즈 감사라면 여러 지역에서 같은 품질을 낼 수 있는지가 중요하다.

이벤트에 실패해도 그냥 망하는 게 아니라,
무엇을 고쳐야 하는지 리포트로 남게 만들고 싶다.

실패가 벌점이 아니라 다음 연구 과제가 되는 쪽.
그게 붕붕고랑 잘 맞는다.

## 지금 구현 방향
처음에는 Unity 쪽으로 만지던 흔적이 많았는데,
현재는 웹을 먼저 활성 타깃으로 잡아두고 있다.

이유는 단순하다.

웹이 빠르게 검증하기 좋다.
브라우저에서 바로 띄우고,
테스트 돌리고,
UI 흐름을 확인하고,
나중에 Unity나 다른 엔진으로 옮길 때도
게임 규칙만 따로 가져가기 쉽다.

그래서 구조는 대충 이런 느낌이다.

![붕붕고 웹 우선 구현 구조](/img/posts/20260607-boongboonggo-intro/architecture.svg)

규칙과 경제, 주간 시뮬레이션은 TypeScript 도메인 로직으로 빼고,
React는 HUD와 팝업, 리포트 같은 텍스트 많은 화면을 맡고,
Phaser는 움직이는 필드와 오토바이 애니메이션을 맡는 식이다.

이렇게 해두면 나중에 Unity로 가더라도
게임의 핵심 규칙을 다시 발명하지 않아도 된다.

물론 말은 쉽다.
실제로는 또 여기저기 삐걱댈 거다.
근데 삐걱대는 부분이 보여야 고칠 수도 있으니까,
일단 웹에서 빠르게 한 판이 끝까지 돌아가게 만드는 게 목표다.

## 마무리
붕붕고는 아직 완성품은 아니다.

하지만 이상하게 이 프로젝트는 이름부터 마음에 든다.
붕붕고.
뭔가 입에 붙는다.

작은 오토바이가 붕어빵을 싣고 돌아다니고,
고객들이 자기 취향을 기억해달라고 하고,
나는 그걸 보고 연구와 직원을 다시 배치한다.

생각보다 꽤 게임이 될 것 같다.

일단 목표는 하나다.

24주 캠페인을 실제로 끝까지 돌려보고,
마지막에 이런 문장을 보는 것.

"이번 판의 붕붕고는 따끈신속 운영자였습니다."

혹은,

"초개인화 붕붕고 대표."

이런 엔딩이 나오면 꽤 뿌듯할 듯.

아무튼 붕붕고는 계속 만들어볼 생각이다.
귀여운 척하면서 은근히 진지한 경영게임으로.
