# NodeJS Page Generator

:warning: 该项目为一个实验项目，不推荐用于生产环境。

## 安装

在终端内执行以下命令：

```bash
git clone https://github.com/renbaoshuo/NodeJS-Page-Generator.git
cd NodeJS-Page-Generator
npm install
```

## 使用

### 标题

**目前此配置为必须项目**

您需要在 Markdown 源文件的头部添加如下方所示的 Front-matter 以添加标题。

```yaml
---
title: 标题
---
```

### 生成

代码会从 `src` 目录下查找文件，并将生成好的文件放置到 `dist` 目录中。

**生成前需要先创建好这两个目录，否则会出错。**

```bash
npm run generate
```

## Author

**NodeJS Page Generator** © [Baoshuo](https://github.com/renbaoshuo), Released under the [MIT](./LICENSE) License.  
Authored and maintained by Baoshuo with help from [contributors](https://github.com/renbaoshuo/NodeJS-Page-Generator/contributors).

> [Personal Website](https://baoshuo.ren) · [Blog](https://blog.baoshuo.ren) · GitHub [@renbaoshuo](https://github.com/renbaoshuo) · Twitter [@renbaoshuo](https://twitter.com/renbaoshuo)
