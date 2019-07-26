$nombre = $ _POST['nombre'];
$empresa =$ _POST['empresa'];
$email = $ _POST['email'];
$asunto = $ _POST['asunto'];
$mensaje = $ _POST['mensaje'];
$para = 'fer1norvakeck@gmail.com';
$titulo = 'Contacto';
 
$msjCorreo = "Nombre: $nombre\n Empresa: $empresa\n E-Mail: $email\n Asunto: $asunto\n Mensaje:\n $mensaje";
 
if ($ _POST['submit']) {
if (mail ($para, $titulo, $msjCorreo)) {
echo 'El mensaje se ha enviado';
} else {
echo 'Falló el envio';
}
}