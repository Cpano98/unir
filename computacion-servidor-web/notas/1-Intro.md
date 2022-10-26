## Programación WEB

CGI (Common Gateway Interface) - Protocolo que permite ejecutar programas en el servidor. Peocesa peticiones.
No son un lenguaje de programación -> Permiten que puedan escribirse en cualquier lenguaje, habitualmente, PERL o C.

### Otros lenguajes

- ASP (Active Server Pages): Servidores Windows.
- JSP (Java Server Pages): SUN Microsystems
- JAVA por medio de Servlets

# PHP

PHP Hypertext Preprocessor
```
    <?PHP
    print("Hello World!");
    ?>
```

### Notas:
- Para que el servidor sepa que la página tiene código PHP, el fichero debe tener la extensión .php.
- La etiqueta de cierre de PHP ?> tiene que ser lo último de la línea en la que se encuentre. Cuando el servidor encuentra esta etiqueta, ignora el resto de la línea. Por este motivo, después de la marca de cierre de PHP habrá que incluir un salto de línea.
- Las instrucciones PHP finalizan con " ; ".

### Tipos de datos:

- **integer:** para números enteros, admitiendo notación decimal, octal o hexadecimal.
- **float:** para valores reales o decimales (los decimales se indican con punto).
- **boolean:** true (verdadero, o cualquier valor distinto de cero) y false (falso, cero).
- **NULL:** solo contiene el valor NULL.
- **resource:** para referencias a recursos externos.

### Variables:

- Una característica de PHP es que el programador no indica de qué tipo son las variables, sino que se decide en tiempo de ejecución. No obstante, se puede consultar el tipo de una variable (**gettype / is_**unTipo) o forzar la conversión a un tipo concreto **(settype)**.

- **Declarar variables:** se hace antecediendo el símbolo del dólar **$** al nombre de variable que vamos a usar. Los nombres de las variables son sensibles a mayúsculas y minúsculas.

- **Asignar valores:** la forma habitual de hacer la asignación es por **valor**, utilizando el símbolo =. Esto significa que el valor asignado se copia en la variable y las modificaciones que se hagan en dicha variable no afecta a otras. Sin embargo, las variables también se pueden asignar por **referencia**. Esto significa que la variable asignada apunta a la variable original, por lo que los cambios en la primera repercuten en la variable asignada. Este tipo de asignación se realiza anteponiendo el símbolo **&** al nombre de la variable que se quiere asignar.

### Funciones:

- isset(): para averiguar si una variable ya existe en nuestro programa.
- unset(): para liberar la memoria variable asociada a una variable, lo cual supone eliminar el nombre y el contenido de la misma.
- empty(): para saber si la variable está vacía o es 0.

### Variable predefinidas:

- $GLOBALS: indica las variables disponibles de ámbito global.
- $_SERVER: información del servidor.
- $_GET: variables HTTP GET.
- $_POST: variables HTTP POST.
- $_FILES: variables de carga de archivos HTTP.
- $_REQUEST: variables HTTP Request.
- $_SESSION: variables de sesión.
- $_ENV: variables de entorno.
- $_COOKIE: cookies HTTP.
- $php_errormsg: último mensaje de error.
- $HTTP_RAW_POST_DATA: datos POST sin tartar.
- $http_response_header: encabezados de la respuesta HTTP.
- $argc: número de argumentos pasados.
- $argv: array con los argumentos.

### Constantes:

    define("PI", 3.1416);

### Constantes predefinidas:

__LINE__	El número de línea actual en el fichero.
__FILE__	Ruta completa y nombre del fichero con enlaces simbólicos resueltos. Si se usa dentro de un include, devolverá el nombre del fichero incluido.
__DIR__	Directorio del fichero. Si se utiliza dentro de un include, devolverá el directorio del fichero incluído. Esta constante es igual que dirname(__FILE__). El nombre del directorio no lleva la barra final a no ser que esté en el directorio root.
__FUNCTION__	Nombre de la función.
__CLASS__	Nombre de la clase. El nombre de la clase incluye el namespace declarado en (p.e.j. Foo\Bar). Tenga en cuenta que a partir de PHP 5.4 __CLASS__ también funciona con traits. Cuando es usado en un método trait, __CLASS__ es el nombre de la clase del trait que está siendo utilizado.
__TRAIT__	El nombre de el trait. El nombre del trait incluye el namespace si alguno fué declarado en (p.e.j. Foo\Bar).
__METHOD__	Nombre del método de la clase.
__NAMESPACE__	Nombre del espacio de nombres actual.

```
$varNumerica = 0;   //Operador de asignación con variable entera
$totalNum = $varNumerica + 3; //Operador suma
$otroTotal = $totalNum % 2;   //Operador módulo
$otroTotal += $totalNum;   //Operador suma y asignación
$varBooleana = 3 == 4;  //Operador asignación + comparación
$otraBooleana = !$varBooleana;   //Operador asignación + negación
$varBooleana = 3 == 4;  //Operador asignación + comparación
$otraBooleana = !$varBooleana;   //Operador asignación + negación
$varBooleana = $totalNum > 1;   //Operador asignación + comparación
/* -----
Operador ternario: Su equivalente a un condicional
if ( $varBooleana == true ) $res = 1;
else $res = 0;
------*/
```