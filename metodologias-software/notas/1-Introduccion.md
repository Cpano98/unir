## Objetivos:

- Entender la importancia y la necesidad de la disciplina de ingeniería de software como la aplicación de un enfoque sistemático y disciplinado.
- Comprender el fundamento de la ingeniería de software y sus orígenes.
- Entender el proceso de desarrollo de software como un conjunto de actividades ordenadas, técnicas y métodos.
- Estudiar el concepto de modelo de proceso de desarrollo de software para comprender la importancia de seleccionar el modelo más adecuado para cada desarrollo.
- Conocer a las personas u organizaciones que directa o indirectamente influyen en todo el proceso de desarrollo del software.

### La Ingeniería se define como:

La profesión en la que el conocimiento de las ciencias naturales y matemáticas, ganado con estudio, experiencia y práctica, es aplicado con buen juicio para desarrollar formas de utilizar, económicamente, los materiales y las fuerzas de la naturaleza para el beneficio del género humano (ABET, 1996).

### El Software:

La suma total de los programas de ordenar, procedimientos, reglas, docs. y datos que pertenecen a un sistema (Lewis, 1994).

O bien, "Un producto diseñado para un usuario."

### Ingeniería de Software:

Una disciplina de la ingeniería que comprende todos los aspectos de la producción de software, y que abarca desde las etapas iniciales de especificación del sistema, hasta su mantenimiento una vez puesto en funcionamiento (Sommerville, 2005, p. 6).

Estudio de métodos y herramientas que se pueden utilizar para producir **software práctico** (es decir, software operacional desarrollado dentro de los límites económicos y organizativos de la empresa desarrolladora), **útil y de calidad** (es decir, software correcto y, si es posible, reutilizable).

#### Distinciones a otras ingenierías:

1. El producto generado es intangible.
2. Implica mucho desarrollo, que no es lo mismo que fabricar en un sentido clásico, por lo que no sigue las pautas ingenieriles.
3. Cada solución software puede requerir (y normalmente requiere) un enfoque distinto, específico, con el uso de diferentes técnicas, tecnologías, herramientas...
4. Los requisitos del software cambian constantemente. No se puede esperar a que el diseño esté completo para empezar a codificar.
5. En mayor o menor medida, requiere describir y documentar los artefactos que se van a generar.
6. Los productos fabricados presentan un carácter **continuo**, es decir, pequeñas modificaciones en un producto producirán pequeños cambios en el **comportamiento**.
7. Los productos software suelen tener un carácter **discreto**, es decir, pequeñas modificaciones en un producto software pueden desencadenar una gran cantidad de **efectos colaterales** que podrían producir cambios **impredecibles** e **incontrolados** en su comportamiento.

## Responsabilidades de un Ing. Software:

1. **Conocer el dominio de la aplicación** para poder definir y documentar los requisitos que se han de satisfacer de una manera precisa, bien organizada y que se pueda consultar con facilidad.
2. **Participar en el diseño** de la configuración de los sistemas para determinar qué funcionalidad será llevada a cabo a través del hardware y qué funcionalidad será implementada a través del software.
3. **Analizar el rendimiento del diseño propuesto** (ya sea de manera analítica o a través de simulación) para asegurar que el sistema propuesto cumplirá con los requisitos del cliente.
4. **Diseñar la estructura básica del software** a través de la división de su funcionalidad en componentes y de las interfaces que los interconectan, además de documentar todas las decisiones de diseño que han sido adoptadas.
5. **Analizar la consistencia, disponibilidad y completitud de la estructura** del software propuesta para implementar la solución.
6. **Implementar el producto software** en base a un conjunto de programas bien estructurados y documentados.
7. De ser necesario, **integrar la nueva solución** con aplicaciones ya existentes o comerciales.
8. **Llevar a cabo las pruebas** necesarias para poder validar y verificar el software.
9. **Revisar y mejorar los sistemas software** sin perder la integridad conceptual y manteniendo actualizada toda la documentación asociada al proyecto.

## Principios básicos:

