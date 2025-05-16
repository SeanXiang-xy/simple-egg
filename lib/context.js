// 自定义上下文对象
class Context {
  constructor(ctx) {
    this.ctx = ctx;
  }

  get request() {
    return this.ctx.request;
  }

  get response() {
    return this.ctx.response;
  }
  set body(data) {
    this.ctx.body = data;
  }
}

module.exports = Context;