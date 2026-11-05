# Requerimientos — Landing del curso «Sprint de diseño de producto tech»

**Versión:** 1.0  
**Fecha de elaboración:** 5 de noviembre de 2026  
**Marca:** Anderer Sinn  
**Tipo de pieza:** landing informativa y comercial, estática, integrada al sitio web existente.

---

## 1. Objetivo del encargo

Construir una landing page profesional, clara y orientada a conversión para presentar y vender el curso **Sprint de diseño de producto tech**, organizado por **Anderer Sinn**.

La landing debe sentirse parte del sitio web actual del estudio: conservar y aprovechar su identidad visual, logo, tipografías, colores, recursos gráficos, tono y patrones de navegación. Al mismo tiempo, debe tener una estructura comercial propia, inspirada en la claridad, jerarquía visual y capacidad de conversión de páginas de programas educativos profesionales como Domestika o Educación Continua de la Universidad de los Andes. Son referencias de calidad y estructura, no marcas que deban imitarse.

La acción comercial principal es **iniciar una conversación por WhatsApp**. La página no debe cobrar, recibir comprobantes ni matricular directamente. Después de conversar con el interesado, el organizador cerrará la venta y le compartirá un Google Forms para registrar sus datos y adjuntar el comprobante de pago.

El resultado debe ser una página de alta calidad visual y comercial, pero liviana y técnicamente sencilla: una pieza informativa estática, sin backend, base de datos, autenticación ni pasarela de pagos.

## 2. Instrucciones iniciales para OpenCode: explorar antes de desarrollar

Antes de escribir o modificar código, inspeccionar el proyecto existente para entender cómo está construido y cómo se expresa la marca.

1. Revisar la estructura general del repositorio y los archivos de documentación relevantes (`README`, instrucciones de desarrollo, manifiestos y configuración del sitio).
2. Identificar la tecnología actual, la forma de navegación/ruteo, el sistema de estilos, los componentes reutilizables y las convenciones de nombres.
3. Inspeccionar las páginas existentes, especialmente la página de inicio, encabezado, pie de página y páginas comerciales o de servicios.
4. Buscar los recursos de marca disponibles: logo, isotipo, versiones claras/oscuras, paleta, tipografías, fotografías, ilustraciones, iconografía y manual de marca, si existe.
5. Buscar enlaces de contacto ya publicados en el proyecto, en especial un enlace `wa.me`, `api.whatsapp.com` o un número de WhatsApp confirmado. No asumir que un teléfono encontrado en un comentario, dato de prueba o archivo ajeno a la marca sea el canal comercial correcto.
6. Revisar si ya existe una demo, captura, mockup o recurso visual del proyecto de portafolio (demo de marketplace) que pueda mostrarse.
7. No abrir, copiar ni exponer secretos de archivos `.env`, claves API, tokens o credenciales. Excluir de la exploración pesada carpetas como `node_modules`, `.git`, `dist`, `build` y artefactos generados.

Al terminar esta revisión, aplicar el lenguaje visual y técnico existente. **No rediseñar el sitio completo ni modificar páginas ajenas a este encargo.** La landing debe integrarse de forma natural y aislada.

Si el repositorio usa un framework, seguir sus convenciones y agregar una página estática o una ruta liviana. Si es un sitio HTML estático, crear la página siguiendo su estructura actual. **No introducir un framework nuevo, un CMS, una base de datos ni dependencias innecesarias.**

Si existe un encabezado o pie de página compartido, reutilizarlo cuando sea razonable. Si la landing requiere una variante de navegación más enfocada en conversión, mantener coherencia con la marca y no duplicar componentes sin necesidad.

## 3. Datos confirmados del programa

Usar esta información como fuente de verdad. Cuando se señala una ambigüedad, no resolverla inventando datos: dejar el elemento preparado y reportar el pendiente al finalizar.

### 3.1. Identidad y promesa

- **Nombre exacto:** Sprint de diseño de producto tech.
- **Organizador:** Anderer Sinn, estudio de diseño de tecnología con enfoque en producto.
- **Formato:** laboratorio práctico de diseño y creación tecnológica centrado en las personas.
- **Duración:** cinco semanas.
- **Dedicación estimada total:** 34 horas y 10 minutos.
- **Inicio programado:** semana que comienza el lunes 16 de noviembre de 2026.
- **Calendario semanal indicado en el Excel:** semana 1: 16 de noviembre; semana 2: 23 de noviembre; semana 3: 30 de noviembre; semana 4: 7 de diciembre; semana 5: 14 de diciembre de 2026.
- El cronograma también marca el 2 y el 9 de noviembre como fechas de “Venta”. Son hitos del cronograma comercial, no una fecha límite de inscripción confirmada; no convertirlos en una fecha de cierre de ventas en la landing.
- **Semana de cierre:** semana que comienza el lunes 14 de diciembre de 2026.
- **Principio de trabajo que debe aparecer explícitamente:** **“Make it exist first, then make it good later”.** Primero hacer tangible una hipótesis; luego mejorarla con evidencia. Esta frase no significa descuidar la ética, la privacidad, la seguridad o la calidad.

