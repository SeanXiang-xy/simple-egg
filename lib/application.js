const Koa = require('koa');
const path = require('path');
const fs = require('fs');

class Application {
  constructor() {
    this.app = new Koa();
    this.context = require('./context');
    this.loadConfig();
    this.loadController();
    this.loadRouter();
  }

  // 加载配置文件
  loadConfig() {
    const configPath = path.join(__dirname, '../config/config.default.js');
    if (fs.existsSync(configPath)) {
      this.config = require(configPath);
    } else {
      this.config = {};
    }
  }

  // 加载控制器
  loadController() {
    const controllerPath = path.join(__dirname, '../app/controller');
    this.controller = {};
    if (fs.existsSync(controllerPath)) {
      const files = fs.readdirSync(controllerPath);
      files.forEach(file => {
        const name = path.basename(file, '.js');
        this.controller[name] = require(path.join(controllerPath, file));
      });
    }
  }

  // 加载路由
  loadRouter() {
    const routerPath = path.join(__dirname, '../app/router.js');
    if (fs.existsSync(routerPath)) {
      const router = require(routerPath)(this);
      this.app.use(router.routes());
      this.app.use(router.allowedMethods());
    }
  }

  // 启动应用
  start(port) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

module.exports = Application;