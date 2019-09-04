
  var svg,xMap,yMap,line;

  /*Initialize Parameters*/
var zT_polar=null;
  var ii=0;
  var al=null,
  al_v= null;//1E-10; //strain to charge ratio


  var Cv=null,
  Cv_v=null;// 3E7;  //Volumetric capacitance [F/m^3]

  // var he=null,
  // Ee=null, 
  // pe=null;


  var L=null,
  L_v= null;//*Math.pow(10,-6), //2000e-6; //length of the sample


  var ar=null,
  ar_v= null;// //Width/ Length of the samples

  var pm=null,
  pm_v= null;// //Width/ Length of the samples

  var dr=null,
  dr_v= null;// //Width/ Length of the samples

  var V=null,
  V_v= null;// //Width/ Length of the samples

  var ff=null;



  //w=ar*L;
  //A=w*L;  // area = width x length
  j = math.complex(0,1);

  var Es=null,
  Es_min= null;//Math.pow(10,6), // 1E6; // Young's modulus of the SPE layer


  var Ep=null,
  Ep_v= null;//*Math.pow(10,6);


  var sigi=null,
  sigi_v=null;

  var sigs=null,
  sigs_v=null;


  var sige=null,
  sige_v=null;

  var cdl=2;

   var he=null,
    Ee=null,
    pe=null;


  var hp=null,
  hp_max=null,
  hp_min=null,
  hp_step=null;



  var hg=null,
  hg_max=null,
  hg_min=null,
  hg_step=null;

  var L=null,
  L_max=null,
  L_min=null,
  L_step=null;

  

  var f_max=null,
        f_min=null,
        df=null;

var ff_min=null,
ff_max=null;

  var dhp=null,
  dhg=null,
  dL=null;

  var v=0,
  param_min=null,
  param_max=null,
  param=null,
  param_v=null,
  param_step=null,
  param_id="",
  ind=null,
  param_arr=[];
  var that;

  var CF_min=null,
  CF_max=null,
  FO_min=null,
  FO_max=null,
  DFL_min=null,
  DFL_max=null;
  P_min=null;
  P_max=null;
  STFN_min=null;
  STFN_max=null;
  RF_min=null;
  RF_max=null;


  

  var Vw_arr = [],Vw=0,
  f_arr = [],
  ew_arr = [],ew=0,
   zT_arr=[],
  iw_aarr=[],
  iw_parr=[],
  fw_arr = [],fw=0,
  dw_arr = [],dw=0,
  z2Da_arr=[],
  cutoff=0,
  cutoff_=null,
  Zcf_=null,
  icf_=null,
  pcf_=null,
  maxEW_arr = [],
  max_ew=0,
  maxFW_arr = [],
  max_fw=0,
  maxDW_arr = [],
  max_dw=0,
  data = [],
  max_STFN=0,
  rf=0,
  max_xw=0,
  max_P=0,
  Dis_abs=0,
  Xis_abs=0,
  rangeParam_arr = [],//,"PEDOT-eleconductivity-max"];
  state="running",
  progress="done";
  var inde=1;
  var indf=1;
  var progress_counter=0;

  var drw=0;

  var dim1_text="",
  dim2_text="",
  num_ticks_x=3,
  num_ticks_y=5,
  y_order=0;

  var cntr1=0;

  var array=[];


    var hp_arr=[],
     hg_arr=[],
     L_arr=[];
    var
    dimi_arr=[],
    index_arr=[];
    
   


    var
    CFdes_arr=[],
    FOdes_arr=[],
    DFLdes_arr=[],
    DFLXdes_arr=[],
    RFdes_arr=[],
    PWdes_arr=[],
    STFNdes_arr=[],
    hpf_arr=[],
    hgf_arr=[],
    lf_arr=[];
    var datatale = $('#Results').DataTable({searching: false, paging: false});


   var indexdes_arr=[];

       

  var Ri=null,
  Rs=null,
  Re=null,
  Zc=null,
  f=null;
  Z1D=null,
  Z2D=null;

  var _hp = null,
     _hg = null,
     _he=null,
    _Ep = null,
     _Es = null,
     _Ee=null,
    _L =null,
    _w = null,
    _A=null;
    _crs=null;
    _car=null;
    _Cv=null;
    _al=null;
  /* End of Parameter Initialization*/




 var count=1;
 var C2=1;

///////*********//////////
//*******************encapsulation btn**************************/
$("#enc-btn").click(function() { 
  C2=0;

  $("#enc-btn").prop('disabled', true);
  $("#enc-btn-off").prop('disabled', false);

  $(".enc1").css("font-weight","bold");
  $(".enc2").css("font-weight","bold");
  $(".enc1").prop('disabled', false);


  document.getElementById("enc-btn").style.backgroundColor = "#006622";  
  document.getElementById("enc-btn-off").style.backgroundColor = "#BEBEBE";  
  document.getElementById("enc-btn-off").onmouseover=function() {

      this.style.backgroundColor = "#9fdf9f" ;

    }
           document.getElementById("enc-btn-off").onmouseout=function() {

      this.style.backgroundColor = "#BEBEBE" ;

    }
  });
  
  $("#enc-btn-off").click(function(){

           C2=1;
        $("#enc-btn").prop('disabled', false);
        $("#enc-btn-off").prop('disabled', true);

       document.getElementById("enc-btn").style.backgroundColor = "#BEBEBE";
       document.getElementById("enc-btn-off").style.backgroundColor = "#006622";  
       document.getElementById("enc-btn").onmouseover=function() {

      this.style.backgroundColor = "#9fdf9f" ;

    }
       document.getElementById("enc-btn").onmouseout=function() {

      this.style.backgroundColor = "#BEBEBE" ;

    }

  $(".enc1").prop('disabled', true);
    document.getElementById("enc_thickness").placeholder = "";
    document.getElementById("enc_young").placeholder = "e.g., 10";
    document.getElementById("enc_density").placeholder = "";


    $("#enc_thickness").val(null);
    $("#enc_young").val(null);
    $("#enc_density").val(null);

    he=null;
    Ee=null;
    pe=null;
    
    $(".enc1").css("font-weight","normal");
    $(".enc2").css("font-weight","normal");


      
 })


  /**************events**************/
