# 구글 로그인 OAuth 2.0 클라이언트 생성 방법
1. https://developers.google.com/identity/oauth2/web/guides/get-google-api-clientid 에 접속합니다.
2. "프로젝트 구성" 버튼을 클릭합니다.
3. 만들어둔 프로젝트를 선택하거나, 없다면 새로 프로젝트를 생성합니다.
4. Web browser 를 선택합니다.
5. Authorized Javascript Origin 입력란에 "http://localhost:8820" 을 입력합니다.
6. https://console.cloud.google.com/apis/credentials 에 접속하여 OAuth 2.0 클라이언트 ID 항목에 데이터가 생성 되었는지 확인합니다. 데이터가 존재하면 해당 행을 클릭합니다.
7. 클릭하면 client id 와 client secret 을 확인할 수 있으며, 승인된 리디렉션 URI 부분에 "http://localhost:8820/callback" 을 입력하고 하단의 "저장" 버튼을 클릭합니다.

<br />
<br />

# 구글 로그인 OAuth Scope 추가 방법
1. https://console.cloud.google.com/apis/credentials/consent 에 접속합니다.
2. "앱 수정" 버튼을 클릭합니다.
3. 2단계 범위 부분에서 "범위 추가 또는 삭제" 버튼을 클릭합니다.
4. 표시된 모달창에서 원하는 scope 를 검색하여 등록 후 하단의 "업데이트" 버튼을 클릭합니다.
5. 모달창을 닫고, 하단의 "저장 후 계속" 버튼을 클릭하여 저장합니다.

<br />
<br />

# 본 프로젝트 이용 방법
1. 본 프로젝트를 git pull 받습니다.
```
git clone https://github.com/wisdomstar94/google-web-login-sample.git
```
2. 클론 받은 프로젝트 경로로 이동합니다.
```
cd google-web-login-sample
```
3. node package 를 설치합니다.
```
npm i
```
4. 다음과 같이 파일을 copy 합니다.
```
copy .env.sample .env
```
5. .env 파일의 "GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET" 값을 입력합니다.<br />
해당 값들은 위에 기재한 "구글 로그인 OAuth 2.0 클라이언트 생성 방법" 에서 확인 가능합니다.
6. .env 파일의 "GOOGLE_SCOPE" 부분은 원하는 scope 를 띄어쓰기를 기준으로 여러개 입력 가능합니다. <br />
구글 콘솔 사이트에서 OAuth Scope 를 등록하였다면, .env 파일의 "GOOGLE_SCOPE" 에도 추가로 기재해 주어야 합니다.
7. pm2 를 global 로 설치합니다.
```
npm i -g pm2
```
8. 프로젝트를 구동합니다.
```
pm2 start pm2.config.js
```
9. 브라우저에서 "http://localhost:8820" 에 접속합니다.
10. 이후 버튼을 클릭하여 구글 로그인이 완료되면 terminal 에서 data 를 확인 할 수 있습니다. (access_token 등)


