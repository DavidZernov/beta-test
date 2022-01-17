let category = {
    accessories1:"document.getElementById('accessories1')",
    accessories2:"document.getElementById('accessories2')",
    accessories3:"document.getElementById('accessories3')",
    accessories4:"document.getElementById('accessories4')",
    accessories5:"document.getElementById('accessories5')",
    
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
 
        if (accessories1 == false){
            accessories1Icon.innerHTML="lock_clock";
            document.getElementById('accessories1').style=`${style}`;
            document.getElementById('accessories1HREF').href="#";
        
    let hoveraccessories1 = document.getElementById('accessories1');// Б
        hoveraccessories1.onmouseover = function() {// Б
            hoveraccessories1.style=`${hoverStyle}`;// Б
            accessories1Icon.style=`${onhoverIconStyle}`;
            accessories1Text.innerHTML=`${hoverText}`;
            accessories1Text.style=`${onhoverTextStyle}`;}

        hoveraccessories1.onmouseout = function(e) {// Б
            document.getElementById('accessories1').style=`${style}`;
            accessories1Icon.style=`${outhoverIconStyle}`;
            accessories1Text.style=`${outhoverTextStyle}`;
            accessories1Text.innerHTML="Подарки 1";
            
  } 
        };
        if (accessories2 == false){
            accessories2Icon.innerHTML="lock_clock";
            document.getElementById('accessories2').style=`${style}`;
            document.getElementById('accessories2HREF').href="#";
        
        let hoveraccessories2 = document.getElementById('accessories2');// Б
        hoveraccessories2.onmouseover = function() {// Б
            hoveraccessories2.style=`${hoverStyle}`;// Б
                accessories2Icon.style=`${onhoverIconStyle}`;
                accessories2Text.innerHTML=`${hoverText}`;
                accessories2Text.style=`${onhoverTextStyle}`;}
    
                hoveraccessories2.onmouseout = function(e) {// Б
                document.getElementById('accessories2').style=`${style}`;
                accessories2Icon.style=`${outhoverIconStyle}`;
                accessories2Text.style=`${outhoverTextStyle}`;
                accessories2Text.innerHTML="Подарки 2";        
      }
        };
        if (accessories3 == false){
            accessories3Icon.innerHTML="lock_clock";
            document.getElementById('accessories3').style=`${style}`;
            document.getElementById('accessories3HREF').href="#";
            
        let hoveraccessories3 = document.getElementById('accessories3');// Б
        hoveraccessories3.onmouseover = function() {// Б
            hoveraccessories3.style=`${hoverStyle}`;// Б
                accessories3Icon.style=`${onhoverIconStyle}`;
                accessories3Text.innerHTML=`${hoverText}`;
                accessories3Text.style=`${onhoverTextStyle}`;}
    
                hoveraccessories3.onmouseout = function(e) {// Б
                document.getElementById('accessories3').style=`${style}`;
                accessories3Icon.style=`${outhoverIconStyle}`;
                accessories3Text.style=`${outhoverTextStyle}`;
                accessories3Text.innerHTML="Подарки 3";        
          }
        };
        if (accessories4 == false){
            accessories4Icon.innerHTML="lock_clock";
            document.getElementById('accessories4').style=`${style}`;
            document.getElementById('accessories4HREF').href="#";
        
    let hoveraccessories4 = document.getElementById('accessories4');// Б
        hoveraccessories4.onmouseover = function() {// Б
            hoveraccessories4.style=`${hoverStyle}`;// Б
            accessories4Icon.style=`${onhoverIconStyle}`;
            accessories4Text.innerHTML=`${hoverText}`;
            accessories4Text.style=`${onhoverTextStyle}`;}

        hoveraccessories4.onmouseout = function(e) {// Б
            document.getElementById('accessories4').style=`${style}`;
            accessories4Icon.style=`${outhoverIconStyle}`;
            accessories4Text.style=`${outhoverTextStyle}`;
            accessories4Text.innerHTML="Подарки 4";
            
  } 
        };
        if (accessories5 == false){
            accessories5Icon.innerHTML="lock_clock";
            document.getElementById('accessories5').style=`${style}`;
            document.getElementById('accessories5HREF').href="#";
        
        let hoveraccessories5 = document.getElementById('accessories5');// Б
        hoveraccessories5.onmouseover = function() {// Б
            hoveraccessories5.style=`${hoverStyle}`;// Б
                accessories5Icon.style=`${onhoverIconStyle}`;
                accessories5Text.innerHTML=`${hoverText}`;
                accessories5Text.style=`${onhoverTextStyle}`;}
    
                hoveraccessories5.onmouseout = function(e) {// Б
                document.getElementById('accessories5').style=`${style}`;
                accessories5Icon.style=`${outhoverIconStyle}`;
                accessories5Text.style=`${outhoverTextStyle}`;
                accessories5Text.innerHTML="Подарки 5";        
      }
        };