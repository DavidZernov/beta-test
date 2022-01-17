let category = {
    presents1:"document.getElementById('presents1')",
    presents2:"document.getElementById('presents2')",
    presents3:"document.getElementById('presents3')",
    presents4:"document.getElementById('presents4')",
    presents5:"document.getElementById('presents5')",
    
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
 
        if (presents1 == false){
            presents1Icon.innerHTML="lock_clock";
            document.getElementById('presents1').style=`${style}`;
            document.getElementById('presents1HREF').href="#";
        
    let hoverpresents1 = document.getElementById('presents1');// Б
        hoverpresents1.onmouseover = function() {// Б
            hoverpresents1.style=`${hoverStyle}`;// Б
            presents1Icon.style=`${onhoverIconStyle}`;
            presents1Text.innerHTML=`${hoverText}`;
            presents1Text.style=`${onhoverTextStyle}`;}

        hoverpresents1.onmouseout = function(e) {// Б
            document.getElementById('presents1').style=`${style}`;
            presents1Icon.style=`${outhoverIconStyle}`;
            presents1Text.style=`${outhoverTextStyle}`;
            presents1Text.innerHTML="Подарки 1";
            
  } 
        };
        if (presents2 == false){
            presents2Icon.innerHTML="lock_clock";
            document.getElementById('presents2').style=`${style}`;
            document.getElementById('presents2HREF').href="#";
        
        let hoverpresents2 = document.getElementById('presents2');// Б
        hoverpresents2.onmouseover = function() {// Б
            hoverpresents2.style=`${hoverStyle}`;// Б
                presents2Icon.style=`${onhoverIconStyle}`;
                presents2Text.innerHTML=`${hoverText}`;
                presents2Text.style=`${onhoverTextStyle}`;}
    
                hoverpresents2.onmouseout = function(e) {// Б
                document.getElementById('presents2').style=`${style}`;
                presents2Icon.style=`${outhoverIconStyle}`;
                presents2Text.style=`${outhoverTextStyle}`;
                presents2Text.innerHTML="Подарки 2";        
      }
        };
        if (presents3 == false){
            presents3Icon.innerHTML="lock_clock";
            document.getElementById('presents3').style=`${style}`;
            document.getElementById('presents3HREF').href="#";
            
        let hoverpresents3 = document.getElementById('presents3');// Б
        hoverpresents3.onmouseover = function() {// Б
            hoverpresents3.style=`${hoverStyle}`;// Б
                presents3Icon.style=`${onhoverIconStyle}`;
                presents3Text.innerHTML=`${hoverText}`;
                presents3Text.style=`${onhoverTextStyle}`;}
    
                hoverpresents3.onmouseout = function(e) {// Б
                document.getElementById('presents3').style=`${style}`;
                presents3Icon.style=`${outhoverIconStyle}`;
                presents3Text.style=`${outhoverTextStyle}`;
                presents3Text.innerHTML="Подарки 3";        
          }
        };
        if (presents4 == false){
            presents4Icon.innerHTML="lock_clock";
            document.getElementById('presents4').style=`${style}`;
            document.getElementById('presents4HREF').href="#";
        
    let hoverpresents4 = document.getElementById('presents4');// Б
        hoverpresents4.onmouseover = function() {// Б
            hoverpresents4.style=`${hoverStyle}`;// Б
            presents4Icon.style=`${onhoverIconStyle}`;
            presents4Text.innerHTML=`${hoverText}`;
            presents4Text.style=`${onhoverTextStyle}`;}

        hoverpresents4.onmouseout = function(e) {// Б
            document.getElementById('presents4').style=`${style}`;
            presents4Icon.style=`${outhoverIconStyle}`;
            presents4Text.style=`${outhoverTextStyle}`;
            presents4Text.innerHTML="Подарки 4";
            
  } 
        };
        if (presents5 == false){
            presents5Icon.innerHTML="lock_clock";
            document.getElementById('presents5').style=`${style}`;
            document.getElementById('presents5HREF').href="#";
        
        let hoverpresents5 = document.getElementById('presents5');// Б
        hoverpresents5.onmouseover = function() {// Б
            hoverpresents5.style=`${hoverStyle}`;// Б
                presents5Icon.style=`${onhoverIconStyle}`;
                presents5Text.innerHTML=`${hoverText}`;
                presents5Text.style=`${onhoverTextStyle}`;}
    
                hoverpresents5.onmouseout = function(e) {// Б
                document.getElementById('presents5').style=`${style}`;
                presents5Icon.style=`${outhoverIconStyle}`;
                presents5Text.style=`${outhoverTextStyle}`;
                presents5Text.innerHTML="Подарки 5";        
      }
        };
