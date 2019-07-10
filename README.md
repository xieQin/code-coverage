# e2e-code-coverage
[toc]

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
- 1. 启动项目

```
npm run serve
```

- 2. 执行e2e测试

```
npm run e2e
```
上述命令会自动启动cypress

- 3. 启动cypress后点击 Run all specs
![avatar](http://chuantu.xyz/t6/702/1562725690x2728294127.png)

- 4. 命令行查看覆盖率报告

```
npm run report:compact
```

- 5. 查看具体覆盖率报告

打开在coverage/index.html查看具体覆盖率报告

## 测试用例编写

在cypress/integration目录下添加用例js文件
具体用例编写参考文档 https://docs.cypress.io/api/api/table-of-contents.html
