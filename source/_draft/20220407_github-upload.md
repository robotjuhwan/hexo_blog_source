---
title: 깃허브에 이전에 작성된 코드를 올리는 방법
categories:
  - Study
  - Github
tags:
  - Github
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
date: 2022-04-07 16:38:51
updated: 2022-04-07 16:38:51
---
깃허브에 이전에 작성된 코드를 올리는 방법
<!-- more -->
# 잡담
기존에 작업한 애들을 github에 잘 정리하면서 올리는 순서에 대한 기록

사실 나는 다수와 함께 코딩을 해본적은 없어서, 크게 github에서 다양한 기능을 사용하지는 않을 듯 하다.

그냥 commit만 주구장창 하는 정도일려나

미래에 회사에 가게 된다면 필수적으로 체득하게 되지 않을까 싶다.

이제 코딩할때는 github를 계속 사용하는 습관을 들여봐야겠다.

예전에는 README 완전 대충 쓰곤 했는데, 블로그를 쓰다보니 이게 markdown이라는 것을 알게 되었고 문법도 엄청 쉽고 익숙해지는 듯

# 방법
1. Github에서 new repository 만들기 (README .gitignore License 를 추가, .gitignore는 안해도됨, License는 시원하게 오픈해야 하니까 MIT)
2. Ubuntu terminal에서 새로 올리고자 하는 source 폴더로 이동
3. git 초기화하기
``` bash
git init
```
4. 원격저장소 github로 지정하기, 위에서 만든 github의 repo 주소를 사용
``` bash
git remote add origin https://github.com/robotjuhwan/ros_arduino_agent_vehicle.git
```
5. github 기본 내용을 가져오기 (새로 생성된 README .gitignore License를 가져온다고 생각하면 됨)
``` bash
git pull origin main
```
6. git branch인 master를 main으로 변경 (github의 기본 branch는 main인데 init에서 만들어주는 branch는 default가 master임. main으로 바뀐지는 얼마 안되었다고 함)
놀랍게도 whitelist/blacklist master/slave 라는 어떠한 인종차별적(?) 주종관계(?) 등으로 PCPC 적인 부분 떄문에 main으로 바뀌었다고 한다..
git version 2.18 이상부터는 기본적으로 init을 하면 main으로 생성됨.. 근데 나는 2.17버전이네. 그러면 기본 branch가 master로 생성되기 때문에 이를 지우고 main으로 바꿔줘야 한다..
그런데 지우는걸 먼저하는것이 아닌, main을 생성하고 이것으로 바꿔주고나서 master를 지울 수 있음. 업데이트 그냥 하는게 나을 듯
``` bash
git branch main
git checkout main
git branch -d master
```
7. 소스의 기존 파일들을 새롭게 추가. 아래 명령으로 손쉽게 추가된다. .gitignore에 따라서 자동으로 제외되지 않는 파일/폴더가 딱딱 추가됨
``` bash
git add .
```
8. commit하기. 변경된 파일들에 대해서 commit 한다.
``` bash
git commit -m "init"
```
9. push하기. push 해서 github에 실제로 딱 보낸다.
``` bash
git push origin main
```
10. github 저장소로 가서 올라간 소스들을 본다.
흐뭇~
![image](https://user-images.githubusercontent.com/11154693/162159063-131f104a-f7c1-4727-8cb6-8e801254a5e5.png)

# 추가
우분투 Ubuntu에서 git upgrade 하기

ubuntu에서 git을 업그레이드하려고 그냥 sudo apt install로 해보니까 2.17이 최신버전이라고 뜬다.
아래와 같이 써보면 현재 git version이 나온다
``` bash
git version
```
아래와 같이 apt에 repo를 추가하고 update하면 apt install을 통해 git 업그레이드가 가능하다
``` bash
sudo add-apt-repository ppa:git-core/ppa -y
sudo apt update
sudo apt install git -y
```
이후 버전을 확인해보니 아래와 같이 2.35.1 버전으로 확인되었다.
``` bash
git version 2.35.1
```