### 3.2. Metodología y distribución del tiempo

Cada semana combina tres momentos:

- **Lunes:** kickoff sincrónico virtual de 20 minutos para presentar el reto, el objetivo y los criterios de éxito de la semana. La hora exacta del kickoff no está especificada; no inventarla.
- **Martes y miércoles:** aproximadamente cuatro horas de trabajo autónomo individual, apoyado por contenido digital interactivo (videos y microcontenidos tipo Coursera) y un enunciado de trabajo práctico.
- **Jueves:** sesión virtual sincrónica de acompañamiento y cierre, de **6:00 p. m. a 8:30 p. m.**, hora de Colombia (UTC-5). Son 150 minutos.
- **Semana final:** incluye una **EXPO presencial de cierre**, con presentaciones y demostraciones de proyectos. El cronograma ubica la EXPO en la semana del 14 de diciembre de 2026; el currículo la describe como el encuentro presencial final. No se dispone de una confirmación inequívoca del día, hora ni lugar exactos. Mostrarla como EXPO presencial de cierre durante la semana final y dejar esos datos por confirmar; no anunciar automáticamente el lunes 14 ni el jueves 17 como fecha definitiva.

La carga estimada de 34 h 10 min corresponde a la suma de kickoffs, trabajo autónomo y sesiones de acompañamiento/EXPO. No convertir las 34 h 10 min en horas exclusivamente de clase en vivo.

### 3.3. Modalidades e inversión

Presentar las modalidades con nombres claros, diferencias visibles y precios en pesos colombianos. No ocultar que la modalidad de auditoría no incluye acompañamiento semanal.

**Modalidad participante — con acompañamiento**

- **Inversión: $420.000 COP.**
- Acceso al programa completo de cinco semanas.
- Acceso a los contenidos digitales interactivos.
- Acompañamiento en las sesiones sincrónicas semanales.
- Participación en la EXPO presencial de cierre.
- Kit físico del curso.
- Constancia de participación/asistencia correspondiente a esta modalidad.
- Desarrollo y documentación de un proyecto de diseño de producto para portafolio.

**Modalidad auditor/a — sin acompañamiento**

- **Inversión: $129.000 COP.**
- Acceso a todos los contenidos digitales del curso.
- Derecho a asistir a la EXPO presencial de cierre.
- Kit físico del curso.
- Constancia de asistencia como auditor/a.
- **No incluye** acompañamiento semanal ni clínicas sincrónicas de trabajo.

El modelo de negocio incluye un supuesto de diez auditores, separado de los escenarios de estudiantes de la modalidad completa. No presentar ese supuesto como una cantidad de cupos disponibles o como un límite de inscripción.

No anunciar cuotas, pagos semanales, medios de pago, financiación, descuentos ni políticas de pago en partes. El Excel contiene un valor semanal derivado del precio de la modalidad completa, pero no define por sí solo una modalidad de pago fraccionado autorizada para comunicar.

### 3.4. Becas

- Hay **dos cupos de beca**.
- Para postularse, la persona debe escribir a **aloroque@anderersinn.com** y contar brevemente quién es y por qué le interesa participar.
- Crear un enlace de correo (`mailto:`) con asunto sugerido: `Solicitud de beca — Sprint de diseño de producto tech`.
- No inventar porcentajes, requisitos, fechas límite, criterios de selección ni condiciones adicionales.

### 3.5. Viabilidad y cancelación

El modelo de negocio marca **20 estudiantes proyectados** como el mínimo cupo viable para el escenario de la modalidad completa. El mismo modelo considera por separado un supuesto de diez auditores. Antes de comunicar públicamente una cifra mínima, el organizador debe confirmar si el umbral se refiere exclusivamente a participantes con acompañamiento y cómo se contabilizan las becas.

La landing sí debe publicar la condición comercial solicitada, sin necesidad de exponer la cifra:

> La realización del curso está sujeta a alcanzar el mínimo de inscripciones necesario para garantizar su viabilidad. Si no se alcanza ese mínimo, el curso podrá cancelarse y se devolverá la totalidad del dinero recibido.

