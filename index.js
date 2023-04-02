function onSubmit(){
    const text = document.myform.value;

    const msg = '【送信内容】' + text;
    console.log(msg);
    sendText(msg);

    return false;
}