var updt=0;
  $(".param").change(function(event){
   response = updateValue(event.target.id,event.target.value)
   document.getElementById("dflt-btn").style.backgroundColor = "#47b247";
   var updt=1;
   indf=1;


    });

  $("#dflt-btn").click(function(){
    fillDefaultFormValues();
    document.getElementById("dflt-btn").style.backgroundColor = "#006622";
    indf=0;
   });

 $("#dflt-btn").mouseover(function() {

      this.style.backgroundColor ="#006622" ;

    })

 $("#dflt-btn").mouseout(function() {

  if (indf==0)

      this.style.backgroundColor ="#006622" ;
    else

      this.style.backgroundColor ="#47b247" ;


    })


   $("#draw-btn").mouseover(function() {

      this.style.backgroundColor ="#B22354" ;

    })


  $ ("#draw-btn").mouseout(function() {

if (inde==0)
      this.style.backgroundColor ="#B22354" ;
else
      this.style.backgroundColor ="#47b247" ;
      
    })
  
  //************************************Find dimensions***********************************
  $("#draw-btn").click(function(){      
          clearfield();
          setTimeout(function(){ calcData(); }, 1000);
          $("#draw-btn").text("Calculating...")
          document.getElementById("draw-btn").style.color = "#FFFFFF";
          document.getElementById("draw-btn").style.backgroundColor = "#B22354";
                  inde=0;

    
   });



//*******************range btn**************************/
$(".rangebtn").click(function() {
  var $this = $(this);
  id=this.id.slice(0,-10);
  $this.text('>>Range Values>>');
  $this.toggleClass('rangebtn');
  if($this.hasClass('rangebtn')){
    ind = rangeParam_arr.indexOf(id);
     if(ind>=0) 
      rangeParam_arr.splice(ind,1);
      if (rangeParam_arr.length == 0)
       
       $this.text('>>Range Values>>');
       $("#"+id+"-min").css("display","none");
       $("#"+id+"-max").css("display","none");
       $("#"+id+"-unit").css("display","none");
       // $("#"+id+"-min").val(null);
       // $("#"+id+"-max").val(null);

       $(".rangebtn:not(#"+rangeParam_arr[0]+",#"+rangeParam_arr[1]+")").prop('disabled', false);

       
    } else {
      
      param_id = id;
      rangeParam_arr.push(id);
      $("#"+id+"-min").css("display","inline");
      $("#"+id+"-max").css("display","inline");
      $("#"+id+"-unit").css("display","inline");

      if (rangeParam_arr.length >= 1){
        $
        $(".rangebtn:not(#"+rangeParam_arr[0]+",#"+rangeParam_arr[1]+")").prop('disabled', true); // disables the rest of the range buttons
        }
      $this.text('<');
         }

   });
  /*********************end of events***********************/
