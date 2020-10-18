const http = require("http");
const url = require("url")
const data = require("./data.json");

const post = 3001;


const handleError = (res , code) => {
  res.statusCode = code;
  res.end(`{error: "${http.STATUS_CODES[code]}"}`);
}


const handleGetRequest = (req , res) => {
  const {pathname} = url.parse(req.url);
  if(pathname !== "/users"){
    handleError(res, 404);
  }
  res.write(JSON.stringify(data))
  return res.end()
}

const handlePostRequest = (req , res) => {
  const {pathname} = url.parse(req.url);
  if(pathname !== "/user"){
    handleError(res, 404);
  }
  console.log();
  return res.end()
}

const server = http.createServer((req, res) => {
  if(req.method === "GET"){
    return handleGetRequest(req , res);
  }
  else if(req.method === "POST"){
    return handlePostRequest(req , res);
  }
  res.end();
});

server.listen(post, () => {
  console.log("server is up and running on post 3001");
});
