$(function () {
    const imgs = ["01_グー/a.png", "01_グー/b.png"];  // 画像ファイル名
    let index = 0;  // インデックス番号

    // 初期画像の表示
    $('.img').attr('src', 'img/' + imgs[index]);

    // ボタンクリックイベント
    $('#gu_btn').click(function () {
        // 最後の画像判定
        if (index == imgs.length - 1) {
            index = 0;
        } else {
            index++;
        }
        // 画像の切り替え
        $('.img').attr('src', 'img/' + imgs[index]);
    });
});