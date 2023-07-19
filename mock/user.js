const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = [
  {
    url: "/api/user/info",
    method: "get",
    response() {
      return {
        error: 0,
        data: {
          username: Random.cname(),
          nickname: Random.cname(),
        },
      };
    },
  },
  {
    url: "/api/user/register",
    method: "post",
    response() {
      return {
        error: 0,
      };
    },
  },
  {
    url: "/api/user/login",
    method: "post",
    response() {
      return {
        error: 0,
        data: {
          token: Random.word(20),
        },
      };
    },
  },
];
