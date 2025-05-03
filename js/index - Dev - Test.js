

const windowTypes = {
  height: () => parseFloat(document.getElementById("heightId").value),
  width: () => parseFloat(document.getElementById("widthId").value),


  type1: {  //2 sliding panels w/o fx.
    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.height()+250)*2)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.height()+250)*2)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () =>((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    rubber: () =>(((windowTypes.height()*4)+(windowTypes.width()*2))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>4*config.rollers, //rollers
    lock: () =>2*config.lock, //lock
    guiders: () =>8*config.guiders, //guiders

    totals: () => {
    const values = Object.values(windowTypes.type1);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type1.totals && value !== windowTypes.type1.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type1.totals() * config.installPc, 
    
  },
  type2: {  //2 sliding panels single fx 400mm   
  height1: () => (windowTypes.height()-400),
  heightFx: 400,  

    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.type2.height1()+250)*2)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.type2.height1()+250)*2)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    tube: ()=>(((windowTypes.width()+250)+windowTypes.type2.heightFx)/1000)*config.tube, //tube
    butterFly: () =>(((windowTypes.width()*2)/1000)+(windowTypes.type2.heightFx*4)/1000)*config.butterFly, //butterFly
    jambCover: () => ((windowTypes.type2.heightFx*2)/1000)*config.jambCover, //jC
    rubber: () =>(((windowTypes.height()*4)+(windowTypes.width()*4))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>4*config.rollers, //rollers
    lock: () =>2*config.lock, //lock
    guiders: () =>8*config.guiders, //guiders

    totals: () => {
    const values = Object.values(windowTypes.type2);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type2.totals && value !== windowTypes.type2.installation && value !== windowTypes.type2.height1 && value !== windowTypes.type2.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type2.totals() * config.installPc,
  },

  type3: { //2 sliding panels double fx 400mm each.
  height1: () => (windowTypes.height()-700),
  heightFx: 400,  

    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.type3.height1()+250)*2)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.type3.height1()+250)*2)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    tube: ()=>((((windowTypes.width()+250)*2)+(windowTypes.type3.heightFx*2))/1000)*config.tube, //tube
    butterFly: () =>(((windowTypes.width()*4)/1000)+(windowTypes.type3.heightFx*8)/1000)*config.butterFly, //butterFly
    jambCover: () => ((windowTypes.type3.heightFx*4)/1000)*config.jambCover, //jC
    rubber: () =>(((windowTypes.height()*4)+(windowTypes.width()*6))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>4*config.rollers, //rollers
    lock: () =>2*config.lock, //lock
    guiders: () =>8*config.guiders, //guiders

    totals: () => {
    const values = Object.values(windowTypes.type3);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type3.totals && value !== windowTypes.type3.installation && value !== windowTypes.type3.height1 && value !== windowTypes.type3.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type3.totals() * config.installPc,
  },

  type4: {  //3 sliding panels w/o fx.
    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.height()+250)*4)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.height()+250)*2)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    rubber: () =>(((windowTypes.height()*6)+(windowTypes.width()*2))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>4*config.rollers,  //rollers
    lock: () =>2*config.lock, //lock
    guiders: () =>12*config.guiders, //guiders

    totals: () => {
    const values = Object.values(windowTypes.type4);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type4.totals && value !== windowTypes.type4.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type4.totals() * config.installPc,
  },

  type5: {  //3 sliding panels single fx 400mm
  height1: () => (windowTypes.height()-400),
  heightFx: 400,  

    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.type5.height1()+250)*4)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.type5.height1()+250)*2)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    tube: ()=>(((windowTypes.width()+250)+(windowTypes.type5.heightFx*2))/1000)*config.tube, //tube
    butterFly: () =>(((windowTypes.width()*2)/1000)+(windowTypes.type5.heightFx*6)/1000)*config.butterFly, //butterFly
    jambCover: () => ((windowTypes.type5.heightFx*2)/1000)*config.jambCover, //jC
    rubber: () =>(((windowTypes.height()*6)+(windowTypes.width()*4))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>4*config.rollers, //rollers
    lock: () =>2*config.lock, //lock
    guiders: () =>12*config.guiders, //guiders



    totals: () => {
    const values = Object.values(windowTypes.type5);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type5.totals && value !== windowTypes.type5.installation && value !== windowTypes.type5.height1 && value !== windowTypes.type5.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type5.totals() * config.installPc,
  },

  type6: {  //3 sliding panels double fx 400mm each.
  height1: () => (windowTypes.height()-700),
  heightFx: 400,  

    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.type6.height1()+250)*4)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.type6.height1()+250)*2)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    tube: ()=>((((windowTypes.width()+250)*2)+(windowTypes.type6.heightFx*4))/1000)*config.tube, //tube
    butterFly: () =>(((windowTypes.width()*4)/1000)+(windowTypes.type6.heightFx*12)/1000)*config.butterFly, //butterFly
    jambCover: () => ((windowTypes.type6.heightFx*4)/1000)*config.jambCover, //jC
    rubber: () =>(((windowTypes.height()*6)+(windowTypes.width()*6))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>4*config.rollers, //rollers
    lock: () =>2*config.lock, //lock
    guiders: () =>12*config.guiders, //guiders

    totals: () => {
    const values = Object.values(windowTypes.type6);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type6.totals && value !== windowTypes.type6.installation && value !== windowTypes.type6.height1 && value !== windowTypes.type6.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type6.totals() * config.installPc,
  },

  type7: { //4 sliding panels w/o fx.
    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.height()+250)*4)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.height()+250)*4)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    rubber: () =>(((windowTypes.height()*8)+(windowTypes.width()*2))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>8*config.rollers,  //rollers
    lock: () =>3*config.lock, //lock
    guiders: () =>12*config.guiders, //guiders
    singleHeader: () =>(windowTypes.height()/1000)*config.singleHeader, //singleHeader 

    totals: () => {
    const values = Object.values(windowTypes.type7);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type7.totals && value !== windowTypes.type7.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type7.totals() * config.installPc,
  },

  type8: {  //4 sliding panels single fx 400mm
  height1: () => (windowTypes.height()-400),
  heightFx: 400,  

    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.type8.height1()+250)*4)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.type8.height1()+250)*4)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    tube: ()=>(((windowTypes.width()+250)/1000)+(windowTypes.type8.heightFx*3)/1000)*config.tube, //tube
    butterFly: () =>(((windowTypes.width()*2)/1000)+(windowTypes.type8.heightFx*8)/1000)*config.butterFly, //butterFly
    jambCover: () => ((windowTypes.type8.heightFx*2)/1000)*config.jambCover, //jC
    rubber: () =>(((windowTypes.height()*8)+(windowTypes.width()*4))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>8*config.rollers, //rollers
    lock: () =>3*config.lock, //lock
    guiders: () =>16*config.guiders, //guiders
    singleHeader: () =>(windowTypes.type8.height1()/1000)*config.singleHeader, //singleHeader 

    totals: () => {
    const values = Object.values(windowTypes.type8);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type8.totals && value !== windowTypes.type8.installation && value !== windowTypes.type8.height1 && value !== windowTypes.type8.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type8.totals() * config.installPc,
  },

  type9: {  //4 sliding panels double fx 400mm each.
  height1: () => (windowTypes.height()-700),
  heightFx: 400,  

    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.type9.height1()+250)*4)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.type9.height1()+250)*4)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    tube: ()=>((((windowTypes.width()+250)*2)+(windowTypes.type9.heightFx*6))/1000)*config.tube, //tube
    butterFly: () =>(((windowTypes.width()*4)/1000)+(windowTypes.type9.heightFx*16)/1000)*config.butterFly, //butterFly
    jambCover: () => ((windowTypes.type9.heightFx*4)/1000)*config.jambCover, //jC
    rubber: () =>(((windowTypes.height()*8)+(windowTypes.width()*6))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>8*config.rollers, //rollers
    lock: () =>3*config.lock, //lock
    guiders: () =>16*config.guiders, //guiders
    singleHeader: () => ((windowTypes.type9.height1())/1000)*config.singleHeader, //singleHeader 

    totals: () => {
    const values = Object.values(windowTypes.type9);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type9.totals && value !== windowTypes.type9.installation && value !== windowTypes.type9.height1 && value !== windowTypes.type9.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type9.totals() * config.installPc,
  },

    type10: {  //2 sliding panels btm fx openable top with 500m heights.
  height1: () => (windowTypes.height()*0.6),
  heightFx: () => (windowTypes.height()*0.4),

    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.type10.height1()+250)*2)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.type10.height1()+250)*2)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    tube: ()=>(((windowTypes.width()+250)*2)/1000)+((windowTypes.type10.heightFx())/1000)*config.tube, //tube
    butterFly: () =>(((windowTypes.width()*2)/1000)+(windowTypes.type10.heightFx()*2)/1000)*config.butterFly, //butterFly
    jambCover: () => ((windowTypes.type10.heightFx()*2)/1000)*config.jambCover, //jC
    rubber: () =>(((windowTypes.height()*4)+(windowTypes.width()*6))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>4*config.rollers, //rollers
    lock: () =>2*config.lock, //lock
    guiders: () =>8*config.guiders, //guiders
    pInner: () =>(((windowTypes.width()*2)+(windowTypes.type10.heightFx()*2.5))/1000)*config.pInner, //PInner
    sideArms: () => 2*config.sideArms, //sideArms
    projectHandle: () => 2*config.projectHandle, //projectHandle
    projectBidding: () =>(((windowTypes.width()*2)+(windowTypes.type10.heightFx()*2.5))/1000)*config.projectBidding, //projectBidding


    totals: () => {
    const values = Object.values(windowTypes.type10);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type10.totals && value !== windowTypes.type10.installation && value !== windowTypes.type10.height1 && value !== windowTypes.type10.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type10.totals() * config.installPc,


  },

      type11: {  //3 sliding panels btm fx openable top with 500m heights.
  height1: () => (windowTypes.height()*0.6),
  heightFx: () => (windowTypes.height()*0.4),

    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.type11.height1()+250)*4)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.type11.height1()+250)*2)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    tube: ()=>(((windowTypes.width()+250)*2)+(windowTypes.type11.heightFx()*2))/1000*config.tube, //tube
    butterFly: () =>(((windowTypes.width()*2.5)/1000)+(windowTypes.type11.heightFx()*4)/1000)*config.butterFly, //butterFly
    jambCover: () => ((windowTypes.type11.heightFx()*2)/1000)*config.jambCover, //jC
    rubber: () =>(((windowTypes.height()*6)+(windowTypes.width()*6))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>4*config.rollers, //rollers
    lock: () =>2*config.lock, //lock
    guiders: () =>12*config.guiders, //guiders
    pInner: () =>(((windowTypes.width()*1.4)/1000)+((windowTypes.type11.heightFx()*3)/1000))*config.pInner, //PInner
    sideArms: () => 2*config.sideArms, //sideArms
    projectHandle: () => 2*config.projectHandle, //projectHandle
    projectBidding: () =>(((windowTypes.width()*1.4)+(windowTypes.type11.heightFx()*3))/1000)*config.projectBidding, //projectBidding

    totals: () => {
    const values = Object.values(windowTypes.type11);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type11.totals && value !== windowTypes.type11.installation && value !== windowTypes.type11.height1 && value !== windowTypes.type11.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type11.totals() * config.installPc,
  },

        type12: {  //4 sliding panels btm fx openable top with 500m heights.
  height1: () => (windowTypes.height()*0.6),
  heightFx: () => (windowTypes.height()*0.4),


    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.type12.height1()+250)*4)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.type12.height1()+250)*4)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    tube: ()=>(((windowTypes.width()+250)*2)+(windowTypes.type12.heightFx()*3))/1000*config.tube, //tube
    butterFly: () =>(((windowTypes.width()*3.4)/1000)+(windowTypes.type12.heightFx()*6)/1000)*config.butterFly, //butterFly
    jambCover: () => ((windowTypes.type12.heightFx()*2)/1000)*config.jambCover, //jC
    rubber: () =>(((windowTypes.height()*8)+(windowTypes.width()*6))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>8*config.rollers, //rollers
    lock: () =>3*config.lock, //lock
    guiders: () =>16*config.guiders, //guiders
    singleHeader: () => ((windowTypes.type12.height1())/1000)*config.singleHeader, //singleHeader 
    pInner: () =>(((windowTypes.width()*1.4)+(windowTypes.type12.heightFx()*3))/1000)*config.pInner, //PInner
    sideArms: () => 2*config.sideArms, //sideArms
    projectHandle: () => 2*config.projectHandle, //projectHandle
    projectBidding: () =>(((windowTypes.width()*1.4)+(windowTypes.type11.heightFx()*3))/1000)*config.projectBidding, //projectBidding



    totals: () => {
    const values = Object.values(windowTypes.type12);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type12.totals && value !== windowTypes.type12.installation && value !== windowTypes.type12.height1 && value !== windowTypes.type12.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type12.totals() * config.installPc,

  },

      type13: { //Single top-hung bath window

    pOutter: () => ((((windowTypes.height()+100)*2)+((windowTypes.width()+100)*2))/1000)*config.pOutter, //pOutter
    pInner: () => ((((windowTypes.height()+100)*2)+((windowTypes.width()+100)*2))/1000)*config.pInner, //pInner
    pBidding: () =>(((windowTypes.height()*2)+(windowTypes.width()*2))/1000)*config.projectBidding, //pBidding
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    rubber: () => (((windowTypes.height()*2)+(windowTypes.width()*2))/1000)*config.rubber,//rubber
    sideArms: () => 2*config.sideArms, //sideArms
    projectHandle: () => 1*config.projectHandle, //projectHandle
    woolFile: () =>(((windowTypes.height()*2)+(windowTypes.width()*2))/1000)*config.woolFile, //woolFile

    totals: () => {
    const values = Object.values(windowTypes.type13);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type13.totals && value !== windowTypes.type13.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type13.totals() * config.installPc,
    
  },
      type14: { //double btm fixed top-hung bath/regular window

    pOutter: () => ((((windowTypes.height()+100)*2)+((windowTypes.width()+100)*2))/1000)*config.pOutter, //pOutter
    pInner: () => ((((windowTypes.height()+100)*1.3)+((windowTypes.width()+100)*3))/1000)*config.pInner, //pInner
    pBidding: () =>(((windowTypes.height()*2)+(windowTypes.width()*4))/1000)*config.projectBidding, //pBidding
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    rubber: () => (((windowTypes.height()*2)+(windowTypes.width()*4))/1000)*config.rubber,//rubber
    sideArms: () => 2*config.sideArms, //sideArms
    projectHandle: () => 1*config.projectHandle, //projectHandle
    woolFile: () =>(((windowTypes.height()*2)+(windowTypes.width()*2))/1000)*config.woolFile, //woolFile

    totals: () => {
    const values = Object.values(windowTypes.type14);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type14.totals && value !== windowTypes.type14.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type14.totals() * config.installPc,
  },

      type15: { //Custom projecting light window
    pOutter: () => ((((windowTypes.height()+100)*2)+((windowTypes.width()+100)*2))/1000)*config.pOutter, //pOutter
    pInner: () => ((((windowTypes.height()+100)*2.4)+((windowTypes.width()+100)))/1000)*config.pInner, //pInner
    pBidding: () => ((((windowTypes.height()+100)*4)+((windowTypes.width()+100)*3))/1000)*config.projectBidding, //pBidding
    sideArms: () => 2*config.sideArms, //sideArms 
    rubber: () => (((windowTypes.height()*4)+(windowTypes.width()*3))/1000)*config.rubber,//rubber
    projectHandle: () => 1*config.projectHandle, //projectHandle
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    woolFile: () =>(((windowTypes.height()*2)+(windowTypes.width()*2))/1000)*config.woolFile, //woolFile

    totals: () => {
    const values = Object.values(windowTypes.type15);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type15.totals && value !== windowTypes.type15.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type15.totals() * config.installPc,
    },

      type16: {   //Single centre-hung
    pOutter: () => ((((windowTypes.height()+100)*2)+((windowTypes.width()+100)*2))/1000)*config.pOutter, //pOutter
    pInner: () => ((((windowTypes.height()+100))+((windowTypes.width()+100)*4))/1000)*config.pInner, //pInner
    pBidding: () => ((((windowTypes.height()+100)*2)+((windowTypes.width()+100)*6))/1000)*config.projectBidding, //pBidding
    sideArms: () => 2*config.sideArms, //sideArms 
    rubber: () => (((windowTypes.height()*2)+(windowTypes.width()*6))/1000)*config.rubber,//rubber
    projectHandle: () => 1*config.projectHandle, //projectHandle
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    woolFile: () =>(((windowTypes.height()*2)+(windowTypes.width()*2))/1000)*config.woolFile, //woolFile

    totals: () => {
    const values = Object.values(windowTypes.type16);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type16.totals && value !== windowTypes.type16.installation);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type16.totals() * config.installPc,
  },

    type17: {  //3 sliding panels with awning top and wo fx bottom
  height1: () => (windowTypes.height()*0.7),
  heightFx: () => (windowTypes.height()*0.3),

    jambP: () => (((windowTypes.height()+250)*2)/1000)*config.jambP, //jambP
    interLock: () => (((windowTypes.type17.height1()+250)*4)/1000)*config.interLock, //interLock
    lockSection: () => (((windowTypes.type17.height1()+250)*2)/1000)*config.lockSection, //lockSection
    topBottom: () =>(((windowTypes.width()+250)*2)/1000)*config.topBottom, //topBottom
    headerP: () =>((windowTypes.width()+250)/1000)*config.headerP, //headerP
    sillP: () =>((windowTypes.width()+250)/1000)*config.sillP, //sillP
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    tube: ()=>(((windowTypes.width()+250)+(windowTypes.type17.heightFx()*2))/1000)*config.tube, //tube
    butterFly: () =>((((windowTypes.width()*2)/1000)+(windowTypes.type17.heightFx()*6))/1000)*config.butterFly, //butterFly
    jambCover: () => ((windowTypes.type17.heightFx()*2)/1000)*config.jambCover, //jC
    rubber: () =>(((windowTypes.height()*6)+(windowTypes.width()*4))/1000)*config.rubber,//rubber
    woolFile: () =>((windowTypes.height()*4)/1000)*config.woolFile, //woolFile
    rollers: () =>4*config.rollers, //rollers
    lock: () =>2*config.lock, //lock
    guiders: () =>12*config.guiders, //guiders

    pInner: () =>(((windowTypes.width()*2)+(windowTypes.type17.heightFx()*4))/1000)*config.pInner, //PInner
    sideArms: () => 2*config.sideArms, //sideArms
    projectHandle: () => 2*config.projectHandle, //projectHandle
    projectBidding: () =>(((windowTypes.width()*2)+(windowTypes.type11.heightFx()*4))/1000)*config.projectBidding, //projectBidding

    totals: () => {
    const values = Object.values(windowTypes.type17);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type17.totals && value !== windowTypes.type17.installation && value !== windowTypes.type17.height1 && value !== windowTypes.type17.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type17.totals() * config.installPc,
  },

    type18: {  //4 sliding Folding panels

    topRailP: () => ((windowTypes.width()+500)/1000)*config.topRailP, //topRail
    bottomTrackP: () => ((windowTypes.width()+500)/1000)*config.bottomTrackP, //bottomTrack
    foldingSashP: () => ((((windowTypes.height()+250)*8)+((windowTypes.width()+250)*2))/1000)*config.foldingSashP, //foldingSash
    foldingBeading: () =>((((windowTypes.height()+250)*8)+((windowTypes.width()+250)*2))/1000)*config.foldingBeading, //foldingBeading
    outerFrameP: () =>(((windowTypes.height()+500)*2)/1000)*config.outerFrameP, //outerFrame
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    rubber: () =>(((windowTypes.height()*8)+(windowTypes.width()*2))/1000)*config.foldingRubber,//rubber
    woolFile: () =>(((windowTypes.height()*8)+(windowTypes.width()*2))/1000)*config.woolFile, //woolFile
    foldingRollers: () =>2*config.foldingRollers, //rollers
    foldingLock: () =>1*config.foldingLock, //lock
    foldingGuiders: () =>2*config.foldingGuiders, //guiders
    foldingHinges: () =>6*config.foldingHinges, //hinges


    totals: () => {
    const values = Object.values(windowTypes.type18);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type18.totals && value !== windowTypes.type18.installation && value !== windowTypes.type18.height1 && value !== windowTypes.type18.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type18.totals() * config.installPc,
  },

    type19: {  //3 sliding Folding panels

    topRailP: () => ((windowTypes.width()+500)/1000)*config.topRailP, //topRail
    bottomTrackP: () => ((windowTypes.width()+500)/1000)*config.bottomTrackP, //bottomTrack
    foldingSashP: () => ((((windowTypes.height()+250)*6)+((windowTypes.width()+250)*2))/1000)*config.foldingSashP, //foldingSash
    foldingBeading: () =>((((windowTypes.height()+250)*6)+((windowTypes.width()+250)*2))/1000)*config.foldingBeading, //foldingBeading
    outerFrameP: () =>(((windowTypes.height()+500)*2)/1000)*config.outerFrameP, //outerFrame
    glass: () => ((windowTypes.height()/304.8)*(windowTypes.width()/304.8))*config.glass, //glass
    rubber: () =>(((windowTypes.height()*6)+(windowTypes.width()*2))/1000)*config.foldingRubber,//rubber
    woolFile: () =>(((windowTypes.height()*6)+(windowTypes.width()*2))/1000)*config.woolFile, //woolFile
    foldingRollers: () =>1*config.foldingRollers, //rollers
    foldingLock: () =>1*config.foldingLock, //lock
    foldingGuiders: () =>1*config.foldingGuiders, //guiders
    foldingHinges: () =>7*config.foldingHinges, //hinges

    totals: () => {
    const values = Object.values(windowTypes.type19);
    const functions = values.filter(value => typeof value === "function" && value !== windowTypes.type19.totals && value !== windowTypes.type19.installation && value !== windowTypes.type19.height1 && value !== windowTypes.type19.heightFx);
    return functions.reduce((sum, func) => sum + func(), 0);
    },
    installation: () => windowTypes.type19.totals() * config.installPc,
  },




};


// Helper function definition

function logObjectFunctions(obj, objName) {
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "function") {
      console.log(`${key} for ${objName} is: `, value());
    }
  });
}



function start() {

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

    


    if (!windowTypes.height() || !windowTypes.width() || windowTypes.height() <= 100 || windowTypes.width() <= 100 || windowTypes.height() >=9999 || windowTypes.width() >=9999) {
    alert("Please enter valid height and width");
    return;
 }

  /*if (!chosenType) {
    alert("Please select a valid window type");
    return;
  }*/

  numberOfPanels === "2" & withWithoutPartition === "noPartition" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type1.totals())+(windowTypes.type1.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type1, "type1");
    })()

  : numberOfPanels === "2" && (withWithoutPartition === "fixedTop" || withWithoutPartition === "fixedBottom") ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type2.totals())+(windowTypes.type2.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type2, "type2");
    })()

  : numberOfPanels === "2" && withWithoutPartition === ("doubleFixed") ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type3.totals())+(windowTypes.type3.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type3, "type3");
    })()

  : numberOfPanels === "3" && withWithoutPartition === ("noPartition") ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type4.totals())+(windowTypes.type4.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type4, "type4");
    })()

  : numberOfPanels === "3" & (withWithoutPartition === "fixedTop" || withWithoutPartition === "fixedBottom") ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type5.totals())+(windowTypes.type5.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type5, "type5");
    })()

  : numberOfPanels === "3" & withWithoutPartition === "doubleFixed"?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type6.totals())+(windowTypes.type6.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type6, "type6");
    })()

  : numberOfPanels === "4" & withWithoutPartition === "noPartition" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type7.totals())+(windowTypes.type7.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type7, "type7");
    })()

  : numberOfPanels === "4" & (withWithoutPartition === "fixedTop" || withWithoutPartition === "fixedBottom") ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type8.totals())+(windowTypes.type8.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type8, "type8");
    })()

  : numberOfPanels === "4" & withWithoutPartition === "doubleFixed" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type9.totals())+(windowTypes.type9.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type9, "type9");
    })()

  : numberOfPanels === "2" & withWithoutPartition === "openAbleTopFxBtm" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type10.totals())+(windowTypes.type10.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type10, "type10");
    })()

  : numberOfPanels === "3" & withWithoutPartition === "openAbleTopFxBtm" ?
    
    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type11.totals())+(windowTypes.type11.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type11, "type11");
    })()

  : numberOfPanels === "4" & withWithoutPartition === "openAbleTopFxBtm" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type12.totals())+(windowTypes.type12.installation())).toFixed(0);
            logObjectFunctions(windowTypes.type12, "type12");
    })()

  : bathWType === "singlePanel" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type13.totals())+(windowTypes.type13.installation())).toFixed(0); 
      logObjectFunctions(windowTypes.type13, "type13");
    })()

  
  : bathWType === "doublePanel" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type14.totals())+(windowTypes.type14.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type14, "type14");
    })()

  : bathWType === "centerHung" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type16.totals())+(windowTypes.type16.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type16, "type16");
    })()

  : topHungType === "doublePanel" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type14.totals())+(windowTypes.type14.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type14, "type14");
    })()

  : topHungType === "singlePanel" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type13.totals())+(windowTypes.type13.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type13, "type13");
    })()

  : topHungType === "customLight" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type15.totals())+(windowTypes.type15.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type15, "type15");
    })()

  : topHungType === "centerHung" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type16.totals())+(windowTypes.type16.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type16, "type16");
    })()

  : numberOfPanels === "3" & withWithoutPartition === "openAbleTop" ?

    (() => {
    document.getElementById("cost").value=" Ksh. "+((windowTypes.type17.totals())+(windowTypes.type17.installation())).toFixed(0);
      logObjectFunctions(windowTypes.type17, "type17");
    })()

  : alert("Please enter valid type"); 


