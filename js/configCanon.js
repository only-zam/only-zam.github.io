const configCanon = {
    "jambP": 820,
    "interLock": 775,
    "lockSection": 620,
    "topBottom": 780,
    "headerP": 620,
    "sillP": 810,
    "glass": 130,
    "rubber": 50,
    "woolFile": 100,
    "rollers": 200,
    "lock": 650,
    "guiders": 50,
    "tube": 970,
    "butterFly": 520,
    "jambCover": 300,
    "singleHeader": 400,
    "divider": 620,
    "installPc": 0.275,
    "pOutter": 600,
    "pInner": 750,
    "sideArms": 840,
    "projectHandle": 600,
    "projectBidding": 335,
  };


const profileDropdownBox2 = document.getElementById("profileColour");

  profileDropdownBox2.addEventListener("change", function() {
  console.log("Selected profile colour changed to:", profileDropdownBox2.value);
  updateProfileConfig(profileDropdownBox2.value);
  console.log("configCanon.jambP updated to:", configCanon.jambP);
  console.log("configCanon.lockSection updated to:", configCanon.lockSection);
});
  console.log("Initial value of configCanon.jambP:", configCanon.jambP);

  function updateProfileConfig(selectedValue) {

  switch (selectedValue) {
      case "white":
      case "silver":
      case "brown":
        setSillProperties(800);
        setJambProperties(810);
        setHeaderProperties(610);
        setTubeProperties(960);
        // setOutterFrameProperties(820);
        setInterlockProperties(770);
        setLockSectionProperties(610);
        setTopBottomProperties(790)
        setButterFlyProperties(510);
        setJambCoverProperties(340);
        setProjectedOutterProperties(590);
        setProjectedInnerProperties(740);
        setProjectBiddingProperties(335);
        setSingleHeaderProperties(400);
      break;


      case "black":
      case "grey":
      case "champagne":
        setSillProperties(810);
        setJambProperties(820);
        setHeaderProperties(620);
        setTubeProperties(970);
        // setOutterFrameProperties(820);
        setInterlockProperties(780);
        setLockSectionProperties(620);
        setTopBottomProperties(800);
        setButterFlyProperties(520);
        setJambCoverProperties(340);
        setProjectedOutterProperties(600);
        setProjectedInnerProperties(750);
        setProjectBiddingProperties(335);
        setSingleHeaderProperties(400);
      break;

      default:
      break;
      }
    }

    function setSillProperties(value) {
      configCanon.sillP = value;
    }

    function setJambProperties(value) {
      configCanon.jambP = value;
    }

    function setHeaderProperties(value) {
      configCanon.headerP = value;
    }

    function setTubeProperties(value) {
      configCanon.tube = value;
    }

    function setInterlockProperties(value) {
        configCanon.interLock = value;
    }

    function setLockSectionProperties(value) {
        configCanon.lockSection = value;
    }

    function setTopBottomProperties(value) {
        configCanon.topBottom = value;
    }

    function setButterFlyProperties(value) {
        configCanon.butterFly = value;
  }

    function setJambCoverProperties(value) {
        configCanon.jambCover = value;
    }

    function setProjectedOutterProperties(value) {
        configCanon.pOutter = value;
    }   

    function setProjectedInnerProperties(value) {
        configCanon.pInner = value;
    }  

    function setProjectBiddingProperties(value) {
        configCanon.projectBidding = value;
    }

    function setSingleHeaderProperties(value) {
        configCanon.singleHeader = value;
    }



// Define the event listener for the glass type select element
const glassTypeBox2 = document.getElementById("glassType");
glassTypeBox2.addEventListener("change", function() {
  const selectedType = glassTypeBox2.value;
  console.log("Selected glass type changed to:", selectedType);
  updateGlassConfig(selectedType, glassThicknessBox2.value);

});

// Define the event listener for the glass thickness select element
  const glassThicknessBox2 = document.getElementById("glassThickness");
  glassThicknessBox2.addEventListener("change", function() {
  const selectedThickness = glassThicknessBox2.value;
  const selectedType = glassTypeBox2.value;
  console.log("Selected thickness-type pair changed to:", selectedThickness + "-" + selectedType);
  updateGlassConfig(selectedType, glassThicknessBox2.value);
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
                setGlassPrice(170);
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
                setGlassPrice(170);
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
        configCanon.glass = value;
      }

  console.log("configCanon.glass updated to:", configCanon.glass);
}


console.log("Initial value of configCanon.glass:", configCanon.glass);

