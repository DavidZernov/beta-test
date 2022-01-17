//добавить в jsSettingsClasses         +

    //              КЛАССЫ          +
let category = {
    clothesMan:"document.getElementById('clothesMan')",
    clothesWoman:"document.getElementById('clothesWoman')",
    clothesUnisex:"document.getElementById('clothesUnisex')",
    
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


          //              КЛАСС - ОДЕЖДА/CLOTHES  
//                       Условие         +  
        if (clothesMan == false){
            clothesManIcon.innerHTML="lock_clock";
            document.getElementById('clothesMan').style=`${style}`;
            document.getElementById('clothesManHREF').href="#";
        
    let hoverClothesMan = document.getElementById('clothesMan');
        hoverClothesMan.onmouseover = function() {
            hoverClothesMan.style=`${hoverStyle}`;
            clothesManIcon.style=`${onhoverIconStyle}`;
            clothesManText.innerHTML=`${hoverText}`;
            clothesManText.style=`${onhoverTextStyle}`;}

        hoverClothesMan.onmouseout = function(e) {
            document.getElementById('clothesMan').style=`${style}`;
            clothesManIcon.style=`${outhoverIconStyle}`;
            clothesManText.style=`${outhoverTextStyle}`;
            clothesManText.innerHTML="Мужская";
            
  } 
        };
        if (clothesWoman == false){
            clothesWomanIcon.innerHTML="lock_clock";
            document.getElementById('clothesWoman').style=`${style}`;
            document.getElementById('clothesWomanHREF').href="#";
        
        let hoverClothesWoman = document.getElementById('clothesWoman');
        hoverClothesWoman.onmouseover = function() {
            hoverClothesWoman.style=`${hoverStyle}`;
                clothesWomanIcon.style=`${onhoverIconStyle}`;
                clothesWomanText.innerHTML=`${hoverText}`;
                clothesWomanText.style=`${onhoverTextStyle}`;}
    
                hoverClothesWoman.onmouseout = function(e) {
                document.getElementById('clothesWoman').style=`${style}`;
                clothesWomanIcon.style=`${outhoverIconStyle}`;
                clothesWomanText.style=`${outhoverTextStyle}`;
                clothesWomanText.innerHTML="Женская";        
      }
        };
        if (clothesUnisex == false){
            clothesUnisexIcon.innerHTML="lock_clock";
            document.getElementById('clothesUnisex').style=`${style}`;
            document.getElementById('clothesUnisexHREF').href="#";
            
        let hoverClothesUnisex = document.getElementById('clothesUnisex');
        hoverClothesUnisex.onmouseover = function() {
            hoverClothesUnisex.style=`${hoverStyle}`;
                clothesUnisexIcon.style=`${onhoverIconStyle}`;
                clothesUnisexText.innerHTML=`${hoverText}`;
                clothesUnisexText.style=`${onhoverTextStyle}`;}
    
                hoverClothesUnisex.onmouseout = function(e) {
                document.getElementById('clothesUnisex').style=`${style}`;
                clothesUnisexIcon.style=`${outhoverIconStyle}`;
                clothesUnisexText.style=`${outhoverTextStyle}`;
                clothesUnisexText.innerHTML="Унисекс / Парная";        
          }
        };
             //              КЛАСС - ОДЕЖДА/CLOTHES   