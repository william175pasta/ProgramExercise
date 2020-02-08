# ProgramExercise
### ===Lv1===
### 1
>  請你分別用 for loop 以及 while 迴圈，印出 1 ~ 9
### 2
>  請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n
### 3
>  寫一個函式 star，接收一個參數 n ，並印出 n 個 *
### 4
>  請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *
### 5
>  請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫
### 6
>  請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1
### 7
>  請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n
### 8
>  請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和
### 9
>  請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）
### 10
>  請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和

### ===Lv2===
> 請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案
<pre>
  <code>
  // stars(1) 預期輸出：  
  // *  
  // stars(3) 預期輸出：  
  // *  
  // **  
  // ***
  </code>
</pre>
> 請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串
<pre>
  <code>
  // makeStars(1) 正確回傳值：*  
  // makeStars(2) 正確回傳值：*\n**  
  // makeStars(5) 正確回傳值：*\n**\n***\n****\n*****
  </cod>
</pre>
> 請寫出一個函式 stars2 ，接收一個參數 n ，並依照規律印出圖形
<pre>
  <code>
  // stars2(1) 預期輸出：  
  // *  
  // stars2(3) 預期輸出：  
  // *  
  // **  
  // ***  
  // **  
  // *
  </code>
</pre>
> 請寫一個函式 table，接收一個數字 n ，印出 n 1 ~ n 9 的結果
<pre>
  <cod>
  // table(1) 預期輸出：  
  // 1*1 = 1  
  // 1*2 = 2  
  // 1*3 = 3  
  // 1*4 = 4  
  // 1*5 = 5  
  // 1*6 = 6  
  // 1*7 = 7  
  // 1*8 = 8  
  // 1*9 = 9
   </code>
</pre>
> 請寫出一個 function table9to9，並列出 1*1-9*9
<pre>
  <code>
  // table9to9() 預期輸出：  
// 1*1 = 1  
// 1*2 = 2  
// 1*3 = 3  
// .....  
// 5*1 = 5  
// 5*2 = 10  
// 5*3 = 15  
// ....  
// 9*7 = 63  
// 9*8 = 72  
// 9*9 = 81
  </code>
</pre>
> 費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 ….
<pre>
  <code>
  // fib(0) = 0  
  // fib(1) = 1  
  // for n >=2, fib(n) = fib(n-1) + fib(n-2)  
  // 現在，請你寫出一個 fib 的函式，回傳位在第 n 個位置的數字  
  // fib(1) 預期回傳值：1  
  // fib(2) 預期回傳值：1  
  // fib(8) 預期回傳值：21
  </code>
</pre>
> 請寫出一個函式 reverse，接收一個字串，並且回傳反轉過後的字串。（禁止使用內建函式 reverse）
<pre>
  <code>
  // reverse("abcd") 預期回傳值：dcba  
  // reverse("12345aa") 預期回傳值：aa54321
  </code>
</pre>
> 請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串
<pre>
  <code>
  // swap("Peter") 預期回傳值：pETER  
  // swap("AbCdE") 預期回傳值：aBcDe
  </code>
</pre>
> 請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。（禁止使用內建函式 sort）
<pre>
  <code>
  // findMin([1, 2, 5, 6, 99, 4, 5]) 預期回傳值：1  
  // findMin([1, 6, 0, 33, 44, 88, -10]) 預期回傳值：-10
  </code>
</pre>
> 請寫一個 function findNthMin，接收一個陣列以及一個數字 n，找出第 n 小的數字。（禁止使用內建函式 sort）
<pre>
  <code>
  // findNthMin(\[1, 2, 3, 4, 5\], 1) 預期回傳值：1  
  // findNthMin(\[1, 3, 5, 7, 9\], 3) 預期回傳值：5  
  // findNthMin(\[1, 1, 1, 1, 1\], 2) 預期回傳值：1
  </code>
</pre>
### ===Lv3===
> 請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort） 
<pre>
  <code>
  // sort([ 6, 8, 3, 2]) 預期回傳值：[2, 3, 6, 8]  
  // sort([ 1, 2, 7 ,5]) 預期回傳值：[1, 2, 5, 7]
  </code>
</pre>
> 請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。
<pre>
  <code>
    // flatten([1, 2, 3]) 預期回傳值：[1, 2, 3]  
    // flatten([1, 2, [1, 2], [1, 3], 6]) 預期回傳值：[1, 2, 1, 2, 1, 3, 6]  
    // flatten([1, [2, [3, [4]], 5], 6]) 預期回傳值：[1, 2, 3, 4, 5, 6]
  </code>
</pre>
> 請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹 
<pre>
  <code>// 為方便顯示，因此把空白代換成底線，實際請輸出空白  
// tree(2) 預期輸出：  
// _*  
// ***  
// _*  
// _*

// tree(5) 預期輸出：  
// ____*  
// ___***  
// __*****  
// _*******  
// *********  
// ____*  
// ____*  
// ____*  
// ____*  
// ____*

  </code>
</pre>

>請寫出一個 function winner，接收一個代表圈圈叉叉的陣列，並回傳贏的是 O 還是 X，如果平手或還沒下完，請回傳 draw
<pre>
  <code>
  // winner([  
  // ['O', 'O', 'X'],  
  // ['O', 'X', 'X'],  
  // ['O', 'X', 'O']  
  // ]) 預期回傳值：O

  // winner([  
  // ['O', 'O', 'X'],  
  // ['O', 'X', 'X'],  
  // ['X', 'X', 'O']  
  // ]) 預期回傳值：X

  // winner([  
  // ['O', 'O', 'X'],  
  // ['O', 'O', 'X'],  
  // ['X', 'X', '']  
  // ]) 預期回傳值：draw

  </code>
</pre>

> 請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。（質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除）
<pre>
  <code>
//isPrime(9) 正確回傳值：false  
//isPrime(5) 正確回傳值：true  
//isPrime(37) 正確回傳值：true
  </code>
</pre>
### ===Lv4===
###1.輸入成績判斷ABCD 
> //輸入一個分數 ,顯示90以上A, 80以上B, 70以上C, 60以上D
###2.CheckLogin
<pre>
  <code>
  /*
CheckLogin:
登入 useName 為Bill 密碼為: ABC123
請輸入useName  及password密碼
輸入 "" 或 點取消 則 印 "Canceled-取消"
輸入有誤 則 印 "Error-錯誤" 
*/
  </code>
</pre>
