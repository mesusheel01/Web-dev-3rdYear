function rollDice() {
    // Generate a random number between 1 and 6
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    // Build the image source based on the random number
    const imageSource1 = `images/dice${randomNumber1}.png`;
    const imageSource2 = `images/dice${randomNumber2}.png`;

    // Update the image source of the left `<img>` element
    document.getElementById("img1").src = imageSource1;
    document.getElementById("img2").src = imageSource2;
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player1 wins";
    }else{
        document.querySelector("h1").innerHTML = "Player2 wins";
    }
  }
  
