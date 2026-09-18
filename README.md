# CI/CD 学习 Demo

一个极简项目，用来看懂 CI/CD 到底是干嘛的。

## 项目里有什么

| 文件 | 角色 |
|---|---|
| `calculator.js` | 业务代码：一个计算器模块 |
| `calculator.test.js` | 自动化测试：验证计算器是否正确 |
| `index.html` | 要部署上线的网页（一个计算器 UI） |
| `.github/workflows/ci.yml` | **CI 流水线**：push/PR 时自动跑测试 |
| `.github/workflows/deploy.yml` | **CD 流水线**：测试通过后自动部署到 GitHub Pages |

## CI/CD 一图流

```
你写代码 → git push 到 GitHub
                │
                ▼
       ┌─────────────────┐
       │  CI：自动测试     │  GitHub 送你一台虚拟机
       │  npm test       │  跑你写好的测试
       └────────┬────────┘
                │
        测试失败？──→ ❌ 红叉，拦截！代码不许上线
                │
        测试通过
                ▼
       ┌─────────────────┐
       │  CD：自动部署     │  把网页发布到 GitHub Pages
       └────────┬────────┘  https://<你的用户名>.github.io/cicd-demo/
                ▼
            �is 网站，全世界都能访问
```

## 亲手体验

```bash
# 1. 本地跑测试（体会一下 CI 里跑的就是这个东西）
npm test

# 2. 推一个坏代码看看会发生什么（详细往下看）
```

## 实验：故意推一个 bug，看 CI 拦截

```bash
# 把 calculator.js 里的 add 改成减法（模拟手滑写错）
# 然后：
git add . && git commit -m "bug: 手滑写错了" && git push

# 打开 GitHub 仓库 → Actions 标签页
# 你会看到：红叉 ❌ → 测试失败 → deploy 根本不会执行 → 坏代码被拦在门外
```

修复后重新 push，绿勾 ✅ → 自动重新上线。
