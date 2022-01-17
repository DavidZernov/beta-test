let category = {
    sales1:"document.getElementById('sales1')",
    sales2:"document.getElementById('sales2')",
    sales3:"document.getElementById('sales3')",
    sales4:"document.getElementById('sales4')",
    sales5:"document.getElementById('sales5')",
    
}
    //стиль ячейки при false
    let style = "opacity:0.6;"

    //стиль ячейки при false + hover
    let hoverStyle = 
    `opacity:1.0;
    background:rgba(192,192,192,0.2);`

    //стиль иконок при false + hover
    let onhoverIconStyle = `display:none;
    transition: .4s`

    //текст при false + hover
    let hoverText ="Данное предложение недоступно.  Ожидаем партнеров."

    //стиль текста при false + hover
    let onhoverTextStyle = `
    transition: .4s;
    vertical-align:middle;
    `

    //стиль текста при false    БЕЗ hover
    let outhoverTextStyle =`
    transition: .4s`

    //стиль иконок при false    БЕЗ hover
    let outhoverIconStyle =`display:inline-block;
    transition: .4s`
// Б
 
        if (sales1 == false){
            sales1Icon.innerHTML="lock_clock";
            document.getElementById('sales1').style=`${style}`;
            document.getElementById('sales1HREF').href="#";
        
    let hoversales1 = document.getElementById('sales1');// Б
        hoversales1.onmouseover = function() {// Б
            hoversales1.style=`${hoverStyle}`;// Б
            sales1Icon.style=`${onhoverIconStyle}`;
            sales1Text.innerHTML=`${hoverText}`;
            sales1Text.style=`${onhoverTextStyle}`;}

        hoversales1.onmouseout = function(e) {// Б
            document.getElementById('sales1').style=`${style}`;
            sales1Icon.style=`${outhoverIconStyle}`;
            sales1Text.style=`${outhoverTextStyle}`;
            sales1Text.innerHTML="Подарки 1";
            
  } 
        };
        if (sales2 == false){
            sales2Icon.innerHTML="lock_clock";
            document.getElementById('sales2').style=`${style}`;
            document.getElementById('sales2HREF').href="#";
        
        let hoversales2 = document.getElementById('sales2');// Б
        hoversales2.onmouseover = function() {// Б
            hoversales2.style=`${hoverStyle}`;// Б
                sales2Icon.style=`${onhoverIconStyle}`;
                sales2Text.innerHTML=`${hoverText}`;
                sales2Text.style=`${onhoverTextStyle}`;}
    
                hoversales2.onmouseout = function(e) {// Б
                document.getElementById('sales2').style=`${style}`;
                sales2Icon.style=`${outhoverIconStyle}`;
                sales2Text.style=`${outhoverTextStyle}`;
                sales2Text.innerHTML="Подарки 2";        
      }
        };
        if (sales3 == false){
            sales3Icon.innerHTML="lock_clock";
            document.getElementById('sales3').style=`${style}`;
            document.getElementById('sales3HREF').href="#";
            
        let hoversales3 = document.getElementById('sales3');// Б
        hoversales3.onmouseover = function() {// Б
            hoversales3.style=`${hoverStyle}`;// Б
                sales3Icon.style=`${onhoverIconStyle}`;
                sales3Text.innerHTML=`${hoverText}`;
                sales3Text.style=`${onhoverTextStyle}`;}
    
                hoversales3.onmouseout = function(e) {// Б
                document.getElementById('sales3').style=`${style}`;
                sales3Icon.style=`${outhoverIconStyle}`;
                sales3Text.style=`${outhoverTextStyle}`;
                sales3Text.innerHTML="Подарки 3";        
          }
        };
        if (sales4 == false){
            sales4Icon.innerHTML="lock_clock";
            document.getElementById('sales4').style=`${style}`;
            document.getElementById('sales4HREF').href="#";
        
    let hoversales4 = document.getElementById('sales4');// Б
        hoversales4.onmouseover = function() {// Б
            hoversales4.style=`${hoverStyle}`;// Б
            sales4Icon.style=`${onhoverIconStyle}`;
            sales4Text.innerHTML=`${hoverText}`;
            sales4Text.style=`${onhoverTextStyle}`;}

        hoversales4.onmouseout = function(e) {// Б
            document.getElementById('sales4').style=`${style}`;
            sales4Icon.style=`${outhoverIconStyle}`;
            sales4Text.style=`${outhoverTextStyle}`;
            sales4Text.innerHTML="Подарки 4";
            
  } 
        };
        if (sales5 == false){
            sales5Icon.innerHTML="lock_clock";
            document.getElementById('sales5').style=`${style}`;
            document.getElementById('sales5HREF').href="#";
        
        let hoversales5 = document.getElementById('sales5');// Б
        hoversales5.onmouseover = function() {// Б
            hoversales5.style=`${hoverStyle}`;// Б
                sales5Icon.style=`${onhoverIconStyle}`;
                sales5Text.innerHTML=`${hoverText}`;
                sales5Text.style=`${onhoverTextStyle}`;}
    
                hoversales5.onmouseout = function(e) {// Б
                document.getElementById('sales5').style=`${style}`;
                sales5Icon.style=`${outhoverIconStyle}`;
                sales5Text.style=`${outhoverTextStyle}`;
                sales5Text.innerHTML="Подарки 5";        
      }
        };
