# e2e-code-coverage

前端e2e测试及代码覆盖率

## 项目文件结构描述
- coverage 覆盖率报告目录
- cypress
 -- intergration 测试用例目录
- src 项目开发目录


## 项目准备

```
npm install
```

## 执行e2e测试及步骤
- 启动项目

```
npm run serve
```

- 执行e2e测试

```
npm run e2e
```
上述命令会自动启动cypress

- 启动cypress后点击 Run all specs

- 命令行查看覆盖率报告

```
npm run report:compact
```

- 查看具体覆盖率报告

打开在coverage/index.html查看具体覆盖率报告

## 测试用例编写

在cypress/integration目录下添加用例js文件
具体用例编写参考文档 https://docs.cypress.io/api/api/table-of-contents.html
