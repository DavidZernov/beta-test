let category = {
    mothers1:"document.getElementById('mothers1')",
    mothers2:"document.getElementById('mothers2')",
    mothers3:"document.getElementById('mothers3')",
    mothers4:"document.getElementById('mothers4')",
    mothers5:"document.getElementById('mothers5')",
    
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
 
        if (mothers1 == false){
            mothers1Icon.innerHTML="lock_clock";
            document.getElementById('mothers1').style=`${style}`;
            document.getElementById('mothers1HREF').href="#";
        
    let hovermothers1 = document.getElementById('mothers1');// Б
        hovermothers1.onmouseover = function() {// Б
            hovermothers1.style=`${hoverStyle}`;// Б
            mothers1Icon.style=`${onhoverIconStyle}`;
            mothers1Text.innerHTML=`${hoverText}`;
            mothers1Text.style=`${onhoverTextStyle}`;}

        hovermothers1.onmouseout = function(e) {// Б
            document.getElementById('mothers1').style=`${style}`;
            mothers1Icon.style=`${outhoverIconStyle}`;
            mothers1Text.style=`${outhoverTextStyle}`;
            mothers1Text.innerHTML="Подарки 1";
            
  } 
        };
        if (mothers2 == false){
            mothers2Icon.innerHTML="lock_clock";
            document.getElementById('mothers2').style=`${style}`;
            document.getElementById('mothers2HREF').href="#";
        
        let hovermothers2 = document.getElementById('mothers2');// Б
        hovermothers2.onmouseover = function() {// Б
            hovermothers2.style=`${hoverStyle}`;// Б
                mothers2Icon.style=`${onhoverIconStyle}`;
                mothers2Text.innerHTML=`${hoverText}`;
                mothers2Text.style=`${onhoverTextStyle}`;}
    
                hovermothers2.onmouseout = function(e) {// Б
                document.getElementById('mothers2').style=`${style}`;
                mothers2Icon.style=`${outhoverIconStyle}`;
                mothers2Text.style=`${outhoverTextStyle}`;
                mothers2Text.innerHTML="Подарки 2";        
      }
        };
        if (mothers3 == false){
            mothers3Icon.innerHTML="lock_clock";
            document.getElementById('mothers3').style=`${style}`;
            document.getElementById('mothers3HREF').href="#";
            
        let hovermothers3 = document.getElementById('mothers3');// Б
        hovermothers3.onmouseover = function() {// Б
            hovermothers3.style=`${hoverStyle}`;// Б
                mothers3Icon.style=`${onhoverIconStyle}`;
                mothers3Text.innerHTML=`${hoverText}`;
                mothers3Text.style=`${onhoverTextStyle}`;}
    
                hovermothers3.onmouseout = function(e) {// Б
                document.getElementById('mothers3').style=`${style}`;
                mothers3Icon.style=`${outhoverIconStyle}`;
                mothers3Text.style=`${outhoverTextStyle}`;
                mothers3Text.innerHTML="Подарки 3";        
          }
        };
        if (mothers4 == false){
            mothers4Icon.innerHTML="lock_clock";
            document.getElementById('mothers4').style=`${style}`;
            document.getElementById('mothers4HREF').href="#";
        
    let hovermothers4 = document.getElementById('mothers4');// Б
        hovermothers4.onmouseover = function() {// Б
            hovermothers4.style=`${hoverStyle}`;// Б
            mothers4Icon.style=`${onhoverIconStyle}`;
            mothers4Text.innerHTML=`${hoverText}`;
            mothers4Text.style=`${onhoverTextStyle}`;}

        hovermothers4.onmouseout = function(e) {// Б
            document.getElementById('mothers4').style=`${style}`;
            mothers4Icon.style=`${outhoverIconStyle}`;
            mothers4Text.style=`${outhoverTextStyle}`;
            mothers4Text.innerHTML="Подарки 4";
            
  } 
        };
        if (mothers5 == false){
            mothers5Icon.innerHTML="lock_clock";
            document.getElementById('mothers5').style=`${style}`;
            document.getElementById('mothers5HREF').href="#";
        
        let hovermothers5 = document.getElementById('mothers5');// Б
        hovermothers5.onmouseover = function() {// Б
            hovermothers5.style=`${hoverStyle}`;// Б
                mothers5Icon.style=`${onhoverIconStyle}`;
                mothers5Text.innerHTML=`${hoverText}`;
                mothers5Text.style=`${onhoverTextStyle}`;}
    
                hovermothers5.onmouseout = function(e) {// Б
                document.getElementById('mothers5').style=`${style}`;
                mothers5Icon.style=`${outhoverIconStyle}`;
                mothers5Text.style=`${outhoverTextStyle}`;
                mothers5Text.innerHTML="Подарки 5";        
      }
        };