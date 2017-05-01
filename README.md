# CtSoft Slack Bot

## 출근봇
- 월~금 10시마다 알람!

## 퇴근봇
- 월~금 6시마다 알람!

## Docker Setting

### Docker 이미지 생성(Docker build)
- docker build -t ctsoft/slack-bot:1.0.0 .

### Docker 컨테이너 생성(Docker run)
- docker run -d --name slack-bot -p 3003:3000 -p 803:80 ctsoft/slack-bot:1.0.0
