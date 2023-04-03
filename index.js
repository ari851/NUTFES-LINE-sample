function onSubmit() {
  // フォームの入力値を取得
  var name = document.myform.name.value;
  var udetate = document.myform.udetate.value;
  var fukkin = document.myform.fukkin.value;
  var haikin = document.myform.haikin.value;
  var sukuwat = document.myform.sukuwat.value;

  // 確認のアラートを表示して、OKを選択した場合にフォームを送信する
  var message = "入力内容を確認してください\n\n名前：" + name + "\n腕立て：" + udetate + "\n腹筋：" + fukkin + "\n背筋：" + haikin + "\nスクワット：" + sukuwat;
  if (confirm(message)) {
    const text = document.myform.value;

    const msg = text;
    console.log(msg);
    sendText(msg);

    return false;
  }
}