No suavizar la promesa de devolución ni cambiarla por crédito, saldo a favor o reprogramación obligatoria. No agregar plazos o mecanismos de devolución que no estén definidos.

### 3.6. Canal de venta y matrícula

El recorrido comercial es obligatorio y debe ser exactamente este:

1. La persona conoce el curso y hace clic en un CTA de WhatsApp.
2. Envía un mensaje al organizador para pedir información y manifestar su interés.
3. El organizador responde personalmente, resuelve dudas y cierra la venta.
4. Una vez acordada la inscripción, el organizador comparte un **Google Forms** para que la persona registre sus datos y adjunte el comprobante de pago.

Por tanto:

- **WhatsApp es el único CTA principal de venta.** Repetirlo en los puntos de decisión importantes de la página.
- No insertar un formulario de matrícula en la landing.
- No publicar ni incrustar un enlace de Google Forms: el organizador lo comparte después de conversar con cada persona.
- No integrar checkout, carrito, pagos, pasarela, registro de usuario ni una base de datos.
- No usar el correo como canal alternativo de matrícula. El correo se reserva para las solicitudes de beca.
- El CTA debe decir algo como **“Escríbenos por WhatsApp”**, **“Quiero conocer las modalidades”** o **“Hablar sobre mi inscripción”**. Evitar “Pagar ahora” o afirmar que el clic reserva automáticamente un cupo.

**Pendiente obligatorio:** el número de WhatsApp no aparece en los documentos entregados. Buscar un enlace comercial confirmado en el sitio/repositorio. Si no se encuentra uno inequívoco, crear una única constante de configuración fácil de sustituir (`WHATSAPP_NUMBER`) y dejarla claramente señalada como pendiente. No inventar un número ni publicar un enlace roto como si funcionara. La entrega no debe considerarse lista para publicar hasta que el organizador reemplace y pruebe ese número.

Mensaje sugerido para precargar en WhatsApp:

> Hola, me interesa el Sprint de diseño de producto tech. ¿Me puedes compartir información sobre las modalidades y los pasos para inscribirme?

Si es posible, incluir los parámetros de URL correctamente codificados y el número en formato internacional, solo dígitos, sin espacios ni signos. Para un número colombiano se utiliza el prefijo 57, pero no se debe completar el número local por inferencia.

## 4. Posicionamiento y narrativa comercial

### 4.1. Idea central

**Diseña y construye un producto tecnológico a partir de una necesidad real.**

No vender el programa como un curso tradicional de programación ni como un curso para aprender a usar herramientas de IA de manera aislada. La propuesta diferencial es aprender a diseñar tecnología con criterio humano y materializarla con ayuda de agentes de desarrollo.

La programación es un medio para explorar, prototipar y construir una solución; no es el objetivo aislado del aprendizaje. El centro del proceso es comprender a las personas, identificar una oportunidad pertinente, tomar decisiones de diseño, probar una experiencia y construir una demostración tecnológica acotada.

### 4.2. Texto principal sugerido para la landing

**Antetítulo:** ANDERER SINN PRESENTA · LABORATORIO DE DISEÑO Y CREACIÓN TECNOLÓGICA

**Título principal:** Diseña y construye un producto tech a partir de una necesidad real.

**Bajada:** Un laboratorio práctico de cinco semanas para comprender a una comunidad, descubrir oportunidades de diseño y convertir una idea en un prototipo tecnológico que puedas probar y mostrar. Usa agentes de inteligencia artificial para prototipar e iterar: tú tomas las decisiones de producto.

**Datos rápidos junto al título:**

- 5 semanas.
- Inicio: 16 de noviembre de 2026.
- Dedicación estimada: 34 h 10 min.
- Sesiones virtuales de acompañamiento: jueves, 6:00–8:30 p. m. (hora Colombia).
- EXPO presencial de cierre en la semana final.

**CTA principal:** Quiero conocer el curso por WhatsApp.

No llenar el primer pantallazo con párrafos largos. El título, la promesa, la duración, la fecha de inicio, el precio desde la modalidad más económica y el CTA deben poder identificarse rápidamente. Si se presenta “desde $129.000 COP”, aclarar inmediatamente que corresponde a la modalidad de auditor/a sin acompañamiento.

### 4.3. Descripción del curso

Usar y pulir esta descripción, conservando su sentido:

> Este curso es un laboratorio de creación tecnológica centrado en las personas. La programación es un medio para aprender a diseñar y materializar soluciones, no un objetivo aislado. Aprovechamos la generación de código mediante agentes de inteligencia artificial para prototipar, experimentar e iterar. Durante cinco semanas pasarás de comprender un contexto y formular un reto de diseño a construir una demostración tecnológica, probarla y compartir lo aprendido.

