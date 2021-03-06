### 情境:

- 新建 npm 專案。
- 專案內容是「瀏覽賽程」
- 業務要求
  - 賽程表主要有兩個部分
  - 第一部分是比賽日期
  - 第二部分是當日賽程表
  - 點擊日期
    - 出現賽程表
    - 每個賽程表，有兩個連結
      - 購票連結
      - 詳情
  - 多個日期，可往左滑動
  - 多個賽程，可往左滑動
- 前端設計要求
  - 日期可能只有一天，可能有 7 天，或一個月
  - 賽程最多 10 個
  - 選擇的日期，旁邊的小紅點有「縮放閃縮」效果
- 模擬情境
  - 後端還沒有 API，如何開始開發？
  - 不可以用任何 UI lib，非 UI npm 可以使用。
- 使用工具
  - React, 除了 UI 框架以外，其他不限制

### 完成 prototype

- 完成「component.png」的介面
- prototype 效果顯示如 「模擬圖」 （可忽略上方手機訊號 icon，放一個黑色背景即可）
- 模擬 API 的 JSON 各式 （可選）

### 加分題

在賽程點擊購票後, 輸出

```
{
  gameId: int,
  date: string,
  time: string,
}
```


### codesendbox

```
https://codesandbox.io/s/withered-worker-skrnr
```
