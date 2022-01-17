//добавить в jsSettingsCategory         +

    //              категории           +
let category = {
    clothes:"document.getElementById('clothesIcon')",
    cosmetics:"document.getElementById('cosmeticsIcon')",
    products:"document.getElementById('productsIcon')",
    house:"document.getElementById('houseIcon')",
    auto:"document.getElementById('autoIcon')",
    presents:"document.getElementById('presentsIcon')",
    sales:"document.getElementById('salesIcon')",
    sport:"document.getElementById('sportIcon')",
    entertainment:"document.getElementById('entertainmentIcon')",
    toys:"document.getElementById('toysIcon')",
    accessories:"document.getElementById('accessoriesIcon')",
    pets:"document.getElementById('petsIcon')",
    mothers:"document.getElementById('mothersIcon')",
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


    
//                       Условие         +  
        if (clothes == false){
            clothesIcon.innerHTML="lock_clock";
            document.getElementById('clothes').style=`${style}`;
            document.getElementById('clothesHREF').href="#";
        
    let hoverClothes = document.getElementById('clothes');
        hoverClothes.onmouseover = function() {
            hoverClothes.style=`${hoverStyle}`;
            clothesIcon.style=`${onhoverIconStyle}`;
            clothesText.innerHTML=`${hoverText}`;
            clothesText.style=`${onhoverTextStyle}`;}

        hoverClothes.onmouseout = function(e) {
            document.getElementById('clothes').style=`${style}`;
            clothesIcon.style=`${outhoverIconStyle}`;
            clothesText.style=`${outhoverTextStyle}`;
            clothesText.innerHTML="Одежда";
            
  }

        
        };
        if (cosmetics == false){
            cosmeticsIcon.innerHTML="lock_clock";
            document.getElementById('cosmetics').style=`${style}`;
            document.getElementById('cosmeticsHREF').href="#";
        
        let hoverCosmetics = document.getElementById('cosmetics');
        hoverCosmetics.onmouseover = function() {
            hoverCosmetics.style=`${hoverStyle}`;
                cosmeticsIcon.style=`${onhoverIconStyle}`;
                cosmeticsText.innerHTML=`${hoverText}`;
                cosmeticsText.style=`${onhoverTextStyle}`;}
    
                hoverCosmetics.onmouseout = function(e) {
                document.getElementById('cosmetics').style=`${style}`;
                cosmeticsIcon.style=`${outhoverIconStyle}`;
                cosmeticsText.style=`${outhoverTextStyle}`;
                cosmeticsText.innerHTML="Косметика";        
      }
        
        };
        if (products == false){
            productsIcon.innerHTML="lock_clock";
            document.getElementById('products').style=`${style}`;
            document.getElementById('productsHREF').href="#";
            
        let hoverProducts = document.getElementById('products');
        hoverProducts.onmouseover = function() {
            hoverProducts.style=`${hoverStyle}`;
                productsIcon.style=`${onhoverIconStyle}`;
                productsText.innerHTML=`${hoverText}`;
                productsText.style=`${onhoverTextStyle}`;}
    
                hoverProducts.onmouseout = function(e) {
                document.getElementById('products').style=`${style}`;
                productsIcon.style=`${outhoverIconStyle}`;
                productsText.style=`${outhoverTextStyle}`;
                productsText.innerHTML="Продукты";        
          }

        
        };
        if (house == false){
            houseIcon.innerHTML="lock_clock";
            document.getElementById('house').style=`${style}`;
            document.getElementById('houseHREF').href="#";
                        
            let hoverHouse = document.getElementById('house');
            hoverHouse.onmouseover = function() {
                hoverHouse.style=`${hoverStyle}`;
                    houseIcon.style=`${onhoverIconStyle}`;
                    houseText.innerHTML=`${hoverText}`;
                    houseText.style=`${onhoverTextStyle}`;}
        
                    hoverHouse.onmouseout = function(e) {
                    document.getElementById('house').style=`${style}`;
                    houseIcon.style=`${outhoverIconStyle}`;
                    houseText.style=`${outhoverTextStyle}`;
                    houseText.innerHTML="Товары для дома";        
          }
        
        };
        if (auto == false){
            autoIcon.innerHTML="lock_clock";
            document.getElementById('auto').style=`${style}`;
            document.getElementById('autoHREF').href="#";

            let hoverAuto = document.getElementById('auto');
            hoverAuto.onmouseover = function() {
                hoverAuto.style=`${hoverStyle}`;
                    autoIcon.style=`${onhoverIconStyle}`;
                    autoText.innerHTML=`${hoverText}`;
                    autoText.style=`${onhoverTextStyle}`;}
        
                    hoverAuto.onmouseout = function(e) {
                    document.getElementById('auto').style=`${style}`;
                    autoIcon.style=`${outhoverIconStyle}`;
                    autoText.style=`${outhoverTextStyle}`;
                    autoText.innerHTML="Автотовары";        
          }
        
        };
        if (presents == false){
            presentsIcon.innerHTML="lock_clock";
            document.getElementById('presents').style=`${style}`;
            document.getElementById('presentsHREF').href="#";

            let hoverPresents = document.getElementById('presents');
            hoverPresents.onmouseover = function() {
                hoverPresents.style=`${hoverStyle}`;
                    presentsIcon.style=`${onhoverIconStyle}`;
                    presentsText.innerHTML=`${hoverText}`;
                    presentsText.style=`${onhoverTextStyle}`;}
        
                    hoverPresents.onmouseout = function(e) {
                    document.getElementById('presents').style=`${style}`;
                    presentsIcon.style=`${outhoverIconStyle}`;
                    presentsText.style=`${outhoverTextStyle}`;
                    presentsText.innerHTML="Подарки";        
          }
        
        };
        if (sales == false){
            salesIcon.innerHTML="lock_clock";
            document.getElementById('sales').style=`${style}`;
            document.getElementById('salesHREF').href="#";

            let hoverSales = document.getElementById('sales');
            hoverSales.onmouseover = function() {
                hoverSales.style=`${hoverStyle}`;
                    salesIcon.style=`${onhoverIconStyle}`;
                    salesText.innerHTML=`${hoverText}`;
                    salesText.style=`${onhoverTextStyle}`;}
        
                    hoverSales.onmouseout = function(e) {
                    document.getElementById('sales').style=`${style}`;
                    salesIcon.style=`${outhoverIconStyle}`;
                    salesText.style=`${outhoverTextStyle}`;
                    salesText.innerHTML="Акции";        
          }
        
        };
        if (sport == false){
            sportIcon.innerHTML="lock_clock";
            document.getElementById('sport').style=`${style}`;
            document.getElementById('sportHREF').href="#";

            let hoverSport = document.getElementById('sport');
            hoverSport.onmouseover = function() {
                hoverSport.style=`${hoverStyle}`;
                    sportIcon.style=`${onhoverIconStyle}`;
                    sportText.innerHTML=`${hoverText}`;
                    sportText.style=`${onhoverTextStyle}`;}
        
                    hoverSport.onmouseout = function(e) {
                    document.getElementById('sport').style=`${style}`;
                    sportIcon.style=`${outhoverIconStyle}`;
                    sportText.style=`${outhoverTextStyle}`;
                    sportText.innerHTML="Спорт";        
          }
        
        };
        if (entertainment == false){
            entertainmentIcon.innerHTML="lock_clock";
            document.getElementById('entertainment').style=`${style}`;
            document.getElementById('entertainmentHREF').href="#";

            let hoverEntertainment = document.getElementById('entertainment');
            hoverEntertainment.onmouseover = function() {
                hoverEntertainment.style=`${hoverStyle}`;
                    entertainmentIcon.style=`${onhoverIconStyle}`;
                    entertainmentText.innerHTML=`${hoverText}`;
                    entertainmentText.style=`${onhoverTextStyle}`;}
        
                    hoverEntertainment.onmouseout = function(e) {
                    document.getElementById('entertainment').style=`${style}`;
                    entertainmentIcon.style=`${outhoverIconStyle}`;
                    entertainmentText.style=`${outhoverTextStyle}`;
                    entertainmentText.innerHTML="Рзвлечения";        
          }
        
        };
        if (toys == false){
            toysIcon.innerHTML="lock_clock";
            document.getElementById('toys').style=`${style}`;
            document.getElementById('toysHREF').href="#";

            
            let hoverToys = document.getElementById('toys');
            hoverToys.onmouseover = function() {
                hoverToys.style=`${hoverStyle}`;
                    toysIcon.style=`${onhoverIconStyle}`;
                    toysText.innerHTML=`${hoverText}`;
                    toysText.style=`${onhoverTextStyle}`;}
        
                    hoverToys.onmouseout = function(e) {
                    document.getElementById('toys').style=`${style}`;
                    toysIcon.style=`${outhoverIconStyle}`;
                    toysText.style=`${outhoverTextStyle}`;
                    toysText.innerHTML="Игрушки";        
          }
        
        };
        if (accessories == false){
            accessoriesIcon.innerHTML="lock_clock";
            document.getElementById('accessories').style=`${style}`;
            document.getElementById('accessoriesHREF').href="#";

               
            let hoverAccessories = document.getElementById('accessories');
            hoverAccessories.onmouseover = function() {
                hoverAccessories.style=`${hoverStyle}`;
                    accessoriesIcon.style=`${onhoverIconStyle}`;
                    accessoriesText.innerHTML=`${hoverText}`;
                    accessoriesText.style=`${onhoverTextStyle}`;}
        
                    hoverAccessories.onmouseout = function(e) {
                    document.getElementById('accessories').style=`${style}`;
                    accessoriesIcon.style=`${outhoverIconStyle}`;
                    accessoriesText.style=`${outhoverTextStyle}`;
                    accessoriesText.innerHTML="Аксессуары";        
          }
        
        };
        if (pets == false){
            petsIcon.innerHTML="lock_clock";
            document.getElementById('pets').style=`${style}`;
            document.getElementById('petsHREF').href="#";

            let hoverPets = document.getElementById('pets');
            hoverPets.onmouseover = function() {
                hoverPets.style=`${hoverStyle}`;
                petsIcon.style=`${onhoverIconStyle}`;
                    petsText.innerHTML=`${hoverText}`;
                    petsText.style=`${onhoverTextStyle}`;}
        
                    hoverPets.onmouseout = function(e) {
                    document.getElementById('pets').style=`${style}`;
                    petsIcon.style=`${outhoverIconStyle}`;
                    petsText.style=`${outhoverTextStyle}`;
                    petsText.innerHTML="Товары для животных";        
          }
        
        };
        if (mothers == false){
            mothersIcon.innerHTML="lock_clock";
            document.getElementById('mothers').style=`${style}`;
            document.getElementById('mothersHREF').href="#";

            
            let hoverMothers = document.getElementById('mothers');
            hoverMothers.onmouseover = function() {
                hoverMothers.style=`${hoverStyle}`;
                mothersIcon.style=`${onhoverIconStyle}`;
                    mothersText.innerHTML=`${hoverText}`;
                    mothersText.style=`${onhoverTextStyle}`;}
        
                    hoverMothers.onmouseout = function(e) {
                    document.getElementById('mothers').style=`${style}`;
                    mothersIcon.style=`${outhoverIconStyle}`;
                    mothersText.style=`${outhoverTextStyle}`;
                    mothersText.innerHTML="Товары для мам";        
          }
        
        };
        