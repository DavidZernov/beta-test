    // инпут распологается высоко, выше viewport'а

    function copyPromo() {
        let copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Промокод скопирован!"); //+ copyText.value
        }

    //   инпут распологается высоко, выше viewport'а