### 4.4. Para quién es

Dirigir la comunicación a personas que quieren convertir una inquietud, oportunidad o necesidad observada en una comunidad en una solución tecnológica que se pueda probar. Puede interesar a personas emprendedoras, diseñadoras, profesionales de áreas sociales o creativas y personas con curiosidad por la tecnología y el desarrollo de productos.

Evitar afirmar que es exclusivamente para programadores o exclusivamente para personas sin conocimientos técnicos. No se ha definido un requisito formal de experiencia previa. La página debe explicar que habrá interacción práctica con herramientas de desarrollo y agentes de IA, con acompañamiento durante el proceso.

### 4.5. Qué se lleva la persona

Comunicar resultados concretos y acotados:

- Una comprensión mejor documentada de una comunidad y una necesidad, sustentada en evidencia recogida con criterios éticos.
- Un reto de diseño acotado y entre tres y cinco hallazgos o insights priorizados.
- Un concepto de solución y el flujo de una tarea principal.
- Una interfaz web navegable para probar una experiencia antes de construir un backend.
- Pruebas de usabilidad y decisiones de iteración documentadas.
- Un prototipo mínimamente funcional de un flujo principal, con despliegue o demo verificable según el proyecto.
- Un portafolio de proceso, un pitch de dos a tres minutos y una demostración para la EXPO.

Explicar que el resultado es un prototipo para aprender, probar y comunicar una oportunidad. **No prometer un producto listo para producción, una empresa constituida, ventas, financiación, product-market fit ni validación definitiva del modelo de negocio.**

## 5. Currículo público: cinco semanas

Presentar el currículo como un recorrido progresivo. En escritorio puede utilizarse una línea de tiempo o tarjetas; en móvil debe leerse de manera vertical. Evitar convertir la página en un inventario excesivamente técnico.

### Semana 1 — Descubrir e inspirar

**Pregunta guía:** ¿A quién puedo escuchar y qué necesidad merece investigarse?

Delimitar una comunidad concreta, reconocer su contexto y preparar una investigación respetuosa sin asumir de antemano cuál es la solución. Aprender a formular preguntas abiertas, identificar barreras de acceso y preparar un instrumento de inspiración con consentimiento y minimización de datos.

**Lo que producirás:** perfil de comunidad, mapa inicial de actores, instrumento de investigación, protocolo de consentimiento y primer contacto preparado para la semana siguiente. También dejarás listo tu entorno de trabajo con agentes de desarrollo.

**Idea clave:** “Make it exist first, then make it good later”. Primero hacer tangible una hipótesis; después mejorarla con evidencia. La experimentación siempre debe respetar la privacidad, la seguridad y a las personas participantes.

### Semana 2 — Investigar, sintetizar y definir

**Pregunta guía:** ¿Qué sabemos de la comunidad y qué reto merece convertirse en una oportunidad de diseño?

Aplicar el instrumento de investigación y contrastar las intuiciones iniciales con evidencia de la comunidad. Revisar supuestos sobre quién vive la situación, cuándo y con qué frecuencia ocurre, qué tan relevante es, cómo se resuelve hoy y qué recursos o barreras existen: dispositivo, conectividad, lenguaje, accesibilidad y confianza.

**Lo que producirás:** registro de campo anonimizado, síntesis cualitativa, entre tres y cinco insights priorizados y uno o dos retos formulados como “¿Cómo podríamos…?”. Crearás también una ficha anónima de proyecto para tu portafolio.

**Idea clave:** separar hechos observados, interpretaciones y supuestos aún no comprobados. Una intuición no es evidencia.

### Semana 3 — Idear, seleccionar y prototipar

**Pregunta guía:** ¿Qué idea merece ponerse a prueba y cómo se comporta el flujo antes de conectarlo a un backend?

Explorar alternativas, agrupar y combinar ideas, elegir un concepto con criterios explícitos y diseñar una tarea principal. Construirás una fachada web navegable con HTML, CSS y JavaScript, utilizando datos ficticios para simular una experiencia sin añadir infraestructura antes de necesitarla.

**Lo que producirás:** concepto priorizado, principios de diseño, storyboard o flujo de una tarea, prototipo navegable y registro de pruebas de usabilidad con los cambios que esas pruebas sugieren.

**Idea clave:** probar primero la comprensión y la experiencia. Una interfaz que se entiende no demuestra por sí sola que exista demanda o disposición a pagar.

### Semana 4 — Integrar, proteger y desplegar

**Pregunta guía:** ¿Qué funcionalidad mínima necesitamos para sostener el flujo que las pruebas respaldaron?

