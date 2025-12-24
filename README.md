# 🤖 MessengerBotR

카카오톡 봇을 블록 코딩으로 쉽게 만들 수 있는 웹 기반 비주얼 에디터입니다.

## 📋 프로젝트 소개

MessengerBot R API2를 기반으로 한 블록 코딩 에디터로, 프로그래밍 지식이 없어도 드래그 앤 드롭만으로 카카오톡 봇을 제작할 수 있습니다. Google Blockly를 활용하여 직관적인 인터페이스를 제공합니다.

### 주요 기능

- 🎯 **이벤트 처리**: 메시지, 명령어, 봇 시작/컴파일 이벤트
- 📨 **메시지 관리**: 답장, 전송, 메시지 정보 추출
- 💾 **파일 시스템**: 파일 읽기/쓰기/삭제
- 🔧 **유틸리티**: HTTP 요청, JSON 처리, 날짜/시간 처리
- 📊 **데이터 구조**: 배열, 객체, 반복문, 조건문
- 🎨 **실시간 코드 생성**: 블록을 조합하면 즉시 JavaScript 코드로 변환
- 💾 **저장/불러오기**: 작업 내용을 로컬 스토리지에 저장

## 🚀 시작하기

### 온라인 사용

웹사이트에 접속하여 바로 사용할 수 있습니다:
- **GitHub Pages**: [block.hegelty.me/editor](https://hegelty.github.io/MessingerBlockR/editor/)

### 로컬 실행

```bash
# 저장소 클론
git clone https://github.com/hegelty/MessingerBlockR.git

# 디렉토리 이동
cd MessingerBlockR/editor

# 웹 서버 실행 (Python 3)
python -m http.server 8000

# 브라우저에서 접속
# http://localhost:8000
```

## 📖 사용 방법

1. **블록 선택**: 왼쪽 툴박스에서 원하는 블록을 드래그
2. **블록 조합**: 워크스페이스에서 블록들을 연결
3. **코드 생성**: "📝 코드 생성" 버튼 클릭
4. **코드 복사**: "📋 코드 복사" 버튼으로 생성된 코드 복사
5. **MessengerBot R에 적용**: 복사한 코드를 MessengerBot R 앱에 붙여넣기

## 📚 예제 코드

`example` 폴더에서 다양한 예제를 확인할 수 있습니다:

- **출석체크** (`출석체크.xml`): Blockly XML 예제

## 🛠️ 기술 스택

- **Blockly**: Google의 비주얼 프로그래밍 라이브러리
- **JavaScript**: 코드 생성 및 에디터 로직
- **HTML/CSS**: 사용자 인터페이스
- **MessengerBot R API2**: 카카오톡 봇 API

## 📄 라이선스

### 프로젝트 라이선스
이 프로젝트는 **GNU General Public License v3.0 (GPL-3.0)** 라이선스 하에 배포됩니다.

- ✅ **상업적 이용 가능**: 이 에디터로 생성한 코드는 상업적으로 자유롭게 사용할 수 있습니다.
- ✅ **수정 및 재배포 가능**: 소스 코드를 수정하고 재배포할 수 있습니다.
- ⚠️ **동일 라이선스 적용**: 이 프로젝트의 소스 코드를 수정하여 재배포할 경우, 동일한 GPL-3.0 라이선스를 적용해야 합니다.
- ⚠️ **소스 코드 공개**: 수정된 버전을 배포할 경우 소스 코드를 공개해야 합니다.

자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

### 생성된 코드의 라이선스
**이 에디터를 사용하여 생성한 봇 코드는 GPL 라이선스의 적용을 받지 않으며**, 사용자가 자유롭게 상업적으로 이용할 수 있습니다.

### 외부 라이브러리
- **Blockly**: Apache License 2.0

## 👨‍💻 개발자 정보

- **개발자**: Hegelty
- **이메일**: [dev@hegelty.me](mailto:dev@hegelty.me)
- **홈페이지**: [cv.hegelty.me](https://cv.hegelty.me)
- **GitHub**: [https://github.com/hegelty/MessingerBlockR](https://github.com/hegelty/MessingerBlockR)

## 📚 참고 자료

- **MessengerBot R 공식 문서**: [https://kbotdocs.dev/](https://kbotdocs.dev/)
- **Blockly 공식 문서**: [https://developers.google.com/blockly](https://developers.google.com/blockly)
- **MessengerBot R 다운로드**: [https://download.msgbot.app](https://download.msgbot.app)

## 🤝 기여하기

이슈 제보 및 풀 리퀘스트는 언제나 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Made with ❤️ by Hegelty**

