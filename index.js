<script>
    //ここに処理を追加

    //ぐー画像
    $(function () {
      const imgs = ["g_1.png", "g_2.png","g_3.png","g_4.png"];  // 画像ファイル名
    let index = 0;  // インデックス番号


    const min = 1;
    const max = 5;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;


    // 初期画像の表示
    $('.img').attr('src', 'img/' + imgs[index]);

    // ボタンクリックイベント
    $('#gu_btn').on("click", function () {
        // 最後の画像判定
        if (index == imgs.length - 1) {
        index = 0;
        } else {
        //index++;
        randomNumber++;
        }
    // 画像の切り替え
    $('.img').attr('src', 'img/' + imgs[index]);
      });
    });

    $("gu_btn").on("click",function (){

    })

    $("#gu_btn").on("click", function () {
    const min = 0;
    const max = 2;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const gu_btn = 0;
    const cho_btn = 1;
    const par_btn = 2;

    //勝ったカウント
    let winCount = $("#win_counts").text();


    // 相手
    if (randomNumber === 0) {
        // $("#echo_hand").text("グー");
        $('#echo').html('<img src="img')
    } else if (randomNumber === 1) {
        $("#echo_hand").text("チョキ");
    } else {
        $("#echo_hand").text("パー");
    }

    // 勝敗
    if (randomNumber === cho_btn) {
        $("#echo_result").text("勝ち");
    winCount++;

    } else if (randomNumber === gu_btn) {
        $("#echo_result").text("あいこ");
    } else {
        $("#echo_result").text("負け");
    }

    //カウント
    let thisCount = $("#echo_counts").text();
    thisCount = Number(thisCount);
    thisCount = thisCount + 1;
    $("#echo_counts").text(thisCount);

    //勝った数をhtmlに反映
    $("#win_counts").text(winCount);

    //勝率 計算
    $("#win_rate").text(winCount / thisCount * 100);

});

    $("#cho_btn").on("click", function () {
    const min = 0;
    const max = 2;
    const gu_btn = 0;
    const cho_btn = 1;
    const par_btn = 2;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    //勝ったカウント定義
    let winCount = $("#win_counts").text();

    // 相手
    if (randomNumber === 0) {
        $("#echo_hand").text("ぐー");
    } else if (randomNumber === 1) {
        $("#echo_hand").text("ちょき");
    } else {
        $("#echo_hand").text("ぱー");
    }

    // 勝敗
    if (randomNumber === cho_btn) {
        $("#echo_result").text("あいこ");
    } else if (randomNumber === gu_btn) {
        $("#echo_result").text("負け");
    } else {
        $("#echo_result").text("勝ち");
    winCount++;
    }

    //カウント
    let thisCount = $("#echo_counts").html();
    thisCount = Number(thisCount);
    thisCount = thisCount + 1;
    $("#echo_counts").text(thisCount);

    //勝った数をhtmlに反映
    $("#win_counts").text(winCount);

    //勝率 計算
    $("#win_rate").text(winCount / thisCount * 100);

});

    $("#par_btn").on("click", function () {
    const min = 0;
    const max = 2;
    const gu_btn = 0;
    const cho_btn = 1;
    const par_btn = 2;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    //勝ったカウント定義
    let winCount = $("#win_counts").text();

    // 相手
    if (randomNumber === 0) {
        $("#echo_hand").text("ぐー");
    } else if (randomNumber === 1) {
        $("#echo_hand").text("ちょき");
    } else {
        $("#echo_hand").text("ぱー");
    }

    // 勝敗
    if (randomNumber === cho_btn) {
        $("#echo_result").text("負け");
    } else if (randomNumber === gu_btn) {
        $("#echo_result").text("勝ち");
    winCount++;
    } else {
        $("#echo_result").text("あいこ");
    }

    //カウント
    let thisCount = $("#echo_counts").text();
    thisCount = Number(thisCount);
    thisCount = thisCount + 1;
    $("#echo_counts").text(thisCount);

    //勝った数をhtmlに反映
    $("#win_counts").text(winCount);

    //勝率 計算
    $("#win_rate").text(winCount / thisCount * 100);

});

</script >
