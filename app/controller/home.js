// 控制器示例
class HomeController {
  async index(ctx) {
    ctx.body = 'Hello, Simple Egg!';
  }
}

module.exports = new HomeController();