Convertir el prototipo en una demostración mínimamente funcional. Elegir una arquitectura adecuada al proyecto e integrar únicamente los servicios necesarios. Aprenderás a trabajar con datos ficticios, credenciales, permisos, privacidad y despliegue.

**Lo que producirás:** un flujo vertical funcional y verificable, un modelo mínimo de datos cuando haga falta, una demo desplegada o ejecutable y una revisión de privacidad, seguridad básica y accesibilidad.

**Idea clave:** un prototipo funcional no es automáticamente un producto listo para producción. La tecnología se elige para resolver la necesidad, no para completar un stack por prestigio.

### Semana 5 — Comunicar, reflexionar y compartir

**Pregunta guía:** ¿Qué aprendimos, qué podemos demostrar y cómo invitamos a continuar?

Organizar el proceso en una narrativa clara, actualizar el portafolio, preparar un pitch y una micro-demostración. Compartir el resultado en la EXPO presencial de cierre y recibir retroalimentación.

**Lo que producirás:** portafolio actualizado, pitch de dos a tres minutos, demo, reflexión individual sobre el proceso y definición de un próximo experimento.

**Actividad opcional:** microdocumental de un minuto sobre el proceso, para publicar únicamente después de la EXPO y con los consentimientos y créditos correspondientes. No presentarlo como requisito del curso ni como criterio de evaluación.

## 6. Proyecto de portafolio: demo de marketplace

Incluir una sección visual que destaque el **demo de marketplace** como proyecto de portafolio del programa. Debe funcionar como evidencia tangible de cómo se puede traducir una oportunidad de diseño en una experiencia tecnológica que se puede recorrer y demostrar.

- La demo la vas a encontrar en sprints/2026/reel-demo
- No inventar cifras de usuarios, transacciones, ventas, comercios reales, resultados de pruebas ni testimonios.
- No afirmar que el marketplace estará desplegado como negocio o listo para operar comercialmente.
- Mantener el sentido pedagógico del curso: comprender el problema, diseñar el flujo, prototipar, probar y luego integrar lo mínimo necesario.

## 7. Metodología: así se vive cada semana

Crear una sección visualmente clara, por ejemplo, tres pasos recurrentes:

**1. Lunes — Kickoff virtual (20 minutos)**  
Comenzamos con una pregunta, el reto de la semana, los criterios de éxito y una orientación concreta.

**2. Martes y miércoles — Laboratorio autónomo (4 horas)**  
Avanzas a tu ritmo con contenidos digitales interactivos, videos breves y un ejercicio práctico para aplicar lo aprendido.

**3. Jueves — Acompañamiento virtual (6:00 a 8:30 p. m.)**  
Compartimos avances, revisamos decisiones, hacemos clínicas técnicas, recibimos retroalimentación y definimos el siguiente paso.

**Cierre — EXPO presencial**  
Al finalizar el recorrido, compartimos los proyectos en una EXPO presencial de 150 minutos. La fecha, hora y lugar exactos deben confirmarse antes de publicarlos.

## 8. Sobre Anderer Sinn

Usar esta presentación, ajustándola ligeramente si el tono del sitio existente lo requiere:

> **Anderer Sinn** es un estudio de diseño de tecnología con enfoque en producto. Creemos que los programas y los objetos, además de ser funcionales, se convierten en parte de la cultura de una comunidad. Trabajamos desde el diseño centrado en las personas para crear herramientas tecnológicas viables desde el punto de vista del mercado y socioculturalmente relevantes.

La marca debe aparecer como organizadora del curso. No sugerir que la Universidad de los Andes, FUPAD, JADA, Fundación Capital, ADRES o Innova Schools organizan, avalan o patrocinan este programa.

## 9. Sobre el docente

El posicionamiento deseado es **diseñador de tecnología**, no una lista de cargos o tecnologías. Usar un párrafo breve como este:

> **Alfredo Orozco** es economista de la Universidad de los Andes y diseñador de tecnología. Desde hace años combina investigación, datos y desarrollo de software para crear soluciones con impacto social; ha trabajado en proyectos con organizaciones como FUPAD, JADA, Fundación Capital, ADRES e Innova Schools. Desde 2020 diseña e imparte formación en datos y tecnología en Educación Continua de la Universidad de los Andes. Su enfoque integra innovación tecnológica y diseño centrado en las personas.

Incluir un enlace discreto a su perfil:  
https://www.linkedin.com/in/alfredo-eleazar-orozco-quesada/