function stopprogress(){
     $("#draw-btn").text("Find Dimensions")
    document.getElementById("draw-btn").style.color = "#FFFFFF";
    document.getElementById("draw-btn").style.backgroundColor = "#47b247";
         inde=1;

  }
  //*******************setting default Values********************/

  function fillDefaultFormValues(){
    clearfield()
    
        hg_min = 10;
        hg_max = 100;
        hg_step=10;

        hp_min = 2;
        hp_step=2;
        hp_max = 20;
        



        L_min= 2;
        L_max= 20;
        L_step=2;



        sigi = 0.005;
        Ep = 350;
        sige = 6000;
        Cv = 30;

        V=1;
        ff=0.1;
        pm=1.7;
        dr=0.1;
        al = 0.1;
        sigs= 0.1;
        Es = 1;
        ar = 0.5;

        crs = 10;
        car = 2;


        // CF_max=null;
        // CF_min=null;
        // FO_max=null;
        // FO_min=null;
        // DFL_min=null;
        // DFL_max=null;
        // P_min=null;
        // P_max=null;
        // STFN_min=null;
        // STFN_max=null;
        // RF_min=null;
        // RF_max=null;

        $("#Cut-off-min").val(null);
        $("#Cut-off-max").val(null);
        $("#force-min").val(null);
        $("#force-max").val(null);
        $("#Deflection-min").val(null);
        $("#Deflection-max").val(null);
        $("#Power-max").val(null);
        $("#Power-min").val(null);
        $("#Stiffness-max").val(null);
        $("#Stiffness-min").val(null);
        $("#Resonance-max").val(null);
        $("#Resonance-min").val(null);


        $("#CP-thickness-min").val(2);
        $("#CP-thickness-max").val(20);
        $("#CP-thickness-step").val(2);
        $("#spe-thickness-min").val(10);
        $("#spe-thickness-max").val(100);
        $("#spe-thickness-step").val(10);
        $("#Length-min").val(2);
        $("#Length-max").val(20);
        $("#Length-step").val(2);

        $("#PEDOT-ioniconductivity").val(0.005);
        $("#PEDOT-youngs").val(350);
        $("#PEDOT-eleconductivity").val(6000);
        $("#PEDOT-volumetric-Capacitance").val(30);
        $("#Alpha").val(0.1);
        $("#spe-ioniconductivity").val(0.1);
        $("#spe-youngs").val(1);
        $("#aspectratio").val(0.5);
        $("#Damping").val(0.1);
        $("#Voltage").val(1);
        $("#op_frequency").val(0.1);
        $("#density").val(1.7);
        $("#contactres").val(10);
        $("#contactarea").val(2);

        if (C2==0){
        $("#enc_young").val(10);
        $("#enc_thickness").val(10);
        $("#enc_density").val(1);

        Ee=10;
        he=10;
        pe=1;
        
        }
  
  }


    function isNumber (o) {
    return ! isNaN (o-0) && o !== null  && o !== false && o !=='0' && o !==0 ;
  }

        function isNumber2 (o) {
        return !  o !== null  && o !== false ;
      }

  function updateValue(id, value) {
    var response = new Object();

    switch (id) {
      
          
      case 'PEDOT-ioniconductivity':
      if (!isNumber(value)|| (value==0)) {
        $("#PEDOT-ioniconductivity").val(null);
        sigi = +null;
      } else {
        sigi= +value;
      }
      break;

      
      case 'PEDOT-youngs':
      if (!isNumber(value)|| (value==0)) {
        $("#PEDOT-youngs").val(null);
        Ep = +null;       
      } else {
        Ep= +value;
      }
      break;

      
      case 'PEDOT-eleconductivity':
      if (!isNumber(value)|| (value==0)) {
        $("#PEDOT-eleconductivity").val(null);
        sige = +null;
      } else {
      sige= +value;
      }
      break;

   
      case 'PEDOT-volumetric-Capacitance':
      if (!isNumber(value)|| (value==0)) {
        $("#PEDOT-volumetric-Capacitance").val(null);
        Cv= +null;
      } else {
      Cv= +value;
      }
      break;

       
      case 'Alpha':
      if (!isNumber(value)|| (value==0)) {
        $("#Alpha").val(null);
        al= +null;
      } else {
      al= +value;
      }
      break;    

          
      case 'spe-ioniconductivity':
      if (!isNumber(value)|| (value==0)) {
        $("#spe-ioniconductivity").val(null);
        sigs= +null;
      } else {
      sigs= +value
      }     
       break;
      

      

      case 'spe-youngs':
      if (!isNumber(value)|| (value==0)) {
        $("#spe-youngs").val(null);
        Es = +null;
      } else {
      Es = +value;
      }
      break;

      
      
      case 'aspectratio':
      if (!isNumber(value)|| (value==0)) {
        $("#aspectratio").val(null);
        ar = null;
      } else {
      ar = +value;
      }
      break;

            case 'Damping':
      if (!isNumber2(value)) {
        $("#Damping").val(null);
        dr = null;
      } else {
      dr = +value;
      }
      break;


      case 'density':
      if (!isNumber(value)|| (value==0)) {
        $("#density").val(null);
        pm = null;
      } else {
      pm = +value;
      }
      break;

            case 'contactres':
      if (!isNumber2(value)) {
        $("#contactres").val(null);
        crs = null;
      } else {
      crs = +value;
      }
      break;

            case 'contactarea':
      if (!isNumber2(value)) {
        $("#contactarea").val(null);
        car = null;
      } else {
      car = +value;
      }
      break;


            case 'Voltage':
      if (!isNumber(value)|| (value==0)) {
        $("#Voltage").val(null);
        V = null;
      } else {
      V = +value;
      }
      break;


  case 'Cut-off-min':
      if (!isNumber(value) || (value==0) ||(isNumber(CF_max) && value > CF_max)){
      $("#Cut-off-min").val(null);
      CF_min=null;
    } else {
      
      CF_min = +value ;
    
    }
    break;

      case 'Cut-off-max':
      if (!isNumber(value) || (value==0) || (isNumber(CF_min) && value < CF_min)){
      $("#Cut-off-max").val(null);
      CF_max=null;
    } else {
    CF_max = +value;
    }
    break;
    

 case 'force-min':
      if (!isNumber(value) || (value==0) ||(isNumber(FO_max) && value > FO_max)){
      $("#force-min").val(null);
      FO_min=null;
    } else {
      
      FO_min = +value ;
    
    }
    break;

      case 'force-max':
      if (!isNumber(value) || (value==0) || (isNumber(FO_min) && value < FO_min)){
      $("#force-max").val(null);
      FO_max=null;
    } else {
    FO_max = +value;
    }
    break;
    

  case 'Deflection-min':
      if (!isNumber(value) || (value==0) ||(isNumber(DFL_max) && value > DFL_max)){
      $("#Deflection-min").val(null);
      DFL_min=null;
    } else {
      
      DFL_min = +value ;
    
    }
    break;

      case 'Deflection-max':
      if (!isNumber(value) || (value==0) || (isNumber(DFL_min) && value < DFL_min)){
      $("#Deflection-max").val(null);
      DFL_max=null;
    } else {
    DFL_max = +value;
    }
    break;

          case 'Power-min':
      if (!isNumber(value) || (value==0) ||(isNumber(P_max) && value > P_max)){
      $("#[Power]-min").val(null);
      P_min=null;
    } else {
      
      P_min = +value ;
    
    }
    break;


      case 'Power-max':
      if (!isNumber(value) || (value==0) || (isNumber(P_min) && value < P_min)){
      $("#Power-max").val(null);
      P_max=null;
     } else {
    P_max = +value;
    }
    break;


      case 'Stiffness-min':
      if (!isNumber(value) || (value==0) ||(isNumber(STFN_max) && value > STFN_max)){
      $("#Stiffness-min").val(null);
      STFN_min=null;
    } else {
      
      STFN_min = +value ;
    
    }
    break;

      case 'Stiffness-max':
      if (!isNumber(value) || (value==0) || (isNumber(STFN_min) && value < STFN_min)){
      $("#Stiffness-max").val(null);
      STFN_max=null;
    } else {
    STFN_max = +value;
    }
    break;

      case 'Resonance-min':
      if (!isNumber(value) || (value==0) ||(isNumber(RF_max) && value > RF_max)){
      $("#Resonance-min").val(null);
      RF_min=null;
    } else {
      
      RF_min = +value ;
    
    }
    break;

      case 'Resonance-max':
      if (!isNumber(value) || (value==0) || (isNumber(RF_min) && value < RF_min)){
      $("#Resonance-max").val(null);
      RF_max=null;
    } else {
    RF_max = +value;
    }
    break;
      case 'CP-thickness-min':
    if (!isNumber(value) || (value==0) ||(isNumber(hp_max) && value > hp_max)){
      $("#CP-thickness-min").val(null);
      hp_min=null;
    } else {
      
      hp_min = +value ;
    
    }
    break;

      case 'CP-thickness-max':
      if (!isNumber(value) || (value==0) || (isNumber(hp_min) && value < hp_min)){
      $("#CP-thickness-max").val(null);
      hp_max=null;
    } else {
    hp_max = +value;
    }
    break;

          case 'CP-thickness-step':
      if (!isNumber(value) || (value==0)){
            $("#CP-thickness-step").val(null);
            hp_step=null;
          } else {
            hp_step = +value;
          }
          break;

      case 'spe-thickness-min':
      if (!isNumber(value) || (value==0) ||(isNumber(hg_max) && value > hg_max)){
      $("#spe-thickness-min").val(null);
      hg_min=null;
    } else {
      hg_min = +value ;
    }
    break;

      case 'spe-thickness-max':
      if (!isNumber(value) || (value==0) || (isNumber(hg_min) && value < hg_min)){
      $("#spe-thickness-max").val(null);
      hg_max=null;
    } else {
    hg_max = +value;
    }
    break;

      case 'spe-thickness-step':
        if (!isNumber(value) || (value==0)){
          $("#spe-thickness-step").val(null);
          hg_step = null;
        } else {
          hg_step = +value;
        }
        break;

      case 'Length-min':
      if (!isNumber(value) || (value==0) ||(isNumber(L_max) && value > L_max)){
      $("#Length-min").val(null);
      L_min=null;
    } else {
      
      L_min = +value ;
    
    }
    break;

      case 'Length-max':
      if (!isNumber(value) || (value==0) || (isNumber(L_min) && value < L_min)){
      $("#Length-max").val(null);
      L_max=null;
    } else {
    L_max = +value;
    }
    break;

          case 'Length-step':
      if (!isNumber(value) || (value==0)){
        $("#Length-step").val(null);
        L_step = null;
      } else {
        L_step = +value;
      }
      break;


              case 'enc_thickness':
        if (!isNumber(value)|| (value==0) && C2==0) {
          $("#enc_thickness").val(null);
          he= null;
        } else {
          he= +value;
        }
        break;

        case 'enc_young':
        if (!isNumber(value)|| (value==0)&& C2==0) {
          $("#enc_young").val(null);
          Ee=null;
        } else {
          Ee= +value;
        }
        break;

         case 'enc_density':
        if (!isNumber(value)|| (value==0)&& C2==0) {
          $("#enc_density").val(null);
          pe=null;
        } else {
          pe= +value;
        }
        break;

      case 'op_frequency':
      if (!isNumber(value)|| (value==0)) {
        $("#op_frequency").val(null);
        ff = null;
      } else {
        ff = +value;
      }
      break;

    }

    response.succeed = true;
    return response;
  }

 function clearfield(){
  datatale.clear().draw();
  $("#progresstext").text("");
}

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

   /***********time constants************/
