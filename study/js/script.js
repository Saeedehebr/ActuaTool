
  var svg,xMap,yMap,line;

  /*Initialize Parameters*/
  // var  fo_v= null;//1E-10; //strain to charge ratio
  var zT_polar=null;
var f_v=null;
var fo_v=null;
var cu_v=0;
  
  var al=null,
    al_v= null,//1E-10; //strain to charge ratio
    al_min=null,
    al_max=null,
    al_step=null;

 var pm=null,
    pm_v= null,//1E-10; //strain to charge ratio
    pm_min=null,
    pm_max=null,
    pm_step=null;


     var pe=null,
    pe_v= null,//1E-10; //strain to charge ratio
    pe_min=null,
    pe_max=null,
    pe_step=null;


    var Cv=null,
    Cv_v=null,// 3E7;  //Volumetric capacitance [F/m^3]
    Cv_min=null,
    Cv_max=null,
    Cv_step=null;

    var L=null,
    L_v= null,//*Math.pow(10,-6), //2000e-6; //length of the sample
    L_min=null,
    L_max=null,
    L_step=null;

    var w=null,
    w_v= null,// //Width/ Length of the samples
    w_min= null,
    w_max= null,
    w_step= null;

    var car=null,
    car_v= null,// //Width/ Length of the samples
    car_min= null,
    car_max= null,
    car_step= null;

        var crs=null,
    crs_v= null,// //Width/ Length of the samples
    crs_min= null,
    crs_max= null,
    crs_step= null;


    var dr=null,
    dr_v= null,// //Width/ Length of the samples
    dr_min= null,
    dr_max= null,
    dr_step= null;

    var V=null,
    V_v= null,// //Width/ Length of the samples
    V_min= null,
    V_max= null,
    V_step= null;

    //w=ar*L;
    //A=w*L;  // area = width x length
    j = math.complex(0,1);

    var Es=null,
    Es_min= null,//Math.pow(10,6), // 1E6; // Young's modulus of the SPE layer
    Es_max= null,//Math.pow(10,6),
    Es_v= null,//Math.pow(10,6);
    Es_step= null;

    var Ep=null,
    Ep_min= null,//*Math.pow(10,6),//500E6; //Young's modulus of the CP layer
    Ep_max = null,//*Math.pow(10,6),
    Ep_v= null,//*Math.pow(10,6);
    Ep_step= null;

    var Ee=null,
    Ee_min= null,//*Math.pow(10,6),//500E6; //Young's modulus of the CP layer
    Ee_max = null,//*Math.pow(10,6),
    Ee_v= null,//*Math.pow(10,6);
    Ee_step= null;

    var sigi=null,
    sigi_min=null, // ionic conductivity of CP [s/m]
    sigi_max=null,
    sigi_step=null,
    sigi_v=null;

    var sigs=null,
    sigs_min=null, // ionic conductivity of SPE
    sigs_max=null,
    sigs_v=null,
    sigs_step=null;

    var sige=null,
    sige_min= null, // electronic conductivity of CP [s/m]
    sige_max=null,
    sige_step=null,
    sige_v=null;

    var hp=null,
    hp_min= null,//*Math.pow(10,-6), //4E-6; // thickness of the CP
    hp_max=null,//*Math.pow(10,-6),
    hp_step=null,//*Math.pow(10,-6);
    hp_v=null;

    var hg=null,
    hg_min= null,//*Math.pow(10,-6), //5E-6;  // thickness of the SPE layer
    hg_max=null,//*Math.pow(10,-6),
    hg_step=null,//*Math.pow(10,-6);
    hg_v=null;


    var he=null,
    he_min= null,//*Math.pow(10,-6), //5E-6;  // thickness of the SPE layer
    he_max=null,//*Math.pow(10,-6),
    he_step=null,//*Math.pow(10,-6);
    he_v=null;


    var f_min= null,
    f_max= null,
    df= null,
    Fout=null;
    var ff_min,
    ff_max;

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



    var f_arr = [], 
    ew_arr = [],ew=0,
    zT_arr=[],
    fw_arr = [],fw=0,
    dw_arr = [],dw=0,
    xw_arr = [],
    pw_arr=[],
    pws_arr=[],
    cutoff_arr = [],
    fo_arr=[],
    maxFW_arr = [],
    maxDW_arr = [],
    maxXW_arr = [],
    maxPW_arr=[],
    maxPWS_arr=[],
    ssw_arr=[], max_STFN=0,
    rrw_arr=[], rf=0,
    maxEW_arr = [],
    max_ew=0,
    max_pw=0,
    max_fw=0,
    max_dw=0,
    max_xw=0,
    data = [],
    rangeParam_arr = [],//,"PEDOT-eleconductivity-max"];
    state="fixed_values",
    progress="done";
    var progress_counter=0;

    var drw=0;

    var dim1_text="",
    dim2_text="",
    num_ticks_x=5,
    num_ticks_y=5,
    y_order=0;

    var Ri=0,
    Rs=0,
    Re=0,
    Zc=0,
    Z1D=0,
    Z2D=0,
    response=null;
    var updt=0;
    var inde=1;
    var indf=1;
    var C4=0;
    var cdl=0.2;

    /* End of Parameter Initialization*/

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

     




    //*************update force**************//

 $(".updateforce").click(function() {
C4=1;

          

      // $(".param").prop('disabled', false);
progress = "working";
 setTimeout(function(){ calcuforce(); }, 1000);
               document.getElementById("frc-btn").style.color = "#FFFFFF";
        document.getElementById("frc-btn").style.backgroundColor = "#B22354";
        $("#frc-btn").text('Updating..');
        $("#graph03").css('backgroundColor', "#gray");
        $("#graph33").css('backgroundColor', "#gray");

           $(".save").mouseover(function() {

      this.style.backgroundColor ="#383838" ;

    })
        $ (".save").mouseout(function() {

     this.style.backgroundColor ="gray" ;

    })

       $(".save").click(function() {

      this.style.backgroundColor ="#383838" ;
      $(this).prop( "disabled", true );

    })

 })

function calcuforce(){


   f1_arr=[];
   fw_arr=[];

        for(df=0; df<4; df=df+0.2) {
          f=f_min*Math.pow(10,df);

          f1_arr.push(+f);  
          calcforcedisp();
          fw_arr.push(Fmax);
      }
      d3.selectAll("#graph3").selectAll("*").remove();
      prepareData("force1"); //prepares data for plot 2
      EW_drawaxis("#graph3"); //draws axis for plot 2
      drawScatterPlot("force1"); //plot2

      document.getElementById("frc-btn").style.backgroundColor = "#47b247";
      $("#frc-btn").text('Yes');
      $("#uptfrc").css("display","none");
      $("#frc-btn").css('display', "none");

  }
  
// *********************Save graphs/////////////////////
$("#graph11").click(function() {
         if(state=="fixed_values")
         saveSvgAsPng(document.getElementsByTagName("svg")[0], "Vertical displacement vs frequnecy.png");
         else 
         saveSvgAsPng(document.getElementsByTagName("svg")[0], "Cut-off frequency vs "+parseDimensionText(param_id)+".png");
         })

$("#graph22").click(function() {
           if(state=="fixed_values")
        saveSvgAsPng(document.getElementsByTagName("svg")[1], "Lateral displacement vs frequnecy.png");
      else
        saveSvgAsPng(document.getElementsByTagName("svg")[1], "Vertical displacement vs "+parseDimensionText(param_id)+" at "+ff_v+"Hz.png");
      });

$("#graph33").click(function() {
  if(state=="fixed_values"){
         if (C4==0) saveSvgAsPng(document.getElementsByTagName("svg")[2], "Blocking force vs frequency.png"); 
         if (C4==1) saveSvgAsPng(document.getElementsByTagName("svg")[2], "Updated locking force vs frequency.png"); 
         }
       else
         saveSvgAsPng(document.getElementsByTagName("svg")[2], "Lateral displacement vs "+parseDimensionText(param_id)+" at "+ff_v+"Hz.png");
       
      });

$("#graph44").click(function() {
         
  if(state=="fixed_values")
          saveSvgAsPng(document.getElementsByTagName("svg")[3], "Average power consumption vsfrequency.png");
        else
          saveSvgAsPng(document.getElementsByTagName("svg")[3], "Blocking Force vs "+parseDimensionText(param_id)+" at "+ff_v+"Hz.png");   
              
      });



$("#graph55").click(function() { 
  if(state=="fixed_values")
         saveSvgAsPng(document.getElementsByTagName("svg")[4], "Shape of the beam at "+f_v+"Hz.png"); 
       else
         saveSvgAsPng(document.getElementsByTagName("svg")[4], "Average power consumption vs "+parseDimensionText(param_id)+".png");
     
      });

$("#graph66").click(function() { 
  if(state=="fixed_values")
         saveSvgAsPng(document.getElementsByTagName("svg")[4], "Stiffness curve at "+f_v+"Hz.png"); 
       else
         saveSvgAsPng(document.getElementsByTagName("svg")[4], "Stiffness vs "+parseDimensionText(param_id)+".png");
     
      });

$("#graph77").click(function() { 
         
         saveSvgAsPng(document.getElementsByTagName("svg")[5], "Resonance Frequnecy vs "+parseDimensionText(param_id)+".png"); 
      });


//*********************Save Data****************/////

$("#graph01").click(function() {

         if(state=="fixed_values"){
         f_arr.unshift('Frequency (Hz)');
         dw_arr.unshift("Vertical displacement (mm)");
         console.save(f_arr,dw_arr, "Vertical displacement vs frequnecy.csv");
         var firstElement = f_arr.shift();
         var firstElement2 = dw_arr.shift();

         }
         else{
         param_arr.unshift(parseDimensionText(param_id));
         cutoff_arr.unshift("Cutoff frequnecy (Hz)");
         console.save(param_arr,cutoff_arr, "Cutoff frequnecy(Hz) vs "+parseDimensionText(param_id)+".csv");
         var firstElement = param_arr.shift();
         var firstElement2 = cutoff_arr.shift();
         }
       });

$("#graph02").click(function() {
         if(state=="fixed_values"){
         f_arr.unshift("Frequency (Hz)");
         xw_arr.unshift("Lateral displacement (mm)");
         console.save(f_arr,xw_arr, "Lateral displacement vs frequnecy.csv");
         var firstElement = f_arr.shift();
         var firstElement2 = xw_arr.shift();
         }
         else{
         param_arr.unshift(parseDimensionText(param_id));
         maxDW_arr.unshift('Vertical displacement (mm)');
         console.save(param_arr,maxDW_arr, "Vertical displacement(mm) vs "+parseDimensionText(param_id)+" at "+ff_v+"Hz.csv");
         var firstElement = param_arr.shift();
         var firstElement2 = maxDW_arr.shift();
       }
       });
$("#graph03").click(function() {
         if ((state=="fixed_values") && (C4==0)){
         f_arr.unshift("Frequency (Hz)");
         fw_arr.unshift("Blocking force (µN)");
         console.save(f_arr,fw_arr, "Blocking force vs frequnecy.csv");
         var firstElement = f_arr.shift();
         var firstElement2 = fw_arr.shift();
       }

   if ((state=="fixed_values") && (C4==1)) {
         f1_arr.unshift("Frequency (Hz)");
         fw_arr.unshift("Blocking force (µN)");
         console.save(f1_arr,fw_arr, "Updated blocking force vs frequnecy.csv");
         var firstElement = f1_arr.shift();
         var firstElement2 = fw_arr.shift();
       }
       if (state=="range_values") {
         param_arr.unshift(parseDimensionText(param_id));
         maxXW_arr.unshift("Lateral displacement (mm)");
         console.save(param_arr,maxXW_arr, "Lateral displacement(mm) vs "+parseDimensionText(param_id)+" at "+ff_v+"Hz.csv");
         var firstElement = param_arr.shift();
         var firstElement2 = maxXW_arr.shift();
       }
});

