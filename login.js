
$(document).ready(function(){
  $("#loginbutton").click(function(){
   //alert("hi.");
    //alert($("#uname").val());
	if($("#uname").val()=="abc" && $("#pword").val()=="123")
	{
		alert("Login Success");
		//$("#home").load();
		//$("#login").hide();
		//$.mobile.changePage( "C:\Users\Kutty\Desktop\Project in Desktop\Projecct page design\sos-home1.html", { transition: "pop"} );
		
		//window.open ("sos-home1.html","_self",false)
		
		window.open ("Loginvalidation","_self",false)
		
		//return false;
	}
	else
		alert("Username/Password mismatch. Please try again...");
  });
  $("#btn-creatnew").click(function(){
	//$.mobile.changePage("Jquery4.html#category",{transition:"pop"});
  });
});
