//creo una nueva varable donde voy a usar la funcion de full page 
const seccionespagina = new fullpage('#fullpague', {
    //opciones generales 
    autoScrolling: true, // Se activa el scroll.
    fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
    fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
    easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
    scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
    css3: true, // Si usara CSS3 o javascript.
    easingcss3: 'ease-out', // Curva de velocidad del efecto.
    loopBottom: true, // escrolea al inicio cuando termina la pagina 

    //opciones del menu
    navigation: true, // Muesta la barra de navegación.
    menu: '#menu', // Menu de navegación.
    anchors: ['Inicio', 'Informacion', 'Habilidades', 'Portafolio', 'Contacto'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
    navigationTooltips: ['Inicio', 'Descripcion', 'Habilidades', 'Portafolio', 'Contacto'], // Tooltips que mostrara por cada boton.
    showActiveTooltip: false, // Mostrar tooltip activa.

    //secciones
    sectionsColor: ['#000', '#c2c2c2', '#3C3C3C', '#c2c2c2', '#c2c2c2'], // Color de fondo de cada seccion.
    verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
});
