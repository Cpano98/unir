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

##  Responsabilidades de un Ing. Software:

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

## En clase:

La Ing. de Software surge debido a los requisitos del usuario y entorno:

Considerar:

1. Alcance del software
2. Escalabilidad
3. Costos


