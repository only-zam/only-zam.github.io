

const windowTypesCanon = {
    height: () => parseFloat(document.getElementById("heightId").value),
    width: () => parseFloat(document.getElementById("widthId").value),


  type1: {  //2 sliding panels w/o fx.
    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () =>((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    rubber: () =>(((windowTypesCanon.height()*4)+(windowTypesCanon.width()*2))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>4*configCanon.rollers, //rollers
    lock: () =>2*configCanon.lock, //lock
    guiders: () =>8*configCanon.guiders, //guiders

    totals: () => {
    const values = Object.values(windowTypesCanon.type1);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type1.totals && value !== windowTypesCanon.type1.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type1.totals() * configCanon.installPc, 
    
  },
  type2: {  //2 sliding panels single fx 400mm   
  height1: () => (windowTypesCanon.height()-400),
  heightFx: 400,  

    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.type2.height1()+250)*2)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.type2.height1()+250)*2)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    tube: ()=>(((windowTypesCanon.width()+250)+windowTypesCanon.type2.heightFx)/1000)*configCanon.tube, //tube
    butterFly: () =>(((windowTypesCanon.width()*2)/1000)+(windowTypesCanon.type2.heightFx*4)/1000)*configCanon.butterFly, //butterFly
    jambCover: () => ((windowTypesCanon.type2.heightFx*2)/1000)*configCanon.jambCover, //jC
    rubber: () =>(((windowTypesCanon.height()*4)+(windowTypesCanon.width()*4))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>4*configCanon.rollers, //rollers
    lock: () =>2*configCanon.lock, //lock
    guiders: () =>8*configCanon.guiders, //guiders

    totals: () => {
    const values = Object.values(windowTypesCanon.type2);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type2.totals && value !== windowTypesCanon.type2.installation && value !== windowTypesCanon.type2.height1 && value !== windowTypesCanon.type2.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type2.totals() * configCanon.installPc,
  },

  type3: { //2 sliding panels double fx 400mm each.
  height1: () => (windowTypesCanon.height()-800),
  heightFx: 800,  

    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.type3.height1()+250)*2)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.type3.height1()+250)*2)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    tube: ()=>((((windowTypesCanon.width()+250)*2)+(windowTypesCanon.type3.heightFx*2))/1000)*configCanon.tube, //tube
    butterFly: () =>(((windowTypesCanon.width()*4)/1000)+(windowTypesCanon.type3.heightFx*4)/1000)*configCanon.butterFly, //butterFly
    jambCover: () => ((windowTypesCanon.type3.heightFx*4)/1000)*configCanon.jambCover, //jC
    rubber: () =>(((windowTypesCanon.height()*4)+(windowTypesCanon.width()*6))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>4*configCanon.rollers, //rollers
    lock: () =>2*configCanon.lock, //lock
    guiders: () =>8*configCanon.guiders, //guiders

    totals: () => {
    const values = Object.values(windowTypesCanon.type3);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type3.totals && value !== windowTypesCanon.type3.installation && value !== windowTypesCanon.type3.height1 && value !== windowTypesCanon.type3.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type3.totals() * configCanon.installPc,
  },

  type4: {  //3 sliding panels w/o fx.
    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.height()+250)*4)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    rubber: () =>(((windowTypesCanon.height()*6)+(windowTypesCanon.width()*2))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>4*configCanon.rollers,  //rollers
    lock: () =>2*configCanon.lock, //lock
    guiders: () =>12*configCanon.guiders, //guiders

    totals: () => {
    const values = Object.values(windowTypesCanon.type4);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type4.totals && value !== windowTypesCanon.type4.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type4.totals() * configCanon.installPc,
  },

  type5: {  //3 sliding panels single fx 400mm
  height1: () => (windowTypesCanon.height()-400),
  heightFx: 400,  

    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.type5.height1()+250)*4)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.type5.height1()+250)*2)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    tube: ()=>(((windowTypesCanon.width()+250)+(windowTypesCanon.type5.heightFx*2))/1000)*configCanon.tube, //tube
    butterFly: () =>(((windowTypesCanon.width()*2)/1000)+(windowTypesCanon.type5.heightFx*6)/1000)*configCanon.butterFly, //butterFly
    jambCover: () => ((windowTypesCanon.type5.heightFx*2)/1000)*configCanon.jambCover, //jC
    rubber: () =>(((windowTypesCanon.height()*6)+(windowTypesCanon.width()*4))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>4*configCanon.rollers, //rollers
    lock: () =>2*configCanon.lock, //lock
    guiders: () =>12*configCanon.guiders, //guiders



    totals: () => {
    const values = Object.values(windowTypesCanon.type5);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type5.totals && value !== windowTypesCanon.type5.installation && value !== windowTypesCanon.type5.height1 && value !== windowTypesCanon.type5.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type5.totals() * configCanon.installPc,
  },

  type6: {  //3 sliding panels double fx 400mm each.
  height1: () => (windowTypesCanon.height()-800),
  heightFx: 800,  

    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.type6.height1()+250)*4)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.type6.height1()+250)*2)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    tube: ()=>((((windowTypesCanon.width()+250)*2)+(windowTypesCanon.type6.heightFx*2))/1000)*configCanon.tube, //tube
    butterFly: () =>(((windowTypesCanon.width()*4)/1000)+(windowTypesCanon.type6.heightFx*6)/1000)*configCanon.butterFly, //butterFly
    jambCover: () => ((windowTypesCanon.type6.heightFx*4)/1000)*configCanon.jambCover, //jC
    rubber: () =>(((windowTypesCanon.height()*6)+(windowTypesCanon.width()*6))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>4*configCanon.rollers, //rollers
    lock: () =>2*configCanon.lock, //lock
    guiders: () =>12*configCanon.guiders, //guiders

    totals: () => {
    const values = Object.values(windowTypesCanon.type6);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type6.totals && value !== windowTypesCanon.type6.installation && value !== windowTypesCanon.type6.height1 && value !== windowTypesCanon.type6.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type6.totals() * configCanon.installPc,
  },

  type7: { //4 sliding panels w/o fx.
    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.height()+250)*4)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.height()+250)*4)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    rubber: () =>(((windowTypesCanon.height()*8)+(windowTypesCanon.width()*2))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>8*configCanon.rollers,  //rollers
    lock: () =>3*configCanon.lock, //lock
    guiders: () =>12*configCanon.guiders, //guiders
    singleHeader: () =>(windowTypesCanon.height()/1000)*configCanon.singleHeader, //singleHeader 

    totals: () => {
    const values = Object.values(windowTypesCanon.type7);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type7.totals && value !== windowTypesCanon.type7.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type7.totals() * configCanon.installPc,
  },

  type8: {  //4 sliding panels single fx 400mm
  height1: () => (windowTypesCanon.height()-400),
  heightFx: 400,  

    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.type8.height1()+250)*4)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.type8.height1()+250)*4)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    tube: ()=>(((windowTypesCanon.width()+250)/1000)+(windowTypesCanon.type8.heightFx*3)/1000)*configCanon.tube, //tube
    butterFly: () =>(((windowTypesCanon.width()*2)/1000)+(windowTypesCanon.type8.heightFx*8)/1000)*configCanon.butterFly, //butterFly
    jambCover: () => ((windowTypesCanon.type8.heightFx*2)/1000)*configCanon.jambCover, //jC
    rubber: () =>(((windowTypesCanon.height()*8)+(windowTypesCanon.width()*4))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>8*configCanon.rollers, //rollers
    lock: () =>3*configCanon.lock, //lock
    guiders: () =>16*configCanon.guiders, //guiders
    singleHeader: () =>(windowTypesCanon.type8.height1()/1000)*configCanon.singleHeader, //singleHeader 

    totals: () => {
    const values = Object.values(windowTypesCanon.type8);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type8.totals && value !== windowTypesCanon.type8.installation && value !== windowTypesCanon.type8.height1 && value !== windowTypesCanon.type8.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type8.totals() * configCanon.installPc,
  },

  type9: {  //4 sliding panels double fx 400mm each.
  height1: () => (windowTypesCanon.height()-700),
  heightFx: 400,  

    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.type9.height1()+250)*4)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.type9.height1()+250)*4)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    tube: ()=>((((windowTypesCanon.width()+250)*2)+(windowTypesCanon.type9.heightFx*6))/1000)*configCanon.tube, //tube
    butterFly: () =>(((windowTypesCanon.width()*4)/1000)+(windowTypesCanon.type9.heightFx*16)/1000)*configCanon.butterFly, //butterFly
    jambCover: () => ((windowTypesCanon.type9.heightFx*4)/1000)*configCanon.jambCover, //jC
    rubber: () =>(((windowTypesCanon.height()*8)+(windowTypesCanon.width()*6))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>8*configCanon.rollers, //rollers
    lock: () =>3*configCanon.lock, //lock
    guiders: () =>16*configCanon.guiders, //guiders
    singleHeader: () => ((windowTypesCanon.type9.height1())/1000)*configCanon.singleHeader, //singleHeader 

    totals: () => {
    const values = Object.values(windowTypesCanon.type9);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type9.totals && value !== windowTypesCanon.type9.installation && value !== windowTypesCanon.type9.height1 && value !== windowTypesCanon.type9.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type9.totals() * configCanon.installPc,
  },

    type10: {  //2 sliding panels btm fx openable top with 500m heights.
  height1: () => (windowTypesCanon.height()*0.6),
  heightFx: () => (windowTypesCanon.height()*0.4),

    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.type10.height1()+250)*2)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.type10.height1()+250)*2)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    tube: ()=>(((windowTypesCanon.width()+250)*2)/1000)+((windowTypesCanon.type10.heightFx())/1000)*configCanon.tube, //tube
    butterFly: () =>(((windowTypesCanon.width()*2)/1000)+(windowTypesCanon.type10.heightFx()*2)/1000)*configCanon.butterFly, //butterFly
    jambCover: () => ((windowTypesCanon.type10.heightFx()*2)/1000)*configCanon.jambCover, //jC
    rubber: () =>(((windowTypesCanon.height()*4)+(windowTypesCanon.width()*6))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>4*configCanon.rollers, //rollers
    lock: () =>2*configCanon.lock, //lock
    guiders: () =>8*configCanon.guiders, //guiders
    pInner: () =>(((windowTypesCanon.width()*2)+(windowTypesCanon.type10.heightFx()*2.5))/1000)*configCanon.pInner, //PInner
    sideArms: () => 2*configCanon.sideArms, //sideArms
    projectHandle: () => 2*configCanon.projectHandle, //projectHandle
    projectBidding: () =>(((windowTypesCanon.width()*2)+(windowTypesCanon.type11.heightFx()*2.5))/1000)*configCanon.projectBidding, //projectBidding


    totals: () => {
    const values = Object.values(windowTypesCanon.type10);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type10.totals && value !== windowTypesCanon.type10.installation && value !== windowTypesCanon.type10.height1 && value !== windowTypesCanon.type10.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type10.totals() * configCanon.installPc,


  },

      type11: {  //3 sliding panels btm fx openable top with 500m heights.
  height1: () => (windowTypesCanon.height()*0.6),
  heightFx: () => (windowTypesCanon.height()*0.4),

    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.type11.height1()+250)*4)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.type11.height1()+250)*2)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    tube: ()=>(((windowTypesCanon.width()+250)*2)+(windowTypesCanon.type11.heightFx()*2))/1000*configCanon.tube, //tube
    butterFly: () =>(((windowTypesCanon.width()*2.5)/1000)+(windowTypesCanon.type11.heightFx()*4)/1000)*configCanon.butterFly, //butterFly
    jambCover: () => ((windowTypesCanon.type11.heightFx()*2)/1000)*configCanon.jambCover, //jC
    rubber: () =>(((windowTypesCanon.height()*6)+(windowTypesCanon.width()*6))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>4*configCanon.rollers, //rollers
    lock: () =>2*configCanon.lock, //lock
    guiders: () =>12*configCanon.guiders, //guiders
    pInner: () =>(((windowTypesCanon.width()*1.4)/1000)+((windowTypesCanon.type11.heightFx()*3)/1000))*configCanon.pInner, //PInner
    sideArms: () => 2*configCanon.sideArms, //sideArms
    projectHandle: () => 2*configCanon.projectHandle, //projectHandle
    projectBidding: () =>(((windowTypesCanon.width()*1.4)+(windowTypesCanon.type11.heightFx()*3))/1000)*configCanon.projectBidding, //projectBidding

    totals: () => {
    const values = Object.values(windowTypesCanon.type11);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type11.totals && value !== windowTypesCanon.type11.installation && value !== windowTypesCanon.type11.height1 && value !== windowTypesCanon.type11.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type11.totals() * configCanon.installPc,
  },

        type12: {  //4 sliding panels btm fx openable top with 500m heights.
  height1: () => (windowTypesCanon.height()*0.6),
  heightFx: () => (windowTypesCanon.height()*0.4),


    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.type12.height1()+250)*4)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.type12.height1()+250)*4)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    tube: ()=>(((windowTypesCanon.width()+250)*2)+(windowTypesCanon.type12.heightFx()*3))/1000*configCanon.tube, //tube
    butterFly: () =>(((windowTypesCanon.width()*3.4)/1000)+(windowTypesCanon.type12.heightFx()*6)/1000)*configCanon.butterFly, //butterFly
    jambCover: () => ((windowTypesCanon.type12.heightFx()*2)/1000)*configCanon.jambCover, //jC
    rubber: () =>(((windowTypesCanon.height()*8)+(windowTypesCanon.width()*6))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>8*configCanon.rollers, //rollers
    lock: () =>3*configCanon.lock, //lock
    guiders: () =>16*configCanon.guiders, //guiders
    singleHeader: () => ((windowTypesCanon.type12.height1())/1000)*configCanon.singleHeader, //singleHeader 
    pInner: () =>(((windowTypesCanon.width()*1.4)+(windowTypesCanon.type12.heightFx()*3))/1000)*configCanon.pInner, //PInner
    sideArms: () => 2*configCanon.sideArms, //sideArms
    projectHandle: () => 2*configCanon.projectHandle, //projectHandle
    projectBidding: () =>(((windowTypesCanon.width()*1.4)+(windowTypesCanon.type11.heightFx()*3))/1000)*configCanon.projectBidding, //projectBidding



    totals: () => {
    const values = Object.values(windowTypesCanon.type12);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type12.totals && value !== windowTypesCanon.type12.installation && value !== windowTypesCanon.type12.height1 && value !== windowTypesCanon.type12.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type12.totals() * configCanon.installPc,

  },

      type13: { //Single top-hung bath window

    pOutter: () => ((((windowTypesCanon.height()+100)*2)+((windowTypesCanon.width()+100)*2))/1000)*configCanon.pOutter, //pOutter
    pInner: () => ((((windowTypesCanon.height()+100)*2)+((windowTypesCanon.width()+100)*2))/1000)*configCanon.pInner, //pInner
    pBidding: () =>(((windowTypesCanon.height()*2)+(windowTypesCanon.width()*2))/1000)*configCanon.projectBidding, //pBidding
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    rubber: () => (((windowTypesCanon.height()*2)+(windowTypesCanon.width()*2))/1000)*configCanon.rubber,//rubber
    sideArms: () => 2*configCanon.sideArms, //sideArms
    projectHandle: () => 1*configCanon.projectHandle, //projectHandle
    woolFile: () =>(((windowTypesCanon.height()*2)+(windowTypesCanon.width()*2))/1000)*configCanon.woolFile, //woolFile

    totals: () => {
    const values = Object.values(windowTypesCanon.type13);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type13.totals && value !== windowTypesCanon.type13.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type13.totals() * configCanon.installPc,
    
  },
      type14: { //double btm fixed top-hung bath/regular window

    pOutter: () => ((((windowTypesCanon.height()+100)*2)+((windowTypesCanon.width()+100)*2))/1000)*configCanon.pOutter, //pOutter
    pInner: () => ((((windowTypesCanon.height()+100)*1.3)+((windowTypesCanon.width()+100)*3))/1000)*configCanon.pInner, //pInner
    pBidding: () =>(((windowTypesCanon.height()*2)+(windowTypesCanon.width()*4))/1000)*configCanon.projectBidding, //pBidding
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    rubber: () => (((windowTypesCanon.height()*2)+(windowTypesCanon.width()*4))/1000)*configCanon.rubber,//rubber
    sideArms: () => 2*configCanon.sideArms, //sideArms
    projectHandle: () => 1*configCanon.projectHandle, //projectHandle
    woolFile: () =>(((windowTypesCanon.height()*2)+(windowTypesCanon.width()*2))/1000)*configCanon.woolFile, //woolFile

    totals: () => {
    const values = Object.values(windowTypesCanon.type14);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type14.totals && value !== windowTypesCanon.type14.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type14.totals() * configCanon.installPc,
  },

      type15: { //Custom projecting light window
    pOutter: () => ((((windowTypesCanon.height()+100)*2)+((windowTypesCanon.width()+100)*2))/1000)*configCanon.pOutter, //pOutter
    pInner: () => ((((windowTypesCanon.height()+100)*2.4)+((windowTypesCanon.width()+100)))/1000)*configCanon.pInner, //pInner
    pBidding: () => ((((windowTypesCanon.height()+100)*4)+((windowTypesCanon.width()+100)*3))/1000)*configCanon.projectBidding, //pBidding
    sideArms: () => 2*configCanon.sideArms, //sideArms 
    rubber: () => (((windowTypesCanon.height()*4)+(windowTypesCanon.width()*3))/1000)*configCanon.rubber,//rubber
    projectHandle: () => 1*configCanon.projectHandle, //projectHandle
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    woolFile: () =>(((windowTypesCanon.height()*2)+(windowTypesCanon.width()*2))/1000)*configCanon.woolFile, //woolFile

    totals: () => {
    const values = Object.values(windowTypesCanon.type15);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type15.totals && value !== windowTypesCanon.type15.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type15.totals() * configCanon.installPc,
    },

      type16: {   //Single centre-hung
    pOutter: () => ((((windowTypesCanon.height()+100)*2)+((windowTypesCanon.width()+100)*2))/1000)*configCanon.pOutter, //pOutter
    pInner: () => ((((windowTypesCanon.height()+100))+((windowTypesCanon.width()+100)*4))/1000)*configCanon.pInner, //pInner
    pBidding: () => ((((windowTypesCanon.height()+100)*2)+((windowTypesCanon.width()+100)*6))/1000)*configCanon.projectBidding, //pBidding
    sideArms: () => 2*configCanon.sideArms, //sideArms 
    rubber: () => (((windowTypesCanon.height()*2)+(windowTypesCanon.width()*6))/1000)*configCanon.rubber,//rubber
    projectHandle: () => 1*configCanon.projectHandle, //projectHandle
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    woolFile: () =>(((windowTypesCanon.height()*2)+(windowTypesCanon.width()*2))/1000)*configCanon.woolFile, //woolFile

    totals: () => {
    const values = Object.values(windowTypesCanon.type16);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type16.totals && value !== windowTypesCanon.type16.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type16.totals() * configCanon.installPc,
  },

    type17: {  //3 sliding panels with awning top and wo fx bottom
  height1: () => (windowTypesCanon.height()*0.7),
  heightFx: () => (windowTypesCanon.height()*0.3),

    jambP: () => (((windowTypesCanon.height()+250)*2)/1000)*configCanon.jambP, //jambP
    interLock: () => (((windowTypesCanon.type17.height1()+250)*4)/1000)*configCanon.interLock, //interLock
    lockSection: () => (((windowTypesCanon.type17.height1()+250)*2)/1000)*configCanon.lockSection, //lockSection
    topBottom: () =>(((windowTypesCanon.width()+250)*2)/1000)*configCanon.topBottom, //topBottom
    headerP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.headerP, //headerP
    sillP: () =>((windowTypesCanon.width()+250)/1000)*configCanon.sillP, //sillP
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    tube: ()=>(((windowTypesCanon.width()+250)+(windowTypesCanon.type17.heightFx()*2))/1000)*configCanon.tube, //tube
    butterFly: () =>((((windowTypesCanon.width()*2)/1000)+(windowTypesCanon.type17.heightFx()*2))/1000)*configCanon.butterFly, //butterFly
    jambCover: () => ((windowTypesCanon.type17.heightFx()*2)/1000)*configCanon.jambCover, //jC
    rubber: () =>(((windowTypesCanon.height()*6)+(windowTypesCanon.width()*4))/1000)*configCanon.rubber,//rubber
    woolFile: () =>((windowTypesCanon.height()*4)/1000)*configCanon.woolFile, //woolFile
    rollers: () =>4*configCanon.rollers, //rollers
    lock: () =>2*configCanon.lock, //lock
    guiders: () =>12*configCanon.guiders, //guiders

    pInner: () =>(((windowTypesCanon.width()*2)+(windowTypesCanon.type17.heightFx()*4))/1000)*configCanon.pInner, //PInner
    sideArms: () => 2*configCanon.sideArms, //sideArms
    projectHandle: () => 2*configCanon.projectHandle, //projectHandle
    projectBidding: () =>(((windowTypesCanon.width()*2)+(windowTypesCanon.type11.heightFx()*4))/1000)*configCanon.projectBidding, //projectBidding

    totals: () => {
    const values = Object.values(windowTypesCanon.type17);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type17.totals && value !== windowTypesCanon.type17.installation && value !== windowTypesCanon.type17.height1 && value !== windowTypesCanon.type17.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type17.totals() * configCanon.installPc,
  },

      type18: {   //Fixed Light vertical
    pOutter: () => ((((windowTypesCanon.height()+100)*2)+((windowTypesCanon.width()+100)*2))/1000)*configCanon.pOutter, //pOutter
    pInner: () => ((((windowTypesCanon.height()+100)*0.6)+((windowTypesCanon.width()+100)*2))/1000)*configCanon.pInner, //pInner
    pBidding: () => ((((windowTypesCanon.height()+100)*2)+((windowTypesCanon.width()+100)*6))/1000)*configCanon.projectBidding, //pBidding
    sideArms: () => 2*configCanon.sideArms, //sideArms 
    rubber: () => (((windowTypesCanon.height()*2)+(windowTypesCanon.width()*6))/1000)*configCanon.rubber,//rubber
    projectHandle: () => 1*configCanon.projectHandle, //projectHandle
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    woolFile: () =>(((windowTypesCanon.height()*2)+(windowTypesCanon.width()*2))/1000)*configCanon.woolFile, //woolFile

    totals: () => {
    const values = Object.values(windowTypesCanon.type18);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type18.totals && value !== windowTypesCanon.type18.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type18.totals() * configCanon.installPc,
  },

      type19: {   //Fixed Light no vent
    pOutter: () => ((((windowTypesCanon.height()+100)*2)+((windowTypesCanon.width()+100)*2))/1000)*configCanon.pOutter, //pOutter
    // pInner: () => ((((windowTypesCanon.height()+100)*0.6)+((windowTypesCanon.width()+100)*2))/1000)*configCanon.pInner, //pInner
    pBidding: () => ((((windowTypesCanon.height()+100)*2)+((windowTypesCanon.width()+100)*2))/1000)*configCanon.projectBidding, //pBidding
    sideArms: () => 2*configCanon.sideArms, //sideArms 
    rubber: () => (((windowTypesCanon.height()*2)+(windowTypesCanon.width()*2))/1000)*configCanon.rubber,//rubber
    // projectHandle: () => 1*configCanon.projectHandle, //projectHandle
    glass: () => ((windowTypesCanon.height()/304.8)*(windowTypesCanon.width()/304.8))*configCanon.glass, //glass
    woolFile: () =>(((windowTypesCanon.height()*2)+(windowTypesCanon.width()*2))/1000)*configCanon.woolFile, //woolFile

    totals: () => {
    const values = Object.values(windowTypesCanon.type19);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypesCanon.type19.totals && value !== windowTypesCanon.type19.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypesCanon.type19.totals() * configCanon.installPc,
  },




};



function start2() {



     if (document.getElementById("noOfPanels") != null) {
        numberOfPanels = document.getElementById("noOfPanels").value;
        } else {
            numberOfPanels = null;

      }

      if (document.getElementById("fixedPartition") != null) {

         withWithoutPartition = document.getElementById("fixedPartition").value;
      } else {
            withWithoutPartition = null;
      }

    if (document.getElementById("bathWindowType") != null) {
       bathWType = document.getElementById("bathWindowType").value;
    }
    else {
        bathWType = null;
    }

    if (document.getElementById("topHungWindowType") != null) {
      topHungType = document.getElementById("topHungWindowType").value;
      } else {
          topHungType = null;

      }

    


    if (!windowTypesCanon.height() || !windowTypesCanon.width() || windowTypesCanon.height() <= 100 || windowTypesCanon.width() <= 100 || windowTypesCanon.height() >=9999 || windowTypesCanon.width() >=9999) {
    alert("Please enter valid height and width");
    return;
 }

  /*if (!chosenType) {
    alert("Please select a valid window type");
    return;
  }*/



  numberOfPanels === "2" & withWithoutPartition === "noPartition" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type1.totals())+(windowTypesCanon.type1.installation())).toFixed(0), 

    (
        console.log("Selected Object: type1"),
        Object.entries(windowTypesCanon.type1)
          .filter(([key, value]) => typeof value === "function")
          .forEach(([key, func]) => console.log(`Type1 - ${key}:`, func())))
    )

  : numberOfPanels === "2" && (withWithoutPartition === "fixedTop" || withWithoutPartition === "fixedBottom") ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type2.totals())+(windowTypesCanon.type2.installation())).toFixed(0),

        (
        console.log("Selected Object: type2"),
        Object.entries(windowTypesCanon.type2)
          .filter(([key, value]) => typeof value === "function")
          .forEach(([key, func]) => console.log(`Type2 - ${key}:`, func())))


      )

  : numberOfPanels === "2" && withWithoutPartition === ("doubleFixed") ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type3.totals())+(windowTypesCanon.type3.installation())).toFixed(0),
          (
        console.log("Selected Object: type3"),
        Object.entries(windowTypesCanon.type3)
          .filter(([key, value]) => typeof value === "function")
          .forEach(([key, func]) => console.log(`Type3 - ${key}:`, func())))

    )

  : numberOfPanels === "3" && withWithoutPartition === ("noPartition") ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type4.totals())+(windowTypesCanon.type4.installation())).toFixed(0),

          (
        console.log("Selected Object: type4"),
        Object.entries(windowTypesCanon.type4)
          .filter(([key, value]) => typeof value === "function")
          .forEach(([key, func]) => console.log(`Type4 - ${key}:`, func())))
    )

  : numberOfPanels === "3" & (withWithoutPartition === "fixedTop" || withWithoutPartition === "fixedBottom") ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type5.totals())+(windowTypesCanon.type5.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type5.installation()),console.log("Glass for this window: ", windowTypesCanon.type5.glass()))
  
  : numberOfPanels === "3" & withWithoutPartition === "doubleFixed"?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type6.totals())+(windowTypesCanon.type6.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type6.installation()),console.log("Glass for this window: ", windowTypesCanon.type6.glass()))
  
  : numberOfPanels === "4" & withWithoutPartition === "noPartition" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type7.totals())+(windowTypesCanon.type7.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type7.installation()),console.log("Glass for this window: ", windowTypesCanon.type7.glass()))
  
  : numberOfPanels === "4" & (withWithoutPartition === "fixedTop" || withWithoutPartition === "fixedBottom") ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type8.totals())+(windowTypesCanon.type8.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type8.installation()),console.log("Glass for this window: ", windowTypesCanon.type8.glass()))
  
  : numberOfPanels === "4" & withWithoutPartition === "doubleFixed" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type9.totals())+(windowTypesCanon.type9.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type9.installation()),console.log("Glass for this window: ", windowTypesCanon.type9.glass()))

  : numberOfPanels === "2" & withWithoutPartition === "openAbleTopFxBtm" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type10.totals())+(windowTypesCanon.type10.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type10.installation()),console.log("Glass for this window: ", windowTypesCanon.type10.glass()))

  : numberOfPanels === "3" & withWithoutPartition === "openAbleTopFxBtm" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type11.totals())+(windowTypesCanon.type11.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type11.installation()),console.log("Glass for this window: ", windowTypesCanon.type11.glass()))

  : numberOfPanels === "4" & withWithoutPartition === "openAbleTopFxBtm" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type12.totals())+(windowTypesCanon.type12.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type12.installation()),console.log("Glass for this window: ", windowTypesCanon.type12.glass()))

  : bathWType === "singlePanel" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type13.totals())+(windowTypesCanon.type13.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type13.installation()),console.log("Glass for this window: ", windowTypesCanon.type13.glass()))
  
  : bathWType === "doublePanel" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type14.totals())+(windowTypesCanon.type14.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type14.installation()),console.log("Glass for this window: ", windowTypesCanon.type14.glass()))
  
  : topHungType === "doublePanel" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type14.totals())+(windowTypesCanon.type14.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type14.installation()),console.log("Glass for this window: ", windowTypesCanon.type14.glass()))

  : topHungType === "singlePanel" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type13.totals())+(windowTypesCanon.type13.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type13.installation()),console.log("Glass for this window: ", windowTypesCanon.type13.glass()))
 
  : topHungType === "customLight" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type15.totals())+(windowTypesCanon.type15.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type15.installation()),console.log("Glass for this window: ", windowTypesCanon.type15.glass()))

  : topHungType === "centerHung" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type16.totals())+(windowTypesCanon.type16.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type16.installation()),console.log("Glass for this window: ", windowTypesCanon.type16.glass()))

  : numberOfPanels === "3" & withWithoutPartition === "openAbleTop" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type17.totals())+(windowTypesCanon.type17.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type17.installation()),console.log("Glass for this window: ", windowTypesCanon.type17.glass()))

  : topHungType === "fixedLight" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type18.totals())+(windowTypesCanon.type18.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type18.installation()))

  : topHungType === "fixedLight2" ?
    (document.getElementById("cost").value=" Ksh. "+((windowTypesCanon.type19.totals())+(windowTypesCanon.type19.installation())).toFixed(0), console.log("installation: ", windowTypesCanon.type19.installation()))

  : alert("Please enter valid type"); 






