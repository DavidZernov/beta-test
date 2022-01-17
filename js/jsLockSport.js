let category = {
    sport1:"document.getElementById('sport1')",
    sport2:"document.getElementById('sport2')",
    sport3:"document.getElementById('sport3')",
    sport4:"document.getElementById('sport4')",
    sport5:"document.getElementById('sport5')",
    
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
 
        if (sport1 == false){
            sport1Icon.innerHTML="lock_clock";
            document.getElementById('sport1').style=`${style}`;
            document.getElementById('sport1HREF').href="#";
        
    let hoversport1 = document.getElementById('sport1');// Б
        hoversport1.onmouseover = function() {// Б
            hoversport1.style=`${hoverStyle}`;// Б
            sport1Icon.style=`${onhoverIconStyle}`;
            sport1Text.innerHTML=`${hoverText}`;
            sport1Text.style=`${onhoverTextStyle}`;}

        hoversport1.onmouseout = function(e) {// Б
            document.getElementById('sport1').style=`${style}`;
            sport1Icon.style=`${outhoverIconStyle}`;
            sport1Text.style=`${outhoverTextStyle}`;
            sport1Text.innerHTML="Подарки 1";
            
  } 
        };
        if (sport2 == false){
            sport2Icon.innerHTML="lock_clock";
            document.getElementById('sport2').style=`${style}`;
            document.getElementById('sport2HREF').href="#";
        
        let hoversport2 = document.getElementById('sport2');// Б
        hoversport2.onmouseover = function() {// Б
            hoversport2.style=`${hoverStyle}`;// Б
                sport2Icon.style=`${onhoverIconStyle}`;
                sport2Text.innerHTML=`${hoverText}`;
                sport2Text.style=`${onhoverTextStyle}`;}
    
                hoversport2.onmouseout = function(e) {// Б
                document.getElementById('sport2').style=`${style}`;
                sport2Icon.style=`${outhoverIconStyle}`;
                sport2Text.style=`${outhoverTextStyle}`;
                sport2Text.innerHTML="Подарки 2";        
      }
        };
        if (sport3 == false){
            sport3Icon.innerHTML="lock_clock";
            document.getElementById('sport3').style=`${style}`;
            document.getElementById('sport3HREF').href="#";
            
        let hoversport3 = document.getElementById('sport3');// Б
        hoversport3.onmouseover = function() {// Б
            hoversport3.style=`${hoverStyle}`;// Б
                sport3Icon.style=`${onhoverIconStyle}`;
                sport3Text.innerHTML=`${hoverText}`;
                sport3Text.style=`${onhoverTextStyle}`;}
    
                hoversport3.onmouseout = function(e) {// Б
                document.getElementById('sport3').style=`${style}`;
                sport3Icon.style=`${outhoverIconStyle}`;
                sport3Text.style=`${outhoverTextStyle}`;
                sport3Text.innerHTML="Подарки 3";        
          }
        };
        if (sport4 == false){
            sport4Icon.innerHTML="lock_clock";
            document.getElementById('sport4').style=`${style}`;
            document.getElementById('sport4HREF').href="#";
        
    let hoversport4 = document.getElementById('sport4');// Б
        hoversport4.onmouseover = function() {// Б
            hoversport4.style=`${hoverStyle}`;// Б
            sport4Icon.style=`${onhoverIconStyle}`;
            sport4Text.innerHTML=`${hoverText}`;
            sport4Text.style=`${onhoverTextStyle}`;}

        hoversport4.onmouseout = function(e) {// Б
            document.getElementById('sport4').style=`${style}`;
            sport4Icon.style=`${outhoverIconStyle}`;
            sport4Text.style=`${outhoverTextStyle}`;
            sport4Text.innerHTML="Подарки 4";
            
  } 
        };
        if (sport5 == false){
            sport5Icon.innerHTML="lock_clock";
            document.getElementById('sport5').style=`${style}`;
            document.getElementById('sport5HREF').href="#";
        
        let hoversport5 = document.getElementById('sport5');// Б
        hoversport5.onmouseover = function() {// Б
            hoversport5.style=`${hoverStyle}`;// Б
                sport5Icon.style=`${onhoverIconStyle}`;
                sport5Text.innerHTML=`${hoverText}`;
                sport5Text.style=`${onhoverTextStyle}`;}
    
                hoversport5.onmouseout = function(e) {// Б
                document.getElementById('sport5').style=`${style}`;
                sport5Icon.style=`${outhoverIconStyle}`;
                sport5Text.style=`${outhoverTextStyle}`;
                sport5Text.innerHTML="Подарки 5";        
      }
        };
