# simple-egg
### 运行项目 
**安装依赖**
``` bash
 npm install
```
**启动服务**：
``` bash
 npm start
```
**代码解释**
* lib/context.js：自定义上下文对象，封装了 Koa 的上下文，方便后续扩展。
* lib/application.js：核心应用类，负责加载配置、控制器和路由，并启动 Koa 服务器。
* app/controller/home.js：示例控制器，处理具体的业务逻辑。
* app/router.js：路由配置文件，定义了请求路径和对应的控制器方法。
* config/config.default.js：配置文件，可用于存储应用的各种配置信息。
* index.js：入口文件，创建应用实例并启动服务。
通过以上步骤，我们实现了一个简单的 Egg 服务端引擎，具备基本的应用启动、路由处理和中间件功能