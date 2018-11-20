
        $("button#submitting").click(add);

//var input = $("input.form-control");

function add(){
        if($("input.form-control").val() !== ""){
                $("#btn-last").removeClass("d-none").addClass("d-block");
                var latestItem = $("input.form-control").val();
                
                
                $("tbody").append(`<tr><td>  ${latestItem} </td><td > <button class='btn btn-warning' id='removing'>Remove</button></td><td> <button class='btn btn-info'>Complete</button></td></tr>`);
                $("input.form-control").val("");
                
        }
      
}

$("body").keypress(function (event) {
        if(event.keyCode==13 || event.which==13){
                add();
        }
  });

  $('button#btn-last').click(function(){
        $("tr").empty();
        $("#btn-last").removeClass("d-block").addClass("d-none");
  });

$(document).on('click','#removing',function () {
        $(this).parent().parent().remove();
        
  });

  $(document).on('click',".btn-info",function () {  
        $(this).parent().parent().toggleClass("bg-success");
  });


