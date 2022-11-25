// takes input from the clickable button
//when button is clicked, it returns a link from the recipes folder and sends us there

    let arrayOfSites = ["recipes/buffaloChickenDip.html", "recipes/butterChicken.html", "recipes/chili.html", "recipes/curry.html", "recipes/enchiladas.html", "recipes/grilledCheese.html", "recipes/lasagna.html", "recipes/lomein.html", "recipes/meatballSubs.html", "recipes/mediterraneanNachos.html", "recipes/nachos.html", "recipes/pastaSauce.html", "recipes/pizzaBagel.html", "recipes/quesadilla.html", "recipes/stirFry.html"];
    let arrayLength = arrayOfSites.length;
    let selectedSite = arrayOfSites[Math.floor(Math.random()* arrayLength)];

    function randomizeSite(){
        let selectedSite = arrayOfSites[Math.floor(Math.random()* arrayLength)];
        location.href = selectedSite;
    }