function calcfrequnecy(){
      
      // var _LL= _L*Math.pow(10,-3);
      // var _hhp = _hp*Math.pow(10,-6);
      // var _hhg = _hg*Math.pow(10,-6);


      var te=Math.pow(_L,2);
      te=math.multiply(te,_Cv);
      te=math.divide(te,sige);
     var fe=math.divide(1,te);
      fe=math.divide(fe,2);
      fe=math.divide(fe,Math.PI);

      var ti=Math.pow(_hp,2);
      ti=math.multiply(ti,_Cv);
      ti=math.divide(ti,sigi);
      var fi=math.divide(1,ti);
      fi=math.divide(fi,2);
      fi=math.divide(fi,Math.PI);
      // console.log(fi)


      var ts=math.multiply(_hp,_hg);
      ts=math.multiply(ts,_Cv);
      ts=math.divide(ts,sigs);
      ts=math.divide(ts,2);
      var fs=math.divide(1,ts);
      fs=math.divide(fs,2);
      fs=math.divide(fs,Math.PI);
      // console.log(fs)

      if (crs==0)  fc=fs;
     else{

     var tc=math.multiply(_hp,_L);
     tc=math.multiply(tc,_w);
     tc=math.multiply(tc,_Cv);
     tc=math.multiply(tc,_crs);
     tc=math.divide(tc,_car);
     var fc=math.divide(1,tc);
     fc=math.divide(fc,2);
     fc=math.divide(fc,Math.PI);
     // console.log(fc)
}

      FF=Math.min(fe, fi, fs,fc);   
      // console.log(FF)


}

    function calcEW(){


    Ri= math.divide(1,sigi);
   
    Rs = math.divide(_hg,sigs);
    Rs = math.divide(Rs,2);// Rs = hg/w/sigs/2;   // Rs: electrolyte resistance
    
    Re = math.divide(1,_hp);
    Re = math.divide(Re,sige);// Re=1/w/hp/sige; // Re: electronic resistance per unit length

    _ht=math.multiply(_hp,2);
    _ht=math.add(_ht,_hg);
    _ht_2=math.divide(_ht,2);

    Zc= math.divide(1,j);
    Zc = math.divide(Zc,2);
    Zc = math.divide(Zc,Math.PI);
    Zc = math.divide(Zc,f);
    Zc = math.divide(Zc,_Cv); //Zc=1./1j./2./pi./f./Cv

    var alf = math.divide(Ri,Zc);
    alf = math.sqrt(alf);  // alf= sqrt(Ri./Zc)

    temp = math.multiply(alf,_hp);
    temp = math.coth(temp);
    temp2=math.multiply(Ri,Zc);
    temp2=math.sqrt(temp2);
    Z1D = math.multiply(temp2,temp); //Z1D=2.*sqrt(Ri.*Zc).*coth(sqrt(Ri./Zc).*hp);

    Zdl = math.divide(1,j);
    Zdl = math.divide(Zdl,2);
    Zdl = math.divide(Zdl,Math.PI);
    Zdl = math.divide(Zdl,f);
    Zdl = math.divide(Zdl,cdl); //Zc=1./1j./2./pi./f./Cv
     //   console.log(Zc);

    temp= math.multiply(Zdl,Z1D);
    temp1=math.add(Zdl,Z1D);
    Zp=math.divide(temp,temp1);
  
    ZsD= math.add(Zp,Rs);    //
    bet = math.divide(Re,ZsD);
    bet = math.sqrt(bet); //beta=sqrt(Re./(Zp+Rs)

    Z2D = math.multiply(bet,_L);
    Z2D = math.coth(Z2D);

    temp = math.multiply(Re,ZsD);
    temp = math.sqrt(temp);
    Z2D = math.multiply(Z2D,temp);// Z2D=sqrt(Re.*(Zp+Rs)).*coth(sqrt(Re./(Zp+Rs)).*L).*W;
    Z2D=math.divide(Z2D,_w);

    ZRc=math.divide(ZsD,_car);
    rcp=math.divide(_crs,_car);

    temp=math.add(Z2D,ZRc);
    temp1=math.multiply(Z2D,ZRc);
    ZT1=math.divide(temp1,temp);

    ZT=math.add(ZT1,rcp);

    zT_polar=ZT.toPolar();
    Zamp=zT_polar.r;
    ZPh=-zT_polar.phi;

    Vz=math.multiply(V,ZT1);
    Vz=math.divide(Vz,ZT);

         var iw = math.divide(Vz,Z2D);//iw=V./Z2D;
         // console.log(iw);
         iw_polar=iw.toPolar();
         I=iw_polar.r;
         Ph=iw_polar.phi;

         // console.log(Ph);

          pw = math.divide(iw,j);
          pw = math.divide(pw,2);
          pw = math.divide(pw,Math.PI);
          pw = math.divide(pw,f);
          pw = math.divide(pw,_hp);
          pw = math.divide(pw,_w);
          pw = math.divide(pw,_L); //pw=Iw./1j./2./pi./f./hp./w./L;
          Ew = math.multiply(pw,_al);
          ew_polar=Ew.toPolar();
          ew=ew_polar.r;

          // console.log(ew);
        }


  function calcCutOff(){

  calcfrequnecy();
          ff_arr=[];
          ew_arr = [];


          ff_min=FF/10;
          ff_max=FF*10;
        
        for(df=0; df<2; df=df+0.02) {

          f=ff_min*Math.pow(10,df);
           ff_arr.push(+f); 
        
          

          calcEW();
          ew_arr.push(ew);
             // console.log(ZPh);


}

        F0=ew_arr[0]*Math.sqrt(0.5);
        for(i=0; i<ew_arr.length; i++){
          if(ew_arr[i]<=F0){
            CFF=ff_arr[i];
            break;

          }
        }
      }
 function calcMl(){

// console.log(f)

    Ri= math.divide(1,sigi);
   
    Rs = math.divide(_hg,sigs);
    Rs = math.divide(Rs,2);// Rs = hg/w/sigs/2;   // Rs: electrolyte resistance
    
    Re = math.divide(1,_hp);
    Re = math.divide(Re,sige);// Re=1/w/hp/sige; // Re: electronic resistance per unit length

    _ht=math.multiply(_hp,2);
    _ht=math.add(_ht,_hg);
    _ht_2=math.divide(_ht,2);

    Zc= math.divide(1,j);
    Zc = math.divide(Zc,2);
    Zc = math.divide(Zc,Math.PI);
    Zc = math.divide(Zc,f);
    Zc = math.divide(Zc,_Cv); //Zc=1./1j./2./pi./f./Cv

    var alf = math.divide(Ri,Zc);
    alf = math.sqrt(alf);  // alf= sqrt(Ri./Zc)

    temp = math.multiply(alf,_hp);
    temp = math.coth(temp);
    temp2=math.multiply(Ri,Zc);
    temp2=math.sqrt(temp2);
    Z1D = math.multiply(temp2,temp); //Z1D=2.*sqrt(Ri.*Zc).*coth(sqrt(Ri./Zc).*hp);

    Zdl = math.divide(1,j);
    Zdl = math.divide(Zdl,2);
    Zdl = math.divide(Zdl,Math.PI);
    Zdl = math.divide(Zdl,f);
    Zdl = math.divide(Zdl,cdl); //Zc=1./1j./2./pi./f./Cv
     //   console.log(Zc);
     // console.log(f);

    temp= math.multiply(Zdl,Z1D);
    temp1=math.add(Zdl,Z1D);
    Zp=math.divide(temp,temp1);
  
    ZsD= math.add(Zp,Rs);    //
    bet = math.divide(Re,ZsD);
    bet = math.sqrt(bet); //beta=sqrt(Re./(Zp+Rs)

    Z2D = math.multiply(bet,_L);
    Z2D = math.coth(Z2D);

    temp = math.multiply(Re,ZsD);
    temp = math.sqrt(temp);
    Z2D = math.multiply(Z2D,temp);// Z2D=sqrt(Re.*(Zp+Rs)).*coth(sqrt(Re./(Zp+Rs)).*L).*W;
    Z2D=math.divide(Z2D,_w);

    // ZRc=math.multiply(ZsD,1e6);
    ZRc=math.divide(ZsD,_car);
    rcp=math.divide(_crs,_car);

    temp=math.add(Z2D,ZRc);
    temp1=math.multiply(Z2D,ZRc);
    ZT1=math.divide(temp1,temp);

    ZT=math.add(ZT1,rcp);
    
    Zz=math.divide(ZT1,ZT);
    Zz=math.multiply(Zz,Zp);
    Zz=math.divide(Zz,ZsD);


    cosh3=math.multiply(alf,_hp);
    cosh3=math.cosh(cosh3);

    Ma1=math.multiply(2,_al);
    Ma1=math.multiply(Ma1,_Cv);
    Ma1=math.multiply(Ma1,_w);
    Ma1=math.multiply(Ma1,V);
    Ma1=math.multiply(Ma1,_Ep);
    Ma1=math.divide(Ma1,cosh3);

    dh=_hp/200;
    Ma2=0;
    h=math.divide(_hg,2);
    _ht2=math.add(h,_hp);
 
    for (i=0; i<=200; i++){     
    h=math.add(h,dh);
    cosh4=math.subtract(h,_ht2);
    cosh4=math.multiply(alf,cosh4);
    cosh4=math.cosh(cosh4);
    cosh4=math.abs(cosh4);
    M=math.multiply(cosh4,h);
    M=math.multiply(M,dh);
    Ma2=M+Ma2;
}


}
    function calcD(){

    cosh2=math.multiply(bet,_L);
    cosh2=math.cosh(cosh2);

    lL=math.subtract(l,_L);
    cosh1=math.multiply(bet,lL);
    cosh1=math.cosh(cosh1);
    
    Ma3=math.divide(cosh1,cosh2);
    Mx=math.multiply(Ma1,Ma2);
    Mx=math.multiply(Mx,Ma3);
    Mx=math.multiply(Mx,Zz);

    Mx=math.abs(Mx);

    if (!ffo==0){
     sin1=math.sin(T);
     Yy=math.subtract(Y,d_arr[jj]);
     sin1=math.multiply(sin1,Yy);
     cos1=math.cos(T);
     Xx=math.subtract(X,x_arr[jj]);
     cos1=math.multiply(cos1,Xx);
     fl=math.add(cos1,sin1);
     fl=math.multiply(fl,ffo);
     Mx=math.subtract(Mx,fl);
     }

    calcEI();  

    tempk=math.divide(Mx,EI);
    // tempk=math.add(tempk,cu);

    tet=math.multiply(dl,tempk);

    tempY=math.divide(tet,2);
    tempYY=math.add(tempY,TET);
    tempY=math.sin(tempY);
    tempYY=math.sin(tempYY);
    tempY=math.multiply(tempY,tempYY);
    tempY=math.multiply(tempY,2);
    tempY=math.divide(tempY,tempk);

    tempX=math.multiply(tempk,dl);
    tempX=math.divide(tempX,2);
    tempXX=math.add(tempX,TET);
    tempXs=math.sin(tempX);
    tempXc=math.cos(tempXX);
    tempX=math.multiply(tempXs,tempXc);
    tempX=math.multiply(tempX,2);
    tempXl=math.divide(tempX,tempk);

    tempX=math.subtract(dl,tempXl);
     

      dw_abs=tempY;
      xw_abs=tempX;
      lxw_abs=tempXl;
}