/*console.log("jambP for type17 is:", windowTypesCanon.type17.jambP());
console.log("sillP for type17 is:", windowTypesCanon.type17.sillP());
console.log("headerP for type17 is:", windowTypesCanon.type17.headerP());
console.log("interLock for type17 is:", windowTypesCanon.type17.interLock());
console.log("lockSection for type17 is:", windowTypesCanon.type17.lockSection());
console.log("topBottom for type17 is:", windowTypesCanon.type17.topBottom());
console.log("glass for type17 is:", windowTypesCanon.type17.glass());
console.log("rubber for type17 is:", windowTypesCanon.type17.rubber());
console.log("rollers for type17 is:", windowTypesCanon.type17.rollers());
console.log("lock for type17 is:", windowTypesCanon.type17.lock());
console.log("woolfile for type17 is:", windowTypesCanon.type17.woolFile());

console.log("tube for type17 is:", windowTypesCanon.type17.tube());
console.log("butterFly for type17 is:", windowTypesCanon.type17.butterFly());
console.log("pInner for type17 is:", windowTypesCanon.type17.pInner());
console.log("jambCover for type17 is:", windowTypesCanon.type17.jambCover());
console.log("sideArms for type17 is:", windowTypesCanon.type17.sideArms());
console.log("projectHandle for type17 is:", windowTypesCanon.type17.projectHandle());
//console.log("rubber for type17 is:", windowTypesCanon.type17.rubber());
//console.log("rollers for type17 is:", windowTypesCanon.type17.rollers());
//console.log("lock for type17 is:", windowTypesCanon.type17.lock());
//console.log("woolfile for type17 is:", windowTypesCanon.type17.woolFile());
console.log("projectBidding for type17 is:", windowTypesCanon.type17.projectBidding());*/




  }   //start2() End