1. **Público.** Los ingenieros de software deberán actuar de manera consistente en bien del interés general.
2. **Cliente y contratista.** Los ingenieros de software deberán actuar de tal modo que sea del mejor interés para sus clientes y contratistas, en coherencia con el interés general.
3. **Producto.** Los ingenieros de software deberán garantizar que sus productos y las modificaciones asociadas a ellos cumplen con el mayor número posible de los mejores estándares profesionales.
4. **Juicio.** Los ingenieros de software deberán mantener la integridad e independencia en su valoración profesional.
5. **Gestión.** Los gestores y líderes en ingeniería de software suscribirán y promoverán un enfoque ético en toda gestión de desarrollo y mantenimiento de software.
6. **Profesión.** Los ingenieros de software deberán realizar avances en lo que se refiere a integridad y reputación de la profesión, en coherencia con el interés general.
7. **Compañeros.** Los ingenieros de software serán justos y apoyarán a sus compañeros de profesión.
8. **Persona.** Los ingenieros de software deberán participar en el aprendizaje continuo de la práctica de su profesión y promoverán un comportamiento ético en la práctica de la misma.

## La crisis del Software:

1. **Planificaciones imprecisas** que difícilmente se llegan a cumplir, superando los plazos de entrega en la mayoría de los proyectos software.
2. Los **costes** del proyecto suelen superar con creces el presupuesto inicial.
3. Índices de **productividad** muy bajos.
4. **Clientes insatisfechos** con las soluciones implementadas, ya que no satisfacen sus necesidades.
5. La **calidad** del software es inaceptable.
6. El producto software desarrollado resulta muy **difícil de mantener.**
7. El producto software **no está integrado** o ni siquiera se encuentra alineado con el negocio de la compañía.
8. El departamento de las tecnologías de la información **(TI)** suele verse como un freno al negocio.

**La dificultad para satisfacer las necesidades del cliente (¿problemas de incomunicación?), unida a la complejidad del software y a sus constantes cambios y evolución, tanto en fase de desarrollo como una vez entregado, hacen de la tarea de desarrollar productos software un proceso arduo y muy costoso (una gran parte del presupuesto en informática se debe a las modificaciones en el software ya implementado y desplegado).**

## Proceso de desarrollo de Software:

La ejecución de cualquier proceso de desarrollo de software comprende un conjunto de actividades que generan artefactos de dos tipos diferentes:

- Artefactos internos del proceso de desarrollo.
- Artefactos entregables al cliente.

Un artefacto se puede definir como toda pieza de información que se utiliza o se produce en un proceso de desarrollo de software.

    Requisitos de usuario -> Proceso de desarrollo de software -> Producto software

Existen cuatro actividades fundamentales que son comunes para todos los procesos de desarrollo de software:

1. **Especificación del software.** Clientes e ingenieros definen el software a construir junto con sus restricciones.
2. **Desarrollo del software.** El software se diseña y se implementa, a la vez que se verifica que se construye de manera correcta.
3. **Validación del software.** El software se valida para comprobar que es correcto, es decir, hace lo que el cliente había solicitado. La validación se lleva a cabo teniendo en cuenta los requisitos de usuario.
4. **Evolución del software.** El software se modifica para adaptarse a los cambios requeridos por el cliente o por el mercado.

### Toma de requisitos:

Obtención, análisis, especificación y validación de los requisitos de software, así como a la gestión de los requisitos durante todo el ciclo de vida del producto de software.

    Los requisitos de software expresan las necesidades y restricciones/limitaciones que se imponen a un producto de software que se quiere construir para dar solución a algún problema del mundo real.

### Proceso de diseño:

Definir la arquitectura, los componentes, las interfaces y otras características de un sistema o componente.

### Proceso de construcción:

Creación detallada de software de trabajo mediante una combinación de codificación, verificación, prueba de unidad, prueba de integración y depuración.

### Proceso de pruebas:

Consisten en la verificación dinámica de que un programa proporciona el comportamiento esperado.

    Las pruebas de software están, o deberían estar, generalizadas a lo largo de todo el ciclo de vida de desarrollo y mantenimiento.

### Proceso de mantenimiento:

Actividades requeridas para proporcionar un soporte rentable al software.

# Modelo de proceso de desarrollo de software:

    Un modelo de proceso de desarrollo de software es una descripción simplificada de un proceso de desarrollo de software real.

## Modelos de procesos prescriptivos

### Modelo en cascada:

