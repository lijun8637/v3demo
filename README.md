# v3demo

#### 介绍
vue3 使用demo

#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

###
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
},

###
"gitHooks": {
  "pre-commit": "lint-staged"
},

"lint-staged": {
    "src/**/*.{js,vue}": [
      "eslint --fix",
      "git add"
    ]
},
###
"lint-staged": {
    "*.{js,vue}": "eslint --fix"
},

### nodejs 清空 npm 缓存

npm cache clean -f
