function onSubmit(){
    const text = document.myform.value;

    const msg = text;
    console.log(msg);
    sendText(msg);

    return false;
}
