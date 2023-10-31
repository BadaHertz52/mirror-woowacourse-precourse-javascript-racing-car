# 우테코 6추차 미션: 자동차 경주 🏎️ 🏁

[🫙우테코 6주차 미션 저장소 가기](https://github.com/woowacourse-precourse/javascript-racingcar-6)

## 설치 및 테스트

Install

```
npm i
```

Test

```
npm run test
```

## 구현

### 기능 구현 목록

[기능구현 목록 보러가기](https://github.com/BadaHertz52/javascript-racingcar-6/blob/badahertz52/docs/README.md#%EC%9E%90%EB%8F%99%EC%B0%A8-%EA%B2%BD%EC%A3%BC)

### 기능 구현

필요한 기능들을 특징별로 나누어서 클래스 또는 객체로 만들어서 객체지향 프로그래밍이 되도록 노력했다.

```
📦src
┣ 📜App.js : 테스트가 진행되는 파일, Game의 메서드를 실행
┣ 📜Car.js : 경주에 참여하는 자동차에 대한 설정
┣ 📜Game.js : 게임에 대한 전반적인 것들을 관리
┣ 📜index.js
┣ 📜Input.js : 사용자가 입력한 값과 그의 유효성 검사 담당
┣ 📜Message.js :출력되는 메세지 관리
┣ 📜Output.js : 메세지 출력 담당
┗ 📜Referee.js : 자동차들의 전진 횟수를 비교해 우승자 선정
```

## 테스트 코드 작성

```
📦__tests__
 ┣ 📜ApplicationTest.js
 ┣ 📜CarTest.js : Car 클래스 기능에 대한 테스트
 ┣ 📜GameRoundTest.js : 사용자가 입력한 이동 횟수에 따른 게임 진행 테스트
 ┣ 📜GameTest.js : Game 클래스 기능에 대한 테스트
 ┣ 📜MessageTest.js : 게임 진행 시 출력되는 메세지에 대한 테스트
 ┣ 📜RefereeTest.js : 자동차 전진 횟수 점수 비교 및 우승자 판별에 대한 테스트
 ┣ 📜StringTest.js
 ┣ 📜ValidateTest.js : 입력값의 유효성 검사에 대한 테스트
 ┗ 📜WinnerTest.js : 단일,복수 우증자 판별 및 결과 출력에 대한 테스트
```

## 공부

### 의미 있는 커밋 메세지

이번 1주차 공통 피브백에 "의미 있는 커밋 메세지를 적자"라는 것이 있어서 이번 기회에 어떤 커밋 메세지가 좋은 것인지 공부하고 이를 정리해봤다.

#### 커밋 메세지 규칙

- 제목과 본문을 빈행을 구분한다
- 제목은 50글자 이내로 작성한다.
- 제목의 첫글자는 대문자로 작성한다.
- 제목 끝에는 마침표를 넣지 않는다.
- 제목은 현재형, 명령문으로 작성한다.
- 본문의 각행은 72글자 내로 한다.
- 무엇을 왜에 중점을 두어 작성한다.

#### 커밋 메세지 구조

```
type(scope): header(short summary)
<BLANK LINE>
body
<BLANK LINE>
footer
```

#### Type : 해당 커밋의 성격

- feat: 새로운 기능
- fix : 버그 수정
- docs: 문서 수정
- test: 테스트 코드 수정
- refactor: 코드 리팩토링
- build: 빌드 관련 파일 수정, 모듈 설치 또는 삭제에 대한 커밋
- style : 코드 스타일(ex: css 파일 변경) ,포맷에 대한 수정
- perf: 성능 개선
- ci : CI 관련 설정 수정
- chore : 그 외 수정

#### Score

스코프는 해당 커밋이 어떤 부분에서 변경이 일어났는 지를 나타내는 것으로 변경된 파일, 함수 ,클래스등을 적으면 되고 생략 가능하다.

```
feat(login): Add new feature to login page
```

#### Header

해당 커밋에 대한 짧은 요약문으로 대문자로 시작해 현재형, 명령문으로 작성하고 마침표를 찍지 않는다.

#### Body

본문은 Header에서 간랸하게 표현한 변경 사항들을 보다 자세하게 풀어 넣으면 되며 변경 이유와 변경 전과의 차이점이 들어나도록 하고 현재,명령문으로 작성해야 한다.

#### Footer

하단에는 주요 변경 내역들과 해결된 이슈들을 적는다.
주요 변경 내역에는 변경점, 변경 사유, 마이스레이젼 지시가 언급되어야 하고 해결된 이슈는 Close #<이슈번호> 의 형식으로 적어준다.

#### 🤔고민해볼 것 : 커밋 메세지를 영어로 작성해야할까?

이제까지 프로젝트를 진행하면서 커밋 메세지를 영어로 작성해왔다. 영어가 편하보다는 개발 공부를 시작하고 커밋 메세지 작성법을 찾아볼때의 예시와 기준이 영어였고 아무래도 개발 시의 기준?언어이다 보니 영어로 작성하는 법을 알아야 한다고 생각했다.
그러나 영어를 익숙하게 사용하지 않기 때문에 커밋 메세지를 작성하는게 한계가 있을 수 밖에 없었다. 번역기를 사용한다 해도 자연스럽지 않을 때가 있었다. 팀 프로젝트나 이번 우테코의 지원자분들의 커밋 메세지를 보면 한글로 작성하시는 분들이 있어서 칮아보니 꼭 영어로 작성하지 않아도 되지 않을까 싶다.

### 개발 시 사용되는 Eslint,Prettier 패키지를 git에 올리지 않는 방법

우테코의 자바스크립트 스타일 가이드는 Airbnb 자바스크립트 스타일 가이드를 기준으로 하기 때문에 이와 관련된 Eslint, Prettier 패키지를 설치하고 설정 파일을 만들어서 사용하고 있다.

문제는 package.json을 변경하지 않는다는 프로그래밍 요구사항이 존재하는데 package.json이 이미 git에 올려져 있어서 .gitignore 에 package.json을 추가해도 git에 적용대상이 된다.

참여자 한분이 디스코드에 이를 해결하는 [방법](https://velog.io/@largopie/git-%ED%8A%B9%EC%A0%95-%ED%8C%8C%EC%9D%BC-%EC%9E%84%EC%8B%9C%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%BB%A4%EB%B0%8B%EC%97%90-%EC%A0%9C%EC%99%B8%ED%95%98%EA%B8%B0)을 공유해주셔서, 이를 통해 문제를 해결했고 방법은 `--assume-unchanged` 라는 git 옵션을 사용하는 것이다.

```bash
 $ git update-index --assume-unchanged <파일이름>
```

위의 git 명령어를 통해 git에서 추적 중인 파일 중 일부 파일을 임시로 수정하지 않은 것을 가정해 해당 파일이 수정되어도 커밋에서 제외된다.

```bash
$ git update-index --no-assume-unchanged <파일이름>
```

`--no-assume-unchanged` 옵션을 사용하면 다시 git의 추적 대상이 된다.

Eslint와 Prettier 를 적용하기 위해 vscode의 setting.json 파일도 생성했기 때문에 gitignore에 커밋에서 제외할 파일들을 추가한 후 gitignore 파일 자체를 `--assume-unchanged`옵션으로 git의 추적을 임시적으로 중단하는 방식을 선택했다.

### 객체 지향 프로그래밍 구현

1주차 공통 피드백에 첨부된 학습 자료 중 "숫자 야구 피드백 강의"에서 객체 지향 프로그래밍을 다음의 방식으로 구현했다.

1. 구현할 기능들을 작성 후,기능들을 특성별로 묶는다.(추상화)
2. 1에서 특성별로 묶을 것을 클래스로 만든다.
3. 2에서 만들 클래스를 인스턴스화한다.
4. 해당 클래스가 역할애 맞는 인스턴스를 수행하게 한다.
5. 각 결과를 합친다.
