//server.js
const express = require('express'); //서버기능 구현을 위한 코어 (core)모듈 express 호출
const path = require('path'); //경로기능 제어하기 위해 모듈 호출
const cors = require('cors'); //노드서버 외 다른 서버 와 연동 호출
const app = express(); //실행해라

// const server = require('http').createServer(app); //createServer: 생성자 함수로 원본 외 복사하여 구동 시키기 때문에 삭제 처리 

app.use(cors()); // cors 미들웨어를 삽입합니다., use : 라우터기능  다른도메인에서 너한테 요청이 오면 응답해줘~

app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다. get, post , use (get, post : 클라이언트에서 요청이 있을때 라우트 만듦, use: 서버 자체에서 라우트 할때 )
  res.send({message:'hello'});
});

app.listen(8080, ()=>{ //실행식
  console.log('server is running on 8080') 
})

//서버 여러개 만들어서 버전 다르게 만들 수 있다~