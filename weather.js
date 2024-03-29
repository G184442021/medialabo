 let data = {
   "coord": {
     "lon": 116.3972,
     "lat": 39.9075
   },
   "weather": [
     {
       "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
       "icon": "04d"
     }
   ],
   "base": "stations",
   "main": {
     "temp": 9.94,
     "feels_like": 8.65,
     "temp_min": 9.94,
     "temp_max": 9.94,
     "pressure": 1022,
     "humidity": 14,
     "sea_level": 1022,
    "grnd_level": 1016
   },
   "visibility": 10000,
   "wind": {
     "speed": 2.65,
     "deg": 197,
     "gust": 4.84
   },
   "clouds": {
     "all": 53
   },
   "dt": 1646542386,
   "sys": {
     "type": 1,
          "id": 9609,
     "country": "CN",
     "sunrise": 1646520066,
     "sunset": 1646561447
   },
   "timezone": 28800,
   "id": 1816670,
   "name": "北京市",
   "cod": 200
 };












////////// 課題3-2 ここからプログラムを書こう

let b1 = document.querySelector('button#sendRequest');
b1.addEventListener('click', sendRequest);

function sendRequest (){
  let url;
  let rs = document.querySelectorAll('input[name="country"]');
  for (let r of rs) {
    if (r.checked) {        // r が選択されていたら
      url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+r.value+'.json';
    }
  }


      axios.get(url)
             .then(showResult)   // 通信成功
             .catch(showError)   // 通信失敗
             .then(finish);      // 通信の最後の処理
     }
// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
let a = document.querySelector('#wind');
a.textContent = data.wind.speed;

let b = document.querySelector('#city');
b.textContent = data.name;

let c = document.querySelector('#direction');
c.textContent = data.wind.deg;

let d = document.querySelector('#tempermax');
d.textContent = data.main.temp_max;

let e = document.querySelector('#tempermin');
e.textContent = data.main.temp_min;
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}







//  d = document.querySelector('td#wind');
//     d.textContent = data.wind.speed ;

//  d = document.querySelector('td#direction');
//     d.textContent = data.wind.deg ;

//  d = document.querySelector('td#tempermax');
//     d.textContent = data.main.temp_max ;

//  d = document.querySelector('td#tempermin');
//     d.textContent = data.main.temp_min ;




