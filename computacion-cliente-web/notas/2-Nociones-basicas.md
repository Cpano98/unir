# Tipos de datos primitivos
JavaScript discernirá automáticamente que esa variable a (hablaremos del concepto de variable en el siguiente punto) es primero de tipo número (Number) y luego de tipo cadena de texto (String). Veremos estos tipos a continuación. El ejemplo anterior produciría un error gravísimo en otros lenguajes tipados como Java o C++. En estos lenguajes, una vez que una variable ha sido especificada con un valor (de manera implícita o explícita), ya no hay vuelta atrás: no puede cambiar de tipo.

    En los lenguajes tipados, si un valor nace con un tipo, ya no es posible cambiarlo. Con esto se persigue que el código sea más seguro y menos propenso a errores. JavaScript es un lenguaje no-tipado, es decir, dinámico.

JavaScript cuenta la instrucción typeof para averiguar el tipo de una variable:

    typeof "Hola aprendices de JavaScript!";

## Variables VS . Const
Las variables declaradas como const se convierten en inmutables.