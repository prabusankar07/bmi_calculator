var height,heightInMeters,heightSquare,weight,bmiResult=0,age,previousVal,bmiVerdict,bmiVerdictColor,bmiPrevious,i,gender="men";
 
$(document).ready(function(){

	window.onload=bmiGetValues();
  
	$( "#bmiRangeHeight" ).change(function() {
	    $( "#height" ).attr( "value", $(this).val() );
	    resizeImageHeight();
	});

	$( "#bmiRangeWeight" ).change(function() {
	    $( "#weight" ).attr( "value", $(this).val() );
	 	resizeImageWidth();
	});    

    $("#male").click(function(){
		gender="men";       
        genderSelection(this.id,gender);
    });

    $("#female").click(function(){
    	gender="women";
     	genderSelection(this.id,gender);
    });

    $("#veryYoung").click(function(){
        ageSelector(this.id,20);
    });

    $("#young").click(function(){
         ageSelector(this.id,28);
    });

    $("#adult").click(function(){
          ageSelector(this.id,38);
    });

    $("#midadult").click(function(){
          ageSelector(this.id,48);
    });

    $("#old").click(function(){
          ageSelector(this.id,58);
    });

    $("#veryold").click(function(){
          ageSelector(this.id,68);
    });
   
    function bmiGetValues(){
        height=$("#height").val();
        weight=$("#weight").val();
        age=$("#age").val();
        bmiPrevious=Math.round(bmiResult);
        bmiResultCalculation(height,weight,age);
    }
    function bmiResultCalculation(height,weight,age){
        heightInMeters=height/100;
        heightSquare=Math.pow(heightInMeters, 2);
        bmiResult=weight/heightSquare;
        bmiFinalResults(age,Math.round(bmiResult));
    }
    function bmiFinalResults(age,bmiResult){
        if(age<=24 && age>=19){
            if(bmiResult>=19 && bmiResult<=24){
                bmiVerdict='normal '; 
                bmiVerdictColor="green";
            }else if(bmiResult>24){
                bmiVerdict='overweight';
                bmiVerdictColor="#FC4245";
            }else  if(bmiResult<19){
                bmiVerdict='low weight';
                bmiVerdictColor="orange";
            }
        }else if(age>=25 && age<=34){
            if(bmiResult>=20 && bmiResult<=25){
	            bmiVerdict='normal'; 
	            bmiVerdictColor="green";
            }else if(bmiResult>25){
          		bmiVerdict='overweight ';
                bmiVerdictColor="#FC4245";
            }else if(bmiResult<20){
                bmiVerdict='lowweight';
                bmiVerdictColor="orange";
            }
        }else if(age>=35 && age<=44){
            if(bmiResult>=21 && bmiResult<=26){
                bmiVerdict='normal ';  
                bmiVerdictColor="green";
            }else if(bmiResult>26){
                bmiVerdict='overweight ';
                bmiVerdictColor="#FC4245";
            }else  if(bmiResult<21){
                bmiVerdict='lowweight';
                bmiVerdictColor="orange";
            }
        }else if(age>=45 && age<=54){
            if(bmiResult>=22 && bmiResult<=27){
                bmiVerdict='normal '; 
                bmiVerdictColor="green";
            }else if(bmiResult>27){
                bmiVerdict='overweight';
                bmiVerdictColor="#FC4245";
            }else  if(bmiResult<22){
               	bmiVerdict='lowweight';
                bmiVerdictColor="orange";
            }
        }else if(age>=55 && age<=64){
            if(bmiResult>=23 && bmiResult<=28){
                bmiVerdict='normal ';  
                bmiVerdictColor="green";
            }else if(bmiResult>28){
                bmiVerdict='overweight ';
                bmiVerdictColor="#FC4245";
            }else  if(bmiResult<23){
               	bmiVerdict='lowweight';
                bmiVerdictColor="orange";
            }
        }else if(age>=65) {
            if(bmiResult>=24 && bmiResult<=29){
                bmiVerdict='normal ';  
                bmiVerdictColor="green";
            }else if(bmiResult>29){
                bmiVerdict='overweight';
                bmiVerdictColor="#FC4245";
            }else  if(bmiResult<24){
                bmiVerdict='lowweight';
                bmiVerdictColor="orange";
            }
        }
       		jQuery({ countNum: bmiPrevious }).animate({ countNum: bmiResult }, {
		 	duration: 1000,
          	easing:'linear',
		  	step: function () {
		  	$('#bmivalue').text(Math.floor(this.countNum));
			}
			});

	        $(".result-pos").fadeIn();
	        $("#result").html(bmiVerdict);
	        $(".value-container").css('background',bmiVerdictColor);
		}
	function resizeImageHeight(){   
	    var orginalHeight = $("#image").height();
	    height=parseInt($("#height").val());
	    weight=parseInt($("#weight").val());
	    $("#image").fadeIn();

	   if(gender.localeCompare('men')==0){
	   		if(weight>=50 && weight<80){
	   	   		displayImageSelectionHeight(gender,'weight1');	    	
		    }else if(weight>=80 && weight<100){
		    	displayImageSelectionHeight(gender,'weight2');
		    }else if(weight>=100 && weight<150){
		    	displayImageSelectionHeight(gender,'weight3');
		    }else if(weight>=150){
		    	displayImageSelectionHeight(gender,'weight4');
		    }
		}else if(gender.localeCompare('women')==0){
			if(weight>=50 && weight<80){
	   	   		displayImageSelectionHeight(gender,'weight1');	    	
		    }else if(weight>=80 && weight<100){
		    	displayImageSelectionHeight(gender,'weight2');
		    }else if(weight>=100 && weight<150){
		    	displayImageSelectionHeight(gender,'weight3');
		    }else if(weight>=150){
		    	displayImageSelectionHeight(gender,'weight4');
		    }
		}
	}
	function resizeImageWidth(){   
	    weight=parseInt($("#weight").val());
	    height=parseInt($("#height").val());
	    var imagetype=$("#image").attr('src');
	    
	    if(gender.localeCompare('men')==0){
	   	    if(height>=50 && height<80){
		    	displayImageSelectionWidth(gender,'height1');	    	
		    }else if(height>=80 && height<100){
		    	displayImageSelectionWidth(gender,'height2');	    
		    }else if(height>=100 && height<150){
		    	displayImageSelectionWidth(gender,'height3');	    
		    }else if(height>=150){
		    	displayImageSelectionWidth(gender,'height4');	    
		}
		}else if(gender.localeCompare('women')==0){
	   	    if(height>=50 && height<80){
		    	displayImageSelectionWidth(gender,'height1');	    	
		    }else if(height>=80 && height<100){
		    	displayImageSelectionWidth(gender,'height2');	    
		    }else if(height>=100 && height<150){
		    	displayImageSelectionWidth(gender,'height3');	    
		    }else if(height>=150){
		    	displayImageSelectionWidth(gender,'height4');	    
		}
	}
	}	
	function ageSelector(id,age){
 		$("#age").val(age);
        bmiGetValues();
        $('button').removeClass('selected1');
        $('#'+id).addClass('selected1');
	}
	function genderSelection(id,gender){
    	$("#image").attr("src","images/"+gender+".png");
        $('button').removeClass('selected');
        $('#'+id).addClass('selected');
    }

		function displayImageHeight(gender,weight,height){
	   		$("#image").fadeOut('slow', function () {
	    $("#image").attr('src', 'images/'+gender+'/'+gender+'-'+height+'-'+weight+'.png');
	    $("#image").fadeIn('slow');
	    bmiGetValues();
	});
	}
    function displayImageSelectionHeight(gender,weight){
			if(height>=50 && height<80){
    		displayImageHeight(gender,weight,'height1');
	    }else if(height>=80 && height<100){
    		displayImageHeight(gender,weight,'height2');
		}else if(height>=100 && height<150){
    		displayImageHeight(gender,weight,'height3');
	  	}else if(height>=150){
    		displayImageHeight(gender,weight,'height4');
	   	}
	}
		function displayImageWidth(gender,height,weight){
		$("#image").fadeOut('slow', function () {
	    $("#image").attr('src', 'images/'+gender+'/'+gender+'-'+height+'-'+weight+'.png');
	    $("#image").fadeIn('slow');
	    bmiGetValues();
	});
	}
    function displayImageSelectionWidth(gender,height){
		if(weight>=50 && weight<80){
    		displayImageWidth(gender,height,'weight1');
	    }else if(weight>=80 && weight<100){
    		displayImageWidth(gender,height,'weight2');
		}else if(weight>=100 && weight<150){
    		displayImageWidth(gender,height,'weight3');
	  	}else if(weight>=150){
    		displayImageWidth(gender,height,'weight4');
	   	}
	}
});

