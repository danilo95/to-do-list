document.querySelector('form').addEventListener('submit',function(e){

    if(validation()){
    var salary=document.getElementById("Salary").value;
    var years=document.getElementById("Years").value;
    var days=document.getElementById("Days").value;
    calculate(salary,years,days);
      e.preventDefault();
   

}
});


function validation(){

    if (document.getElementById("Salary").value== "" ) {
		alert("Please fill Salary input with number greater than 0");
		return false;
	  }else if(document.getElementById("Years").value== "" ){
		alert('Please Complete years input with a number less than 35');
		return false;
      }else if(document.getElementById("Days").value=="" || document.getElementById("Days").value==0|| document.getElementById("Days").value>365){
		alert('Please Complete Days  input with a number less than 365');
		return false;
      }else{
          return true;
      }
      
}

function calculate(salary,years,days){

    var result;
    var salary15;
    
    if(years<=0){
        salary15=(salary*15)/30;
        result=parseFloat(Math.round(((salary15*days)/365) * 100) / 100).toFixed(2);
        showresult(result);
    }
    else if(years>=1 && years<=3){
        salary15=(salary*15)/30;
        result=parseFloat(salary15).toFixed(2);
        showresult(result);

    showresult(result);
    }
    else if(years>=3 && years<=10){
        salary15=(salary*19)/30;
        result=parseFloat(salary15).toFixed(2);
        
        showresult(result);
    }else{
        salary15=(salary*21)/30;
        result=parseFloat(salary15).toFixed(2);
        
        showresult(result);
    }
}

function showresult(result){

    Swal.fire('Your Bonus is $'+result);
}


