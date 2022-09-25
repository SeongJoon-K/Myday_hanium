const http = require("http"); // nodejs 빌트인 모듈을 호출하고 이를 http 객체에 저장한다

const server = http.createServer(); // http변수에 담긴 createServer 객체를 사용해 server객체 변수에 담는다

/* 
request 객체는 방금 요청을 진행한 클라이언트에 대한 정보를 담고 있음 header body startline에 대한 정보를 담고 있음
response는 해당 요청에 대한 응답을 어떻게 보내줄 지에 대한 정보를 담고 있는 객체임
*/
const httpRequestListener = function (request, response) {
  const { url, method } = request;

  if (method === "GET") {
    if (url === "/ping") {
      response.writeHead(200, { "contnet-type": "application/json" });
      response.end(JSON.stringify({ message: "pong" }));
    }
  }

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ message: "Hello World!" }));
};

server.on("request", httpRequestListener); // request 요청시 해당 함수를 실행하는 이벤트

const IP = "127.0.0.1";
const PORT = 8000;

server.listen(PORT, IP, function () {
  console.log(`Listening to request on IP ${IP} PORT ${PORT}`);
});