$("#graph04").click(function() {
         if(state=="fixed_values"){
         f_arr.unshift("Frequency (Hz)");
         pw_arr.unshift("Average power consumption (mW)");
         console.save(f_arr,pw_arr, "Average power consumption vs frequnecy.csv");
         var firstElement = f_arr.shift();
         var firstElement2 = pw_arr.shift();
       }
       else{
        param_arr.unshift(parseDimensionText(param_id));
        maxFW_arr.unshift(parseDimensionText(param_id));
         console.save(param_arr,maxFW_arr, "Blocking force(µm) vs "+parseDimensionText(param_id)+" at "+ff_v+"Hz.csv");
         var firstElement = param_arr.shift();
         var firstElement2 = maxFW_arr.shift();

       }
       });

$("#graph05").click(function() {
          if(state=="fixed_values"){
         lxw_arr.unshift("x-axis (mm)");
         ldw_arr.unshift("y-axis (mm)");
         console.save(lxw_arr,ldw_arr, "Shape of the beam at "+f_v+"Hz (external force="+fo_v+"µN).csv");
         var firstElement = lxw_arr.shift();
         var firstElement2 = ldw_arr.shift();
       }
       else{
         param_arr.unshift(parseDimensionText(param_id));
         maxPW_arr.unshift("Average power consumption (mW)");
         console.save(param_arr,maxPW_arr, "Average power consumption (mW) vs "+parseDimensionText(param_id)+" at "+ff_v+"Hz.csv");
         var firstElement = param_arr.shift();
         var firstElement2 = maxPWS_arr.shift();
       }
       });
$("#graph06").click(function() {
          if(state=="fixed_values"){
         zw_arr.unshift("Displacement (mm)");
         fow_arr.unshift("Force (µN)");
         console.save(zw_arr,fow_arr, "Stiffness curve at "+f_v+"Hz.csv");
          var firstElement = zw_arr.shift();
         var firstElement2 = fow_arr.shift();

       }
       else{
         param_arr.unshift(parseDimensionText(param_id));       
         ssw_arr.unshift("Stiffness (mN/m)");
         console.save(param_arr,ssw_arr, "Stiffness(mN/m) vs "+parseDimensionText(param_id)+".csv");
         var firstElement = param_arr.shift();
         var firstElement2 = ssw_arr.shift();
       }

       });

$("#graph07").click(function() {
         param_arr.unshift(parseDimensionText(param_id));
         rrw_arr.unshift("Resonance Frequnecy (Hz)");
         console.save(param_arr,rrw_arr, "Resoance frequnecy (Hz) vs "+parseDimensionText(param_id)+".csv");
         var firstElement = param_arr.shift();
         var firstElement2 = rrw_arr.shift();
       });


          // case 'D-btn':

          // break
  

// $(".shape").click(function() {  
//          progress = "working";
//         setTimeout(function(){ calcshape(); }, 1000);
//         document.getElementById("shp-btn").style.color = "#FFFFFF";
//         document.getElementById("shp-btn").style.backgroundColor = "#B22354";
//           }
   
//        )

 // var count=1;
 var C2=1;

