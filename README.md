# Demo

![image](https://github.com/Cheng-Yi-Ting/Dynamic-hotel-room-list/blob/master/demo-images/操作影片.gif)

## 1.   頁面

**頁面可分為A、B、C三個區塊，以下針對各區塊進行說明。**

![image](https://github.com/Cheng-Yi-Ting/Dynamic-hotel-room-list/blob/master/demo-images/首頁.png)

## A.       飯店資訊

使用者可以調整飯店的「總折數」和「服務費」，點擊物價上漲標示，將使每間房間的費用增加一百元，所有更改結果會動態顯示於C區塊。
<br>

## B.       房型編輯

使用者可以編輯房間資料，項目如下：

- 名稱(中)

- 名稱(英)

- 折價

- 價錢

- 圖片

- 設備(wifi、浴缸、早餐)

所有項目的變更將會同步於C區塊顯示，點擊房間右側的垃圾桶圖示可將該房間進行刪除，而C區塊的房間也一併刪除。

## C.       房型一覽

顯示每個房間的圖示及資訊，點選圖示右上角的X即可刪除該房間，而B區塊的房間也一併刪除。

## 2.   使用技術：

- Bootstrap Grid System 排版

- Bootstrap Form Layouts

- Vue.js component 元件搭建每一個房間

- Vue.js computed 計算房間最終折扣及價錢

- Vue.js method 增加房間價錢、刪除房間
