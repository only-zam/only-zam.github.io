const config = {
    "jambP": 600,
    "interLock": 550,
    "lockSection": 550,
    "topBottom": 550,
    "headerP": 600,
    "sillP": 600,
    "glass": 130,
    "rubber": 70,
    "woolFile": 100,
    "rollers": 200,
    "lock": 950,
    "guiders": 49,
    "tube": 600,
    "butterFly": 550,
    "jambCover": 300,
    "singleHeader": 400,
    "divider": 480,
    "installPc": 0.285,
    "pOutter": 570,
    "pInner": 570,
    "sideArms": 840,
    "projectHandle": 600,
    "projectBidding": 340,
    "curtainWallingP": 870,
    "curtainWallingPInner": 750,
    "doubleTape": 60,
    "silicone": 400,
    "topRailP": 2812,
    "bottomTrackP": 950,
    "foldingSashP": 1240,
    "foldingBeading": 510,
    "outerFrameP": 510,
    "foldingRubber": 100,
    "foldingRollers": 4000,
    "foldingLock": 3000,
    "foldingGuiders": 2000,
    "foldingHinges": 800,
  };

  const profileDropdownBox = document.getElementById("profileColour");

  profileDropdownBox.addEventListener("change", function() {
  console.log("Selected profile colour changed to:", profileDropdownBox.value);
  updateProfileConfig(profileDropdownBox.value);
  console.log("config.jambP updated to:", config.jambP);
  console.log("config.lockSection updated to:", config.lockSection);
  console.log("config.butterFly updated to:", config.butterFly);
});
  console.log("Initial value of config.jambP:", config.jambP);

  function updateProfileConfig(selectedValue) {
  switch (selectedValue) {
      case "white":
      case "silver":
      case "brown":
        setOuterFrameProfileProperties(600);
        setInnerFrameProfileProperties(550);
        setButterFlyProperties(550);
        setJambCoverProperties(300);
        setProjectedInnerProperties(570);
        setProjectedOuterProperties(570);
        setProjectBiddingProperties(370);
        setSingleHeaderProperties(400);
        setCurtainWallingProperties(890);
      break;

      case "black":
      case "grey":
        setOuterFrameProfileProperties(620);
        setInnerFrameProfileProperties(570);
        setButterFlyProperties(560);
        setJambCoverProperties(320);
        setProjectedInnerProperties(580);
        setProjectedOuterProperties(580);
        setProjectBiddingProperties(390);
        setSingleHeaderProperties(420);
        setCurtainWallingProperties(920);
      break;

      case "champagne":
        setOuterFrameProfileProperties(620);
        setInnerFrameProfileProperties(570);
        setButterFlyProperties(560);
        setJambCoverProperties(320);
        setProjectedInnerProperties(580);
        setProjectedOuterProperties(580);
        setProjectBiddingProperties(390);
        setSingleHeaderProperties(420);
        setCurtainWallingProperties(920);
      break;

      default:
      break;
      }
    }

    function setOuterFrameProfileProperties(value) {
        config.jambP = value;
        config.headerP = value;
        config.sillP = value;
        config.tube = value;
    }
    function setInnerFrameProfileProperties(value) {
        config.interLock = value;
        config.lockSection = value;
        config.topBottom = value;
        config.divider = value;
  }
    function setButterFlyProperties(value) {
        config.butterFly = value;
  }

    function setJambCoverProperties(value) {
        config.jambCover = value;
    }

    function setProjectedInnerProperties(value) {
        config.pInner = value;
    }

    function setProjectedOuterProperties(value) {
        config.pOutter = value;
    }

    function setProjectBiddingProperties(value) {
        config.projectBidding = value;
    }

    function setSingleHeaderProperties(value) {
        config.singleHeader = value;
    }

    function setCurtainWallingProperties(value) {
        config.curtainWallingP = value;
        config.curtainWallingPInner = value;
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
                setGlassPrice(230);
                break;
              case "3+3mmLam":
                setGlassPrice(320);
                break;
              case "4+4mmLam":
                setGlassPrice(370);
                break;
              case "5+5mmLam":
                setGlassPrice(410);
                break;
              case "6mmTuff":
                setGlassPrice(380);
                break;
              case "8mmTuff":
                setGlassPrice(500);
                break;
              case "10mmTuff":
                setGlassPrice(550);
                break;
           }
           break;
    case "oneWay":
            switch (selectedThickness) {
              case "4mm":
                setGlassPrice(160);
                break;
              case "5mm":
                setGlassPrice(220);
                break;
              case "6mm":
                setGlassPrice(250);
                break;
              case "8mm":
                setGlassPrice(300);
                break;
              case "3+3mmLam":
                setGlassPrice(380);
                break;
              case "4+4mmLam":
                setGlassPrice(400);
                break;
              case "5+5mmLam":
                setGlassPrice(460);
                break;
              case "6mmTuff":
                setGlassPrice(450);
                break;
              case "8mmTuff":
                setGlassPrice(510);
                break;
              case "10mmTuff":
                setGlassPrice(570);
                break;
           }
      break;
    case "tinted":
            switch (selectedThickness) {
              case "4mm":
                setGlassPrice(160);
                break;
              case "5mm":
                setGlassPrice(220);
                break;
              case "6mm":
                setGlassPrice(250);
                break;
              case "8mm":
                setGlassPrice(300);
                break;
              case "3+3mmLam":
                setGlassPrice(380);
                break;
              case "4+4mmLam":
                setGlassPrice(400);
                break;
              case "5+5mmLam":
                setGlassPrice(460);
                break;
              case "6mmTuff":
                setGlassPrice(450);
                break;
              case "8mmTuff":
                setGlassPrice(510);
                break;
              case "10mmTuff":
                setGlassPrice(570);
                break;
           }
      break;
    case "obscured":
            switch (selectedThickness) {
              case "4mm":
                setGlassPrice(160);
                break;
              case "5mm":
                setGlassPrice(220);
                break;
              case "6mm":
                setGlassPrice(260);
                break;
              case "8mm":
                setGlassPrice(280);
                break;
           }
      break;
    case "nashiji":
            switch (selectedThickness) {
              case "4mm":
                setGlassPrice(160);
                break;
              case "5mm":
                setGlassPrice(220);
                break;
              case "6mm":
                setGlassPrice(260);
                break;
              case "8mm":
                setGlassPrice(280);
                break;
           }
      break;

  }

  function setGlassPrice(value) {
        config.glass = value;
      }

  console.log("config.glass updated to:", config.glass);
}


console.log("Initial value of config.glass:", config.glass);