$("#enc-btn").click(function() { 
   C2=0;
  $("#enc-btn").prop('disabled', true);
  $("#enc-btn-off").prop('disabled', false);

  $("#shape").text("Shape of the beam");
  $(".enc1").css("font-weight","bold");
  $(".enc2").css("font-weight","bold");
  $(".enc3").css("font-weight","bold");

  $(".enc3").prop('disabled', false);
  $(".enc1").prop('disabled', false);
  $(".enc2").prop('disabled', false);

  // document.getElementById("enc_thickness-v").placeholder = "";
  // document.getElementById("enc_young-v").placeholder = "e.g., 10";
  // document.getElementById("enc_density-v").placeholder = "";


  document.getElementById("enc-btn").style.backgroundColor = "#006622";  
  document.getElementById("enc-btn-off").style.backgroundColor = "#BEBEBE";  
  document.getElementById("enc-btn-off").onmouseover=function() {

      this.style.backgroundColor = "#9fdf9f" ;

    }
           document.getElementById("enc-btn-off").onmouseout=function() {

      this.style.backgroundColor = "#BEBEBE" ;

    }


})

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

        $(".rangebtn:not(#"+rangeParam_arr[0]+",#"+rangeParam_arr[1]+")").prop('disabled', false);
        $(".rangebtn:not(#"+rangeParam_arr[0]+",#"+rangeParam_arr[1]+")").css("font-weight","bold");

       $(".enc3").prop('disabled', true);
       $(".enc2").prop('disabled', true);
       $(".enc1").prop('disabled', true);

       $(".enc3").text('Range Values>');
       $(".enc2").css("display","none");
       $(".enc1").css("display","inline");



    document.getElementById("enc_thickness-v").placeholder = "";
    document.getElementById("enc_young-v").placeholder = "e.g., 10";
    document.getElementById("enc_density-v").placeholder = "";
    $("#enc_thickness-v").val(null);
    $("#enc_young-v").val(null);
    $("#enc_density-v").val(null);
    $(".enc1").css("font-weight","normal");
    $(".enc3").css("font-weight","normal");
    if (id=="enc_young" || id=="enc_thickness"||id=="enc_density"){
    state = "fixed_values";
    rangeParam_arr.length = 0;
    $("#shape").css('display', "inline");
    $(".extf").css('display', "inline");
    $(".shp").css("display","inline");
    $(".fre").css('display', "none");
    $("#h3").html('"Frequency Response Mode"');


    }
      
 })


    /**************events**************/


    $(".param").change(function(event){
      response = updateValue(event.target.id,event.target.value)
     document.getElementById("dflt-btn").style.backgroundColor = "#47b247";
     updt=1;
     indf=1;
  });


    $("#dflt-btn").click(function(){
      fillDefaultFormValues();
      document.getElementById("dflt-btn").style.backgroundColor = "#006622";
      indf=0;
    });


    $("#draw-btn").click(function(){
    //        if(updt==1 && (!response.succeed) ) {
    //   // alert("Error in input value for" + response.errorField + ": " + response.badInput + "\n" + response.validRange);
    //   alert("Fuck! it's me!Please fill all the blank fields");
    // }
    // else{
         C4=0;
         progress = "working";
         maxEW_arr = [];
         maxFW_arr = [];
         maxDW_arr = [];
         maxXW_arr = [];
         maxPW_arr=[];
         maxPWS_arr=[];
         cleargraphs();
        setTimeout(function(){ calcData(); }, 1000);
        $("#draw-btn").text("Calculating...")
        document.getElementById("draw-btn").style.color = "#FFFFFF";
        document.getElementById("draw-btn").style.backgroundColor = "#B22354";
        inde=0;

        $(".save").mouseover(function() {

      this.style.backgroundColor ="#383838" ;

    })
        $ (".save").mouseout(function() {

     this.style.backgroundColor ="gray" ;

    })

       $(".save").click(function() {

      this.style.backgroundColor ="#383838" ;
      $(this).prop( "disabled", true );

    })


     $("#frc-btn").mouseover(function() {

      this.style.backgroundColor ="#B22354" ;

    })
        $ ("#frc-btn").mouseout(function() {

if (C4==1)
     this.style.backgroundColor ="#B22354" ;

 else

      this.style.backgroundColor ="#47b247" ;

    })
   
     }  );

    $(".rangebtn").click(function() {
      var $this = $(this);
      id=this.id.slice(0,-10);
      $this.text('Range Values>');
      $this.toggleClass('rangebtn');
      if($this.hasClass('rangebtn')){
        ind = rangeParam_arr.indexOf(id+"range-btn");
        if(ind>=0) 
          rangeParam_arr.splice(ind,1);
        if (rangeParam_arr.length == 0)
          state = "fixed_values";
        $this.text('Range Values>');
        $("#h3").html('"Frequency Response Mode"');
        $("#"+id+"-v").css("display","inline");
        $("#"+id+"-min").css("display","none");
        $("#"+id+"-max").css("display","none");
        $("#"+id+"-step").css("display","none");
        $("#shape").css('display', "inline");
        $(".extf").css('display', "inline");
        $(".shp").css("display","inline");
        $(".fre").css('display', "none");

        $(".rangebtn:not(#"+rangeParam_arr[0]+",#"+rangeParam_arr[1]+")").prop('disabled', false);
        $(".rangebtn:not(#"+rangeParam_arr[0]+",#"+rangeParam_arr[1]+")").css("font-weight","bold");
        if (C2==1){
            $(".enc3").css("font-weight","normal");
            $(".enc3").prop('disabled', true);
            $("#shape").css("display","inline");
            $(".shp").css("display","inline");
            $(".fre").css("display","none");


            // $(".cu").css('display', "none");


        }
          
         } else {
          state = "range_values";
          $("#h3").html('"Parameter Response Mode"');
          param_id = id;
          rangeParam_arr.push(id+"range-btn");
          $("#"+id+"-v").css("display","none");
          $("#"+id+"-min").css("display","inline");
          $("#"+id+"-max").css("display","inline");
          $("#"+id+"-step").css("display","inline");
          $(".extf").css('display', "none");
          // $(".cu").css('display', "none");
          // $("#shape").text("Power consumption");
          $("#shape").css("display","none");
          $(".shp").css("display","none");
          $(".fre").css("display","inline");



          if (rangeParam_arr.length >= 1){
            $(".rangebtn:not(#"+rangeParam_arr[0]+",#"+rangeParam_arr[1]+")").prop('disabled', true); // disables the rest of the range buttons
            $(".rangebtn:not(#"+rangeParam_arr[0]+",#"+rangeParam_arr[1]+")").css("font-weight","normal");
            if (C2==1){
            $(".enc3").css("font-weight","normal");
            $(".enc3").prop('disabled', true);
            
        
        }        
         }
          $this.text('<');
 }


      });
    /*********************end of events***********************/
    function stopprogress(){
     $("#draw-btn").text("Draw Plots")
     document.getElementById("draw-btn").style.color = "#FFFFFF";
     document.getElementById("draw-btn").style.backgroundColor = "#47b247";
     inde=1;

     /**********fill the fields with default values***********/
   }
   function fillDefaultFormValues(){
    cleargraphs();
    hp_v = 2;
    hp_min=1;
    hp_max=10;
    hp_step=1;
    sigi_v = 0.005;
    sigi_min=0.001;
    sigi_max=0.01;
    sigi_step=0.001;
    Ep_v = 350;
    Ep_min=200;
    Ep_max=2000;
    Ep_step=200;
    sige_v = 6000;
    sige_min=1000;
    sige_max=10000;
    sige_step=1000;
    Cv_v = 30;
    Cv_min=5;
    Cv_max=50;
    Cv_step=5;
    al_v = 0.1;
    al_min=0.05;
    al_max=0.5;
    al_step=0.05;
    hg_v = 10;
    hg_min=5;
    hg_max=100;
    hg_step=5;
    sigs_v = 0.1;
    sigs_min=0.05;
    sigs_max=1;
    sigs_step=0.05;
    Es_v = 1;
    Es_min=1;
    Es_max=100;
    Es_step=10;
    L_v = 2;
    L_min=1;
    L_max=10;
    L_step=1;
    w_v = 0.5;
    w_min=0.2;
    w_max=2;
    w_step=0.2;
    crs_v = 10;
    crs_min=0;
    crs_max=200;
    crs_step=20;
    car_v = 2;
    car_min=0.5;
    car_max=5;
    car_step=0.5;
    dr_v=0.1;
    dr_min=0.1;
    dr_max=1;
    dr_step=0.1;
    pm_v=1.7;
    pm_min=0.5;
    pm_max=5;
    pm_step=0.5;
    V_v=1;
    V_min=0.5;
    V_max=5;
    V_step=0.5;
    f_v=0.1;
    ff_v=0.1;
    fo_v=0;
    cu_v=0;

         // f_max=1000;
         // f_min=0.1;
         // df=f_min/5;
         $("#PEDOT-thickness-v").val(2);
         $("#PEDOT-thickness-min").val(1);
         $("#PEDOT-thickness-max").val(10);
         $("#PEDOT-thickness-step").val(1);

         $("#PEDOT-ioniconductivity-v").val(0.005);
         $("#PEDOT-ioniconductivity-min").val(0.001);
         $("#PEDOT-ioniconductivity-max").val(0.01);
         $("#PEDOT-ioniconductivity-step").val(0.001);

         $("#PEDOT-youngs-v").val(350);
         $("#PEDOT-youngs-min").val(200);
         $("#PEDOT-youngs-max").val(2000);
         $("#PEDOT-youngs-step").val(200);

         $("#PEDOT-eleconductivity-v").val(6000);
         $("#PEDOT-eleconductivity-min").val(1000);
         $("#PEDOT-eleconductivity-max").val(10000);
         $("#PEDOT-eleconductivity-step").val(1000);

         $("#PEDOT-volumetric-Capacitance-v").val(30);
         $("#PEDOT-volumetric-Capacitance-min").val(5);
         $("#PEDOT-volumetric-Capacitance-max").val(50);
         $("#PEDOT-volumetric-Capacitance-step").val(5);

         $("#Alpha-v").val(0.1);
         $("#Alpha-min").val(0.05);
         $("#Alpha-max").val(0.5);
         $("#Alpha-step").val(0.05);

         $("#spe-thickness-v").val(10);
         $("#spe-thickness-min").val(5);
         $("#spe-thickness-max").val(100);
         $("#spe-thickness-step").val(5);

         $("#spe-ioniconductivity-v").val(0.1);
         $("#spe-ioniconductivity-min").val(0.05);
         $("#spe-ioniconductivity-max").val(1);
         $("#spe-ioniconductivity-step").val(0.05);

         $("#speyoungs-v").val(1);
         $("#speyoungs-min").val(1);
         $("#speyoungs-max").val(100);
         $("#speyoungs-step").val(10);

         $("#Length-v").val(2);
         $("#Length-min").val(1);
         $("#Length-max").val(10);
         $("#Length-step").val(1);

         $("#aspectratio-v").val(0.5);
         $("#aspectratio-min").val(0.2);
         $("#aspectratio-max").val(2);
         $("#aspectratio-step").val(0.2);

         $("#contactres-v").val(10);
         $("#contactres-min").val(0);
         $("#contactres-max").val(200);
         $("#contactres-step").val(20);


         $("#contactarea-v").val(2);
         $("#contactarea-min").val(0.5);
         $("#contactarea-max").val(5);
         $("#contactarea-step").val(0.5);

         $("#dampingratio-v").val(0.1);
         $("#dampingratio-min").val(0.1);
         $("#dampingratio-max").val(1);
         $("#dampingratio-step").val(0.1);

         $("#Voltage-v").val(1);
         $("#Voltage-min").val(1);
         $("#Voltage-max").val(5);
         $("#Voltage-step").val(1);

         $("#density-v").val(1.7);
         $("#density-min").val(1);
         $("#density-max").val(5);
         $("#density-step").val(1);

         if (C2==0){

         $("#enc_density-v").val(1);
         $("#enc_density-min").val(1);
         $("#enc_density-max").val(5);
         $("#enc_density-step").val(1);

         $("#enc_young-v").val(10);
         $("#enc_young-min").val(1);
         $("#enc_young-max").val(100);
         $("#enc_young-step").val(10);

         $("#enc_thickness-v").val(10);
         $("#enc_thickness-min").val(10);
         $("#enc_thickness-max").val(100);
         $("#enc_thickness-step").val(10);
    Ee_v = 10;
    Ee_min=1;
    Ee_max=100;
    Ee_step=10;
    pe_v=1;
    pe_min=1;
    pe_max=5;
    pe_step=1;
    he_v = 10;
    he_min=10;
    he_max=100;
    he_step=10;

         }

         $("#shp_frequency-v").val(0.1);
         $("#op_frequency-v").val(0.1);
         $("#ext_force-v").val(0);
         $("#curvature-v").val(0);

       }

       function defltenc(){
         $("#enc_density-v").val(1);
         $("#enc_density-min").val(1);
         $("#enc_density-max").val(5);
         $("#enc_density-step").val(1);

         $("#enc_young-v").val(10);
         $("#enc_young-min").val(1);
         $("#enc_young-max").val(100);
         $("#enc_young-step").val(10);

         $("#enc_thickness-v").val(50);
         $("#enc_thickness-min").val(10);
         $("#enc_thickness-max").val(100);
         $("#enc_thickness-step").val(10);

    Ee_v = 10;
    Ee_min=1;
    Ee_max=100;
    Ee_step=10;
    pe_v=1;
    pe_min=1;
    pe_max=5;
    pe_step=1;
    he_v = 50;
    he_min=10;
    he_max=100;
    he_step=10;
       }



    
       function expo(x, f) {
        return Number.parseFloat(x).toExponential(f);
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
          case 'PEDOT-thickness-min':
          if (!isNumber(value) || (value==0) ||(isNumber(hp_max) && value > hp_max)){
            $("#PEDOT-thickness-min").val(null);
            hp_min=null; 
          } else {
            hp_min = +value ;
          }
          break;

          case 'PEDOT-thickness-max':

          if (!isNumber(value) || (value==0) || (isNumber(hp_min) && value < hp_min)){
            $("#PEDOT-thickness-max").val(null);
            hp_max=null;
          } else {
            hp_max = +value;
          }
          break; 
          case 'PEDOT-thickness-step':
          if (!isNumber(value) || (value==0) ||(isNumber(hp_max) && isNumber(hp_min) && value > (hp_max-hp_min))){
            $("#PEDOT-thickness-step").val(null);
            hp_step=null;
          } else {
            hp_step = +value;
          }
          break; 
          case 'PEDOT-thickness-v':
          if (!isNumber(value)|| (value==0)) {
            $("#PEDOT-thickness-v").val(null);
            hp_v= null;
          } else {
           hp_v= +value;
          //console.log(hp);
        }
        break; 

        case 'PEDOT-ioniconductivity-min':
        if (!isNumber(value) || (value==0)|| (isNumber(sigi_max) && value > sigi_max)){
          $("#PEDOT-ioniconductivity-min").val(null);
          sigi_min = null;
        } else {
          sigi_min = +value;
        }
        break;
        case 'PEDOT-ioniconductivity-max':
        if (!isNumber(value) || (value==0)|| (isNumber(sigi_min) && value < sigi_min)){
          $("#PEDOT-ioniconductivity-max").val(null);
          sigi_max = null;
        } else {
          sigi_max = +value;
        }
        break;
        case 'PEDOT-ioniconductivity-step':
        if (!isNumber(value)|| (value==0) || (isNumber(sigi_max) && isNumber(sigi_min) && value > (sigi_max-sigi_min))){
         $("#PEDOT-ioniconductivity-step").val(null);
          sigi_step = null;
        } else {
          sigi_step = +value;
        }
        break;
        case 'PEDOT-ioniconductivity-v':
        if (!isNumber(value)|| (value==0)) {
          $("#PEDOT-ioniconductivity-v").val(null);
          sigi_v = null;
        } else {
          sigi_v= +value;
        }
        break;

        case 'PEDOT-youngs-min':
        if (!isNumber(value) || (value==0)|| (isNumber(Ep_max) && value > Ep_max)){
          $("#PEDOT-youngs-min").val(null);
          Ep_min = null;
        } else {
          Ep_min = +value;
        }
        break;
        case 'PEDOT-youngs-max':
        if (!isNumber(value) || (value==0) || (isNumber(Ep_min) && value < Ep_min)){
          $("#PEDOT-youngs-max").val(null);
          Ep_max = null;
        } else {
          Ep_max = +value;
        }
        break;
        case 'PEDOT-youngs-step':
        if (!isNumber(value) || (value==0)|| (isNumber(Ep_max) && isNumber(Ep_min) && value > (Ep_max-Ep_min))){
          $("#PEDOT-youngs-step").val(null);
          Ep_step = null;
        } else {
          Ep_step = +value;
        }
        break;
        case 'PEDOT-youngs-v':
        if (!isNumber(value)|| (value==0)) {
          $("#PEDOT-youngs-v").val(null);
          Ep_v = null;
        } else {
          Ep_v= +value;
        }
        break;

        case 'PEDOT-eleconductivity-min':
        if (!isNumber(value) || (value==0)|| (isNumber(sige_max) && value > sige_max)){
          $("#PEDOT-eleconductivity-min").val(null);
          sige_min = null;
        } else {
          sige_min = +value;
        }
        break;

        case 'PEDOT-eleconductivity-max':
        if (!isNumber(value) || (value==0)|| (isNumber(sige_min) && value < sige_min)){
          $("#PEDOT-eleconductivity-max").val(null);
          sige_max = null;
        } else {
          sige_max = +value;
        }
        break;
        case 'PEDOT-eleconductivity-step':
        if (!isNumber(value) || (value==0)|| (isNumber(sige_max) && isNumber(sige_min) && value > (sige_max-sige_min))){
          $("#PEDOT-eleconductivity-step").val(null);
          sige_step = null;
        } else {
          sige_step = +value;
        }
        break;
        case 'PEDOT-eleconductivity-v':
        if (!isNumber(value)|| (value==0)) {
          $("#PEDOT-eleconductivity-v").val(null);
          sige_v = null;
        } else {
          sige_v= +value;
        }
        break;

        case 'PEDOT-volumetric-Capacitance-min':
        if (!isNumber(value) || (value==0) || (isNumber(Cv_max) && value > Cv_max)){
          $("#PEDOT-volumetric-Capacitance-min").val(null);
          Cv_min = null;
        } else {
          Cv_min = +value;
        }
        break;

        case 'PEDOT-volumetric-Capacitance-max':
        if (!isNumber(value) || (value==0)|| (isNumber(Cv_min) && value < Cv_min)){
          $("#PEDOT-volumetric-Capacitance-max").val(null);
          Cv_max = null;
        } else {
          Cv_max = +value;
        }
        break;
        case 'PEDOT-volumetric-Capacitance-step':
        if (!isNumber(value)|| (value==0) || (isNumber(Cv_max) && isNumber(Cv_min) && value > (Cv_max-Cv_min))){
          $("#PEDOT-volumetric-Capacitance-step").val(null);
          Cv_step = null;
        } else {
          Cv_step = +value;
        }
        break;
        case 'PEDOT-volumetric-Capacitance-v':
        if (!isNumber(value)|| (value==0)) {
          $("#PEDOT-volumetric-Capacitance-v").val(null);
          Cv_v= null;
        } else {
          Cv_v= +value;
        }
        break;

        case 'Alpha-min':
        if (!isNumber(value)|| (value==0) || (isNumber(al_max) && value > al_max)){
          $("#Alpha-min").val(null);
          al_min = null;
        } else {
          al_min = +value;
        }
        break;

        case 'Alpha-max':
        if (!isNumber(value) || (value==0)|| (isNumber(al_min) && value < al_min)){
          $("#Alpha-max").val(null);
          al_max = null;
        } else {
          al_max = +value;
        }
        break;
        case 'Alpha-step':
        if (!isNumber(value) || (value==0)|| (isNumber(al_max) && isNumber(al_min) && value > (al_max-al_min))){
          $("#Alpha-step").val(null);
          al_step = null;
        } else {
          al_step = +value;
        }
        break;
        case 'Alpha-v':
        if (!isNumber(value)|| (value==0)) {
            $("#Alpha-v").val(null);
          al_v= null;
        } else {
          al_v= +value;
        }
        break;


        case 'spe-thickness-min':
        if (!isNumber(value) || (value==0)|| (isNumber(hg_max) && value > hg_max)){
          $("#spe-thickness-min").val(null);
          hg_min = null;
        } else {
          hg_min = +value;
        }
        break;

        case 'spe-thickness-max':
        if (!isNumber(value) || (value==0)|| (isNumber(hg_min) && value < hg_min)){
          $("#spe-thickness-max").val(null);
          hg_max = null;
        } else {
          hg_max = +value;
        }
        break;

        case 'spe-thickness-step':
        if (!isNumber(value) || (value==0) || (isNumber(hg_max) && isNumber(hg_min) && value > (hg_max-hg_min))){
          $("#spe-thickness-step").val(null);
          hg_step = null;
        } else {
          hg_step = +value;
        }
        break;

        case 'spe-thickness-v':
        if (!isNumber(value)|| (value==0)) {
          $("#spe-thickness-v").val(null);
          hg_v= null;
        } else {
          hg_v= +value;
        }
        break;

        case 'spe-ioniconductivity-min':
        if (!isNumber(value) || (value==0) || (isNumber(sigs_max) && value > sigs_max)){
          $("#spe-ioniconductivity-min").val(null);
          sigs_min = null;
        } else {
          sigs_min = +value;
        }
        break;

        case 'spe-ioniconductivity-max':
        if (!isNumber(value) || (value==0)|| (isNumber(sigs_min) && value < sigs_min)){
          $("#spe-ioniconductivity-max").val(null);
          sigs_max = null;
        } else {
          sigs_max = +value;
        }
        break;

        case 'spe-ioniconductivity-step':
        if (!isNumber(value) || (value==0)|| (isNumber(sigs_max) && isNumber(sigs_min) && value > (sigs_max-sigs_min))){
          $("#spe-ioniconductivity-step").val(null);
          sigs_step = null;
        } else {
          sigs_step = +value;
        }
        break;

        case 'spe-ioniconductivity-v':
        if (!isNumber(value)|| (value==0)) {
          $("#spe-ioniconductivity-v").val(null);
          sigs_v= null;
        } else {
          sigs_v= +value;
        }
        break;
        

        case 'speyoungs-min':
        if (!isNumber(value) || (value==0)|| (isNumber(Es_max) && value > Es_max)){
          $("#speyoungs-min").val(null);
          Es_min = null;
        } else {
          Es_min = +value;
        }
        break;
        
        case 'speyoungs-max':
        if (!isNumber(value) || (value==0)|| (isNumber(Es_min) && value < Es_min)){
          $("#speyoungs-max").val(null);
          Es_max = null;
        } else {
          Es_max = +value;
        }
        break;
        
        case 'speyoungs-step':
        if (!isNumber(value) || (value==0)|| (isNumber(Es_max) && isNumber(Es_min) && value > (Es_max-Es_min))){
          $("#speyoungs-step").val(null);
          Es_step = null;
        } else {
          Es_step = +value;
        }
        break;
        

        case 'speyoungs-v':
        if (!isNumber(value)|| (value==0)) {
          $("#speyoungs-v").val(null);
          Es_v = null;
        } else {
          Es_v = +value;
        }
        break;
  
      case 'Length-min':
      if (!isNumber(value) || (value==0) || (isNumber(L_max) && value > L_max)){
        $("#Length-min").val(null);
        L_min = null;
        } else {
        L_min = +value;
      }
      break;

      case 'Length-max':
      if (!isNumber(value) || (value==0)|| (isNumber(L_min) && value < L_min)){
        $("#Length-max").val(null);
        L_max = null;
      } else {
        L_max = +value;
      }
      break;

      case 'Length-step':
      if (!isNumber(value) || (value==0) || (isNumber(L_max) && isNumber(L_min) && value > (L_max-L_min))){
        $("#Length-step").val(null);
        L_step = null;
      } else {
        L_step = +value;
      }
      break;


      case 'Length-v':
      if (!isNumber(value)|| (value==0)) {
        $("#Length-v").val(null);
        L_v = null;
      } else {
        L_v = +value;
      }
      break;

      case 'density-min':
      if (!isNumber(value) || (value==0) || (isNumber(pm_max) && value > pm_max)){
        $("#density-min").val(null);
        pm_min = null;
      } else {
        pm_min = +value;
      }
      break;

      case 'density-max':
      if (!isNumber(value) || (value==0)|| (isNumber(pm_min) && value < pm_min)){
        $("#density-max").val(null);
        pm_max = null;
      } else {
        pm_max = +value;
      }
      break;

      case 'density-step':
      if (!isNumber(value) || (value==0) || (isNumber(pm_max) && isNumber(pm_min) && value > (pm_max-pm_min))){
        $("#density-step").val(null);
        pm_step = null;
      } else {
        pm_step = +value;
      }
      break;


      case 'density-v':
      if (!isNumber(value)|| (value==0)) {
        $("#density-v").val(null);
        pm_v = null;
      } else {
        pm_v = +value;
      }
      break;

      case 'aspectratio-min':
      if (!isNumber(value)|| (value==0)|| (isNumber(w_max) && value > w_max)){
        $("#aspectratio-min").val(null);
        w_min = null;
      } else {
        w_min = +value;
      }
      break;

      case 'aspectratio-max':
      if (!isNumber(value) || (value==0) || (isNumber(w_min) && value < w_min)){
        $("#aspectratio-max").val(null);
        w_max = null;
      } else {
        w_max = +value;
      }
      break;

      case 'aspectratio-step':
      if (!isNumber(value)|| (value==0)|| (isNumber(w_max) && isNumber(w_min) && value > (w_max-w_min))){
        $("#aspectratio-step").val(null);
        w_step = null;
      } else {
        w_step = +value;
      }
      break;


      case 'aspectratio-v':
      if (!isNumber(value)|| (value==0)) {
        $("#aspectratio-v").val(null);
        w_v = null;
      } else {
        w_v = +value;
      }
      
      break;

case 'contactres-min':
      if (!isNumber2(value)|| (isNumber(crs_max) && value > crs_max)){
        $("#contactres-min").val(null);
        crs_min = null;
       } else {
        crs_min = +value;
      }
      break;

      case 'contactres-max':
      if (!isNumber2(value)  || (isNumber2(crs_min) && value < crs_min)){
        $("#contactres-max").val(null);
        crs_max = null;
      } else {
        crs_max = +value;
      }
      break;

      case 'contactres-step':
      if (!isNumber2(value)|| (isNumber(crs_max) && isNumber2(crs_min) && value > (crs_max-crs_min))){
        $("#contactres-step").val(null);
        crs_step = null;
      } else {
        crs_step = +value;
      }
      break;


      case 'contactres-v':
      if (!isNumber2(value)) {
        $("#contactres-v").val(null);
        crs_v = null;
      } else {
        crs_v = +value;
      }
      
      break;

case 'contactarea-min':
      if (!isNumber(value)|| (value==0)|| (isNumber(car_max) && value > car_max)){
        $("#contactarea-min").val(null);
        car_min = null;
      } else {
        car_min = +value;
      }
      break;

      case 'contactarea-max':
      if (!isNumber(value) || (value==0) || (isNumber(car_min) && value < car_min)){
        $("#contactarea-max").val(null);
        car_max = null;
      } else {
        car_max = +value;
      }
      break;

      case 'contactarea-step':
      if (!isNumber(value)|| (value==0)|| (isNumber(car_max) && isNumber(car_min) && value > (car_max-car_min))){
        $("#contactarea-step").val(null);
        car_step = null;
      } else {
        car_step = +value;
      }
      break;


      case 'contactarea-v':
      if (!isNumber(value)|| (value==0)) {
        $("#contactarea-v").val(null);
        car_v = null;
      } else {
        car_v = +value;
      }
      
      break;

      

      case 'dampingratio-min':
      if (!isNumber2(value)|| (isNumber(dr_max) && value > dr_max)){
        $("#dampingratio-min").val(null);
        dr_min = null;
      } else {
        dr_min = +value;
      }
        break;
      
      case 'dampingratio-max':
      if (!isNumber(value) || (value==0) || (isNumber(dr_min) && value < dr_min)){
        $("#dampingratio-max").val(null);
        dr_max = null;
        } else {
        dr_max = +value;
      }
      break;

      case 'dampingratio-step':
      if (!isNumber(value)|| (value==0)|| (isNumber(dr_max) && isNumber(dr_min) && value > (dr_max-dr_min))){
        $("#dampingratio-step").val(null);
        dr_step = null;
       } else {
        dr_step = +value;
      }
      break;


      case 'dampingratio-v':
      if (!isNumber2(value)) {
        $("#dampingratio-v").val(null);
        dr_v = null;
      } else {
        dr_v = +value;
      }
      break;

      case 'Voltage-min':
      if (!isNumber(value)|| (value==0)|| (isNumber(V_max) && value > V_max)){
        $("#Voltage-min").val(null);
        V_min = null;
      } else {
        V_min = +value;
      }
        break;
      
      case 'Voltage-max':
      if (!isNumber(value) || (value==0) || (isNumber(V_min) && value < V_min)){
        $("#Voltage-max").val(null);
        V_max = null;
      } else {
        V_max = +value;
      }
      break;

      case 'Voltage-step':
      if (!isNumber(value)|| (value==0)|| (isNumber(V_max) && isNumber(V_min) && value > (V_max-V_min))){
        $("#Voltage-step").val(null);
        V_step = null;
      } else {
        V_step = +value;
      }
      break;


      case 'Voltage-v':
      if (!isNumber(value)|| (value==0)) {
        $("#Voltage-v").val(null);
        V_v = null;
      } else {
        V_v = +value;
      }
      break;

             
          case 'enc_young-min':
        if ( (C2==0)&& (!isNumber(value) || (value==0)|| (isNumber(Ee_max) && value > Ee_max))){
          $("#enc_young-min").val(null);
          Ee_min = null;
        } else {
          Ee_min = +value;
        }
        break;


                case 'enc_young-max':
        if ((C2==0)&& (!isNumber(value) || (value==0)|| (isNumber(Ee_min) && value < Ee_min))){
          $("#enc_young-max").val(null);
          Ee_max = null;
        } else {
          Ee_max = +value;
        }
        break;
        
        case 'enc_young-step':
        if (C2==0 && (!isNumber(value) || (value==0)|| (isNumber(Ee_max) && isNumber(Ee_min) && value > (Ee_max-Ee_min)))){
          $("#enc_young-step").val(null);
          Ee_step = null;
        } else {
          Ee_step = +value;
        }
        break;
        

        case 'enc_young-v':
        if (C2==0 && (!isNumber(value)|| (value==0))) {
          $("#enc_young-v").val(null);
          Ee_v = null;
        } else {
          Ee_v = +value;
        }
        break;


  case 'enc_thickness-min':
        if (C2==0 && (!isNumber(value) || (value==0)|| (isNumber(he_max) && value > he_max))){
          $("#enc_thickness-min").val(null);
          he_min = null;
        } else {
          he_min = +value;
        }
        break;


                case 'enc_thickness-max':
        if (C2==0 && (!isNumber(value) || (value==0)|| (isNumber(he_min) && value < he_min))){
          $("#enc_thickness-max").val(null);
          he_max = null;
        } else {
          he_max = +value;
        }
        break;
        
        case 'enc_thickness-step':
        if (C2==0 && (!isNumber(value) || (value==0)|| (isNumber(he_max) && isNumber(he_min) && value > (he_max-he_min)))){
          $("#enc_thickness-step").val(null);
          Ee_step = null;
        } else {
          Ee_step = +value;
        }
        break;
        

        case 'enc_thickness-v':
        if (C2==0 && (!isNumber(value)|| (value==0))) {
          $("#enc_thickness-v").val(null);
          he_v = null;
        } else {
          he_v = +value;
        }
        break;


              case 'enc_density-min':
      if (C2==0 && (!isNumber(value) || (value==0) || (isNumber(pe_max) && value > pe_max))){
        $("#enc_density-min").val(null);
        pe_min = null;
      } else {
        pe_min = +value;
      }
      break;

      case 'enc_density-max':
      if (C2==0 && (!isNumber(value) || (value==0)|| (isNumber(pe_min) && value < pe_min))){
        $("#enc_density-max").val(null);
        pe_max = null;
      } else {
        pe_max = +value;
      }
      break;

      case 'enc_density-step':
      if (C2==0 && (!isNumber(value) || (value==0) || (isNumber(pe_max) && isNumber(pe_min) && value > (pe_max-pe_min)))){
        $("#enc_density-step").val(null);
        pe_step = null;
       } else {
        pe_step = +value;
      }
      break;


      case 'enc_density-v':
      if (C2==0 && (!isNumber(value)|| (value==0)) ){
        $("#enc_density-v").val(null);
        pe_v = null;
      } else {
        pe_v = +value;
      }
      break;
 

             case 'op_frequency-v':
      if (!isNumber(value)|| (value==0)) {
        $("#op_frequency-v").val(null);
        ff_v = null;
      } else {
        ff_v = +value;
      }
      break;

            case 'shp_frequency-v':
      if (!isNumber(value)|| (value==0)) {
        $("#shp_frequency-v").val(null);
        f_v = null;
      } else {
        f_v = +value;
      }
      break;

      case 'ext_force-v':
      if (!isNumber2(value)) {
        $("#ext_force-v").val(null);
        fo_v = null;
      } else {
        fo_v = +value;
      }
      break;

      case 'curvature-v':
      if (!isNumber2(value)) {
        $("#curvature-v").val(null);
        cu_v = null;
      } else {
        cu_v = +value;
      }
      break;



    }



    response.succeed = true;
    return response;
  }

    ///////****Calculate functions******/////


  function calcMl(){

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
    Zc = math.divide(Zc,Cv); //Zc=1./1j./2./pi./f./Cv

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

    // ZRc=math.multiply(ZsD,1e6);
    ZRc=math.divide(ZRc,car);
    rcp=math.divide(crs,car);

    temp=math.add(Z2D,ZRc);
    temp1=math.multiply(Z2D,ZRc);
    ZT1=math.divide(temp1,temp);

    ZT=math.add(ZT1,rcp);
    
    Zz=math.divide(ZT1,ZT);
    Zz=math.multiply(Zz,Zp);
    Zz=math.divide(Zz,ZsD);


    cosh3=math.multiply(alf,_hp);
    cosh3=math.cosh(cosh3);

    Ma1=math.multiply(2,al);
    Ma1=math.multiply(Ma1,Cv);
    Ma1=math.multiply(Ma1,_w);
    Ma1=math.multiply(Ma1,V);
    Ma1=math.multiply(Ma1,_Ep);
    Ma1=math.divide(Ma1,cosh3);

    dh=_hp/200;
    Ma2=0;
    h=math.divide(_hg,2);
    _ht2=math.add(h,_hp);
 
    for (i=dh; i<=200; i++){     
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
     Mfl=math.multiply(fl,ffo);
     Mx=math.subtract(Mx,Mfl);
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


     /***********time constants************/
    function calcfrequnecy(ww,LL,hhp,hhg,ssige,ssigi,ssigs,CCv,ccrs,ccar){


          _hhp = hhp*Math.pow(10,-6);
          _hhg = hhg*Math.pow(10,-6);
          _LL = LL*Math.pow(10,-3);
          _ww = ww*Math.pow(10,-3);
          _CCv  = CCv*Math.pow(10,6);


     var te=Math.pow(_LL,2);
     te=math.multiply(te,_CCv);
     te=math.divide(te,ssige);
     var fe=math.divide(1,te);
     fe=math.divide(fe,2);
     fe=math.divide(fe,Math.PI);

        console.log(te)

     var ti=Math.pow(_hhp,2);
     ti=math.multiply(ti,_CCv);
     ti=math.divide(ti,ssigi);
     var fi=math.divide(1,ti);
     fi=math.divide(fi,2);
     fi=math.divide(fi,Math.PI);

       console.log(ti)

     var ts=math.multiply(_hhp,_hhg);
     ts=math.multiply(ts,_CCv);
     ts=math.divide(ts,ssigs);
     ts=math.divide(ts,2);
     var fs=math.divide(1,ts);
     fs=math.divide(fs,2);
     fs=math.divide(fs,Math.PI);

        console.log(ts)

     if (ccrs==0)  fc=fs;
     else{

     var tc=math.multiply(_hhp,_LL);
     tc=math.multiply(tc,_ww);
     tc=math.multiply(tc,_CCv);
     tc=math.multiply(tc,ccrs);
     tc=math.divide(tc,ccar);
     // console.log(ccar);
     // console.log(ccrs);
     var fc=math.divide(1,tc);
     fc=math.divide(fc,2);
     fc=math.divide(fc,Math.PI);

      console.log(tc)
     }


     var FF=null;
     var FF=Math.min(fe, fi, fs, fc);
      console.log(FF)

     return [FF];

    }

 // main caculations for a set of fixed parameter values happen here.

//******frequnecy dependent strain****///

    function calcEW(f){

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
    Zc = math.divide(Zc,Cv); //Zc=1./1j./2./pi./f./Cv

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

    ZRc=math.divide(ZsD,car);
    rcp=math.divide(crs,car);

    temp=math.add(Z2D,ZRc);
    temp1=math.multiply(Z2D,ZRc);
    ZT1=math.divide(temp1,temp);

    ZT=math.add(ZT1,rcp);

    zT_polar=ZT.toPolar();
    Zamp=zT_polar.r;
    ZPh=-zT_polar.phi;


    Vz=math.multiply(V,ZT1);
    Vz=math.divide(Vz,ZT);
    // console.log(V);

    // console.log(Vz);

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
          Ew = math.multiply(pw,al);
          ew_polar=Ew.toPolar();
          ew=ew_polar.r;

          // console.log(ew);
        }

          // console.log(pw);
          
          function calcForce(){
    ////**********Force************////
        
    var temp = _Ep*3;
          temp = math.multiply(temp,ew);//1E6*3*Ep*al*pw

          var temp2 = _w*_hp*(_hp+_hg);//w*hp*(hp+hg)

          var fw = math.multiply(temp,temp2);
          fw = math.divide(fw,2);
          fw_abs = math.divide(fw,_L);//Fw=1E6*3*Ep*al*pw*w*hp*(hp+hg)/2/L;
        }

/*******************Displacement**********************/
function calcDeflection(){

      calcEI();  
      e=math.multiply(Cv,al,V);

      Ma=math.multiply(e,_Ep,_w,(htt2-ht2));
      tempk=math.divide(Ma,EI);
     
      tempY=math.multiply(tempk,_L);
      tempY=math.divide(tempY,2);
      tempY=math.sin(tempY);
      tempY=Math.pow(tempY,2);
      tempY=math.multiply(tempY,2);
      tempY=math.divide(tempY,tempk);
      tempY=math.abs(tempY);

      tempX=math.multiply(tempk,_L);
      tempX=math.divide(tempX,2);
      tempXs=math.sin(tempX);
      tempXc=math.cos(tempX);
      tempX=math.multiply(tempXs,tempXc);
      tempX=math.multiply(tempX,2);
      tempX=math.divide(tempX,tempk);
      tempX=math.subtract(_L,tempX);
      tempX=math.abs(tempX);
     

      dw_abs=math.multiply(tempY,1000);
      xw_abs=math.multiply(tempX,1000);
        

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

calcMl();

for (l=dl; l<=_L+dl; l=l+dl){
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
 
calcEW(f); 
calcForce();

for (i=0;i<=3000;i=i+1){
    ffo=math.multiply(fw_abs,i);
    ffo=math.divide(ffo,100);
    // console.log(i)
    

    err=1;
    cou=0;
    while(err>=0.005){
        cou=cou+1;
        TET=0;
        Dis_abs=0;
        Xis_abs=0;
        dwa_arr=[];
        xwa_arr=[];
        jj=0
        for (l=dl; l<=_L+dl; l=l+dl){
        calcD();
        Dis_abs=Dis_abs+dw_abs;
        dwa_arr.push(Dis_abs);
        Xis_abs=Xis_abs+lxw_abs;
        xwa_arr.push(Xis_abs);
        TET=TET+tet;
        jj=jj+1;
    }
    err=math.subtract(Y,Dis_abs);
    err=math.divide(err,Dis_abs);
    err=math.abs(err);
   
    Y=Dis_abs;
    X=Xis_abs;
    T=TET;
    d_arr=dwa_arr;
    x_arr=xwa_arr;
}

 //    console.log(cou);
 // console.log(err);
 //      console.log(Y);
 //   console.log(Dis_abs)
 //   console.log(ffo)


Xf=math.subtract(X0,X);
Yf=math.subtract(Y0,Y);
Xf=Math.pow(Xf,2);
Yf=Math.pow(Yf,2);
Z=math.add(Xf,Yf);
Z=math.sqrt(Z);
Z=math.multiply(Z,1e3);
ffo=math.multiply(ffo,1e6);

if (Y>=0 ){
zw_arr.push(Z);
fow_arr.push(ffo);
Fmax=ffo;
}


else{
break;
}


}
}

function calcshape(){

f=f_v;
dl=_L/100;
dwa_arr=[];
xwa_arr=[];
d_arr=[];
x_arr=[];
Dis_abs=0;
Xis_abs=0;
TET=0;


ffo=0;
jj=0;

calcMl();

for (l=dl; l<=_L+dl; l=l+dl){
        calcD();
        Dis_abs=Dis_abs+dw_abs;
        dwa_arr.push(Dis_abs);
        Xis_abs=Xis_abs+lxw_abs;
        xwa_arr.push(Xis_abs);
        TET=TET+tet;
        console.log(l);
        jj=jj+1;
    }
    Y=Dis_abs;
    X=Xis_abs;
    Y0=Dis_abs;
    X0=Xis_abs;
    T=TET;
    d_arr=dwa_arr;
    x_arr=xwa_arr;
    // console.log(jj);
 
// calcEW(f_v); 
// calcForce();
// fo_v=math.multiply(fo_v,1e-6);

for (i=0;i<=101;i=i+1){
    ffo=math.multiply(fo,i);
    ffo=math.divide(ffo,100);
    err=1;
    while(err>=0.005){
        TET=0;
        Dis_abs=0;
        Xis_abs=0;
        dwa_arr=[];
        xwa_arr=[];
        jj=0
        for (l=dl; l<=_L+dl; l=l+dl){
        calcD();
        Dis_abs=Dis_abs+dw_abs;
        dwa_arr.push(Dis_abs);
        Xis_abs=Xis_abs+lxw_abs;
        xwa_arr.push(Xis_abs);
        TET=TET+tet;
        jj=jj+1;
    }
    err=math.subtract(Y,Dis_abs);
    err=math.divide(err,Dis_abs);
    err=math.abs(err);

    Y=Dis_abs;
    X=Xis_abs;
    T=TET;
    d_arr=dwa_arr;
    x_arr=xwa_arr;
}
}
lxw_arr=x_arr;
ldw_arr=d_arr;
DMAX=Dis_abs;
XMAX=Xis_abs;

}


function calcdisplacement(){
dl=_L/200;
TET=0;
Dis_abs=0;
Xis_abs=0;
ffo=0;
fow_arr=[];
zw_arr=[];

calcMl();

for (l=dl; l<=_L+dl; l=l+dl){

  calcD();

Dis_abs=math.add(Dis_abs,dw_abs);
Xis_abs=math.add(Xis_abs,xw_abs);

TET=math.add(TET,tet);

// l=l+dl;

}
          Dis_abs=math.multiply(Dis_abs,1000);
          Xis_abs=math.multiply(Xis_abs,1000);
          // Dis_abs=math.abs(Dis_abs);
          // Xis_abs=math.abs(Xis_abs);

}
          /**********Power ***********/
        function calcPower(){


          var temp=math.pow(V,2);
          var tempt=Math.cos(ZPh);
          tempt=math.multiply(temp,tempt);
          pw=math.divide(tempt,4);
          pw=math.divide(pw,Zamp);
          pw_abs=math.multiply(pw,1000);
          
          }  




        function calcEI(){

  if (C2==1){_he=0;}         

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

/**********Stiffness ***********/

function calcSTFN(){   

     calcEI();
 
      // temppe = math.multiply(EI,_w); // w*(Ee*(htt^3-ht^3)+Ep*(ht^3-hg^3)+Es*hg^3)
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
    tempp=math.multiply(pm,temph);
    tempe=2*math.multiply(pe,_he);
    tempt=math.add(temph,_he,_he);
    den=math.add(tempp,tempe);
    den=math.divide(den,tempt);
}

else{
  den=pm;
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
        

  function calcCutoff(_Fout){

          ff_arr=[];
          ew_arr = [];


          ff_min=_Fout/10;
          ff_max=_Fout*10;
        
        for(df=0; df<2; df=df+0.02) {

          f=ff_min*Math.pow(10,df);
           ff_arr.push(+f); 
        
          

          calcEW(f);
          ew_arr.push(ew);

}
        F0=ew_arr[0]*Math.sqrt(0.5);
        for(i=0; i<ew_arr.length; i++){
          if(ew_arr[i]<=F0){
            CFF=ff_arr[i];
            break;

          }
        }
      }


      function calcData(){
      inde=0;

        if(state=="fixed_values"){


        Fout=null;
        f_arr =[];
        ff_arr=[];
        fw_arr = [];
        f1_arr = [];
        ew_arr = [];
        zT_arr=[];
        dw_arr = [];
        xw_arr = [];
        pw_arr=[];
        pws_arr=[];
        ldw_arr=[];
        lxw_arr=[];
        fo_arr=[],


          _hp = hp_v*Math.pow(10,-6);
          _he = he_v*Math.pow(10,-6);
          sigi = sigi_v;
          _Ep = Ep_v*Math.pow(10,6);
          _Ee = Ee_v*Math.pow(10,6);
          sige = sige_v;
          Cv = Cv_v*Math.pow(10,6);
          al = al_v*Math.pow(10,-9);
          _hg = hg_v*Math.pow(10,-6);
          sigs = sigs_v;
          _Es = Es_v*Math.pow(10,6);
          _L = L_v*Math.pow(10,-3);
          _w = w_v*Math.pow(10,-3);
          car=car_v*Math.pow(10,-6);
          crs=crs_v*Math.pow(10,-6);
          // _w=_L*ar;
          V = V_v;
          dr = dr_v;
          cu=cu_v*Math.pow(10,2);
          pm=pm_v*Math.pow(10,3);
          pe=pe_v*Math.pow(10,3);
          fo=fo_v*Math.pow(10,-6);

          
            if( (C2==0) && ((!isNumber(_he) || (!isNumber(pe)) || (!isNumber(_Ee))) ))
                    {alert("Please fill in all the blank fields");
          stopprogress();
          return;
        }


          if(((!isNumber(_hp)) || (!isNumber(sigi)) || (!isNumber(_Ep)) || (!isNumber(sige)) || (!isNumber(Cv)) || (!isNumber(al)) || (!isNumber(_hg)) || (!isNumber(sigs)) || (!isNumber(_Es))|| (!isNumber(_L)) || (!isNumber(_w))|| (!isNumber(V))|| (!isNumber(pm))|| (!isNumber(f_v))|| (!isNumber2(dr))|| (!isNumber2(cu_v))|| (!isNumber2(fo_v))))
            {alert("Please fill in all the blank fields");
          stopprogress();
          return;
        }

        calcRF();

        Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);

        f_min=Fout/100;
        f_max=Fout*100;

        // if (f_max>rf/10){
        //  alert("The model does not predict the values of force and displacement and shape of the beam at frequnecies close to or larger than the resonance frequnecy of the beam.");
        // f_max=rf/10;
        // f_min=f_max/10000}

                  // console.log(Fout)


        for(df=0; df<5; df=df+0.02) {

          f=f_min*Math.pow(10,df);

          // console.log(f);

          f_arr.push(+f);  

          calcEW(f);
          ew_arr.push(ew); 
           calcForce();
          fw_abs=math.multiply(fw_abs,1e6);
          fw_arr.push(fw_abs);
          calcPower();
          pw_arr.push(pw_abs);
          pws_abs=0;
          pws_arr.push(pws_abs);
          calcdisplacement();
          dw_arr.push(Dis_abs);
          xw_arr.push(Xis_abs);  

} 

         //////cut off frequnecy/////   
F0=ew_arr[0]*Math.sqrt(0.5);
for(i=0; i<ew_arr.length; i++){
  if(ew_arr[i]<=F0){
    CF=f_arr[i];
    break;

  }
}

// if (5*CF>f_max)
// alert("The model does not predict the values of force and displacement at frequnecies close to or larger than the resonance frequnecy of the beam.");


F1=ew_arr[0]*100;
calcSTFN();
f=f_v;
calcforcedisp();

//*************force**************//
// f_min=Fout/100;
// f_max=Fout*100;

//         if (f_max>rf/10){
//          // alert("The model does not predict the values of force and displacement at frequnecies close to or larger than the resonance frequnecy of the beam.");
//         f_max=rf/10;
//         f_min=f_max/10000}

//         for(df=0; df<4; df=df+0.2) {

//           f=f_min*Math.pow(10,df);

//           f1_arr.push(+f);  
//           F_max=calcforcedisp();
//           fw_arr.push(Fmax);
//       }

      

//***********shape of the beam*************//
ldw_arr=[];
lxw_arr=[];
calcshape();
ldw_arr=math.multiply(ldw_arr,1000);
lxw_arr=math.multiply(lxw_arr,1000);
DMAX=math.multiply(DMAX,1000);
XMAX=L_v-math.multiply(XMAX,1000);
DMAX=expo(DMAX,2);
XMAX=expo(XMAX,2)



          

                  //progress = "working";
         // $("#progresstext").text("Calculating plot values . . .");

         cleargraphs();
         d3.selectAll("svg > *").remove();

         // calcEW(); //main caculations for a set of fixed parameter values happen here.         prepareData("xisplacement"); //prepares data for plot 1
         prepareData("displacement"); //prepares data for plot 2
         EW_drawaxis("#graph1"); //draws axis for plot 1
         drawScatterPlot("displacement"); //plot 1
         // saveSvgAsPng(document.getElementsByTagName("svg")[0], "Vertical displacement-f.png");
         prepareData("xisplacement"); //prepares data for plot 2
         EW_drawaxis("#graph2"); //draws axis for plot 1
         drawScatterPlot("xisplacement"); //plot 1
         // saveSvgAsPng(document.getElementsByTagName("svg")[0], "Lateral displacement-f.png");
         prepareData("force"); //prepares data for plot 2
         EW_drawaxis("#graph3"); //draws axis for plot 2
         drawScatterPlot("force"); //plot2
         prepareData("power"); //prepares data for plot 3
         EW_drawaxis("#graph4"); //draws axis for plot 3
         drawScatterPlot("power"); //plot 3 
         prepareData("beam"); //prepares data for plot 3
         EW_drawaxis1("#graph5"); //draws axis for plot 3
         drawScatterPlot("beam"); //plot 3 
         prepareData("forcedis"); //prepares data for plot 3
         EW_drawaxis2("#graph6"); //draws axis for plot 3
         drawScatterPlot("forcedis"); //plot 3 
         // save();

          // var index = cutoff_arr.length-1;
          var val = expo(CF, 2);
          var val2=expo(F1, 2);
          var val3=expo(max_STFN,2);
          var val4=expo(rf, 2);

          $("#graphparam1").html("&emsp;Maximum Free Strain: "+val2+" %");
          $("#graphparam2").html("&emsp;Cutoff Frequency: "+val+" Hz");
          $("#graphparam3").html("&emsp;Stiffness: "+val3+" mN/m");
          $("#graphparam4").html("&emsp;Resonance Frequency: "+val4+" Hz");
          $("#uptfrc").css("display","inline");
          $("#frc-btn").css('display', "inline");
          $(".save").css('display', "inline");
                    // $(".saveme").css('display', "inline");

          $("#graph77").css('display', "none");
          $("#graph07").css('display', "none");


          EW_WriteParamValues(); //writes the fixed values for max and cutt-off thresholds
        // $("#progresstext").text("");
      } 

      else if(state =="range_values"){
        
         cutoff_arr=[];
         maxFW_arr = [];
         maxDW_arr = [];
         maxXW_arr = [];
         maxPW_arr=[];
         maxPWS_arr=[];
         ssw_arr=[];
         rrw_arr=[];
                //console.log(state);

        updateValue(param_id,v);
        param_max = +($("#"+param_id+"-max").val());
        param_min = +($("#"+param_id+"-min").val());
        param_step = +($("#"+param_id+"-step").val()); 
        param_arr = [];

// console.log(param_id);

        if (param_id=="dampingratio" || param_id=="contactres"){
            if ((!isNumber2(param_min) || (!isNumber(param_max))|| (!isNumber(param_step)) || (!isNumber(hp_v))|| (!isNumber(sigi_v))|| (!isNumber(Ep_v))|| (!isNumber(sige_v)) || (!isNumber(Cv_v)) || (!isNumber(al_v)) || (!isNumber(hg_v)) || (!isNumber(sigs_v))|| (!isNumber(pm_v))|| (!isNumber(V_v)) || (!isNumber(Es_v))|| (!isNumber(L_v))|| (!isNumber(w_v))|| (!isNumber2(dr_v))|| (!isNumber(ff_v))|| (!isNumber2(fo_v)) ||(!isNumber2(crs_v)) ||(!isNumber(car_v))))
            {
         alert("Please fill in all the blank fields");
         stopprogress()
         return;}}
             

       else{

        if(((!isNumber(param_min)) || (!isNumber(param_max))|| (!isNumber(param_step))|| (!isNumber(hp_v))|| (!isNumber(sigi_v))|| (!isNumber(Ep_v))|| (!isNumber(sige_v)) || (!isNumber(Cv_v)) || (!isNumber(al_v)) || (!isNumber(hg_v)) || (!isNumber(sigs_v))|| (!isNumber(pm_v))|| (!isNumber(V_v)) || (!isNumber(Es_v))|| (!isNumber(L_v))|| (!isNumber(w_v))|| (!isNumber2(dr_v))|| (!isNumber(ff_v))|| (!isNumber2(fo_v))||(!isNumber2(crs_v)) ||(!isNumber(car_v)))){
         alert("Please fill in all the blank fields");
         stopprogress()
         return;}
     }
        
         
        if(C2==0 && (!isNumber(pe_v) || !isNumber(Ee_v)|| !isNumber(he_v))) {
          alert("Please fill in the blank fields");
          stopprogress()
          return;}

          
                   for(v = param_min; v<=param_max; v = v+param_step){
          param_arr.push(v);
          Fout=null;

          if (param_id=="PEDOT-thickness"){
            hp=v;
             Fout= calcfrequnecy(w_v,L_v,v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);

          }
          else
            hp = +hp_v;

          if (param_id=="PEDOT-ioniconductivity"){
            sigi=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,v,sigs_v,Cv_v,crs_v,car_v);


          }
          else
            sigi = +sigi_v;

          if (param_id=="PEDOT-youngs"){
            Ep=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);

          }

          else
            Ep = +Ep_v;

          if (param_id=="PEDOT-eleconductivity"){
            sige=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,v,sigi_v,sigs_v,Cv_v,crs_v,car_v);


          }
          else
            sige = +sige_v;
          if (param_id=="PEDOT-volumetric-Capacitance"){
            Cv=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,v,crs_v,car_v);
            
          }
          else
            Cv =+Cv_v

          if (param_id=="Alpha"){

            al=v
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);
          }

          else
            al = +al_v
          
          if (param_id=="spe-thickness"){
            hg=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);

          }

          else
            hg = +hg_v;

          if (param_id=="spe-ioniconductivity"){
            sigs=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,v,Cv_v,crs_v,car_v);

          }
          else
            sigs = +sigs_v;

          if (param_id=="speyoungs"){
            Es=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);

          }
          else
            Es = +Es_v;

          if (param_id=="Length"){
            L=v;
             Fout= calcfrequnecy(w_v,v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);

          }
          else
            L = +L_v;

          if (param_id=="aspectratio"){
            w=v;
             Fout= calcfrequnecy(v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);
          }
                    else
            w = +w_v;

          if (param_id=="contactres"){
            crs=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,v,car_v);
          }
                              else
            crs = +crs_v;

          if (param_id=="contactarea"){
            car=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,v);
          }

          else
            car = +car_v;

          if (param_id=="dampingratio"){
            dr=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);
          }

          else
            dr = +dr_v;

          if (param_id=="Voltage"){
            V=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);
          }

          else
            V = +V_v;

          if (param_id=="density"){
            pm=v*Math.pow(10,3);
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);
          }

          else
            pm = +pm_v*Math.pow(10,3);

          if (param_id=="enc_density"){
            pe=v*Math.pow(10,3);
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);
          }

          else
            pe = +pe_v*Math.pow(10,3);


          if (param_id=="enc_young"){
            Ee=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);
          }

          else
            Ee = +Ee_v;

          if (param_id=="enc_thickness"){
            he=v;
             Fout= calcfrequnecy(w_v,L_v,hp_v,hg_v,sige_v,sigi_v,sigs_v,Cv_v,crs_v,car_v);
          }

             else
            he = +he_v;

             // console.log(Fout);

          _hp = hp*Math.pow(10,-6); 
          _Ep = Ep*Math.pow(10,6);
          _hg = hg*Math.pow(10,-6);
          _Es = Es*Math.pow(10,6);
          _he = he*Math.pow(10,-6); 
          _Ee = Ee*Math.pow(10,6);
          _L  = L*Math.pow(10,-3);
          _w  = w*Math.pow(10,-3);
          car= car*Math.pow(10,-6);
          crs= crs*Math.pow(10,-6);
          Cv  = Cv*Math.pow(10,6);
          al  = al*Math.pow(10,-9);
         

          // var CFF=null;


          calcCutoff(Fout);
          cutoff_arr.push(CFF);
          // console.log(CFF)


          f=ff_v

          calcEW(f);
          calcPower();
          pws_abs=0;
          maxPW_arr.push(pw_abs);
          maxPWS_arr.push(pws_abs);

          calcforcedisp();
          maxFW_arr.push(Fmax);
          calcdisplacement();
          // dw_abs=math.abs(Dis_abs);
          // xw_abs=math.abs(Xis_abs);
          maxDW_arr.push(Dis_abs);
          maxXW_arr.push(Xis_abs);

          calcSTFN();
          ssw_arr.push(max_STFN);
          calcRF();
          rrw_arr.push(rf);

          
          // maxPW_arr.push(PWW);


        }

        // console.log(param_arr);
        // console.log(cutoff_arr);
        cleargraphs();//cleans previous plots
        prepareData("cutoff"); //prepares the data for the two plots
        EW_drawaxis("#graph1");
        drawScatterPlot("cutoff");    //plot 1 

        prepareData("maxDisplacement"); //prepares the data for the two plots
        EW_drawaxis("#graph2");
        drawScatterPlot("maxDisplacement");    //plot 2 

        prepareData("maxXisplacement"); //prepares the data for the two plots
        EW_drawaxis("#graph3");
        drawScatterPlot("maxXisplacement");    //plot 3

        prepareData("maxForce");
        EW_drawaxis("#graph4");
        drawScatterPlot("maxForce");    //plot 4

        prepareData("maxPower");
        EW_drawaxis("#graph5");
        drawScatterPlot("maxPower");    //plot 5 

        prepareData("maxStiffness");
        EW_drawaxis("#graph6");
        drawScatterPlot("maxStiffness");    //plot 7 

        prepareData("maxResonance");
        EW_drawaxis("#graph7");
        drawScatterPlot("maxResonance"); 
        // save();   //plot 6 

        EW_WriteParamValues(); //We don't write any parameters values but may in future 
          $("#graphinfo").css("display","none");
          $("#uptfrc").css("display","none");
          $("#frc-btn").css('display', "none");
           $(".save").css('display', "inline"); 
          $("#graph77").css('display', "inline");
          $("#graph07").css('display', "inline");
      }
    }
    
    //prepares the data in a format that is appropriate for d3.js to draw the graphs
    function prepareData(datatype){
      switch(datatype){

        case "forcedis":
        dim1_text = "Displacement (mm)";
        dim2_text = "External force (µN)";
        data = zw_arr.map(function(d, i){
         return { 'dim1' : zw_arr[i], 'dim2' : fow_arr[i] };
       });
        break;

        case "beam":
        dim1_text = "x (mm)";
        dim2_text = "y (mm)";
        data = lxw_arr.map(function(d, i){
         return { 'dim1' : lxw_arr[i], 'dim2' : ldw_arr[i] };
       });
        break;


        case "power":
        dim1_text = "Frequency (Hz)";
        dim2_text = "Average power consumption (mW)";
        data = f_arr.map(function(d, i){
         return { 'dim1' : f_arr[i], 'dim2' : pw_arr[i] };
       });
        break;

        case "force":
        dim1_text = "Frequency (Hz)";
        dim2_text = "Blocking Force (µN)";
        data = f_arr.map(function(d, i){
         return { 'dim1' : f_arr[i], 'dim2' : fw_arr[i] };
       });
        break;

        case "force1":
        dim1_text = "Frequency (Hz)";
        dim2_text = "Blocking force (µN)";
        data = f1_arr.map(function(d, i){
         return { 'dim1' : f1_arr[i], 'dim2' : fw_arr[i] };
       });
        break;

        case "displacement":
        dim1_text = "Frequency (Hz)";
        dim2_text = "Vertical displacement (mm)";
        data = f_arr.map(function(d, i){
         return { 'dim1' : f_arr[i], 'dim2' : dw_arr[i] };
       });
        break;

        case "xisplacement":
        dim1_text = "Frequency (Hz)";
        dim2_text = "Lateral displacement (mm)";
        data = f_arr.map(function(d, i){
         return { 'dim1' : f_arr[i], 'dim2' : xw_arr[i] };
       });
        break;

        case "cutoff":
        dim1_text = parseDimensionText(param_id);
        dim2_text = "Cutoff Frequency (Hz)";
        data = param_arr.map(function(d, i){
         return { 'dim1' : param_arr[i], 'dim2' : cutoff_arr[i] };
       });
        break;

        case "maxForce":
        dim1_text= parseDimensionText(param_id);
        dim2_text= "Blocking force (µN)";
        data = param_arr.map(function(d, i){
         return { 'dim1' : param_arr[i], 'dim2' : maxFW_arr[i] };
       });
        break;

        case "maxDisplacement":
        dim1_text= parseDimensionText(param_id);
        dim2_text= "Vertical displacement (mm)";
        data = param_arr.map(function(d, i){
         return { 'dim1' : param_arr[i], 'dim2' : maxDW_arr[i] };
       });
        break;

        case "maxXisplacement":
        dim1_text= parseDimensionText(param_id);
        dim2_text= "Lateral displacement (mm)";
        data = param_arr.map(function(d, i){
         return { 'dim1' : param_arr[i], 'dim2' : maxXW_arr[i] };
       });
        break;

        case "maxPower":
        dim1_text = parseDimensionText(param_id);
        dim2_text = "Average power consumption (mW)";
        data = param_arr.map(function(d, i){
         return { 'dim1' : param_arr[i], 'dim2' : maxPW_arr[i] };
       });
        break;


        case "maxStiffness":
        dim1_text = parseDimensionText(param_id);
        dim2_text = "Stiffness (mN/m)";
        data = param_arr.map(function(d, i){
         return { 'dim1' : param_arr[i], 'dim2' : ssw_arr[i] };
       });
        break;

        case "maxResonance":
        dim1_text = parseDimensionText(param_id);
        dim2_text = "Resonance Frequnecy (Hz)";
        data = param_arr.map(function(d, i){
         return { 'dim1' : param_arr[i], 'dim2' : rrw_arr[i] };
       });
        break;
      }

    }


    //We print max and cutoff threshold 
    function EW_WriteParamValues(){

     $("#draw-btn").text("Draw Plots")
     document.getElementById("draw-btn").style.color = "#FFFFFF";
     document.getElementById("draw-btn").style.backgroundColor = "#47b247";
     inde=1;
     $("#progresstext").text("Results:");
     progress = "working";
   }


  
    //draw plot axis
    function EW_drawaxis(plotid){
      margin = {top: 100, right: 20, bottom: 20, left:20};
      width = $(plotid).width()-margin.left+20;
      height = $(plotid).height()-margin.bottom+20;

      svg = d3.select(plotid).append("svg")
      .attr("width", width)
      .attr("height",height);


       /*********prapare  X and Y axis *********/
      if(state =="fixed_values"){
        x =  d3.scaleLog();
        xpaddingX =f_max ;
        xpaddingN =f_min ;
        x.domain([(f_min),(f_max)])
        .range([70, (width-50)]);
       

        y = d3.scaleLinear();
        var min = d3.min(data, function(d) { return d.dim2; });
        var max = d3.max(data, function(d) { return d.dim2; });
        var y_padding = (max-min)/10;
        if (y_padding<=0.1) y_padding=max/10;
        y.domain([(min-y_padding),(max+y_padding)])
        .range([height-50, 50]);
         }

      else {
        x = d3.scaleLinear();
        xpadding = param_step/2;
        x.domain([(param_min-xpadding),(param_max+xpadding)])
        .range([70, (width-50)]);

        y = d3.scaleLinear();
        var min = d3.min(data, function(d) { return d.dim2; });
        var max = d3.max(data, function(d) { return d.dim2; });
        var y_order = max-min;       
        if (y_order<=0.5) ypadding=min/10;
        else ypadding = (max-min)/10;
        y.domain([(min-ypadding),(max+ypadding)])
        .range([height-50, 50]);
      }


      var xaxis = svg.append("g")
      .attr("transform", "translate(0,"+(height-50)+")")
      .call(d3.axisBottom(x)
      .ticks(num_ticks_x));
     // text label for the x axis
     svg.append("text")             
     .attr("transform","translate("+ ((width)/2) + ","+(height-10) + ")")
     .style("text-anchor", "middle")
     .attr("class","axislabel")
     .text(dim1_text);


        var y_1 = Math.floor(Math.log10(max));
        var yaxis = svg.append("g")
        .attr('transform', "translate(70,0)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .call(d3.axisLeft(y)
        .ticks(num_ticks_y)
        .tickFormat(d3.formatPrefix(".1", Math.pow(10,y_1))));

           // text label for the y axis
         svg.append("text")
         .attr("transform", "translate("+ (20) +","+((height)/2)+")rotate(-90)")
         .style("text-anchor", "middle")
         .attr("class","axislabel")
         .text(dim2_text); 


        xMap = function(d) { return x(d.dim1);}; // data -> display
        yMap = function(d) { return y(d.dim2);};
        line = d3.line()
        .x(xMap)
        .y(yMap);

      }

      function EW_drawaxis1(plotid){
      var margin = {top: 100, right: 20, bottom: 20, left:20},
      width = $(plotid).width()-margin.left+20, 
      height = $(plotid).height()-margin.bottom+20;

      svg = d3.select(plotid).append("svg")
      .attr("width", width)
      .attr("height",height);

      var x,y;

        x = d3.scaleLinear();
        x.domain([0,L_v])
         .range([70, (width-50)]);
        var maxx = d3.max(data, function(d) { return d.dim1; });
            maxx=L_v-maxx;
            maxx=expo(maxx, 1);

        var xaxis = svg.append("g")
         .attr("transform", "translate(0,"+(height-50)+")")
         .call(d3.axisBottom(x)
         .ticks(num_ticks_x));

         // text label for the x axis
        svg.append("text")             
         .attr("transform", "translate("+ ((width)/2) + ","+(height-10) + ")")
         .style("text-anchor", "middle")
         .attr("class","axislabel")
         .text(dim1_text);

             /*********prapare  Y axis *********/
             
        y = d3.scaleLinear();
          y.domain([0,L_v])
          .range([height-50, 50]);
        var maxy = d3.max(data, function(d) { return d.dim2; });
                  maxy=expo(maxy, 1);



        var yaxis = svg.append("g")
         .attr('transform', "translate(70,0)")
         .attr("y", 6)
         .attr("dy", "0.71em")
         .attr("text-anchor", "end")
         .call(d3.axisLeft(y)
         .ticks(num_ticks_x));

           // text label for the y axis
           svg.append("text")
           .attr("transform", "translate("+ (20) +","+((height)/2-60)+")rotate(-90)")
           .style("text-anchor", "middle")
           .attr("class","axislabel")
           .text(dim2_text);     

           svg.append("text")
            .attr("transform", "translate("+ ((width)/2+12) + ","+(height-310) + ")")
            .attr("text-anchor", "middle")  
            .style("font-size", "15px") 
            .style("font-weight", "bold") 
            .text("   Shape of the actuator at its maximum deflection at "+f_v+" Hz");

            svg.append("text")
            .attr("transform", "translate("+ ((width)/2-137) + ","+(height-280) + ")")
            .attr("text-anchor", "left")  
            .style("font-size", "12px") 
            .style("font-weight", "bold") 
            .text("Vertical displacement (y-direction): "+DMAX+" mm");

            svg.append("text")
            .attr("transform", "translate("+ ((width)/2-137) + ","+(height-260) + ")")
            .attr("text-anchor", "left")  
            .style("font-size", "12px") 
            .style("font-weight", "bold") 
            .text("Lateral displacement (x-direction): "+XMAX+" mm");

  

        xMap = function(d) { return x(d.dim1);}; // data -> display
        yMap = function(d) { return y(d.dim2);};
        line = d3.line()
        .x(xMap)
        .y(yMap);
      }

    function EW_drawaxis2(plotid){
      var margin = {top: 100, right: 20, bottom: 20, left:20},
      width = $(plotid).width()-margin.left+20, 
      height = $(plotid).height()-margin.bottom+20;

      svg = d3.select(plotid).append("svg")
      .attr("width", width)
      .attr("height",height);

      var x,y;

      /*********prapare  X and Y axis *********/
        x = d3.scaleLinear();
        var minx = d3.min(data, function(d) { return d.dim1; });
        var maxx = d3.max(data, function(d) { return d.dim1; })
        var xpadding = (maxx-minx)/10;
        x.domain([0,(maxx+xpadding)])
        .range([70, (width-50)]);

        y = d3.scaleLinear();
        var miny = d3.min(data, function(d) { return d.dim2; });
        var maxy = d3.max(data, function(d) { return d.dim2; });
        ypadding = (maxy-miny)/10;
        y.domain([0,(maxy+ypadding)])
        .range([height-50, 50]);
        maxy=expo(maxy, 1);
    
      var x_1 = Math.floor(Math.log10(maxx));
      var xaxis = svg.append("g")
      .attr("transform", "translate(0,"+(height-50)+")")
      .call(d3.axisBottom(x)
      .ticks(num_ticks_x)
      .tickFormat(d3.formatPrefix(".1", Math.pow(10,x_1))));
     // text label for the x axis
     svg.append("text")             
     .attr("transform","translate("+ ((width)/2) + ","+(height-10) + ")")
     .style("text-anchor", "middle")
     .attr("class","axislabel")
     .text(dim1_text);


        var y_1 = Math.floor(Math.log10(maxy));
        var yaxis = svg.append("g")
        .attr('transform', "translate(70,0)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .call(d3.axisLeft(y)
        .ticks(num_ticks_y)
        .tickFormat(d3.formatPrefix(".1", Math.pow(10,y_1))));



           // text label for the y axis
         svg.append("text")
         .attr("transform", "translate("+ (20) +","+((height)/2)+")rotate(-90)")
         .style("text-anchor", "middle")
         .attr("class","axislabel")
         .text(dim2_text); 


         svg.append("text")
            .attr("transform", "translate("+ ((width)/2-137) + ","+(height-280) + ")")
            .attr("text-anchor", "left")  
            .style("font-size", "12px") 
            .style("font-weight", "bold") 
            .text("Blocking force at "+f_v+" Hz: "+maxy+" µN");

          svg.append("text")
          .attr("transform", "translate("+ ((width)/2+10) + ","+(height-301) + ")")
          .attr("text-anchor", "middle")  
          .style("font-size", "15px") 
          .style("font-weight", "bold") 
  

        xMap = function(d) { return x(d.dim1);}; // data -> display
        yMap = function(d) { return y(d.dim2);};
        line = d3.line()
        .x(xMap)
        .y(yMap);

      }


     function drawScatterPlot(datatype){

     var div = d3.select("body").append("div") 
    .attr("class", "tooltip")       
    .style("opacity", 0);

       svg.selectAll(".dot")
       .data(data)
       .enter()
       .append("rect")
       .attr("class", "dot")
       .attr("width", 6)
       .attr("height", 6)
       .attr("x", xMap)
       .attr("y", yMap) 
       .on("mouseover", function(d) {    
            div.transition()    
                .duration(200)    
                .style("opacity", .9); 
                div .html("("+expo((d.dim1),2) + ", "  + expo(d.dim2,2)+")")  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 28) + "px");     
            })          
        .on("mouseout", function(d) {   
            div.transition()    
                .duration(500)    
                .style("opacity", 0); 
        });


      switch(datatype){

        case "beam":
        svg.selectAll(".dot")
       .attr("stroke","black")
       .attr("width", 4)
       .attr("height", 4);
       break

        case "power":
        svg.selectAll(".dot")
       .attr("stroke","#00ffff")
       .attr("width", 2)
       .attr("height", 2);
       break


        case "displacement":
        svg.selectAll(".dot")
       .attr("stroke","#ffa500")
       .attr("width", 2)
       .attr("height", 2);
       break

       case "xisplacement":
        svg.selectAll(".dot")
       .attr("stroke","green")
       .attr("width", 2)
       .attr("height", 2);
       break

        case "force":
        svg.selectAll(".dot")
       .attr("stroke","red")
       .attr("width", 2)
       .attr("height", 2);
       break

        case "force1":
        svg.selectAll(".dot")
       .attr("stroke","red")
       .attr("fill","red");
       break

        case "forcedis":
        svg.selectAll(".dot")
       .attr("stroke","blue")
       .attr("fill","blue")
       .attr("width", 3)
       .attr("height", 3);
       break

       case "cutoff":
        svg.selectAll(".dot")
       .attr("stroke","purple")
       .attr("fill","purple");
       break

       case "maxDisplacement":
        svg.selectAll(".dot")
       .attr("stroke", "red")
       .attr("fill", "red");
            svg.append("text")
            .attr("transform", "translate("+ ((width)/2-120) + ","+(height-300) + ")")
            .attr("text-anchor", "left")  
            .style("font-size", "12px") 
            .style("font-weight", "bold") 
            .text(" f= "+ff_v+" Hz");
       break

       case "maxXisplacement":
        svg.selectAll(".dot")
       .attr("stroke", "brown")
       .attr("fill", "brown");
       svg.append("text")
      .attr("transform", "translate("+ ((width)/2-120) + ","+(height-300) + ")")
      .attr("text-anchor", "left")  
      .style("font-size", "12px") 
      .style("font-weight", "bold") 
      .text(" f= "+ff_v+" Hz");
       break

       case "maxForce":
        svg.selectAll(".dot")
       .attr("stroke", "black")
       .attr("fill", "black");
                   svg.append("text")
            .attr("transform", "translate("+ ((width)/2-120) + ","+(height-300) + ")")
            .attr("text-anchor", "left")  
            .style("font-size", "12px") 
            .style("font-weight", "bold") 
            .text(" f= "+ff_v+" Hz");
       break

      case "maxStiffness":
       svg.selectAll(".dot")
       .attr("stroke", "green")
       .attr("fill", "green");
       break

       case"maxPower":
        svg.selectAll(".dot")
       .attr("stroke", "blue")
       .attr("fill", "blue")
                   svg.append("text")
            .attr("transform", "translate("+ ((width)/2-120) + ","+(height-300) + ")")
            .attr("text-anchor", "left")  
            .style("font-size", "12px") 
            .style("font-weight", "bold") 
            .text(" f= "+ff_v+" Hz");
       break

              case"maxPowerstore":
        svg.selectAll(".dot")
       .attr("stroke", "orange")
       .attr("fill", "orange")
                   svg.append("text")
            .attr("transform", "translate("+ ((width)/2-120) + ","+(height-300) + ")")
            .attr("text-anchor", "left")  
            .style("font-size", "12px") 
            .style("font-weight", "bold") 
            .text(" f= "+ff_v+" Hz");
       break

       case "maxResonance":
        svg.selectAll(".dot")
       .attr("stroke", "orange")
       .attr("fill", "orange")

       break
       

     }
   }

    //cleans plots from the previous calculations
    function cleargraphs(){
      d3.selectAll(".graph").selectAll("*").remove();
      // $("#graph11").css('backgroundColor', "peru");
       $("#graphparam1").text("");
       $("#graphparam2").text("");
       $("#graphparam3").text("");
       $("#graphparam4").text("");
       $("#graphparam5").text("");
       $("#uptfrc").css("display","none");
       $("#frc-btn").css('display', "none");
       $(".save").css('display', "none");
       $(".save").css('backgroundColor', "gray");
       $(".save").prop( "disabled", false );
      $("#progresstext").text("");
    }

    function parseDimensionText(paramid){
     var text="";
     switch(paramid){
      case "PEDOT-thickness":
      text = "Conducting polymer's thickness (\xB5m)";

      break;
      case "PEDOT-ioniconductivity":
      text = "Conducting polymer's ionic conductivity (S/m)";
      break;
      case "PEDOT-youngs":
      text = "Conducting polymer's Youngs modulus (MPa)";
      break;
      case "PEDOT-eleconductivity":
      text = "Conducting polymer's electronic conductivity (S/m)";
      break;
      case "PEDOT-volumetric-Capacitance":
      text = "volumetric capacitance (MF/m^3)";
      break;
      case "Alpha":
      text = "strain to charge ratio (nm\u00B3/C)";
      break;


      case "spe-thickness":
      text = "Separator's thickness (µm)";
      break;
      case "spe-ioniconductivity":
      text = "Separator's ionic conductivity (S/m)";
      break;
      case "speyoungs":
      text = "Separator's Young's modulus (MPa)";
      break;


      case "Length":
      text = "Device's length (mm)";
      break;

      case "aspectratio":
      text = "Device's width (mm)";
      break;

      case "contactarea":
      text = "Contact area (mm^2)";
      break;

      case "contactres":
      text = "Specific contact resistance (\u2126mm^2)";
      break;

      case "Voltage":
      text = "Voltage (V)";
      break;

      case "dampingratio":
      text = "Device's damping ratio";
      break;

      case "density":
      text = "Mass density of trilayer (gr/cm\u00B3)";
      break;

      case "enc_young":
      text = "Encapsulating layer's Young's modulus (MPa)";
      break;

      case "enc_thickness":
      text = "Encapsulating layer's thickness (µm)";
      break;

      case "enc_density":
      text = "Encapsulating layer's mass density (gr/cm\u00B3)";
      break;


    }


    return text;
  }