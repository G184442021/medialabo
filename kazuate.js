// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();



// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
   
    kaisu=kaisu+1;
    let s = document.querySelector('span#kaisuu');
    s.textContent = kaisu ;
    let d = document.querySelector('span#yosou');
    d.textContent = yoso ;

    let r = document.querySelector('p#result');

    if(kaisu>=4){
      r.textContent = '答えは'+kotae+'でした. すでにゲームは終わっています.' ;
    }else if(yoso===kotae){
      r.textContent = '正解です.おめでとう!';
            
       }

         else if(kaisu===3){
          r.textContent ='まちがい. 残念でした';
             }else if(kotae>yoso){
              r.textContent ='まちがい. 答えはもっと大きいですよ';
                }else if(kotae<yoso){
                  r.textContent ='まちがい. 答えはもっと小きいですよ';
}


}


