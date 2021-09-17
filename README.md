#Live CLI 📤

简~~洁~~陋的 [Live](https://github.com/yuhangch/live) 发布命令行工具，简陋到文档都不想给他写 :)

## Use

```shell
git clone https://github.com/yuhangch/live-cli.git
```
修改`src/index.ts`中的 Leancloud 应用信息
```Javascript
const applicationId = 'your-app-key'
const applicationKey = 'your-app-key'
const serverURL = 'https://api.server.com'
const username = 'username'
const password = 'password'
```
安装依赖
```shell
yarn install 
./bin/run # 日常使用可以加个alias
```
发布一条数据
```shell
PS C:\Users\yuhangch\source\live-cli> .\bin\run
? tag: (Use arrow keys)
> 叽叽喳喳
  瞎想
  其他
  折腾
  读书
  吐槽
  听音乐
(Move up and down to reveal more choices)

? tag: 叽叽喳喳
? content: from live-cli
叽叽喳喳 from live-cli
保存成功。objectId：61449a74b0fc702a29ddf1ae
```

## 后话
我觉得最理想的方式是移动客户端，然鹅自己没有点相关技能点，试着做了个iOS应用，迫于不充钱只能用7天，遂放弃Orz。