**Fotografía:** buscar primero una fotografía adecuada en los activos locales del proyecto. Si no existe, intentar acceder únicamente a una imagen de perfil pública y directamente accesible desde el enlace de LinkedIn proporcionado, sin evadir autenticación, restricciones ni protecciones de la plataforma. Si no es posible obtenerla de forma legítima y fiable, no usar una foto aleatoria ni una imagen generada que pretenda representarlo: usar una composición tipográfica sobria, un avatar abstracto de marca o dejar la foto fuera.

No utilizar el perfil técnico extenso como biografía en la landing. No listar todos los lenguajes, plataformas, herramientas o certificaciones; el mensaje debe reforzar el criterio de diseño y la experiencia en proyectos de impacto.

## 10. Arquitectura de información recomendada para conversión

El orden puede adaptarse al sitio existente, pero debe mantener una progresión comercial: captar atención, explicar el valor, demostrar el recorrido, reducir incertidumbre y facilitar el contacto.

1. **Header:** logo de Anderer Sinn, navegación breve a “El laboratorio”, “Currículo”, “Docente” e “Inversión”, con CTA visible a WhatsApp.
2. **Hero:** nombre del curso, promesa central, bajada, fecha de inicio, duración y CTA principal. Añadir una composición visual relacionada con el diseño de producto o el demo de marketplace.
3. **La transformación:** explicar qué hace diferente al laboratorio: comenzar por las personas y usar agentes de IA para materializar y probar ideas.
4. **Qué vas a construir y aprender:** resultados concretos y elementos para el portafolio.
5. **Currículo de cinco semanas:** etapas, pregunta guía y entregable de cada semana.
6. **Cómo funciona:** kickoff, trabajo autónomo, acompañamiento y EXPO.
7. **Proyecto de portafolio:** demo de marketplace y explicación honesta de su alcance.
8. **Para quién es:** perfiles y motivaciones de participantes a quienes puede aportar valor.
9. **Docente:** biografía breve, fotografía si se encuentra una válida y enlace a LinkedIn.
10. **Anderer Sinn:** filosofía del estudio y enfoque de diseño centrado en las personas.
11. **Inversión:** comparación clara entre participante con acompañamiento y auditor/a.
12. **Becas:** dos cupos y correo de postulación.
13. **Preguntas frecuentes y condiciones:** modalidad de auditoría, constancias, recorrido de inscripción y condición de cancelación/devolución.
14. **CTA final:** invitación directa a conversar por WhatsApp.
15. **Footer:** identidad del estudio y enlaces de contacto existentes.

No hace falta que todas las secciones tengan la misma longitud. El currículo puede resumirse visualmente y ofrecer más detalle al desplegar cada semana, siempre que la información esencial esté disponible y sea accesible en móvil.

## 11. Preguntas frecuentes: respuestas autorizadas

**¿Qué voy a aprender?**  
A investigar una necesidad con una comunidad, sintetizar evidencia, formular un reto de diseño, idear y probar una experiencia, prototipar con apoyo de agentes de IA e integrar lo mínimo necesario para demostrar un flujo funcional.

**¿Es un curso de programación?**  
No es un curso tradicional centrado en memorizar sintaxis. La programación es un medio para diseñar y materializar soluciones. Sí habrá trabajo práctico con herramientas de desarrollo, interfaces, agentes y decisiones técnicas.

**¿Terminaré con un producto listo para salir al mercado?**  
No se promete un producto listo para producción. El objetivo es construir y comunicar un prototipo con un flujo demostrable, aprender de pruebas tempranas e identificar próximos pasos.

**¿Qué incluye la modalidad de auditor/a?**  
Incluye los contenidos digitales, el kit, el derecho a asistir a la EXPO y una constancia de asistencia como auditor/a. No incluye el acompañamiento semanal.

**¿Hay constancia?**  
Sí. La modalidad con acompañamiento contempla una constancia de participación/asistencia. La modalidad auditor/a contempla una constancia de asistencia como auditor/a. No llamarlas certificación profesional, título, diploma universitario ni certificado oficial de la Universidad de los Andes.

**¿Cómo me inscribo?**  
Primero escríbenos por WhatsApp. Conversaremos contigo sobre el programa y la modalidad que te interesa. Cuando acordemos la inscripción, te compartiremos un formulario de matrícula para registrar tus datos y adjuntar el comprobante de pago.

**¿Qué pasa si el curso no alcanza el mínimo de inscritos?**  
La realización está sujeta a alcanzar el mínimo de inscripciones necesario para garantizar su viabilidad. Si no se alcanza, el curso podrá cancelarse y se devolverá la totalidad del dinero recibido.

**¿Puedo solicitar una beca?**  
Hay dos cupos de beca. Escribe a aloroque@anderersinn.com y cuéntanos brevemente quién eres y por qué te interesa participar.