function calcforcedisp(){

dl=_L/200;
dwa_arr=[];
xwa_arr=[];
d_arr=[];
x_arr=[];
Dis_abs=0;
Xis_abs=0;
TET=0;
zw_arr=[];
fow_arr=[];


ffo=0;
jj=0;

f=ff;


calcMl();

for (l=0; l<=_L; l=l+dl){
        calcD();
        Dis_abs=Dis_abs+dw_abs;
        dwa_arr.push(Dis_abs);
        Xis_abs=Xis_abs+lxw_abs;
        xwa_arr.push(Xis_abs);
        TET=TET+tet;
        jj=jj+1;
    }
    Y=Dis_abs;
    X=Xis_abs;
    Y0=Dis_abs;
    X0=Xis_abs;
    T=TET;
    d_arr=dwa_arr;
    x_arr=xwa_arr;
 
calcEW(); 
calcForce();

for (i=0;i<=3000;i=i+1){
    ffo=math.multiply(fw_abs,i);
    ffo=math.divide(ffo,100);
    err=1;
    if(err>=0.005){
        TET=0;
        Dis_abs=0;
        Xis_abs=0;
        dwa_arr=[];
        xwa_arr=[];
        jj=0
        for (l=0; l<=_L; l=l+dl){
        calcD();
        Dis_abs=Dis_abs+dw_abs;
        dwa_arr.push(Dis_abs);
        Xis_abs=Xis_abs+lxw_abs;
        xwa_arr.push(Xis_abs);
        TET=TET+tet;
        jj=jj+1;
    }
    err=math.subtract(Y,Dis_abs);
    err=math.divide(err,Y);
    err=math.abs(err);

    Y=Dis_abs;
    X=Xis_abs;
    T=TET;
    d_arr=dwa_arr;
    x_arr=xwa_arr;
}

Xf=math.subtract(X0,X);
Yf=math.subtract(Y0,Y);
Xf=Math.pow(Xf,2);
Yf=Math.pow(Yf,2);
Z=math.add(Xf,Yf);
Z=math.sqrt(Z);
Z=math.multiply(Z,1e3);
ffo=math.multiply(ffo,1e3);

if (Y>=0 ){
zw_arr.push(Z);
fow_arr.push(ffo);

}


else{
Fmax=ffo;
break;
}


}
}      

