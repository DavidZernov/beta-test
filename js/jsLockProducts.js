let category = {
    products1:"document.getElementById('products1')",
    products2:"document.getElementById('products2')",
    products3:"document.getElementById('products3')",
    
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
             //              КЛАСС - косметика/cosmetics   
        if (products1 == false){
            products1Icon.innerHTML="lock_clock";
            document.getElementById('products1').style=`${style}`;
            document.getElementById('products1HREF').href="#";
        
    let hoverProducts1 = document.getElementById('products1');// Б
        hoverProducts1.onmouseover = function() {// Б
            hoverProducts1.style=`${hoverStyle}`;// Б
            products1Icon.style=`${onhoverIconStyle}`;
            products1Text.innerHTML=`${hoverText}`;
            products1Text.style=`${onhoverTextStyle}`;}

        hoverProducts1.onmouseout = function(e) {// Б
            document.getElementById('products1').style=`${style}`;
            products1Icon.style=`${outhoverIconStyle}`;
            products1Text.style=`${outhoverTextStyle}`;
            products1Text.innerHTML="Продукты 1";
            
  } 
        };
        if (products2 == false){
            products2Icon.innerHTML="lock_clock";
            document.getElementById('products2').style=`${style}`;
            document.getElementById('products2HREF').href="#";
        
        let hoverProducts2 = document.getElementById('products2');// Б
        hoverProducts2.onmouseover = function() {// Б
            hoverProducts2.style=`${hoverStyle}`;// Б
                products2Icon.style=`${onhoverIconStyle}`;
                products2Text.innerHTML=`${hoverText}`;
                products2Text.style=`${onhoverTextStyle}`;}
    
                hoverProducts2.onmouseout = function(e) {// Б
                document.getElementById('products2').style=`${style}`;
                products2Icon.style=`${outhoverIconStyle}`;
                products2Text.style=`${outhoverTextStyle}`;
                products2Text.innerHTML="Продукты 2";        
      }
        };
        if (products3 == false){
            products3Icon.innerHTML="lock_clock";
            document.getElementById('products3').style=`${style}`;
            document.getElementById('products3HREF').href="#";
            
        let hoverProducts3 = document.getElementById('products3');// Б
        hoverProducts3.onmouseover = function() {// Б
            hoverProducts3.style=`${hoverStyle}`;// Б
                products3Icon.style=`${onhoverIconStyle}`;
                products3Text.innerHTML=`${hoverText}`;
                products3Text.style=`${onhoverTextStyle}`;}
    
                hoverProducts3.onmouseout = function(e) {// Б
                document.getElementById('products3').style=`${style}`;
                products3Icon.style=`${outhoverIconStyle}`;
                products3Text.style=`${outhoverTextStyle}`;
                products3Text.innerHTML="Продукты 3";        
          }
        };
             //              КЛАСС - косметика/cosmetics   