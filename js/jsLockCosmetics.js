let category = {
    cosmeticsMan:"document.getElementById('cosmeticsMan')",
    cosmeticsWoman:"document.getElementById('cosmeticsWoman')",
    cosmetics3:"document.getElementById('cosmetics3')",
    
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

             //              КЛАСС - косметика/cosmetics   
        if (cosmeticsMan == false){
            cosmeticsManIcon.innerHTML="lock_clock";
            document.getElementById('cosmeticsMan').style=`${style}`;
            document.getElementById('cosmeticsManHREF').href="#";
        
    let hoverCosmeticsMan = document.getElementById('cosmeticsMan');
        hoverCosmeticsMan.onmouseover = function() {
            hoverCosmeticsMan.style=`${hoverStyle}`;
            cosmeticsManIcon.style=`${onhoverIconStyle}`;
            cosmeticsManText.innerHTML=`${hoverText}`;
            cosmeticsManText.style=`${onhoverTextStyle}`;}

        hoverCosmeticsMan.onmouseout = function(e) {
            document.getElementById('cosmeticsMan').style=`${style}`;
            cosmeticsManIcon.style=`${outhoverIconStyle}`;
            cosmeticsManText.style=`${outhoverTextStyle}`;
            cosmeticsManText.innerHTML="Мужская";
            
  } 
        };
        if (cosmeticsWoman == false){
            cosmeticsWomanIcon.innerHTML="lock_clock";
            document.getElementById('cosmeticsWoman').style=`${style}`;
            document.getElementById('cosmeticsWomanHREF').href="#";
        
        let hoverCosmeticsWoman = document.getElementById('cosmeticsWoman');
        hoverCosmeticsWoman.onmouseover = function() {
            hoverCosmeticsWoman.style=`${hoverStyle}`;
                cosmeticsWomanIcon.style=`${onhoverIconStyle}`;
                cosmeticsWomanText.innerHTML=`${hoverText}`;
                cosmeticsWomanText.style=`${onhoverTextStyle}`;}
    
                hoverCosmeticsWoman.onmouseout = function(e) {
                document.getElementById('cosmeticsWoman').style=`${style}`;
                cosmeticsWomanIcon.style=`${outhoverIconStyle}`;
                cosmeticsWomanText.style=`${outhoverTextStyle}`;
                cosmeticsWomanText.innerHTML="Женская";        
      }
        };
        if (cosmetics3 == false){
            cosmetics3Icon.innerHTML="lock_clock";
            document.getElementById('cosmetics3').style=`${style}`;
            document.getElementById('cosmetics3HREF').href="#";
            
        let hoverCosmetics3 = document.getElementById('cosmetics3');
        hoverCosmetics3.onmouseover = function() {
            hoverCosmetics3.style=`${hoverStyle}`;
                cosmetics3Icon.style=`${onhoverIconStyle}`;
                cosmetics3Text.innerHTML=`${hoverText}`;
                cosmetics3Text.style=`${onhoverTextStyle}`;}
    
                hoverCosmetics3.onmouseout = function(e) {
                document.getElementById('cosmetics3').style=`${style}`;
                cosmetics3Icon.style=`${outhoverIconStyle}`;
                cosmetics3Text.style=`${outhoverTextStyle}`;
                cosmetics3Text.innerHTML="Косметика 3";        
          }
        };
             //              КЛАСС - косметика/cosmetics   