/**********Force ***********/
          function calcForce(){
    ////**********Force************////
        
          var temp = _Ep*3;
          temp = math.multiply(temp,ew);//1E6*3*Ep*al*pw

          var temp2 = _w*_hp*(_hp+_hg);//w*hp*(hp+hg)

          var fw = math.multiply(temp,temp2);
          fw = math.divide(fw,2);
          fw_abs = math.divide(fw,_L);//Fw=1E6*3*Ep*al*pw*w*hp*(hp+hg)/2/L;
        }


       function calcEI(){

  if (C2==1) _he=0;        

     _ht=_hg/2; 
     ht2=Math.pow(_ht,2);
     ht3=Math.pow(_ht,3);


     _htt=_hg/2+_hp;
     htt2=Math.pow(_htt,2);
     htt3=Math.pow(_htt,3);
     

     _httt=_hg/2+_hp+_he;
     httt2=Math.pow(_httt,2);
     httt3=Math.pow(_httt,3);
     
     It=math.multiply(_w,httt3);
     It=math.divide(It,3);
     It=math.multiply(It,2);


     Ie=math.multiply(_w,(httt3-htt3));
     Ie=math.divide(Ie,3);
     Ie=math.multiply(Ie,2);
     EIe=math.multiply(_Ee,Ie);

     Ip=math.multiply(_w,(htt3-ht3));
     Ip=math.divide(Ip,3);
     Ip=math.multiply(Ip,2);
     EIp=math.multiply(_Ep,Ip);

     Ig=math.multiply(_w,ht3);
     Ig=math.divide(Ig,3);
     Ig=math.multiply(Ig,2);
     EIg=math.multiply(_Es,Ig);

     EI=math.add(EIe,EIp,EIg);

}

//***********Calculate displacement************/////
function calcdisplacement(){
dl=_L/200;
TET=0;
Dis_abs=0;
Xis_abs=0;
ffo=0;
fow_arr=[];
zw_arr=[];

f=ff;

calcMl();

for (l=0; l<=_L; l=l+dl){

  calcD();

Dis_abs=math.add(Dis_abs,dw_abs);
Xis_abs=math.add(Xis_abs,xw_abs);

TET=math.add(TET,tet);

    console.log(f);

}
          max_dw=math.multiply(Dis_abs,1000);
          max_xw=math.multiply(Xis_abs,1000);
              console.log(Dis_abs);

          // Dis_abs=math.abs(Dis_abs);
          // Xis_abs=math.abs(Xis_abs);

}
/**********Stiffness ***********/

function calcSTFN(){   

     calcEI();
 
      var temp = math.pow(_L,3); 
      temp = math.divide(EI,temp); //w*(Ee*(htt^3-ht^3)+Ep*(ht^3-hg^3)+Es*hg^3)/L^3
      temp = math.multiply(temp,3);//w*(Ee*(htt^3-ht^3)+Ep*(ht^3-hg^3)+Es*hg^3)/L^3/4
       max_STFN=math.multiply(temp,1000);
     
    
    }


