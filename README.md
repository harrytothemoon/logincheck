# 登入檢查器

使用 Node.js + Express + Express-handlebars 所打造登入檢查器

## 專案畫面

![專案畫面](/public/readme.png)

## 安裝&使用

#### 下載專案

```
git clone https://github.com/waiting33118/restaurant-list.git
```

#### 安裝 Package

```
npm install
```

#### 使用 nodemon 啟動伺服器

```
npm run dev
```

#### 或正常啟動

```
npm start
```

## 環境建置

- Node.js v12.16.2 -執行環境
- Express V4.17.1 -框架
- Express-handlebars V4.0.4 -模板引擎


## 使用者故事

- 檢查使用者帳號、密碼是否正確
- 若輸入皆正確則導入成功畫面，失敗則提醒輸入錯誤
- 測試用可成功登入的使用者如下:
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
