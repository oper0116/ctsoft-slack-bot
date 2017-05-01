# node 최신 LTS 버전 기준일 2017.4.30
FROM node:6.10.2

MAINTAINER Donghee Han <handh@ctsoft.kr>

RUN useradd -m ctsoft
USER ctsoft

# 앱 디텍토리 생성
RUN mkdir -p /app

# /app 디렉토리를 WORKDIR 로 설정
WORKDIR /app

# 현재 Dockerfile 있는 경로의 모든 파일을 /app 에 복사
ADD . /app

# npm install-> 노드 의존성 설치
RUN npm install

# 환경변수 NODE_ENV 의 값을 development로 설정
ENV NODE_ENV development



VOLUME ["/data"]

# 포트
EXPOSE 3000 80

CMD ["npm", "start"]