function typeGallery(){

     if (document.getElementById("noOfPanels") != null) {
        numberOfPanels = document.getElementById("noOfPanels").value;
        } else {
            numberOfPanels = null;

      }

      if (document.getElementById("fixedPartition") != null) {

         withWithoutPartition = document.getElementById("fixedPartition").value;
      } else {
            withWithoutPartition = null;
      }

          if (document.getElementById("bathWindowType") != null) {
       bathWType = document.getElementById("bathWindowType").value;
    }
    else {
        bathWType = null;
    }

        if (document.getElementById("topHungWindowType") != null) {
      topHungType = document.getElementById("topHungWindowType").value;
      } else {
          topHungType = null;

      }



  numberOfPanels === "2" & withWithoutPartition === "noPartition" ?
    (document.getElementById("img-type").src="img/type-1.png")

  : numberOfPanels === "2" && (withWithoutPartition === "fixedTop" || withWithoutPartition === "fixedBottom") ?
     (document.getElementById("img-type").src="img/type-3.png")


  : numberOfPanels === "2" && withWithoutPartition === ("doubleFixed") ?
     (document.getElementById("img-type").src="img/type-5.png")


  : numberOfPanels === "3" && withWithoutPartition === ("noPartition") ?
    (document.getElementById("img-type").src="img/type-2.png")

  : numberOfPanels === "3" & (withWithoutPartition === "fixedTop" || withWithoutPartition === "fixedBottom") ?
    (document.getElementById("img-type").src="img/type-4.png")
 
  : numberOfPanels === "3" & withWithoutPartition === "doubleFixed"?
    (document.getElementById("img-type").src="img/type-6.png")
 
  : numberOfPanels === "4" & withWithoutPartition === "noPartition" ?
    (document.getElementById("img-type").src="img/type-1.png")

  : numberOfPanels === "4" & (withWithoutPartition === "fixedTop" || withWithoutPartition === "fixedBottom") ?
    (document.getElementById("img-type").src="img/type-1.png")

  : numberOfPanels === "4" & withWithoutPartition === "doubleFixed" ?
    (document.getElementById("img-type").src="img/type-1.png")

  : numberOfPanels === "2" & withWithoutPartition === "openAbleTopFxBtm" ?
    (document.getElementById("img-type").src="img/type-10.png")

  : numberOfPanels === "3" & withWithoutPartition === "openAbleTopFxBtm" ?
    (document.getElementById("img-type").src="img/type-11.png")

  : numberOfPanels === "4" & withWithoutPartition === "openAbleTopFxBtm" ?
    (document.getElementById("img-type").src="img/type-11.png")

  : bathWType === "singlePanel" ?
    (document.getElementById("img-type").src="../img/type-12.png")

  : bathWType === "doublePanel" ?
    (document.getElementById("img-type").src="../img/type-13.png")

  : topHungType === "doublePanel" ?
    (document.getElementById("img-type").src="../img/type-14.png")

  : topHungType === "singlePanel" ?
    (document.getElementById("img-type").src="../img/type-12.png")

  : topHungType === "customLight" ?
    (document.getElementById("img-type").src="../img/custom-1.png")

  : topHungType === "centerHung" ?
    (document.getElementById("img-type").src="../img/type-15.png")
  





       : document.getElementById("img-type").src="../img/type-1.png"; 



}   //typeGallery() end


