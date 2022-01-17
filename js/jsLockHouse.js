let category = {
    house1:"document.getElementById('house1')",
    house2:"document.getElementById('house2')",
    house3:"document.getElementById('house3')",
    house4:"document.getElementById('house4')",
    house5:"document.getElementById('house5')",
    
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
 
        if (house1 == false){
            house1Icon.innerHTML="lock_clock";
            document.getElementById('house1').style=`${style}`;
            document.getElementById('house1HREF').href="#";
        
    let hoverHouse1 = document.getElementById('house1');// Б
        hoverHouse1.onmouseover = function() {// Б
            hoverHouse1.style=`${hoverStyle}`;// Б
            house1Icon.style=`${onhoverIconStyle}`;
            house1Text.innerHTML=`${hoverText}`;
            house1Text.style=`${onhoverTextStyle}`;}

        hoverHouse1.onmouseout = function(e) {// Б
            document.getElementById('house1').style=`${style}`;
            house1Icon.style=`${outhoverIconStyle}`;
            house1Text.style=`${outhoverTextStyle}`;
            house1Text.innerHTML="Дом 1";
            
  } 
        };
        if (house2 == false){
            house2Icon.innerHTML="lock_clock";
            document.getElementById('house2').style=`${style}`;
            document.getElementById('house2HREF').href="#";
        
        let hoverHouse2 = document.getElementById('house2');// Б
        hoverHouse2.onmouseover = function() {// Б
            hoverHouse2.style=`${hoverStyle}`;// Б
                house2Icon.style=`${onhoverIconStyle}`;
                house2Text.innerHTML=`${hoverText}`;
                house2Text.style=`${onhoverTextStyle}`;}
    
                hoverHouse2.onmouseout = function(e) {// Б
                document.getElementById('house2').style=`${style}`;
                house2Icon.style=`${outhoverIconStyle}`;
                house2Text.style=`${outhoverTextStyle}`;
                house2Text.innerHTML="Дом 2";        
      }
        };
        if (house3 == false){
            house3Icon.innerHTML="lock_clock";
            document.getElementById('house3').style=`${style}`;
            document.getElementById('house3HREF').href="#";
            
        let hoverHouse3 = document.getElementById('house3');// Б
        hoverHouse3.onmouseover = function() {// Б
            hoverHouse3.style=`${hoverStyle}`;// Б
                house3Icon.style=`${onhoverIconStyle}`;
                house3Text.innerHTML=`${hoverText}`;
                house3Text.style=`${onhoverTextStyle}`;}
    
                hoverHouse3.onmouseout = function(e) {// Б
                document.getElementById('house3').style=`${style}`;
                house3Icon.style=`${outhoverIconStyle}`;
                house3Text.style=`${outhoverTextStyle}`;
                house3Text.innerHTML="Дом 3";        
          }
        };
        if (house4 == false){
            house4Icon.innerHTML="lock_clock";
            document.getElementById('house4').style=`${style}`;
            document.getElementById('house4HREF').href="#";
        
    let hoverHouse4 = document.getElementById('house4');// Б
        hoverHouse4.onmouseover = function() {// Б
            hoverHouse4.style=`${hoverStyle}`;// Б
            house4Icon.style=`${onhoverIconStyle}`;
            house4Text.innerHTML=`${hoverText}`;
            house4Text.style=`${onhoverTextStyle}`;}

        hoverHouse4.onmouseout = function(e) {// Б
            document.getElementById('house4').style=`${style}`;
            house4Icon.style=`${outhoverIconStyle}`;
            house4Text.style=`${outhoverTextStyle}`;
            house4Text.innerHTML="Дом 4";
            
  } 
        };
        if (house5 == false){
            house5Icon.innerHTML="lock_clock";
            document.getElementById('house5').style=`${style}`;
            document.getElementById('house5HREF').href="#";
        
        let hoverHouse5 = document.getElementById('house5');// Б
        hoverHouse5.onmouseover = function() {// Б
            hoverHouse5.style=`${hoverStyle}`;// Б
                house5Icon.style=`${onhoverIconStyle}`;
                house5Text.innerHTML=`${hoverText}`;
                house5Text.style=`${onhoverTextStyle}`;}
    
                hoverHouse5.onmouseout = function(e) {// Б
                document.getElementById('house5').style=`${style}`;
                house5Icon.style=`${outhoverIconStyle}`;
                house5Text.style=`${outhoverTextStyle}`;
                house5Text.innerHTML="Дом 5";        
      }
        };