Si se agrega una pregunta sobre computador, requisitos previos, GPU, herramientas o costos de servicios externos, no inventar una respuesta. No se han especificado requisitos mínimos de equipo ni condiciones de pago de herramientas. Se puede decir que el uso de modelos locales es opcional en el currículo y no presentarlo como condición de participación.

## 12. Requisitos visuales y de experiencia

La página debe proyectar una marca de diseño de tecnología, no la estética genérica de un bootcamp de programación.

- Seguir el sistema visual hallado en el repositorio: logo, paleta, tipografías, escala tipográfica, espaciado, iconografía y estilo fotográfico.
- Construir una jerarquía editorial clara: un título principal potente, subtítulos descriptivos, párrafos breves, entregables destacados y datos prácticos visibles.
- Usar visuales que comuniquen investigación, diseño, prototipado y producto: capturas reales, mockups, mapas de flujo, fragmentos de interfaz o fotografías del proceso disponibles en el proyecto.
- Evitar clichés visuales de IA (cerebros digitales, robots humanoides, circuitos genéricos) salvo que formen parte deliberada de la identidad existente.
- No inventar logotipos de instituciones, avales, clientes, testimonios, reseñas, cifras de éxito ni fotografías de participantes.
- La inversión y las dos modalidades deben ser fáciles de comparar, sin ambigüedad sobre qué incluye cada una.
- El CTA de WhatsApp debe tener una presencia visual clara y repetirse en el hero, después de la inversión y al final. En móvil, considerar un CTA persistente discreto si no tapa contenido ni navegación.
- Usar microinteracciones sobrias y rápidas. No usar animaciones pesadas que distraigan de la lectura o del CTA.
- Mantener un diseño responsive real, con lectura cómoda en móvil y escritorio.

## 13. Requisitos técnicos

- Entregar una página estática integrada al proyecto actual, sin backend ni servicios de autenticación.
- Mantener las tecnologías y convenciones existentes; no iniciar una nueva aplicación independiente.
- No agregar dependencias pesadas cuando HTML, CSS y JavaScript existentes sean suficientes.
- Usar componentes compartidos cuando aporten coherencia sin crear acoplamiento innecesario.
- Evitar cargar imágenes enormes; optimizar formatos y dimensiones, usar lazy loading en imágenes bajo el primer pantallazo y reservar dimensiones para evitar saltos de layout.
- Cuidar accesibilidad: HTML semántico, contraste suficiente, foco visible, navegación por teclado, etiquetas y textos alternativos útiles, enlaces descriptivos y controles con estados comprensibles.
- Configurar idioma español (`lang="es-CO"` si corresponde), títulos y metadatos SEO, descripción, Open Graph y favicon acorde con la marca.
- El título SEO debe incluir “Sprint de diseño de producto tech” y “Anderer Sinn”. La descripción debe resumir la promesa, la duración y el enfoque humano/IA sin saturar de palabras clave.
- No instalar píxeles, analítica, cookies publicitarias ni trackers nuevos sin que ya exista una configuración aprobada en el sitio. No mostrar un banner de cookies por simple decoración.
- No recopilar datos personales desde la landing. El contacto ocurre voluntariamente a través de WhatsApp; el registro de matrícula ocurre después mediante el formulario que comparte el organizador.
- Los enlaces externos deben funcionar y abrirse de forma coherente con el comportamiento del resto del sitio.

## 14. Reglas de contenido y afirmaciones

**Sí comunicar:**

- Diseño centrado en las personas.
- Investigación y trabajo con una comunidad real o accesible para el participante.
- Uso de agentes de IA para acelerar la creación, explorar y prototipar.
- Cinco semanas, contenidos digitales, trabajo autónomo, sesiones de acompañamiento y EXPO.
- Resultados concretos y acotados del currículo.
- Dos modalidades, sus precios y sus diferencias.
- Dos cupos de beca y el correo correspondiente.
- Constancia según la modalidad.
- Condición de mínimo de inscritos y devolución total si se cancela por no alcanzarlo.

**No comunicar ni insinuar sin autorización adicional:**

- Aval, certificación o alianza institucional de la Universidad de los Andes u otra organización.
- Que el prototipo será un producto terminado, escalable, seguro para producción o con ventas garantizadas.
- Que se garantiza conseguir clientes, inversión o product-market fit.
- Que todos los proyectos incluirán pagos, marketplace operativo, autenticación o integraciones externas.
- Que todas las herramientas, modelos, consumos de API o servicios externos están cubiertos por el precio, salvo confirmación expresa.
- Número de cupos totales, fecha límite de inscripción o descuentos no indicados.
- Fecha, hora y dirección exactas de la EXPO hasta confirmarlas.

