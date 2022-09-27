const http = require("http"); // nodejs 빌트인 모듈을 호출하고 이를 http 객체에 저장한다
const server = http.createServer(); // http변수에 담긴 createServer 객체를 사용해 server객체 변수에 담는다

const users = [
    {
        id:1,
        name: "ksj",
        email: "asd@asd",
        password: "123123"
    },
    {
        id:2,
        name: "kk",
        email: "a111d@asd11",
        password: "admin"
    },
]


const httpRequestListener = function (request, response) {
  const { url, method } = request;

  if (method === "GET") {
    if (url === "/ping") {
      response.writeHead(200, { "contnet-type": "application/json" });
      response.end(JSON.stringify({ message: "pong" }));
    }
  }

  if (method === 'POST') {
    if (url === '/users/signup') {
        let body = "";

        request.on("data", (data) => {
            body += data;
        })
        request.on("end", () => {
            const user = JSON.parse(body);
            users.push({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
            response.writeHead(200, {'Content-Type': 'application/json'})
            response.end(JSON.stringify({"users": users }));
        })
    }
  }
};

server.on("request", httpRequestListener); // request 요청시 해당 함수를 실행하는 이벤트

const IP = "127.0.0.1";
const PORT = 8000;

server.listen(PORT, IP, function () {
  console.log(`Listening to request on IP ${IP} PORT ${PORT}`);
});
