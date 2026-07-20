// 1. 切り替える画像（3枚分）のパスを配列にする
const bgImages = [
  './assets/img/Mainevisual.png',
  './assets/img/Mainevisual-2.jpg',
  './assets/img/Mainevisual-3.jpg'
];

let currentIndex = 0;
const header = document.querySelector('.header'); // HTMLのclass名「.header」を捕まえる

// 2. 背景を切り替える関数
function changeBackground() {
  currentIndex = (currentIndex + 1) % bgImages.length; // 0→1→2→0 とループさせる
  header.style.backgroundImage = `url(${bgImages[currentIndex]})`;
}

// 3. 4秒（4000ミリ秒）ごとに上の関数を実行する
setInterval(changeBackground, 4000);



// --- ここから追加：スクロールで丸アイコンをフワッと出す仕組み ---
const spyElements = document.querySelectorAll('.icon-list li, .step-list li');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-show'); // 画面に入ったら「is-show」という目印をつける
    }
  });
}, { rootMargin: '-50px' }); // 画面の少し内側に入ったら反応する設定

// すべての丸アイコンを監視対象にする
spyElements.forEach(el => spyObserver.observe(el));




// --- ここから追加：ハンバーガーメニューを動かす仕組み ---
const burgerBtn = document.getElementById('burgerBtn');
const navList = document.querySelector('.nav-list');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('is-active'); // ボタンにシールを貼る/剥がす
  navList.classList.toggle('is-active');  // メニューにシールを貼る/剥がす
});