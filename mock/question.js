const Mock = require("mockjs");
const getQuestionList = require("./data/getQuestionList");

const Random = Mock.Random;

module.exports = [
  {
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
        },
      };
    },
  },
  {
    // 创建列表
    url: "/api/question",
    method: "post",
    response(ctx) {
      return {
        errno: 0,
        data: {
          _id: Random.id(),
          title: Random.ctitle(),
          isPublished: Random.boolean(),
          isStar: false,
          answerCount: Random.natural(50, 100),
          createdAt: Random.datetime(),
          isDeleted: false,
        },
      };
    },
  },
  {
    // 获取（查询）问卷列表
    url: "/api/question",
    method: "get",
    response(ctx) {
      const { url = "", query = {} } = ctx;
      const isDeleted = url.indexOf("isDeleted=true") >= 0;
      const isStar = url.indexOf("isStar=true") >= 0;
      const pageSize = parseInt(query.pageSize) || 10;

      return {
        errno: 0,
        data: {
          list: getQuestionList({ len: pageSize, isDeleted, isStar }),
          total: 100,
        },
      };
    },
  },
  {
    // 修改某条数据内容
    url: "/api/question/:id",
    method: "patch",
    response(ctx) {
      return {
        errno: 0,
      };
    },
  },
  {
    url: "/api/question/duplicate/:id",
    method: "post",
    response(ctx) {
      const id = ctx.params.id;
      return {
        errno: 0,
        data: { id },
      };
    },
  },
  {
    url: "/api/question",
    method: "delete",
    response(ctx) {
      const ids = ctx.request.body.ids;

      return {
        error: 0,
        data: { ids },
      };
    },
  },
];
