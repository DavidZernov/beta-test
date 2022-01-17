let category = {
    entertainment1:"document.getElementById('entertainment1')",
    entertainment2:"document.getElementById('entertainment2')",
    entertainment3:"document.getElementById('entertainment3')",
    entertainment4:"document.getElementById('entertainment4')",
    entertainment5:"document.getElementById('entertainment5')",
    
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
 
        if (entertainment1 == false){
            entertainment1Icon.innerHTML="lock_clock";
            document.getElementById('entertainment1').style=`${style}`;
            document.getElementById('entertainment1HREF').href="#";
        
    let hoverentertainment1 = document.getElementById('entertainment1');// Б
        hoverentertainment1.onmouseover = function() {// Б
            hoverentertainment1.style=`${hoverStyle}`;// Б
            entertainment1Icon.style=`${onhoverIconStyle}`;
            entertainment1Text.innerHTML=`${hoverText}`;
            entertainment1Text.style=`${onhoverTextStyle}`;}

        hoverentertainment1.onmouseout = function(e) {// Б
            document.getElementById('entertainment1').style=`${style}`;
            entertainment1Icon.style=`${outhoverIconStyle}`;
            entertainment1Text.style=`${outhoverTextStyle}`;
            entertainment1Text.innerHTML="Подарки 1";
            
  } 
        };
        if (entertainment2 == false){
            entertainment2Icon.innerHTML="lock_clock";
            document.getElementById('entertainment2').style=`${style}`;
            document.getElementById('entertainment2HREF').href="#";
        
        let hoverentertainment2 = document.getElementById('entertainment2');// Б
        hoverentertainment2.onmouseover = function() {// Б
            hoverentertainment2.style=`${hoverStyle}`;// Б
                entertainment2Icon.style=`${onhoverIconStyle}`;
                entertainment2Text.innerHTML=`${hoverText}`;
                entertainment2Text.style=`${onhoverTextStyle}`;}
    
                hoverentertainment2.onmouseout = function(e) {// Б
                document.getElementById('entertainment2').style=`${style}`;
                entertainment2Icon.style=`${outhoverIconStyle}`;
                entertainment2Text.style=`${outhoverTextStyle}`;
                entertainment2Text.innerHTML="Подарки 2";        
      }
        };
        if (entertainment3 == false){
            entertainment3Icon.innerHTML="lock_clock";
            document.getElementById('entertainment3').style=`${style}`;
            document.getElementById('entertainment3HREF').href="#";
            
        let hoverentertainment3 = document.getElementById('entertainment3');// Б
        hoverentertainment3.onmouseover = function() {// Б
            hoverentertainment3.style=`${hoverStyle}`;// Б
                entertainment3Icon.style=`${onhoverIconStyle}`;
                entertainment3Text.innerHTML=`${hoverText}`;
                entertainment3Text.style=`${onhoverTextStyle}`;}
    
                hoverentertainment3.onmouseout = function(e) {// Б
                document.getElementById('entertainment3').style=`${style}`;
                entertainment3Icon.style=`${outhoverIconStyle}`;
                entertainment3Text.style=`${outhoverTextStyle}`;
                entertainment3Text.innerHTML="Подарки 3";        
          }
        };
        if (entertainment4 == false){
            entertainment4Icon.innerHTML="lock_clock";
            document.getElementById('entertainment4').style=`${style}`;
            document.getElementById('entertainment4HREF').href="#";
        
    let hoverentertainment4 = document.getElementById('entertainment4');// Б
        hoverentertainment4.onmouseover = function() {// Б
            hoverentertainment4.style=`${hoverStyle}`;// Б
            entertainment4Icon.style=`${onhoverIconStyle}`;
            entertainment4Text.innerHTML=`${hoverText}`;
            entertainment4Text.style=`${onhoverTextStyle}`;}

        hoverentertainment4.onmouseout = function(e) {// Б
            document.getElementById('entertainment4').style=`${style}`;
            entertainment4Icon.style=`${outhoverIconStyle}`;
            entertainment4Text.style=`${outhoverTextStyle}`;
            entertainment4Text.innerHTML="Подарки 4";
            
  } 
        };
        if (entertainment5 == false){
            entertainment5Icon.innerHTML="lock_clock";
            document.getElementById('entertainment5').style=`${style}`;
            document.getElementById('entertainment5HREF').href="#";
        
        let hoverentertainment5 = document.getElementById('entertainment5');// Б
        hoverentertainment5.onmouseover = function() {// Б
            hoverentertainment5.style=`${hoverStyle}`;// Б
                entertainment5Icon.style=`${onhoverIconStyle}`;
                entertainment5Text.innerHTML=`${hoverText}`;
                entertainment5Text.style=`${onhoverTextStyle}`;}
    
                hoverentertainment5.onmouseout = function(e) {// Б
                document.getElementById('entertainment5').style=`${style}`;
                entertainment5Icon.style=`${outhoverIconStyle}`;
                entertainment5Text.style=`${outhoverTextStyle}`;
                entertainment5Text.innerHTML="Подарки 5";        
      }
        };
