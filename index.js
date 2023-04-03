function onSubmit(){
        const params = (new URL(document.location)).searchParams;
        const key = params.get('key');

        $(function () {
            $('form').submit(function () {
                const name    = $('input[name="name"]').val();
                const udetate = $('input[name="udetate"]').val();
                const fukkin  = $('input[name="fukkin"]').val();
                const haikin  = $('input[name="haikin"]').val();
                const sukuwat = $('input[name="sukuwat"]').val();
                
                const msg = `【送信内容】\n${name}\n${udetate}\n${fukkin}\n${haikin}\n${sukuwat}`;
                sendText(msg);

                return false;
            });
        });
