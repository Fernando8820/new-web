$("#form-consulta").submit(function(event){
// cancela el envío del formulario
event.preventDefault();
submitForm();
});

function submitForm(){
// Initiate Variables With Form Content
var nombre = $("#NombreContacto").val();
var empresa = $("#NombreEmpresa").val();
var email = $("#CorreoContacto").val();
var asunto = $("#Asunto").val();
var mensaje =$("#Consulta").val();

$.ajax({
    type: "POST",
    url: "fer1norvakeck@gmail.com",
    data: "name=" + nombre + "&email=" + email + "&empresa=" + emp + asunto +"&asunto" + "&mensaje=" + mensaje,
    success : function(text){
        if (text == "success"){
            formSuccess();
        }

        else {
        console.log("Error de PHP. No retorna Success",text);
        }
    }
});
}
function formSuccess(){
$( "#msgContacto" ).removeClass( "hidden-xl-down" );
$('input[type=text],input[type=email],input[type=tel],textarea').val('');
}