// Define a function to load the window cart from local storage
function loadWindowCart() {
  const cartData = localStorage.getItem("windowCart");
  if (cartData) {
    return JSON.parse(cartData);
  } else {
    return {};
  }
}

// Define a function to save the window cart to local storage
function saveWindowCart(windowCart) {
  localStorage.setItem("windowCart", JSON.stringify(windowCart));
}



// Initialize the window cart by loading from local storage
const windowCart = loadWindowCart();

// Function to add window to cart
function addToCart() {
  // Retrieve user input values
  const height = parseFloat(document.getElementById("heightId").value);
  const width = parseFloat(document.getElementById("widthId").value);

  // Retrieve other input values for selected options
  const numberOfPanels = document.getElementById("noOfPanels")?.value || null;
  const withWithoutPartition = document.getElementById("fixedPartition")?.value || null;
  const bathWType = document.getElementById("bathWindowType")?.value || null;
  const topHungType = document.getElementById("topHungWindowType")?.value || null;
  const profileColour = document.getElementById("profileColour")?.value || null;
  const glassType = document.getElementById("glassType")?.value || null;
  const glassThickness = document.getElementById("glassThickness")?.value || null;





  // Create a window object using the selected options and the measurements
  const selectedOptions = {
    height: height,
    width: width,
    numberOfPanels: numberOfPanels,
    withWithoutPartition: withWithoutPartition,
    bathWType: bathWType,
    topHungType: topHungType,
    profileColour: profileColour,
    glassType: glassType,
    glassThickness: glassThickness,
    // Add other selected options based on user input

  };



  // Identify the corresponding window type based on selected options
  let windowCost;

  // Logic to determine the window type based on selected options

  if (numberOfPanels === "3" && (withWithoutPartition === "fixedTop" || withWithoutPartition === "fixedBottom")) {
    windowCost=((windowTypesCanon.type5.totals()) + (windowTypesCanon.type5.installation())).toFixed(0)


  } else if (numberOfPanels === "3" && withWithoutPartition === "doubleFixed") {
    windowCost=((windowTypesCanon.type6.totals()) + (windowTypesCanon.type6.installation())).toFixed(0)


  } else if (numberOfPanels === "4" && withWithoutPartition === "noPartition") {
    windowCost=((windowTypesCanon.type7.totals()) + (windowTypesCanon.type7.installation())).toFixed(0)

  }

  // Generate a unique identifier for the window
  const windowId = generateWindowId();

  

  // Add the selected options, window type, and cost to the windowCart object
    windowCart[windowId] = {
    options: selectedOptions,
    cost: windowCost,
    };

  // Save the updated window cart to local storage
  saveWindowCart(windowCart);

  // Clear the input fields for the next window
  document.getElementById("heightId").value = "";
  document.getElementById("widthId").value = "";
  // Clear other input fields as needed

  console.log(windowCart);
}

// Initialize a counter variable
let windowCounter = 1;

// Function to generate a unique identifier for the window
function generateWindowId() {
  // Generate the windowId using the counter
  const windowId = `WIN${windowCounter.toString().padStart(4, "0")}`;
  
  // Increment the counter for the next window
  windowCounter++;
  
  // Return the unique window identifier
  return windowId;
}
