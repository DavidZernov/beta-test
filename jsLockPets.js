let category = {
    pets1:"document.getElementById('pets1')",
    pets2:"document.getElementById('pets2')",
    pets3:"document.getElementById('pets3')",
    pets4:"document.getElementById('pets4')",
    pets5:"document.getElementById('pets5')",
    
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
 
        if (pets1 == false){
            pets1Icon.innerHTML="lock_clock";
            document.getElementById('pets1').style=`${style}`;
            document.getElementById('pets1HREF').href="#";
        
    let hoverpets1 = document.getElementById('pets1');// Б
        hoverpets1.onmouseover = function() {// Б
            hoverpets1.style=`${hoverStyle}`;// Б
            pets1Icon.style=`${onhoverIconStyle}`;
            pets1Text.innerHTML=`${hoverText}`;
            pets1Text.style=`${onhoverTextStyle}`;}

        hoverpets1.onmouseout = function(e) {// Б
            document.getElementById('pets1').style=`${style}`;
            pets1Icon.style=`${outhoverIconStyle}`;
            pets1Text.style=`${outhoverTextStyle}`;
            pets1Text.innerHTML="Подарки 1";
            
  } 
        };
        if (pets2 == false){
            pets2Icon.innerHTML="lock_clock";
            document.getElementById('pets2').style=`${style}`;
            document.getElementById('pets2HREF').href="#";
        
        let hoverpets2 = document.getElementById('pets2');// Б
        hoverpets2.onmouseover = function() {// Б
            hoverpets2.style=`${hoverStyle}`;// Б
                pets2Icon.style=`${onhoverIconStyle}`;
                pets2Text.innerHTML=`${hoverText}`;
                pets2Text.style=`${onhoverTextStyle}`;}
    
                hoverpets2.onmouseout = function(e) {// Б
                document.getElementById('pets2').style=`${style}`;
                pets2Icon.style=`${outhoverIconStyle}`;
                pets2Text.style=`${outhoverTextStyle}`;
                pets2Text.innerHTML="Подарки 2";        
      }
        };
        if (pets3 == false){
            pets3Icon.innerHTML="lock_clock";
            document.getElementById('pets3').style=`${style}`;
            document.getElementById('pets3HREF').href="#";
            
        let hoverpets3 = document.getElementById('pets3');// Б
        hoverpets3.onmouseover = function() {// Б
            hoverpets3.style=`${hoverStyle}`;// Б
                pets3Icon.style=`${onhoverIconStyle}`;
                pets3Text.innerHTML=`${hoverText}`;
                pets3Text.style=`${onhoverTextStyle}`;}
    
                hoverpets3.onmouseout = function(e) {// Б
                document.getElementById('pets3').style=`${style}`;
                pets3Icon.style=`${outhoverIconStyle}`;
                pets3Text.style=`${outhoverTextStyle}`;
                pets3Text.innerHTML="Подарки 3";        
          }
        };
        if (pets4 == false){
            pets4Icon.innerHTML="lock_clock";
            document.getElementById('pets4').style=`${style}`;
            document.getElementById('pets4HREF').href="#";
        
    let hoverpets4 = document.getElementById('pets4');// Б
        hoverpets4.onmouseover = function() {// Б
            hoverpets4.style=`${hoverStyle}`;// Б
            pets4Icon.style=`${onhoverIconStyle}`;
            pets4Text.innerHTML=`${hoverText}`;
            pets4Text.style=`${onhoverTextStyle}`;}

        hoverpets4.onmouseout = function(e) {// Б
            document.getElementById('pets4').style=`${style}`;
            pets4Icon.style=`${outhoverIconStyle}`;
            pets4Text.style=`${outhoverTextStyle}`;
            pets4Text.innerHTML="Подарки 4";
            
  } 
        };
        if (pets5 == false){
            pets5Icon.innerHTML="lock_clock";
            document.getElementById('pets5').style=`${style}`;
            document.getElementById('pets5HREF').href="#";
        
        let hoverpets5 = document.getElementById('pets5');// Б
        hoverpets5.onmouseover = function() {// Б
            hoverpets5.style=`${hoverStyle}`;// Б
                pets5Icon.style=`${onhoverIconStyle}`;
                pets5Text.innerHTML=`${hoverText}`;
                pets5Text.style=`${onhoverTextStyle}`;}
    
                hoverpets5.onmouseout = function(e) {// Б
                document.getElementById('pets5').style=`${style}`;
                pets5Icon.style=`${outhoverIconStyle}`;
                pets5Text.style=`${outhoverTextStyle}`;
                pets5Text.innerHTML="Подарки 5";        
      }
        };