Una fase no puede comenzar hasta no haber finalizado (aprobado) la anterior. Desgraciadamente, este modelo de proceso resulta poco realista, ya que difícilmente se van a encontrar proyectos software reales que se ajusten a este tipo de modelo de proceso de manera tan rigurosa.

### Modelo Incremental:

Está orientado a construir versiones incrementales del producto, de manera que el software funcional llegue cuanto antes al cliente y este pueda dar una retroalimentación.

### Modelo evolutivo:

Se trata de ir mejorando el software de manera progresiva e iterativa, al mismo tiempo que se profundiza en su comprensión, empleando herramientas como la construcción de prototipos. Un modelo evolutivo es el modelo en espiral.

- **Establecimiento de los objetivos**, donde se definen los objetivos específicos para cada fase del proyecto.
- **Evaluación y reducción de riesgos**, donde se lleva a cabo un análisis detallado de cada uno de los riesgos del proyecto que se hayan identificado.
- **Desarrollo y validación**, donde, una vez que se ha llevado a cabo la evaluación de riesgos, se selecciona una técnica de desarrollo para el sistema (por ejemplo, el modelo en cascada podría ser el desarrollo más apropiado si el riesgo identificado más relevante es la integración de subsistemas).
- **Planificación**, donde se revisa el proyecto y se toma la decisión de si se ha de continuar con un nuevo bucle de la espiral. Si se decide continuar, entonces se planifica la siguiente fase del proyecto.

## Modelos de procesos especializados:

### Desarrollo basado en componentes:

En todo proceso de desarrollo se realiza algún tipo de reutilización, aunque sea de manera informal. Hoy en día cada vez es más necesaria la aplicación de técnicas de reutilización (y posible, dada la gran variedad de código disponible), sobre todo cuando pensamos en sistemas grandes y complejos.

Bajo esta perspectiva, el modelo de ingeniería de software basada en componentes (Component-Based Software Engineering, CBSE), orientado a la reutilización, se basa en la existencia de un número significativo de componentes reutilizables. CBSE define una arquitectura de colaboración e implementa el código necesario para que los componentes funcionen unos con otros.

Un componente software es un fragmento de código que encapsula un conjunto de funcionalidades específicas, y relacionadas entre sí, que se exponen a través de interfaces estandarizadas, de manera que se facilita su reutilización.

### Modelo de métodos formales:

Se trata de una variación del modelo en cascada que parte de una representación y un modelado muy precisos, en lenguaje matemático, del sistema que se va a desarrollar.

Según Sommerville (2011), «son apropiados en sistemas con fuertes requisitos de seguridad, fiabilidad o protección» (p. 32). El objetivo es lograr un producto libre de defectos, precisando para ello de un gran consumo de tiempo y recursos, y de unas capacidades específicas de los desarrolladores. Además, esta especificación formal dificulta la comunicación con el cliente (Pressman, 2010).

## Stakeholders:

Un stakeholder es cualquier persona o colectivo que tiene algún tipo de interés o participación en el desarrollo de un nuevo producto o servicio, o en el propio proyecto.

**O bien:** Un stakeholder es una persona, grupo u organización que está involucrada en el proyecto, resulta afectada por el proceso o su resultado, o puede influir en el proceso o su resultado.

1. **El cliente** es «la organización o el individuo que ha solicitado la construcción de un producto y lo recibirá finalmente» (NASA, 2017, p. 179). Es la figura que solicita el desarrollo, paga por él, selecciona sus características, y recibirá o utilizará el producto generado. No siempre coincide con el patrocinador, que es el encargado de financiar el desarrollo. Se suele incluir dentro de este grupo a usuarios directos e indirectos, patrocinadores ejecutivos y compradores.
    - Usuarios DIRECTOS (trabajan directamente con el producto).
    - Usuarios INDIRECTOS (se beneficiarán indirectamente del producto).
2. **Otras partes interesadas:**grupos o individuos que no son clientes directos, pero pueden ser afectados de algún modo por el producto resultante, por la manera en que el producto es realizado o utilizado, o tienen alguna responsabilidad proporcionando servicios durante el ciclo de vida del producto


## En clase:

La Ing. de Software surge debido a los requisitos del usuario y entorno:

Considerar:

1. Alcance del software
2. Escalabilidad
3. Costos
