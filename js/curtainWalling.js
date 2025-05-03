

const windowTypesCW = {
    height: () => parseFloat(document.getElementById("heightId").value),
    width: () => parseFloat(document.getElementById("widthId").value),
    verticalDivisions: () => {
      const divs = Math.round(windowTypesCW.height()/1000)
      return divs+1
      },

        type1: { //2 Vertical Divisions "3Vents-cw"

      heightFx: 1000,
      widthFx: () => (windowTypesCW.width()/2),

      curtainWallingP: () => ((((windowTypesCW.height()+600)*3)+((windowTypesCW.width()+250)*windowTypesCW.verticalDivisions()))/1000)*configCWall.curtainWallingP, //curtainWallingP
      glass: () => ((windowTypesCW.height()/304.8)*(windowTypesCW.width()/304.8))*configCWall.glass, //glass
      curtainWallingPInner: () => (((windowTypesCW.type1.heightFx*6)+(windowTypesCW.type1.widthFx()*6))/1000)*configCWall.curtainWallingPInner, //curtainWallingPInner
      curtainWallingPOuter: () => (((windowTypesCW.type1.heightFx*6)+(windowTypesCW.type1.widthFx()*6))/1000)*configCWall.curtainWallingPOuter, //curtainWallingPOuter
      sideArms: () => 3*configCWall.sideArms, //sideArms
      doubleTape: () => ((((windowTypesCW.verticalDivisions()*1.7)*windowTypesCW.width())+(windowTypesCW.height()*4))/1000)*configCWall.doubleTape, //doubleTape
      silicone: () => 10*configCWall.silicone, //silicone
      projectHandle: () =>3*configCWall.projectHandle, //projectHandle 

      totals: () => {
      const values = Object.values(windowTypesCW.type1);
      const functions = values.filter(value => typeof value === "function" && value !== windowTypesCW.type1.totals && value !== windowTypesCW.type1.installation && value !== windowTypesCW.type1.widthFx && value !== windowTypesCW.type1.heightFx);
      return functions.reduce((sum, func) => sum + func(), 0);
      },
      installation: () => windowTypesCW.type1.totals() * configCWall.installPc,

      },
        type2: { //2 Vertical Divisions "6Vents-cw"

      heightFx: 1000,
      widthFx: () => (windowTypesCW.width()/2),
      
      curtainWallingP: () => ((((windowTypesCW.height()+600)*3)+((windowTypesCW.width()+250)*windowTypesCW.verticalDivisions()))/1000)*configCWall.curtainWallingP, //curtainWallingP
      glass: () => ((windowTypesCW.height()/304.8)*(windowTypesCW.width()/304.8))*configCWall.glass, //glass
      curtainWallingPInner: () => (((windowTypesCW.type2.heightFx*12)+(windowTypesCW.type2.widthFx()*12))/1000)*configCWall.curtainWallingPInner, //curtainWallingPInner
      curtainWallingPOuter: () => (((windowTypesCW.type2.heightFx*12)+(windowTypesCW.type2.widthFx()*12))/1000)*configCWall.curtainWallingPOuter, //curtainWallingPOuter
      sideArms: () => 6*configCWall.sideArms, //sideArms
      doubleTape: () => ((((windowTypesCW.verticalDivisions()*1.7)*windowTypesCW.width())+(windowTypesCW.height()*4))/1000)*configCWall.doubleTape, //doubleTape
      silicone: () => 10*configCWall.silicone, //silicone

      totals: () => {
      const values = Object.values(windowTypesCW.type2);
      const functions = values.filter(value => typeof value === "function" && value !== windowTypesCW.type2.totals && value !== windowTypesCW.type2.installation && value !== windowTypesCW.type2.widthFx && value !== windowTypesCW.type2.heightFx);
      return functions.reduce((sum, func) => sum + func(), 0);
      },
      installation: () => windowTypesCW.type2.totals() * configCWall.installPc,

      },

        type3: { //3 Vertical Divisions "3Vents-cw"

      heightFx: 1000,
      widthFx: () => (windowTypesCW.width()/3),

      
      curtainWallingP: () => ((((windowTypesCW.height()+600)*4)+((windowTypesCW.width()+250)*windowTypesCW.verticalDivisions()))/1000)*configCWall.curtainWallingP, //curtainWallingP
      glass: () => ((windowTypesCW.height()/304.8)*(windowTypesCW.width()/304.8))*configCWall.glass, //glass
      curtainWallingPInner: () => (((windowTypesCW.type3.heightFx*6)+(windowTypesCW.type3.widthFx()*6))/1000)*configCWall.curtainWallingPInner, //curtainWallingPInner
      curtainWallingPOuter: () => (((windowTypesCW.type3.heightFx*6)+(windowTypesCW.type3.widthFx()*6))/1000)*configCWall.curtainWallingPOuter, //curtainWallingPOuter
      sideArms: () => 3*configCWall.sideArms, //sideArms
      doubleTape: () => ((((windowTypesCW.verticalDivisions()*1.7)*windowTypesCW.width())+(windowTypesCW.height()*6))/1000)*configCWall.doubleTape, //doubleTape
      silicone: () => 10*configCWall.silicone, //silicone

      totals: () => {
      const values = Object.values(windowTypesCW.type3);
      const functions = values.filter(value => typeof value === "function" && value !== windowTypesCW.type3.totals && value !== windowTypesCW.type3.installation && value !== windowTypesCW.type3.widthFx && value !== windowTypesCW.type3.heightFx);
      return functions.reduce((sum, func) => sum + func(), 0);
      },
      installation: () => windowTypesCW.type3.totals() * configCWall.installPc,

      },
        type4: { //3 Vertical Divisions "6Vents-cw"

      heightFx: 1000,
      widthFx: () => (windowTypesCW.width()/3),
      //console.log(windowTypesCW.type4.widthFx()),

      
      curtainWallingP: () => ((((windowTypesCW.height()+600)*4)+((windowTypesCW.width()+250)*windowTypesCW.verticalDivisions()))/1000)*configCWall.curtainWallingP, //curtainWallingP
      glass: () => ((windowTypesCW.height()/304.8)*(windowTypesCW.width()/304.8))*configCWall.glass, //glass
      curtainWallingPInner: () => (((windowTypesCW.type4.heightFx*12)+(windowTypesCW.type4.widthFx()*12))/1000)*configCWall.curtainWallingPInner, //curtainWallingPInner
      curtainWallingPOuter: () => (((windowTypesCW.type4.heightFx*12)+(windowTypesCW.type4.widthFx()*12))/1000)*configCWall.curtainWallingPOuter, //curtainWallingPOuter
      sideArms: () => 6*configCWall.sideArms, //sideArms
      doubleTape: () => ((((windowTypesCW.verticalDivisions()*1.7)*windowTypesCW.width())+(windowTypesCW.height()*6))/1000)*configCWall.doubleTape, //doubleTape
      silicone: () => 10*configCWall.silicone, //silicone

      totals: () => {
      const values = Object.values(windowTypesCW.type4);
      const functions = values.filter(value => typeof value === "function" && value !== windowTypesCW.type4.totals && value !== windowTypesCW.type4.installation && value !== windowTypesCW.type4.widthFx && value !== windowTypesCW.type4.heightFx);
      return functions.reduce((sum, func) => sum + func(), 0);
      },
      installation: () => windowTypesCW.type4.totals() * configCWall.installPc,

      },






};

  function startCW() {
    if (document.getElementById("cWallDesign") != null) {
        curtainWallDesign = document.getElementById("cWallDesign").value;
        } else {
            curtainWallDesign = null;
          }

    if (document.getElementById("noOfVents") != null) {
        numberOfVents = document.getElementById("noOfVents").value;
        } else {
             numberOfVents = null;
          }


curtainWallDesign === "type1-cw" & numberOfVents === "3Vents-cw" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCW.type1.totals())+(windowTypesCW.type1.installation())).toFixed(0), console.log("installation: ", windowTypesCW.type1.installation()))