/**********Resonance Frequnecy ***********/
function calcRF(){   


calcEI();

if (C2==0){
    var temph = math.multiply(2,_hp); //2hp
    temph = math.add(temph,_hg); // ht=hg+2*hp
    tempp=math.multiply(_pm,temph);
    tempe=2*math.multiply(_pe,_he);
    tempt=math.add(temph,_he,_he);
    den=math.add(tempp,tempe);
    den=math.divide(den,tempt);
}

else{
  den=_pm;
}
      
      tempp=math.divide(EI,It); //EI/It
      tempp=math.divide(tempp,den); //EI/pm

      tempp=Math.sqrt(tempp); //sqrt((Es*hg^3+Ep*hp^3)/pm)
      tempp=math.multiply(tempp,_httt,2); //(Es*hg^3+Ep*hp^3)/pm*(2hp+hg)
      tempp=math.multiply(tempp,1.87);
      tempp=math.multiply(tempp,1.87);

      var tempc=Math.sqrt(12); //sqrt (12)
      tempc=math.multiply(tempc,2); //2sqrt(12)
      tempc=math.multiply(tempc,Math.PI); //2*pi*sqrt(12)
      var tempL= Math.pow(_L,2); //L^2
      tempc=math.multiply(tempL,tempc);//2*pi*sqrt(12)*L^2
      rf=math.divide(tempp,tempc);

      drr=Math.pow(dr,2);
      drr=1-drr;
      drr=math.sqrt(drr);
      rf=math.multiply(drr,rf);

     } 
        

/**********Power ***********/      
        function calcPower(){

          f=ff;

          calcEW();
   
   
          var temp=math.pow(V,2);
          var tempt=Math.cos(ZPh);
          tempt=math.multiply(temp,tempt);
          pw=math.divide(tempt,4);
          pw=math.divide(pw,Zamp);
          max_P=math.multiply(pw,1000);
          
          }  


