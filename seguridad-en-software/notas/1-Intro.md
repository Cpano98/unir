# Problema de la seguridad en el software
Estas aplicaciones presentan defectos, debilidades de diseño o configuraciones inseguras que originan vulnerabilidades que pueden ser explotadas por atacantes de diversa índole, desde aficionados hasta organizaciones de cibercrimen o incluso Estados en acciones de ciberguerra.

## Principales causas de la aparición de vulnerabilidades:
- Tamaño excesivo y complejidad de las aplicaciones.
- Mezcla de código proveniente de varios orígenes.
- Integración de los componentes del software defectuosa.
- Debilidades y fallos en la especificación de requisitos y diseño no basados en valoraciones de riesgo y amenazas.
- No realización de pruebas seguridad basadas en riesgo.
- Uso entornos de ejecución con componentes que contienen vulnerabilidades o código malicioso embebido, como pueden ser capas de middleware, sistema operativo u otros componentes COTS.
- Falta de herramientas y un entorno de pruebas adecuados que simule adecuadamente el real de ejecución.
- Cambios de requisitos del proyecto durante la etapa de codificación.
- Mezcla de equipos de desarrolladores, entre los que podemos tener, equipos propios de desarrollos, asistencias técnicas, entidades subcontratadas, etc.
- Falta de conocimiento de prácticas de programación segura de los desarrolladores en el uso de lenguajes de programación.
- No control de la cadena de suministro del software, lo puede dar lugar a la introducción de código malicioso en origen.
- No seguimiento, por los desarrolladores, de guías de normalizadas de estilo en la codificación.
- Fechas límite de entrega de proyectos inamovibles.
- Cambio en la codificación en base al requerimiento de nuevas funcionalidades.
- Tolerancia a los defectos.
- No tener actualizadas las aplicaciones en producción con los parches correspondientes, configuraciones erróneas, etc.

## Ciclo de vida:

1. Desarrollo. Un desarrollador puede alterar de forma intencionada o no el software bajo desarrollo de forma que se comprometa su fiabilidad futura durante la fase de operación.
2. Distribución e instalación. Ocurre cuando no se protege el software evitando manipulaciones antes de enviarlo o publicarlo. Del mismo modo, si el instalador del software no bastiona la plataforma en la que lo instala o la configura de forma insegura, queda vulnerable a merced de los atacantes.
3. Operación. Cualquier software que se ejecuta en una plataforma conectada a la red tiene sus vulnerabilidades expuestas durante su funcionamiento. El nivel de exposición variará dependiendo de si la red es privada o pública, conectada o no a Internet, y si el entorno de ejecución del software ha sido configurado para minimizar sus vulnerabilidades.
4. Mantenimiento o sostenimiento. No publicación de parches de las vulnerabilidades detectadas en el momento oportuno o incluso introducción de código malicioso por el personal de mantenimiento en las versiones actualizadas del código.

```
El conjunto de principios de diseño y buenas prácticas a implantar en el SDLC, para detectar, prevenir y corregir los defectos de seguridad en el desarrollo y adquisición de aplicaciones, de forma que se obtenga software de confianza y robusto frente ataques maliciosos, que realice solo las funciones para las que fue diseñado, que esté libre de vulnerabilidades, ya sean intencionalmente diseñadas o accidentalmente insertadas durante su ciclo de vida y se asegure su integridad, disponibilidad y confidencialidad
```

### Vulnerabilidades y su clasificación
La vulnerabilidad es un fallo de programación, configuración o diseño que permite, de alguna manera, a los atacantes, de alguna manera, alterar el comportamiento normal de un programa y realizar algo malicioso como alterar información sensible, interrumpir o destruir una aplicación o tomar su control.

    Se puede decir que las vulnerabilidades son un subconjunto del fenómeno más grande que constituyen los bugs (errores de programación) y flaws (errores de diseño) del software.

Exploits: es una instancia particular de un ataque a un sistema informático que aprovecha una vulnerabilidad específica o un conjunto de ellas.

### Resiliencia:
Capacidad del software de para aislar, contener y limitar los daños ocasionados por fallos causados por ataques de vulnerabilidades explotable del mismo, recuperarse lo más rápido posible de ellos y reanudar su operación en o por encima de cierto nivel mínimo predefinido de servicio aceptable en un tiempo oportuno.


