const configCWall = {
   
    "glass": 130,
    "rubber": 50,
    "woolFile": 100,
    "lock": 650,
    "tube": 550,
    "butterFly": 390,
    "installPc": 0.275,
    "pOutter": 490,
    "pInner": 490,
    "sideArms": 840,
    "projectHandle": 600,
    "curtainWallingP": 750,
    "curtainWallingPInner": 590,
    "curtainWallingPOuter": 530,
    "doubleTape": 60,
    "silicone": 460,
  };

  const profileDropdownBox = document.getElementById("profileColour");

  profileDropdownBox.addEventListener("change", function() {
  console.log("Selected profile colour changed to:", profileDropdownBox.value);
  updateProfileConfig(profileDropdownBox.value);
  console.log("configCWall.curtainWallingP updated to:", configCWall.curtainWallingP);
  console.log("configCWall.curtainWallingPInner updated to:", configCWall.curtainWallingPInner);
  console.log("configCWall.curtainWallingPOuter updated to:", configCWall.curtainWallingPOuter);
});
  console.log("Initial value of configCWall.jambP:", configCWall.jambP);

  function updateProfileConfig(selectedValue) {
  switch (selectedValue) {
      case "white":
      case "silver":
      case "brown":
        setButterFlyProperties(390);
        setCurtainWallingPProperties(740);
        setCurtainWallingInnerProperties(580);
        setCurtainWallingOuterProperties(520);
      break;

      case "black":
      case "grey":
        setButterFlyProperties(450);
        setCurtainWallingPProperties(750);
        setCurtainWallingInnerProperties(590);
        setCurtainWallingOuterProperties(530);
      break;

      case "champagne":
        setButterFlyProperties(420);
        setCurtainWallingPProperties(750);
        setCurtainWallingInnerProperties(590);
        setCurtainWallingOuterProperties(530);
      break;

      default:
      break;
      }
    }


    function setButterFlyProperties(value) {
        configCWall.butterFly = value;
  }


    function setCurtainWallingPProperties(value) {
        configCWall.curtainWallingP = value;
    }

    function setCurtainWallingInnerProperties(value) {
        configCWall.curtainWallingPInner = value;
    }

    function setCurtainWallingOuterProperties(value) {
        configCWall.curtainWallingPOuter = value;
    }



// Define the event listener for the glass type select element
const glassTypeBox = document.getElementById("glassType");
glassTypeBox.addEventListener("change", function() {
  const selectedType = glassTypeBox.value;
  console.log("Selected glass type changed to:", selectedType);
  updateGlassConfig(selectedType, glassThicknessBox.value);

});

// Define the event listener for the glass thickness select element
  const glassThicknessBox = document.getElementById("glassThickness");
  glassThicknessBox.addEventListener("change", function() {
  const selectedThickness = glassThicknessBox.value;
  const selectedType = glassTypeBox.value;
  console.log("Selected thickness-type pair changed to:", selectedThickness + "-" + selectedType);
  updateGlassConfig(selectedType, glassThicknessBox.value);
});


// Defines a function to update the glass configuration based on the selected type and thickness
function updateGlassConfig(selectedType, selectedThickness) {
  switch (selectedType) {
    case "clear":
            switch (selectedThickness) {
              case "4mm":
                setGlassPrice(130);
                break;
              case "5mm":
                setGlassPrice(160);
                break;
              case "6mm":
                setGlassPrice(180);
                break;
              case "8mm":
                setGlassPrice(210);
                break;
              case "3+3mmLam":
                setGlassPrice(300);
                break;
              case "4+4mmLam":
                setGlassPrice(350);
                break;
              case "5+5mmLam":
                setGlassPrice(400);
                break;
              case "6mmTuff":
                setGlassPrice(300);
                break;
              case "8mmTuff":
                setGlassPrice(350);
                break;
           }
           break;
    case "oneWay":
            switch (selectedThickness) {
              case "4mm":
                setGlassPrice(150);
                break;
              case "5mm":
                setGlassPrice(200);
                break;
              case "6mm":
                setGlassPrice(220);
                break;
              case "8mm":
                setGlassPrice(240);
                break;
              case "3+3mmLam":
                setGlassPrice(350);
                break;
              case "4+4mmLam":
                setGlassPrice(380);
                break;
              case "5+5mmLam":
                setGlassPrice(420);
                break;
              case "6mmTuff":
                setGlassPrice(360);
                break;
              case "8mmTuff":
                setGlassPrice(410);
                break;
           }
      break;
    case "tinted":
            switch (selectedThickness) {
              case "4mm":
                setGlassPrice(160);
                break;
              case "5mm":
                setGlassPrice(200);
                break;
              case "6mm":
                setGlassPrice(220);
                break;
              case "8mm":
                setGlassPrice(240);
                break;
              case "3+3mmLam":
                setGlassPrice(350);
                break;
              case "4+4mmLam":
                setGlassPrice(380);
                break;
              case "5+5mmLam":
                setGlassPrice(420);
                break;
              case "6mmTuff":
                setGlassPrice(360);
                break;
              case "8mmTuff":
                setGlassPrice(410);
                break;
           }
      break;
    case "obscured":
            switch (selectedThickness) {
              case "4mm":
                setGlassPrice(150);
                break;
              case "5mm":
                setGlassPrice(180);
                break;
              case "6mm":
                setGlassPrice(200);
                break;
              case "8mm":
                setGlassPrice(220);
                break;
           }
      break;
  }

  function setGlassPrice(value) {
        configCWall.glass = value;
      }

  console.log("configCWall.glass updated to:", configCWall.glass);
}


console.log("Initial value of configCWall.glass:", configCWall.glass);