// console.log("jambP for type1 is:", windowTypes.type1.jambP());
/*
console.log("jambP for type17 is:", windowTypes.type17.jambP());
console.log("sillP for type17 is:", windowTypes.type17.sillP());
console.log("headerP for type17 is:", windowTypes.type17.headerP());
console.log("interLock for type17 is:", windowTypes.type17.interLock());
console.log("lockSection for type17 is:", windowTypes.type17.lockSection());
console.log("topBottom for type17 is:", windowTypes.type17.topBottom());
console.log("glass for type17 is:", windowTypes.type17.glass());
console.log("rubber for type17 is:", windowTypes.type17.rubber());
console.log("rollers for type17 is:", windowTypes.type17.rollers());
console.log("lock for type17 is:", windowTypes.type17.lock());
console.log("woolfile for type17 is:", windowTypes.type17.woolFile());

console.log("tube for type17 is:", windowTypes.type17.tube());
console.log("butterFly for type17 is:", windowTypes.type17.butterFly());
console.log("pInner for type17 is:", windowTypes.type17.pInner());
console.log("jambCover for type17 is:", windowTypes.type17.jambCover());
console.log("sideArms for type17 is:", windowTypes.type17.sideArms());
console.log("projectHandle for type17 is:", windowTypes.type17.projectHandle());
//console.log("rubber for type17 is:", windowTypes.type17.rubber());
//console.log("rollers for type17 is:", windowTypes.type17.rollers());
//console.log("lock for type17 is:", windowTypes.type17.lock());
//console.log("woolfile for type17 is:", windowTypes.type17.woolFile());
console.log("projectBidding for type17 is:", windowTypes.type17.projectBidding());
*/



  }

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
    (document.getElementById("img-type").src="img/type-12.png")

  : bathWType === "doublePanel" ?
    (document.getElementById("img-type").src="img/type-13.png")

  : bathWType === "centerHung" ?
    (document.getElementById("img-type").src="img/type-15.png")

  : topHungType === "doublePanel" ?
    (document.getElementById("img-type").src="img/type-14.png")

  : topHungType === "singlePanel" ?
    (document.getElementById("img-type").src="img/type-12.png")

  : topHungType === "customLight" ?
    (document.getElementById("img-type").src="img/custom-1.png")

  : topHungType === "centerHung" ?
    (document.getElementById("img-type").src="img/type-15.png")
  





       : document.getElementById("img-type").src="../img/type-1.png"; 



}

