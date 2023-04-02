function onSubmit(){
    const text = document.getElementById('answer','name','udeage','fukkin','haikin','sukuwat').value;

    const msg = "【送信内容】\n" + text;
    console.log(msg);
    sendText(msg);

    return false;
}