////////input data validation////////
//////Data calculation and demonstration//////

  function calcData(){
          inde=0;

    
    if ((C2==0) &&((!isNumber(he)) ||(!isNumber(Ee)) ||(!isNumber(pe))) )
              {alert("Please fill in all the blank fields");
       stopprogress();
    
             return;}

   if ((!isNumber(hp_min))  || (!isNumber(hp_max)) || (!isNumber(hp_step))|| (!isNumber(hg_min)) ||(!isNumber(hg_max)) ||(!isNumber(hg_step)) ||(!isNumber(L_min)) ||(!isNumber(L_max)) ||(!isNumber(L_step))||(!isNumber(sigi)) || (!isNumber(Ep)) || (!isNumber(sige)) || (!isNumber(Cv)) || (!isNumber(V))|| (!isNumber2(dr)) || (!isNumber2(car)) || (!isNumber2(crs)) || (!isNumber(pm))|| (!isNumber(al))  || (!isNumber(sigs)) || (!isNumber(Es)) || (!isNumber(ar))|| (!isNumber(ff)))
         {alert("Please fill in all the blank fields");
       stopprogress();
        return;}

          
      if (param_id!="Cut-off" && param_id!="force" && param_id!="Deflection"&& param_id!="Stiffness"&& param_id!="Power"&& param_id!="Resonance"){
          alert("Please select the Range Values for your Desired Output");
          stopprogress();
           return;
         }
          if (param_id=="Cut-off" && ((!isNumber(CF_min)) || (!isNumber(CF_max)))){
          // if (((!isNumber(CF_min)) || (!isNumber(CF_max)))){
         alert("Please fill in all the blank fields");
         stopprogress();
           return;
         }

       if (param_id=="force" && ((!isNumber(FO_min)) || (!isNumber(FO_max)))){
          alert("Please fill in all the blank fields");
          stopprogress();
         return;
         }

        if (param_id=="Deflection" && ((!isNumber(DFL_min)) || (!isNumber(DFL_max)))){
         alert("Please fill in all the blank fields");
         stopprogress();
         return;
        }

         if (param_id=="Power" && ((!isNumber(P_min)) || (!isNumber(P_max)))){
         alert("Please fill in all the blank fields");
         stopprogress();
         return;
        }

         if (param_id=="Stiffness" && ((!isNumber(STFN_min)) || (!isNumber(STFN_max)))){
         alert("Please fill in all the blank fields");
         stopprogress();
         return;
        }

         if (param_id=="Resonance" && ((!isNumber(RF_min)) || (!isNumber(RF_max)))){
         alert("Please fill in all the blank fields");
         stopprogress();
         return;
        }


    dhp=hp_step;
    dhg=hg_step;
    dL=L_step;


     hp_arr=[];
     hg_arr=[];
     L_arr=[];
    
    dimi_arr=[];
    index_arr=[];
    
    
    CFdes_arr=[];
    FOdes_arr=[];
    DFLdes_arr=[];
    DFLXdes_arr=[];
    PWdes_arr=[];
    STFNdes_arr=[];
    RFdes_arr=[];  
    hpf_arr=[];
    hgf_arr=[];
    lf_arr=[];
    indexdes_arr=[];
    _he=  he*Math.pow(10,-6);
    _Ep = Ep*Math.pow(10,6);
    _Es = Es*Math.pow(10,6);
    _Ee = Ee*Math.pow(10,6);
    _w = ar*Math.pow(10,-3);
    _crs= crs *math.pow(10,-6);
    _car= car *math.pow(10,-6);
    _Cv= Cv *math.pow(10,6);
    _al= al*math.pow(10,-9);
    _pm=math.multiply(pm,1e3);
    _pe=math.multiply(pe,1e3);

    f=ff;

         
        for(v1 = hp_min; v1<=hp_max; v1 = v1+dhp){
               _hp = v1*Math.pow(10,-6);
              // console.log(_hp);

            for(v2 = hg_min; v2<=hg_max; v2 = v2+dhg){
                  _hg = v2*Math.pow(10,-6);
                 // console.log(_hg)
                 for(v3 = L_min; v3<=L_max; v3 = v3+dL){
                     _L = v3*Math.pow(10,-3);
                     // console.log(_L);
                     _A=_w*_L;

                        
                      if (param_id=="Cut-off"){
                        calcCutOff();
                          if (CF_min<=CFF && CFF<=CF_max){
                          calcforcedisp();
                          calcdisplacement();
                          calcSTFN();
                          calcRF();
                          calcPower();
                           CFdes_arr.push(expo(CFF, 2));
                           FOdes_arr.push(expo(Fmax, 2));
                           DFLdes_arr.push(expo(max_dw, 2));
                           DFLXdes_arr.push(expo(max_xw, 2));
                           PWdes_arr.push(expo(max_P, 2));
                           STFNdes_arr.push(expo(max_STFN, 2));
                           RFdes_arr.push(expo(rf, 2));
                           hpf_arr.push(expo(+v1, 2));
                           hgf_arr.push(expo(+v2, 2));
                           // console.log(hgf_arr[0])
                           lf_arr.push(expo(+v3, 2));
                         }
                           }

                       if (param_id=="force"){
                           calcforcedisp();
                        if (FO_min<=Fmax && Fmax<=FO_max){
                           calcdisplacement();
                           calcCutOff(); 
                           calcSTFN();
                           calcRF();
                           calcPower() ;          
                           CFdes_arr.push(expo(CFF, 2));
                           FOdes_arr.push(expo(Fmax, 2));
                           DFLdes_arr.push(expo(max_dw, 2));
                           DFLXdes_arr.push(expo(max_xw, 2));
                           PWdes_arr.push(expo(max_P, 2));
                           STFNdes_arr.push(expo(max_STFN, 2));
                           RFdes_arr.push(expo(rf, 2));
                           hpf_arr.push(expo(+v1, 2));
                           hgf_arr.push(expo(+v2, 2));
                           lf_arr.push(expo(+v3, 2));
                         }
                           }
                 
                        if (param_id=="Deflection"){
                           calcdisplacement();
                          if (DFL_min<=max_dw && max_dw<=DFL_max){
                           calcforcedisp();
                           calcCutOff();
                           calcSTFN();
                           calcRF();
                           calcPower();
                           CFdes_arr.push(expo(CFF, 2));
                           FOdes_arr.push(expo(Fmax, 2));
                           DFLdes_arr.push(expo(max_dw, 2));
                           DFLXdes_arr.push(expo(max_xw,2));
                           PWdes_arr.push(expo(max_P, 2));
                           STFNdes_arr.push(expo(max_STFN, 2));
                           RFdes_arr.push(expo(rf, 2));
                           hpf_arr.push(expo(+v1, 2));
                           hgf_arr.push(expo(+v2, 2));
                           lf_arr.push(expo(+v3, 2));
                         }
                         }
                        
                        if (param_id=="Power"){
                           calcPower();
                               console.log(f);

                           
                          if (P_min<=max_P && max_P<=P_max){
                           calcforcedisp();
                           calcCutOff();
                           calcSTFN();
                           calcRF();
                           calcdisplacement();
                           CFdes_arr.push(expo(CFF, 2));
                           FOdes_arr.push(expo(Fmax, 2));
                           DFLdes_arr.push(expo(max_dw, 2));
                           DFLXdes_arr.push(expo(max_xw, 2));
                           PWdes_arr.push(expo(max_P, 2));
                           STFNdes_arr.push(expo(max_STFN, 2));
                           RFdes_arr.push(expo(rf, 2));
                           hpf_arr.push(expo(+v1, 2));
                           hgf_arr.push(expo(+v2, 2));
                           lf_arr.push(expo(+v3, 2));
                         }
                         }

                         if (param_id=="Stiffness"){
                           calcSTFN();
                           
                          if (STFN_min<=max_STFN && max_STFN<=STFN_max){
                           calcforcedisp();
                           calcCutOff();
                           calcdisplacement();
                           calcRF();
                           calcPower();
                           CFdes_arr.push(expo(CFF, 2));
                           FOdes_arr.push(expo(Fmax, 2));
                           DFLdes_arr.push(expo(max_dw, 2));
                           DFLXdes_arr.push(expo(max_xw, 2));
                           PWdes_arr.push(expo(max_P, 2));
                           STFNdes_arr.push(expo(max_STFN, 2));
                           RFdes_arr.push(expo(rf, 2));
                           hpf_arr.push(expo(+v1, 2));
                           hgf_arr.push(expo(+v2, 2));
                           lf_arr.push(expo(+v3, 2));
                         }
                         }

                         if (param_id=="Resonance"){
                           calcRF();
                           
                          if (RF_min<=rf && rf<=RF_max){
                           calcforcedisp();
                           calcCutOff();
                           calcdisplacement();
                           calcSTFN();
                           calcPower();
                           CFdes_arr.push(expo(CFF, 2));
                           FOdes_arr.push(expo(Fmax, 2));
                           DFLdes_arr.push(expo(max_dw, 2));
                           DFLXdes_arr.push(expo(max_xw, 2));
                           PWdes_arr.push(expo(max_P, 2));
                           STFNdes_arr.push(expo(max_STFN, 2));
                           RFdes_arr.push(expo(rf, 2));
                           hpf_arr.push(expo(+v1, 2));
                           hgf_arr.push(expo(+v2, 2));
                           lf_arr.push(expo(+v3, 2));
                         }
                         }
                        }
                      }
                    }
                  if  (CFdes_arr.length==0){
                    alert("Your desired range does not occure. Please try different dimensions range!");
                    stopprogress();
                    return;
                  }

Writeoutput();


         
  }    

 
function Writeoutput() {
  datatale.clear().draw();
   $("#progresstext").text("Results at "+V+" V and "+ff+" Hz:");

  var row_len = CFdes_arr.length;

  for (var i = 0; i < row_len; ++i) {
          datatale.row.add( [
            CFdes_arr[i],
            FOdes_arr[i], 
            DFLdes_arr[i],
            DFLXdes_arr[i],
            PWdes_arr[i],
            STFNdes_arr[i],
            RFdes_arr[i],
            hpf_arr[i],
            hgf_arr[i],
            lf_arr[i],
            ]).draw( false );
        }


$("#draw-btn").text("Find Dimensions");
document.getElementById("draw-btn").style.color = "#FFFFFF";
document.getElementById("draw-btn").style.backgroundColor = "#47b247";
         inde=1;

}

// $(document).ready(function() {
//     $('#Results').DataTable( {
//         dom: 'Bfrtip',
//         buttons: [
//             'copyHtml5',
//             'excelHtml5',
//             'csvHtml5',
//             'pdfHtml5'
//         ]
//     } );



// } );

