let category = {
    toys1:"document.getElementById('toys1')",
    toys2:"document.getElementById('toys2')",
    toys3:"document.getElementById('toys3')",
    toys4:"document.getElementById('toys4')",
    toys5:"document.getElementById('toys5')",
    
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
 
        if (toys1 == false){
            toys1Icon.innerHTML="lock_clock";
            document.getElementById('toys1').style=`${style}`;
            document.getElementById('toys1HREF').href="#";
        
    let hovertoys1 = document.getElementById('toys1');// Б
        hovertoys1.onmouseover = function() {// Б
            hovertoys1.style=`${hoverStyle}`;// Б
            toys1Icon.style=`${onhoverIconStyle}`;
            toys1Text.innerHTML=`${hoverText}`;
            toys1Text.style=`${onhoverTextStyle}`;}

        hovertoys1.onmouseout = function(e) {// Б
            document.getElementById('toys1').style=`${style}`;
            toys1Icon.style=`${outhoverIconStyle}`;
            toys1Text.style=`${outhoverTextStyle}`;
            toys1Text.innerHTML="Подарки 1";
            
  } 
        };
        if (toys2 == false){
            toys2Icon.innerHTML="lock_clock";
            document.getElementById('toys2').style=`${style}`;
            document.getElementById('toys2HREF').href="#";
        
        let hovertoys2 = document.getElementById('toys2');// Б
        hovertoys2.onmouseover = function() {// Б
            hovertoys2.style=`${hoverStyle}`;// Б
                toys2Icon.style=`${onhoverIconStyle}`;
                toys2Text.innerHTML=`${hoverText}`;
                toys2Text.style=`${onhoverTextStyle}`;}
    
                hovertoys2.onmouseout = function(e) {// Б
                document.getElementById('toys2').style=`${style}`;
                toys2Icon.style=`${outhoverIconStyle}`;
                toys2Text.style=`${outhoverTextStyle}`;
                toys2Text.innerHTML="Подарки 2";        
      }
        };
        if (toys3 == false){
            toys3Icon.innerHTML="lock_clock";
            document.getElementById('toys3').style=`${style}`;
            document.getElementById('toys3HREF').href="#";
            
        let hovertoys3 = document.getElementById('toys3');// Б
        hovertoys3.onmouseover = function() {// Б
            hovertoys3.style=`${hoverStyle}`;// Б
                toys3Icon.style=`${onhoverIconStyle}`;
                toys3Text.innerHTML=`${hoverText}`;
                toys3Text.style=`${onhoverTextStyle}`;}
    
                hovertoys3.onmouseout = function(e) {// Б
                document.getElementById('toys3').style=`${style}`;
                toys3Icon.style=`${outhoverIconStyle}`;
                toys3Text.style=`${outhoverTextStyle}`;
                toys3Text.innerHTML="Подарки 3";        
          }
        };
        if (toys4 == false){
            toys4Icon.innerHTML="lock_clock";
            document.getElementById('toys4').style=`${style}`;
            document.getElementById('toys4HREF').href="#";
        
    let hovertoys4 = document.getElementById('toys4');// Б
        hovertoys4.onmouseover = function() {// Б
            hovertoys4.style=`${hoverStyle}`;// Б
            toys4Icon.style=`${onhoverIconStyle}`;
            toys4Text.innerHTML=`${hoverText}`;
            toys4Text.style=`${onhoverTextStyle}`;}

        hovertoys4.onmouseout = function(e) {// Б
            document.getElementById('toys4').style=`${style}`;
            toys4Icon.style=`${outhoverIconStyle}`;
            toys4Text.style=`${outhoverTextStyle}`;
            toys4Text.innerHTML="Подарки 4";
            
  } 
        };
        if (toys5 == false){
            toys5Icon.innerHTML="lock_clock";
            document.getElementById('toys5').style=`${style}`;
            document.getElementById('toys5HREF').href="#";
        
        let hovertoys5 = document.getElementById('toys5');// Б
        hovertoys5.onmouseover = function() {// Б
            hovertoys5.style=`${hoverStyle}`;// Б
                toys5Icon.style=`${onhoverIconStyle}`;
                toys5Text.innerHTML=`${hoverText}`;
                toys5Text.style=`${onhoverTextStyle}`;}
    
                hovertoys5.onmouseout = function(e) {// Б
                document.getElementById('toys5').style=`${style}`;
                toys5Icon.style=`${outhoverIconStyle}`;
                toys5Text.style=`${outhoverTextStyle}`;
                toys5Text.innerHTML="Подарки 5";        
      }
        };
