let category = {
    auto1:"document.getElementById('auto1')",
    auto2:"document.getElementById('auto2')",
    auto3:"document.getElementById('auto3')",
    auto4:"document.getElementById('auto4')",
    auto5:"document.getElementById('auto5')",
    
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
 
        if (auto1 == false){
            auto1Icon.innerHTML="lock_clock";
            document.getElementById('auto1').style=`${style}`;
            document.getElementById('auto1HREF').href="#";
        
    let hoverauto1 = document.getElementById('auto1');// Б
        hoverauto1.onmouseover = function() {// Б
            hoverauto1.style=`${hoverStyle}`;// Б
            auto1Icon.style=`${onhoverIconStyle}`;
            auto1Text.innerHTML=`${hoverText}`;
            auto1Text.style=`${onhoverTextStyle}`;}

        hoverauto1.onmouseout = function(e) {// Б
            document.getElementById('auto1').style=`${style}`;
            auto1Icon.style=`${outhoverIconStyle}`;
            auto1Text.style=`${outhoverTextStyle}`;
            auto1Text.innerHTML="Дом 1";
            
  } 
        };
        if (auto2 == false){
            auto2Icon.innerHTML="lock_clock";
            document.getElementById('auto2').style=`${style}`;
            document.getElementById('auto2HREF').href="#";
        
        let hoverauto2 = document.getElementById('auto2');// Б
        hoverauto2.onmouseover = function() {// Б
            hoverauto2.style=`${hoverStyle}`;// Б
                auto2Icon.style=`${onhoverIconStyle}`;
                auto2Text.innerHTML=`${hoverText}`;
                auto2Text.style=`${onhoverTextStyle}`;}
    
                hoverauto2.onmouseout = function(e) {// Б
                document.getElementById('auto2').style=`${style}`;
                auto2Icon.style=`${outhoverIconStyle}`;
                auto2Text.style=`${outhoverTextStyle}`;
                auto2Text.innerHTML="Дом 2";        
      }
        };
        if (auto3 == false){
            auto3Icon.innerHTML="lock_clock";
            document.getElementById('auto3').style=`${style}`;
            document.getElementById('auto3HREF').href="#";
            
        let hoverauto3 = document.getElementById('auto3');// Б
        hoverauto3.onmouseover = function() {// Б
            hoverauto3.style=`${hoverStyle}`;// Б
                auto3Icon.style=`${onhoverIconStyle}`;
                auto3Text.innerHTML=`${hoverText}`;
                auto3Text.style=`${onhoverTextStyle}`;}
    
                hoverauto3.onmouseout = function(e) {// Б
                document.getElementById('auto3').style=`${style}`;
                auto3Icon.style=`${outhoverIconStyle}`;
                auto3Text.style=`${outhoverTextStyle}`;
                auto3Text.innerHTML="Дом 3";        
          }
        };
        if (auto4 == false){
            auto4Icon.innerHTML="lock_clock";
            document.getElementById('auto4').style=`${style}`;
            document.getElementById('auto4HREF').href="#";
        
    let hoverauto4 = document.getElementById('auto4');// Б
        hoverauto4.onmouseover = function() {// Б
            hoverauto4.style=`${hoverStyle}`;// Б
            auto4Icon.style=`${onhoverIconStyle}`;
            auto4Text.innerHTML=`${hoverText}`;
            auto4Text.style=`${onhoverTextStyle}`;}

        hoverauto4.onmouseout = function(e) {// Б
            document.getElementById('auto4').style=`${style}`;
            auto4Icon.style=`${outhoverIconStyle}`;
            auto4Text.style=`${outhoverTextStyle}`;
            auto4Text.innerHTML="Дом 4";
            
  } 
        };
        if (auto5 == false){
            auto5Icon.innerHTML="lock_clock";
            document.getElementById('auto5').style=`${style}`;
            document.getElementById('auto5HREF').href="#";
        
        let hoverauto5 = document.getElementById('auto5');// Б
        hoverauto5.onmouseover = function() {// Б
            hoverauto5.style=`${hoverStyle}`;// Б
                auto5Icon.style=`${onhoverIconStyle}`;
                auto5Text.innerHTML=`${hoverText}`;
                auto5Text.style=`${onhoverTextStyle}`;}
    
                hoverauto5.onmouseout = function(e) {// Б
                document.getElementById('auto5').style=`${style}`;
                auto5Icon.style=`${outhoverIconStyle}`;
                auto5Text.style=`${outhoverTextStyle}`;
                auto5Text.innerHTML="Дом 5";        
      }
        };
