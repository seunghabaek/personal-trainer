# Vite를 이용해서 개발하기

## vite를 이용한 이유

## vite로 .env 파일 다루기

기존 CRA(create-react-app)을 사용할 때와 vite를 사용할때의 dotenv를 다루는 방식이 다르다.

```
// .env
...
REACT_APP_API_KEY: "sdfsdfsdfs"
...
```

- CRA

```
// firebase.ts
...
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    ...
}
```

- vite

```
// firebase.ts
...
const firebaseConfig = {
    apiKey: import.meta.env.REACT_APP_API_KEY,
}
```