## 15. Pendientes que deben quedar visibles en el reporte de entrega

No bloquear la construcción de la página por estos pendientes, pero sí identificarlos claramente y no inventar los valores:

1. **Número de WhatsApp:** encontrar uno confirmado en el repositorio o dejar `WHATSAPP_NUMBER` como configuración pendiente. Es bloqueante para publicar.
2. **EXPO:** confirmar si el 14 de diciembre de 2026 es la fecha del evento o el inicio de la semana de cierre; confirmar día, hora y lugar. El cronograma marca “Expo de cierre” el 14 de diciembre, mientras el currículo ubica la EXPO en el encuentro final de la semana 5.
3. **Umbral de viabilidad:** confirmar si el mínimo interno de 20 corresponde a participantes con acompañamiento, si cuenta becas y si los auditores se excluyen. El texto público puede mencionar el mínimo sin cifra mientras se aclara.
4. **Fotografía del docente:** confirmar si hay un retrato local adecuado o si fue posible acceder legítimamente a la foto pública de LinkedIn.
5. **Demo de marketplace:** comprobar si existe una URL, captura o recurso real que pueda utilizarse. Si no, usar mockup claramente identificado como demo conceptual.
6. **Lugar de la EXPO:** no asumir que será en Bogotá ni publicar un espacio específico hasta confirmarlo.
7. **Hora del kickoff del lunes:** no está especificada; no inventarla.

## 16. Criterios de aceptación

La tarea se considera completa cuando:

- [ ] La landing está integrada al sitio existente y respeta su identidad visual.
- [ ] No se modificaron innecesariamente otras páginas o configuraciones.
- [ ] La propuesta de valor deja claro que el curso trata de diseñar y materializar productos tecnológicos centrados en las personas, usando agentes de IA como apoyo.
- [ ] La frase “Make it exist first, then make it good later” aparece en el contenido de la semana 1.
- [ ] Las cinco semanas reflejan el currículo propuesto y no prometen más de lo que este contempla.
- [ ] Se explica la metodología semanal: kickoff, cuatro horas de trabajo autónomo y sesión de jueves.
- [ ] Se distingue claramente la EXPO presencial de cierre y se respetan los datos pendientes.
- [ ] Se presenta el demo de marketplace sin inventar métricas ni afirmar que es un producto en producción.
- [ ] La biografía del docente es breve y lo posiciona como diseñador de tecnología con enfoque social y humano.
- [ ] Se muestran los precios de $420.000 COP y $129.000 COP y las diferencias entre modalidades.
- [ ] Se incluyen las dos becas y el correo de postulación.
- [ ] Se informa la condición de cancelación por mínimo de inscritos y la devolución del 100 % del dinero recibido.
- [ ] Todos los CTA comerciales conducen a WhatsApp; no hay formulario de matrícula ni checkout en la página.
- [ ] El número de WhatsApp está confirmado y probado, o queda identificado de forma inequívoca como pendiente y bloqueante para publicar.
- [ ] La página funciona en móvil y escritorio, carga con rapidez y cumple criterios básicos de accesibilidad.
- [ ] Se revisaron enlaces, imágenes, metadatos y navegación.

## 17. Entrega de OpenCode

Al finalizar, informar:

1. Qué archivo(s) se crearon o modificaron y cuál es la URL/ruta local de la landing.
2. Qué recursos de marca existentes se reutilizaron (logo, paleta, tipografía, imágenes y componentes).
3. Qué decisiones de contenido o diseño se tomaron para favorecer conversión.
4. Qué pruebas se realizaron en escritorio y móvil y qué verificaciones técnicas se ejecutaron.
5. La lista explícita de pendientes que impiden publicar, especialmente WhatsApp y confirmación de la EXPO.

**Prioridad final:** una página convincente y coherente con Anderer Sinn que lleve a la persona adecuada a iniciar una conversación por WhatsApp, entienda qué aprenderá y qué construirá, y pueda distinguir con claridad las modalidades y condiciones de inscripción.

## 18. Ubicación del sitio
El desarrollo de este encargo debe quedar en sprints/2026/

## 19. Assets
Encontrarás un video en la carpeta assets dentro de la ubicación del sitio que es como el reel de instagram que invita al curso. Está en formato vertical. Si crees que te sirve lo puedes usar, o bien si crees que sobra lo puedes omitir. Dura 50 segundos y tiene dimensiones 1080x1920. Ya lo optimice para web usando ffmpeg. Se llama salida_web.mp4.