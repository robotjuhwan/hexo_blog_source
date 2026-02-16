---
title: 코덱스랑 블로그 복구한 날 - 로그 기반 작업일지
categories:
  - Chat
tags:
  - Chat
  - Codex
  - Blog
  - Hexo
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
date: 2026-02-17 00:50:00
updated: 2026-02-17 00:50:00
---
코덱스랑 블로그 복구한 날 - 로그 기반 작업일지
<!-- more -->

## 잡담
오늘 뭐 했는지 기억이 약간 섞여서 로그를 열어봤다.

OMX turns 로그 기준으로 UTC `2026-02-16 14:39 ~ 15:39`,
KST 기준으로는 `2026-02-16 23:39 ~ 2026-02-17 00:39`.

딱 1시간 동안 블로그를 거의 재부팅했다.

## 오늘 한 일 (로그 타임라인)
1. `poul.kr` 상태 확인. 아직 GitHub Pages 기반 맞는지 검증하고 연결 저장소를 확인했다.
2. `/Users/juhwan/Documents/poul_blog_restart`로 새로 시작해봤다가, 과거 글이 안 보이는 이유가 새 Hexo 초기화 상태라서라는 점을 확인했다.
3. 다른 컴퓨터에 있던 원본 `~/hexo` 소스를 원격에서 GitHub로 복구 push 했다.
4. 맥 작업 환경으로 `/Users/juhwan/Documents/hexo_blog_source`를 가져와서 본격 작업 기반을 만들었다.
5. 로컬 서버 없이도 여기서 바로 GitHub Pages 배포 가능한 설정인지 다시 점검했다.
6. 요청했던 `Juren Buffett` 관련 포스트를 정리해서 24개 삭제하고 배포했다.
7. 블로그를 SEO/운영/수익화 관점으로 종합 점검해서 현재 리스크를 정리했다.
8. 콘텐츠 외 이슈는 한 번에 교정했다. Gitalk 민감값 제거, 댓글 비활성화, 깨진 로고/파비콘/OG/매니페스트 복구, 정책성 페이지 보강까지 반영했다.
9. OpenAI Pro 29,000원 + Codex 사용기 글을 초안 작성하고, 수정하고, 실제 발행까지 마쳤다.
10. 마지막으로 Codex/OMX 로그 경로를 정리해서 이후에도 작업 기록을 다시 추적할 수 있게 해뒀다.

## 마무리
오늘은 글을 많이 쓴 날이라기보다,
블로그를 다시 굴릴 수 있는 상태로 되돌린 날이었다.

예전에는 글감이 있어도 배포/설정이 꼬이면 금방 멈췄는데,
오늘은 소스 복구부터 배포 파이프라인, 운영 이슈 교정까지 한 번에 끝냈다.