: curtainWallDesign === "type1-cw" & numberOfVents === "6Vents-cw" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCW.type2.totals())+(windowTypesCW.type2.installation())).toFixed(0), console.log("installation: ", windowTypesCW.type2.installation()))

: curtainWallDesign === "type2-cw" & numberOfVents === "3Vents-cw" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCW.type3.totals())+(windowTypesCW.type3.installation())).toFixed(0), console.log("installation: ", windowTypesCW.type3.installation()))

: curtainWallDesign === "type2-cw" & numberOfVents === "6Vents-cw" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCW.type4.totals())+(windowTypesCW.type4.installation())).toFixed(0), console.log("installation: ", windowTypesCW.type4.installation()))

: alert("Please enter valid type"); 

    console.log("Selected design pair changed to:", curtainWallDesign + "-" + numberOfVents);

console.log("CWP for type3 is:", windowTypesCW.type3.curtainWallingP());
console.log("CWI for type3 is:", windowTypesCW.type3.curtainWallingPInner());
console.log("CWO for type3 is:", windowTypesCW.type3.curtainWallingPOuter());
console.log("Glass for type3 is:", windowTypesCW.type3.glass());
console.log("DT for type3 is:", windowTypesCW.type3.doubleTape());
console.log("Sillicone for type3 is:", windowTypesCW.type3.silicone());
console.log("SA for type3 is:", windowTypesCW.type3.sideArms());
console.log("Toals for type3 is:", windowTypesCW.type3.totals());

  }


function typeGallery(){

    if (document.getElementById("cWallDesign") != null) {
        curtainWallDesign = document.getElementById("cWallDesign").value;
        } else {
            curtainWallDesign = null;
          }

    if (document.getElementById("noOfVents") != null) {
        numberOfVents = document.getElementById("noOfVents").value;
        } else {
             numberOfVents = null;
          }



   curtainWallDesign === "type1-cw" & numberOfVents === "3Vents-cw" ?
  (document.getElementById("img-type").src="../img/type1-curtainWall1.png")

  : curtainWallDesign === "type1-cw" & numberOfVents === "6Vents-cw" ?
  (document.getElementById("img-type").src="../img/type1-curtainWall2.png")


  : curtainWallDesign === "type2-cw" & numberOfVents === "3Vents-cw" ?
  (document.getElementById("img-type").src="../img/type2-curtainWall1.png")


  : curtainWallDesign === "type2-cw" & numberOfVents === "6Vents-cw" ?
  (document.getElementById("img-type").src="../img/type2-curtainWall2.png")

  : alert("Preview"); 



}
