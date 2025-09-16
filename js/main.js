
// 穴埋め形式です。空いている箇所を埋めてスクーススクロールを実装してください
$(function () {
  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
      const speed = 1000;
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, speed , "swing");
    // urlが変化しないようにfalseを返す
    return false;
    });

    $(".hamburger").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
    $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
    $("header").addClass("open");
    }
    });

  // $(".hamburger").on("click", function () {
  //   $("header").toggleClass("open"); 
  // });

  // メニューが表示されている時に画面をクリックした場合
    $('.nav a[href]').on("click", function () {

    $("header").removeClass("open");
    });




});