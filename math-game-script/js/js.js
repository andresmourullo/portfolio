
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function random_con_decimales(min, max) {
    var valorAleatorio = Math.random() * (max - min) + min;
    return valorAleatorio.toFixed(2);;
}

function random_con_decimales_y_naturales(min, max) {
    var aleatorio = Math.random();

    // Probabilidad de 0.5 de generar un número con decimales
    if (aleatorio < 0.5) {
        var numeroDecimal = Math.random() * (max - min) + min;
        return numeroDecimal.toFixed(2);
    }
    else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function empecemos() {

    // Vaciar botones
    vaciar_texto();

    //Crear boton empecemos
    var espacio_boton_empecemos = document.getElementById("espacio_boton_empecemos");
    if (espacio_boton_empecemos == undefined) {
        var espacio_boton_empecemos = document.createElement("div");
        espacio_boton_empecemos.id = "espacio_boton_empecemos";
        document.body.appendChild(espacio_boton_empecemos);
    }
    var boton = document.createElement("input");
    boton.type = "button";
    boton.value = "¡Empecemos!";
    boton.id = "boton_empecemos";
    boton.addEventListener("click", seleccionar_operaciones);
    espacio_boton_empecemos.appendChild(boton);
}

function seleccionar_operaciones() {

    // Setear aciertos y fallos
    aciertos = 0;
    fallos = 0;
    operaciones_realizadas = 0;
    d = 0;
    no = 0;
    ns = 0;
    s = -1;
    r = -1;
    m = -1;

    // Vaciar botones
    vaciar_texto();

    // Borrar boton de empecemos
    var espacio_boton_empecemos = document.getElementById("espacio_boton_empecemos");
    if (espacio_boton_empecemos != undefined) {
        document.body.removeChild(espacio_boton_empecemos);
    }

    // Crear div de espacio para las preguntas
    var espacio_para_preguntas = document.getElementById("espacio_para_preguntas");
    if (espacio_para_preguntas == undefined) {
        var espacio_para_preguntas = document.createElement("div");
        espacio_para_preguntas.id = "espacio_para_preguntas";
        document.body.appendChild(espacio_para_preguntas);
    }

    // Crear div de espacio para la primera pregunta
    var espacio_para_pregunta = document.getElementById("espacio_para_pregunta");
    if (espacio_para_pregunta == undefined) {
        var espacio_para_pregunta = document.createElement("div");
        espacio_para_pregunta.id = "espacio_para_pregunta";
        espacio_para_preguntas.appendChild(espacio_para_pregunta);
    }

    // Crear div para la pregunta
    var pregunta = document.createElement("div");
    pregunta.id = "pregunta";
    pregunta.innerText = "¿Qué operaciones quieres?"
    espacio_para_pregunta.appendChild(pregunta);

    // Crear div de espacio para la pregunta si no existe
    var espacio_para_pregunta = document.getElementById("espacio_para_pregunta");
    if (espacio_para_pregunta == null) {
        var espacio_para_pregunta = document.createElement("div");
        espacio_para_pregunta.id = "espacio_para_pregunta";
        document.body.appendChild(espacio_para_pregunta);
    }

    // Crear div para la pregunta
    var pregunta = document.createElement("div");
    espacio_para_pregunta.appendChild(pregunta);

    // Crear div para las opciones
    var opciones_pregunta = document.createElement("div");
    espacio_para_pregunta.appendChild(opciones_pregunta);
    var form_pregunta = document.createElement("form");
    form_pregunta.id = "form_pregunta";
    opciones_pregunta.appendChild(form_pregunta);

    // Opción 1
    var opcion_1 = document.createElement("input");
    opcion_1.type = "checkbox";
    opcion_1.value = "sumas";
    opcion_1.id = "sumas";
    form_pregunta.appendChild(opcion_1);
    var label_1 = document.createElement("label");
    label_1.innerText = "Sumas";
    label_1.id = "label_sumas";
    form_pregunta.appendChild(label_1);

    // Opción 2
    var opcion_2 = document.createElement("input");
    opcion_2.type = "checkbox";
    opcion_2.value = "restas";
    opcion_2.id = "restas";
    form_pregunta.appendChild(opcion_2);
    var label_2 = document.createElement("label");
    label_2.innerText = "Restas";
    label_2.id = "label_restas";
    form_pregunta.appendChild(label_2);

    // Opción 3
    var opcion_3 = document.createElement("input");
    opcion_3.type = "checkbox";
    opcion_3.value = "multiplicaciones";
    opcion_3.id = "multiplicaciones";
    form_pregunta.appendChild(opcion_3);
    var label_3 = document.createElement("label");
    label_3.innerText = "Multiplicaciones";
    label_3.id = "label_multiplicaciones";
    form_pregunta.appendChild(label_3);

    // Crear botón siguiente
    mostrar_boton_siguiente(3);

    // Crear botón volver a inicio
    mostrar_boton_volver_a_inicio();
}

function decimales() {

    // Asignar variable de espacio_para_preguntas, y si no está crearlo
    var espacio_para_preguntas = document.getElementById("espacio_para_preguntas");
    if (espacio_para_preguntas == undefined) {
        var espacio_para_preguntas = document.createElement("div");
        espacio_para_preguntas.id = "espacio_para_preguntas";
        document.body.appendChild(espacio_para_preguntas);
    }

    // Crear espacio para pregunta si no lo hay
    var espacio_para_pregunta = document.getElementById("espacio_para_pregunta");
    if (espacio_para_pregunta == undefined) {
        var espacio_para_pregunta = document.createElement("div");
        espacio_para_pregunta.id = "espacio_para_pregunta";
        espacio_para_preguntas.appendChild(espacio_para_pregunta);
    }

    // Crear div para la pregunta
    var pregunta = document.createElement("div");
    pregunta.id = "pregunta";
    pregunta.innerText = "¿Quieres decimales?"
    espacio_para_pregunta.appendChild(pregunta);

    // Crear div para las opciones
    var opciones_pregunta = document.createElement("div");
    espacio_para_pregunta.appendChild(opciones_pregunta);
    var form_pregunta = document.createElement("form");
    form_pregunta.id = "form_pregunta";
    opciones_pregunta.appendChild(form_pregunta);

    // Opción 1
    var opcion_1 = document.createElement("input");
    opcion_1.type = "radio";
    opcion_1.name = "opcion";
    opcion_1.value = "si";
    opcion_1.id = "opcion_1_decimales";
    opcion_1.addEventListener("click", activar_boton_comenzar);
    form_pregunta.appendChild(opcion_1);
    var label_1 = document.createElement("label");
    label_1.innerText = "Sí";
    form_pregunta.appendChild(label_1);

    // Opción 2
    var opcion_2 = document.createElement("input");
    opcion_2.type = "radio";
    opcion_2.name = "opcion";
    opcion_2.value = "no";
    opcion_2.id = "opcion_2_decimales";
    opcion_2.addEventListener("click", activar_boton_comenzar);
    opcion_2.checked = true; // Marcamos el input como predeterminado
    form_pregunta.appendChild(opcion_2);
    var label_2 = document.createElement("label");
    label_2.innerText = "No";
    form_pregunta.appendChild(label_2);

    // Opción 3
    var opcion_3 = document.createElement("input");
    opcion_3.type = "radio";
    opcion_3.name = "opcion";
    opcion_3.value = "solo_quiero_decimales";
    opcion_3.id = "opcion_3_decimales";
    opcion_3.addEventListener("click", activar_boton_comenzar);
    form_pregunta.appendChild(opcion_3);
    var label_3 = document.createElement("label");
    label_3.innerText = "Sólo quiero decimales";
    form_pregunta.appendChild(label_3);
}

function negativos_en_operaciones() {

    // Asignar variable de espacio_para_preguntas, y si no está crearlo
    var espacio_para_preguntas = document.getElementById("espacio_para_preguntas");
    if (espacio_para_preguntas == undefined) {
        var espacio_para_preguntas = document.createElement("div");
        espacio_para_preguntas.id = "espacio_para_preguntas";
        document.body.appendChild(espacio_para_preguntas);
    }

    // Crear div de espacio para la pregunta si no existe
    var espacio_para_pregunta_2 = document.getElementById("espacio_para_pregunta_2");
    if (espacio_para_pregunta_2 == undefined) {
        var espacio_para_pregunta_2 = document.createElement("div");
        espacio_para_pregunta_2.id = "espacio_para_pregunta_2";
        espacio_para_preguntas.appendChild(espacio_para_pregunta_2);
    }

    // Crear div para la pregunta
    var pregunta_2 = document.createElement("div");
    pregunta_2.id = "pregunta";
    pregunta_2.innerText = "¿Quieres negativos en las operaciones?"
    espacio_para_pregunta_2.appendChild(pregunta_2);

    // Crear div para las opciones
    var opciones_pregunta_2 = document.createElement("div");
    espacio_para_pregunta_2.appendChild(opciones_pregunta_2);
    var form_pregunta_2 = document.createElement("form");
    form_pregunta_2.id = "form_pregunta";
    opciones_pregunta_2.appendChild(form_pregunta_2);

    // Opción 1
    var opcion_1 = document.createElement("input");
    opcion_1.type = "radio";
    opcion_1.name = "opcion";
    opcion_1.value = "si";
    opcion_1.id = "opcion_1_negativos_en_operaciones";
    opcion_1.addEventListener("click", activar_boton_comenzar);
    form_pregunta_2.appendChild(opcion_1);
    var label_1 = document.createElement("label");
    label_1.innerText = "Sí";
    form_pregunta_2.appendChild(label_1);

    // Opción 2
    var opcion_2 = document.createElement("input");
    opcion_2.type = "radio";
    opcion_2.name = "opcion";
    opcion_2.value = "no";
    opcion_2.id = "opcion_2_negativos_en_operaciones";
    opcion_2.addEventListener("click", activar_boton_comenzar);
    opcion_2.checked = true; // Marcamos el input como predeterminado
    form_pregunta_2.appendChild(opcion_2);
    var label_2 = document.createElement("label");
    label_2.innerText = "No";
    form_pregunta_2.appendChild(label_2);

    // Opción 3
    var opcion_3 = document.createElement("input");
    opcion_3.type = "radio";
    opcion_3.name = "opcion";
    opcion_3.value = "solo_quiero_negativos_en_las_operaciones";
    opcion_3.id = "opcion_3_negativos_en_operaciones";
    opcion_3.addEventListener("click", activar_boton_comenzar);
    form_pregunta_2.appendChild(opcion_3);
    var label_3 = document.createElement("label");
    label_3.innerText = "Sólo quiero negativos en las operaciones";
    form_pregunta_2.appendChild(label_3);
}

function negativos_en_soluciones() {

    // Asignar variable de espacio_para_preguntas, y si no está crearlo
    var espacio_para_preguntas = document.getElementById("espacio_para_preguntas");
    if (espacio_para_preguntas == undefined) {
        var espacio_para_preguntas = document.createElement("div");
        espacio_para_preguntas.id = "espacio_para_preguntas";
        document.body.appendChild(espacio_para_preguntas);
    }

    // Crear div de espacio para la pregunta si no existe
    var espacio_para_pregunta_3 = document.getElementById("espacio_para_pregunta_3");
    if (espacio_para_pregunta_3 == null) {
        var espacio_para_pregunta_3 = document.createElement("div");
        espacio_para_pregunta_3.id = "espacio_para_pregunta_3";
        espacio_para_preguntas.appendChild(espacio_para_pregunta_3);
    }

    // Crear div para la pregunta
    var pregunta_3 = document.createElement("div");
    pregunta_3.id = "pregunta";
    pregunta_3.innerText = "¿Quieres negativos en las soluciones?"
    espacio_para_pregunta_3.appendChild(pregunta_3);

    // Crear div para las opciones
    var opciones_pregunta_3 = document.createElement("div");
    espacio_para_pregunta_3.appendChild(opciones_pregunta_3);
    var form_pregunta_3 = document.createElement("form");
    form_pregunta_3.id = "form_pregunta";
    opciones_pregunta_3.appendChild(form_pregunta_3);

    // Opción 1
    var opcion_1 = document.createElement("input");
    opcion_1.type = "radio";
    opcion_1.name = "opcion";
    opcion_1.value = "si";
    opcion_1.id = "opcion_1_negativos_en_soluciones";
    opcion_1.addEventListener("click", activar_boton_comenzar);
    form_pregunta_3.appendChild(opcion_1);
    var label_1 = document.createElement("label");
    label_1.innerText = "Sí";
    form_pregunta_3.appendChild(label_1);

    // Opción 2
    var opcion_2 = document.createElement("input");
    opcion_2.type = "radio";
    opcion_2.name = "opcion";
    opcion_2.value = "no";
    opcion_2.id = "opcion_2_negativos_en_soluciones";
    opcion_2.addEventListener("click", activar_boton_comenzar);
    opcion_2.checked = true; // Marcamos el input como predeterminado
    form_pregunta_3.appendChild(opcion_2);
    var label_2 = document.createElement("label");
    label_2.innerText = "No";
    form_pregunta_3.appendChild(label_2);

    // Opción 3
    var opcion_3 = document.createElement("input");
    opcion_3.type = "radio";
    opcion_3.name = "opcion";
    opcion_3.value = "solo_quiero_negativos_en_las_soluciones";
    opcion_3.id = "opcion_3_negativos_en_soluciones";
    opcion_3.addEventListener("click", activar_boton_comenzar);
    form_pregunta_3.appendChild(opcion_3);
    var label_3 = document.createElement("label");
    label_3.innerText = "Sólo quiero negativos en las soluciones";
    form_pregunta_3.appendChild(label_3);
}

function seleccionar_tiempo() {

    // Asignar variable de espacio_para_preguntas, y si no está crearlo
    var espacio_para_preguntas = document.getElementById("espacio_para_preguntas");
    if (espacio_para_preguntas == undefined) {
        var espacio_para_preguntas = document.createElement("div");
        espacio_para_preguntas.id = "espacio_para_preguntas";
        document.body.appendChild(espacio_para_preguntas);
    }

    // Crear div de espacio para la pregunta si no existe
    var espacio_para_pregunta_4 = document.getElementById("espacio_para_pregunta_4");
    if (espacio_para_pregunta_4 == null) {
        var espacio_para_pregunta_4 = document.createElement("div");
        espacio_para_pregunta_4.id = "espacio_para_pregunta_4";
        espacio_para_preguntas.appendChild(espacio_para_pregunta_4);
    }

    // Crear div para las opciones
    var opciones_pregunta_4 = document.createElement("div");
    espacio_para_pregunta_4.appendChild(opciones_pregunta_4);
    var form_pregunta_4 = document.createElement("form");
    form_pregunta_4.id = "form_pregunta";
    opciones_pregunta_4.appendChild(form_pregunta_4);

    // Crear label y select
    var div_label_tiempo = document.createElement("div");
    var div_select_tiempo = document.createElement("div");
    var label_tiempo = document.createElement("label");
    form_pregunta_4.appendChild(div_label_tiempo);
    form_pregunta_4.appendChild(div_select_tiempo);
    label_tiempo.for = "tiempo";
    label_tiempo.innerText = "Elige el tiempo máximo:"
    label_tiempo.id = "pregunta";
    div_label_tiempo.appendChild(label_tiempo);
    var select_tiempo = document.createElement("select");
    select_tiempo.name = "tiempo";
    select_tiempo.id = "select_tiempo";
    div_select_tiempo.appendChild(select_tiempo);

    // Crear opciones
    var opcion_1 = document.createElement("option");
    opcion_1.value = "1";
    opcion_1.innerText = "1 minuto";
    select_tiempo.appendChild(opcion_1);
    var opcion_2 = document.createElement("option");
    opcion_2.value = "5";
    opcion_2.innerText = "5 minutos";
    select_tiempo.appendChild(opcion_2);
    var opcion_3 = document.createElement("option");
    opcion_3.value = "10";
    opcion_3.innerText = "10 minutos";
    select_tiempo.appendChild(opcion_3);
    var opcion_4 = document.createElement("option");
    opcion_4.value = "15";
    opcion_4.innerText = "15 minutos";
    select_tiempo.appendChild(opcion_4);
}

function seleccionar_opciones() {

    // Declarar variables
    var sumas = document.getElementById("sumas");
    var restas = document.getElementById("restas");
    var multiplicaciones = document.getElementById("multiplicaciones");
    if ((sumas != undefined) || (restas != undefined) || (multiplicaciones != undefined)) {
        if (sumas.checked == true) {
            s = 1;
        }
        else {
            s = 0;
        }
        if (restas.checked == true) {
            r = 1;
        }
        else {
            r = 0;
        }
        if (multiplicaciones.checked == true) {
            m = 1;
        }
        else {
            m = 0;
        }

        // Si no hay operaciones checkeadas, volver
        if ((sumas.checked == false) && (restas.checked == false) && (multiplicaciones.checked == false)) {
            seleccionar_operaciones();
            mostrar_boton_siguiente(3);
            mostrar_boton_volver_a_inicio();
            numero_de_pagina_anterior = 2;
        }
        else {
            // Vaciar botones
            vaciar_texto();

            // Decimales
            decimales();

            // Negativos en operaciones
            negativos_en_operaciones();

            // Negativos en soluciones
            negativos_en_soluciones();

            // Tiempo
            seleccionar_tiempo();

            // Crear botón siguiente
            mostrar_boton_siguiente(4);

            // Crear botón anterior
            numero_de_pagina_anterior = 2;
            mostrar_boton_anterior();

            // Crear botón volver a inicio
            mostrar_boton_volver_a_inicio();
        }
    }
    else {

        // Vaciar botones
        vaciar_texto();

        // Decimales
        decimales();

        // Negativos en operaciones
        negativos_en_operaciones();

        // Negativos en soluciones
        negativos_en_soluciones();

        // Tiempo
        seleccionar_tiempo();

        // Crear botón volver a inicio
        mostrar_boton_volver_a_inicio();

        // Checkear las opciones ya elegidas
        var opcion_1_decimales = document.getElementById("opcion_1_decimales");
        var opcion_2_decimales = document.getElementById("opcion_2_decimales");
        var opcion_3_decimales = document.getElementById("opcion_3_decimales");
        var opcion_1_negativos_en_operaciones = document.getElementById("opcion_1_negativos_en_operaciones");
        var opcion_2_negativos_en_operaciones = document.getElementById("opcion_2_negativos_en_operaciones");
        var opcion_3_negativos_en_operaciones = document.getElementById("opcion_3_negativos_en_operaciones");
        var opcion_1_negativos_en_soluciones = document.getElementById("opcion_1_negativos_en_soluciones");
        var opcion_2_negativos_en_soluciones = document.getElementById("opcion_2_negativos_en_soluciones");
        var opcion_3_negativos_en_soluciones = document.getElementById("opcion_3_negativos_en_soluciones");
        var select_tiempo = document.getElementById("select_tiempo");

        if (d == 1) {
            opcion_1_decimales.checked = true;
        }
        else if (d == 2) {
            opcion_2_decimales.checked = true;
        }
        else if (d == 3) {
            opcion_3_decimales.checked = true;
        }

        if (no == 1) {
            opcion_1_negativos_en_operaciones.checked = true;
        }
        else if (no == 2) {
            opcion_2_negativos_en_operaciones.checked = true;
        }
        else if (no == 3) {
            opcion_3_negativos_en_operaciones.checked = true;
        }

        if (ns == 1) {
            opcion_1_negativos_en_soluciones.checked = true;
        }
        else if (ns == 2) {
            opcion_2_negativos_en_soluciones.checked = true;
        }
        else if (ns == 3) {
            opcion_3_negativos_en_soluciones.checked = true;
        }

        if (t == 1) {
            select_tiempo.value = "1";
        }
        else if (t == 5) {
            select_tiempo.value = "5";
        }
        else if (t == 10) {
            select_tiempo.value = "10";
        }
        else if (t == 15) {
            select_tiempo.value = "15";
        }

        // Crear botón siguiente
        mostrar_boton_siguiente(4);

        // Crear botón anterior
        numero_de_pagina_anterior = 2;
        mostrar_boton_anterior();
    }
}

function activar_boton_comenzar() {

    // Declarar variables
    var espacio_para_pregunta = document.getElementById("espacio_para_pregunta");
    var espacio_para_pregunta_2 = document.getElementById("espacio_para_pregunta_2");
    var espacio_para_pregunta_3 = document.getElementById("espacio_para_pregunta_3");
    var opcion_1_decimales = document.getElementById("opcion_1_decimales");
    var opcion_2_decimales = document.getElementById("opcion_2_decimales");
    var opcion_3_decimales = document.getElementById("opcion_3_decimales");
    var opcion_1_negativos_en_operaciones = document.getElementById("opcion_1_negativos_en_operaciones");
    var opcion_2_negativos_en_operaciones = document.getElementById("opcion_2_negativos_en_operaciones");
    var opcion_3_negativos_en_operaciones = document.getElementById("opcion_3_negativos_en_operaciones");
    var opcion_1_negativos_en_soluciones = document.getElementById("opcion_1_negativos_en_soluciones");
    var opcion_2_negativos_en_soluciones = document.getElementById("opcion_2_negativos_en_soluciones");
    var opcion_3_negativos_en_soluciones = document.getElementById("opcion_3_negativos_en_soluciones");
    var select_tiempo = document.getElementById("select_tiempo");
    var boton_siguiente = document.getElementById("boton_siguiente");

    // Declarar variable decimales
    var opcion_1_decimales = document.getElementById("opcion_1_decimales");
    var opcion_2_decimales = document.getElementById("opcion_2_decimales");
    var opcion_3_decimales = document.getElementById("opcion_3_decimales");
    if (opcion_1_decimales.checked == true) {
        d = 1;
    }
    else if (opcion_2_decimales.checked == true) {
        d = 2;
    }
    else if (opcion_3_decimales.checked == true) {
        d = 3;
    }
    else {
        d = 0;
    }

    // Declarar variable negativo en la operación
    var opcion_1_negativos_en_operaciones = document.getElementById("opcion_1_negativos_en_operaciones");
    var opcion_2_negativos_en_operaciones = document.getElementById("opcion_2_negativos_en_operaciones");
    var opcion_3_negativos_en_operaciones = document.getElementById("opcion_3_negativos_en_operaciones");
    if (opcion_1_negativos_en_operaciones.checked == true) {
        no = 1;
    }
    else if (opcion_2_negativos_en_operaciones.checked == true) {
        no = 2;
    }
    else if (opcion_3_negativos_en_operaciones.checked == true) {
        no = 3;
    }
    else {
        no = 0;
    }

    // Declarar variable negativo en la operación
    var opcion_1_negativos_en_soluciones = document.getElementById("opcion_1_negativos_en_soluciones");
    var opcion_2_negativos_en_soluciones = document.getElementById("opcion_2_negativos_en_soluciones");
    var opcion_3_negativos_en_soluciones = document.getElementById("opcion_3_negativos_en_soluciones");
    if (opcion_1_negativos_en_soluciones.checked == true) {
        ns = 1;
    }
    else if (opcion_2_negativos_en_soluciones.checked == true) {
        ns = 2;
    }
    else if (opcion_3_negativos_en_soluciones.checked == true) {
        ns = 3;
    }
    else {
        ns = 0;
    }

    // Declarar variable tiempo
    var select_tiempo = document.getElementById("select_tiempo");
    t = select_tiempo.value;

    // Declarar variable parar_cuenta_atras
    parar_cuenta_atras = 0;

    // Si las variables existen y las tres preguntas estan checkeadas, activar boton comenzar
    if (((espacio_para_pregunta != undefined) && (espacio_para_pregunta_2 != undefined) && (espacio_para_pregunta_3 != undefined)) &&
        (((opcion_1_decimales.checked == true) || (opcion_2_decimales.checked == true) || (opcion_3_decimales.checked == true)) &&
            ((opcion_1_negativos_en_operaciones.checked == true) || (opcion_2_negativos_en_operaciones.checked == true) || (opcion_3_negativos_en_operaciones.checked == true)) &&
            ((opcion_1_negativos_en_soluciones.checked == true) || (opcion_2_negativos_en_soluciones.checked == true) || (opcion_3_negativos_en_soluciones.checked == true)))) {
        boton_siguiente.disabled = false;
    }

    // Exceptuar casos no permitidos
    if (((m == 1) && (ns == 3) && ((no == 2) || (no == 3))) ||
        (((s == 1) && (ns == 2) && (no == 3)) || ((s == 1) && (ns == 3) && (no == 2))) ||
        ((m == 3) && (ns == 3) && ((no == 3) || (no == 3)))) {
        boton_siguiente.disabled = true;
    }
}

function cuenta_atras() {

    // Declarar variable decimales
    var opcion_1_decimales = document.getElementById("opcion_1_decimales");
    var opcion_2_decimales = document.getElementById("opcion_2_decimales");
    var opcion_3_decimales = document.getElementById("opcion_3_decimales");
    if (opcion_1_decimales.checked == true) {
        d = 1;
    }
    else if (opcion_2_decimales.checked == true) {
        d = 2;
    }
    else if (opcion_3_decimales.checked == true) {
        d = 3;
    }
    else {
        d = 0;
    }

    // Declarar variable negativo en la operación
    var opcion_1_negativos_en_operaciones = document.getElementById("opcion_1_negativos_en_operaciones");
    var opcion_2_negativos_en_operaciones = document.getElementById("opcion_2_negativos_en_operaciones");
    var opcion_3_negativos_en_operaciones = document.getElementById("opcion_3_negativos_en_operaciones");
    if (opcion_1_negativos_en_operaciones.checked == true) {
        no = 1;
    }
    else if (opcion_2_negativos_en_operaciones.checked == true) {
        no = 2;
    }
    else if (opcion_3_negativos_en_operaciones.checked == true) {
        no = 3;
    }
    else {
        no = 0;
    }

    // Declarar variable negativo en la operación
    var opcion_1_negativos_en_soluciones = document.getElementById("opcion_1_negativos_en_soluciones");
    var opcion_2_negativos_en_soluciones = document.getElementById("opcion_2_negativos_en_soluciones");
    var opcion_3_negativos_en_soluciones = document.getElementById("opcion_3_negativos_en_soluciones");
    if (opcion_1_negativos_en_soluciones.checked == true) {
        ns = 1;
    }
    else if (opcion_2_negativos_en_soluciones.checked == true) {
        ns = 2;
    }
    else if (opcion_3_negativos_en_soluciones.checked == true) {
        ns = 3;
    }
    else {
        ns = 0;
    }

    // Declarar variable tiempo
    var select_tiempo = document.getElementById("select_tiempo");
    t = select_tiempo.value;

    // Declarar variable parar_cuenta_atras
    parar_cuenta_atras = 0;

    if ((d == 0) || (no == 0) || (ns == 0)) {
        seleccionar_opciones();
        mostrar_boton_siguiente(4);
        mostrar_boton_volver_a_inicio();
        numero_de_pagina_anterior = 3;
    }
    else {

        // Borrar boton de siguiente
        var espacio_boton_siguiente = document.getElementById("espacio_boton_siguiente");
        espacio_boton_siguiente.innerHTML = "";

        // Borrar pregunta
        var espacio_para_pregunta = document.getElementById("espacio_para_pregunta");
        espacio_para_pregunta.innerHTML = "";

        // Vaciar botones
        vaciar_texto();

        // Crear div para la cuenta atrás    
        var espacio_cuenta_atras = document.createElement("div");
        espacio_cuenta_atras.id = "espacio_cuenta_atras"
        document.body.appendChild(espacio_cuenta_atras);
        espacio_cuenta_atras.innerText = "3";

        // Establecer el contador inicial en 3
        var contador = 2;

        // Configurar un intervalo que se ejecutará cada 1000 milisegundos (1 segundo)
        var intervalo = setInterval(function () {
            // Si el contador es mayor que 0, mostrar el valor del contador
            if (contador > 0) {
                espacio_cuenta_atras.innerText = contador;
                contador--;
            }

            // Si el contador llega a 0, mostrar el mensaje "¡Vamos!"
            else {
                clearInterval(intervalo);
                espacio_cuenta_atras.innerText = "¡Vamos!";

                // Eliminar el contenido del elemento después de 1 segundo
                setTimeout(function () {
                    espacio_cuenta_atras.innerText = "";
                    pantalla_principal();
                    // Hacer aparecer tabla principal
                    var tabla_principal = document.getElementById("tabla_principal");
                    tabla_principal.style.display = "flex";
                }, 1000);
            }
        }, 1000);
    }
}

function pantalla_principal() {

    // Tiempo transcurrido
    cuenta_atras_ejercicio(t);

    // Operación
    generar_operacion();
    asignarEventoKeydown();

    var espacio_boton_siguiente_operacion = document.getElementById("espacio_boton_siguiente_operacion");
    var boton_siguiente_operacion = document.createElement("input");
    espacio_boton_siguiente_operacion.appendChild(boton_siguiente_operacion);
    boton_siguiente_operacion.type = "button";
    boton_siguiente_operacion.value = "Siguiente operación";
    boton_siguiente_operacion.addEventListener("click", generar_operacion);

    // Botón de detener
    mostrar_boton_detener();
}

function generar_operacion() {

    // Setear aciertos y fallos
    var tabla_aciertos = document.getElementById("aciertos");
    var tabla_fallos = document.getElementById("fallos");
    var numero_de_operaciones = document.getElementById("operaciones");
    tabla_aciertos.innerText = "Aciertos: 0";
    tabla_fallos.innerText = "Fallos: 0";
    numero_de_operaciones.innerText = "Operaciones realizadas: " + operaciones_realizadas;

    // Comprobar resultado anterior
    var resultado = document.getElementById("resultado");
    if (resultado != undefined) {
        // resultado.focus = true;
        if (resultado_provisional == resultado.value) {
            aciertos += 1;
            tabla_aciertos.innerText = "Aciertos: " + aciertos;
            tabla_fallos.innerText = "Fallos: " + fallos;
        }
        else {
            fallos += 1;
            tabla_aciertos.innerText = "Aciertos: " + aciertos;
            tabla_fallos.innerText = "Fallos: " + fallos;
        }
    }

    operaciones_realizadas += 1;

    // Signo
    var lista_signos = [];
    var longitud_de_lista = -1;

    if (s == 1) {
        lista_signos.push("s");
        longitud_de_lista += 1;
    }

    if (r == 1) {
        lista_signos.push("r");
        longitud_de_lista += 1;
    }

    if (m == 1) {
        lista_signos.push("m");
        longitud_de_lista += 1;
    }

    var signo_aleatorio = lista_signos[random(0, longitud_de_lista)];

    // Definir numeros
    if (ns == 1) {
        if (d == 1) {
            resultado_provisional = 0.001;
            while (((resultado_provisional * 100) % 1) != 0) {
                if (no == 1) {
                    numero_1 = random_con_decimales_y_naturales(-100, 100);
                    numero_2 = random_con_decimales_y_naturales(-100, 100);
                    if (signo_aleatorio == "s") {
                        resultado_provisional = numero_1 + numero_2;
                    }
                    if (signo_aleatorio == "r") {
                        resultado_provisional = numero_1 - numero_2;
                    }
                    if (signo_aleatorio == "m") {
                        resultado_provisional = numero_1 * numero_2;
                    }
                }
                else if (no == 2) {
                    numero_1 = random_con_decimales_y_naturales(0, 100);
                    numero_2 = random_con_decimales_y_naturales(0, 100);
                    if (signo_aleatorio == "s") {
                        resultado_provisional = numero_1 + numero_2;
                    }
                    if (signo_aleatorio == "r") {
                        resultado_provisional = numero_1 - numero_2;
                    }
                    if (signo_aleatorio == "m") {
                        resultado_provisional = numero_1 * numero_2;
                    }
                }
                else {
                    numero_1 = random_con_decimales_y_naturales(-100, 0);
                    numero_2 = random_con_decimales_y_naturales(-100, 0);
                    if (signo_aleatorio == "s") {
                        resultado_provisional = numero_1 + numero_2;
                    }
                    if (signo_aleatorio == "r") {
                        resultado_provisional = numero_1 - numero_2;
                    }
                    if (signo_aleatorio == "m") {
                        resultado_provisional = numero_1 * numero_2;
                    }
                }
            }
        }

        else if (d == 2) {
            if (no == 1) {
                numero_1 = random(-100, 100);
                numero_2 = random(-100, 100);
                if (signo_aleatorio == "s") {
                    resultado_provisional = numero_1 + numero_2;
                }
                if (signo_aleatorio == "r") {
                    resultado_provisional = numero_1 - numero_2;
                }
                if (signo_aleatorio == "m") {
                    resultado_provisional = numero_1 * numero_2;
                }
            }
            else if (no == 2) {
                numero_1 = random(0, 100);
                numero_2 = random(0, 100);
                if (signo_aleatorio == "s") {
                    resultado_provisional = numero_1 + numero_2;
                }
                if (signo_aleatorio == "r") {
                    resultado_provisional = numero_1 - numero_2;
                }
                if (signo_aleatorio == "m") {
                    resultado_provisional = numero_1 * numero_2;
                }
            }
            else {
                numero_1 = random(-100, 0);
                numero_2 = random(-100, 0);
                if (signo_aleatorio == "s") {
                    resultado_provisional = numero_1 + numero_2;
                }
                if (signo_aleatorio == "r") {
                    resultado_provisional = numero_1 - numero_2;
                }
                if (signo_aleatorio == "m") {
                    resultado_provisional = numero_1 * numero_2;
                }
            }
        }

        else {
            resultado_provisional = 0.001;
            while (((resultado_provisional * 100) % 1) != 0) {
                if (no == 1) {
                    numero_1 = random_con_decimales(-100, 100);
                    numero_2 = random_con_decimales(-100, 100);
                    if (signo_aleatorio == "s") {
                        resultado_provisional = numero_1 + numero_2;
                    }
                    if (signo_aleatorio == "r") {
                        resultado_provisional = numero_1 - numero_2;
                    }
                    if (signo_aleatorio == "m") {
                        resultado_provisional = numero_1 * numero_2;
                    }
                }
                else if (no == 2) {
                    numero_1 = random_con_decimales(0, 100);
                    numero_2 = random_con_decimales(0, 100);
                    if (signo_aleatorio == "s") {
                        resultado_provisional = numero_1 + numero_2;
                    }
                    if (signo_aleatorio == "r") {
                        resultado_provisional = numero_1 - numero_2;
                    }
                    if (signo_aleatorio == "m") {
                        resultado_provisional = numero_1 * numero_2;
                    }
                }
                else {
                    numero_1 = random_con_decimales(-100, 0);
                    numero_2 = random_con_decimales(-100, 0);
                    if (signo_aleatorio == "s") {
                        resultado_provisional = numero_1 + numero_2;
                    }
                    if (signo_aleatorio == "r") {
                        resultado_provisional = numero_1 - numero_2;
                    }
                    if (signo_aleatorio == "m") {
                        resultado_provisional = numero_1 * numero_2;
                    }
                }
            }
        }
    }
    else if (ns == 2) {
        resultado_provisional = -1;
        while (resultado_provisional < 0) {
            if (d == 1) {
                resultado_provisional = 0.001;
                while (((resultado_provisional * 100) % 1) != 0) {
                    if (no == 1) {
                        numero_1 = random_con_decimales_y_naturales(-100, 100);
                        numero_2 = random_con_decimales_y_naturales(-100, 100);
                        if (signo_aleatorio == "s") {
                            resultado_provisional = numero_1 + numero_2;
                        }
                        if (signo_aleatorio == "r") {
                            resultado_provisional = numero_1 - numero_2;
                        }
                        if (signo_aleatorio == "m") {
                            resultado_provisional = numero_1 * numero_2;
                        }
                    }
                    else if (no == 2) {
                        numero_1 = random_con_decimales_y_naturales(0, 100);
                        numero_2 = random_con_decimales_y_naturales(0, 100);
                        if (signo_aleatorio == "s") {
                            resultado_provisional = numero_1 + numero_2;
                        }
                        if (signo_aleatorio == "r") {
                            resultado_provisional = numero_1 - numero_2;
                        }
                        if (signo_aleatorio == "m") {
                            resultado_provisional = numero_1 * numero_2;
                        }
                    }
                    else {
                        numero_1 = random_con_decimales_y_naturales(-100, 0);
                        numero_2 = random_con_decimales_y_naturales(-100, 0);
                        if (signo_aleatorio == "s") {
                            resultado_provisional = numero_1 + numero_2;
                        }
                        if (signo_aleatorio == "r") {
                            resultado_provisional = numero_1 - numero_2;
                        }
                        if (signo_aleatorio == "m") {
                            resultado_provisional = numero_1 * numero_2;
                        }
                    }
                }
            }

            else if (d == 2) {
                if (no == 1) {
                    numero_1 = random(-100, 100);
                    numero_2 = random(-100, 100);
                    if (signo_aleatorio == "s") {
                        resultado_provisional = numero_1 + numero_2;
                    }
                    if (signo_aleatorio == "r") {
                        resultado_provisional = numero_1 - numero_2;
                    }
                    if (signo_aleatorio == "m") {
                        resultado_provisional = numero_1 * numero_2;
                    }
                }
                else if (no == 2) {
                    numero_1 = random(0, 100);
                    numero_2 = random(0, 100);
                    if (signo_aleatorio == "s") {
                        resultado_provisional = numero_1 + numero_2;
                    }
                    if (signo_aleatorio == "r") {
                        resultado_provisional = numero_1 - numero_2;
                    }
                    if (signo_aleatorio == "m") {
                        resultado_provisional = numero_1 * numero_2;
                    }
                }
                else {
                    numero_1 = random(-100, 0);
                    numero_2 = random(-100, 0);
                    if (signo_aleatorio == "s") {
                        resultado_provisional = numero_1 + numero_2;
                    }
                    if (signo_aleatorio == "r") {
                        resultado_provisional = numero_1 - numero_2;
                    }
                    if (signo_aleatorio == "m") {
                        resultado_provisional = numero_1 * numero_2;
                    }
                }
            }

            else {
                resultado_provisional = 0.001;
                while (((resultado_provisional * 100) % 1) != 0) {
                    if (no == 1) {
                        numero_1 = random_con_decimales(-100, 100);
                        numero_2 = random_con_decimales(-100, 100);
                        if (signo_aleatorio == "s") {
                            resultado_provisional = numero_1 + numero_2;
                        }
                        if (signo_aleatorio == "r") {
                            resultado_provisional = numero_1 - numero_2;
                        }
                        if (signo_aleatorio == "m") {
                            resultado_provisional = numero_1 * numero_2;
                        }
                    }
                    else if (no == 2) {
                        numero_1 = random_con_decimales(0, 100);
                        numero_2 = random_con_decimales(0, 100);
                        if (signo_aleatorio == "s") {
                            resultado_provisional = numero_1 + numero_2;
                        }
                        if (signo_aleatorio == "r") {
                            resultado_provisional = numero_1 - numero_2;
                        }
                        if (signo_aleatorio == "m") {
                            resultado_provisional = numero_1 * numero_2;
                        }
                    }
                    else {
                        numero_1 = random_con_decimales(-100, 0);
                        numero_2 = random_con_decimales(-100, 0);
                        if (signo_aleatorio == "s") {
                            resultado_provisional = numero_1 + numero_2;
                        }
                        if (signo_aleatorio == "r") {
                            resultado_provisional = numero_1 - numero_2;
                        }
                        if (signo_aleatorio == "m") {
                            resultado_provisional = numero_1 * numero_2;
                        }
                    }
                }
            }
        }
    }
    else {
        resultado_provisional = 1;
        while (resultado_provisional > 0) {
            if (d == 1) {
                resultado_provisional = 0.001;
                while (((resultado_provisional * 100) % 1) != 0) {
                    if (no == 1) {
                        numero_1 = random_con_decimales_y_naturales(-100, 100);
                        numero_2 = random_con_decimales_y_naturales(-100, 100);
                        if (signo_aleatorio == "s") {
                            resultado_provisional = numero_1 + numero_2;
                        }
                        if (signo_aleatorio == "r") {
                            resultado_provisional = numero_1 - numero_2;
                        }
                        if (signo_aleatorio == "m") {
                            resultado_provisional = numero_1 * numero_2;
                        }
                    }
                    else if (no == 2) {
                        numero_1 = random_con_decimales_y_naturales(0, 100);
                        numero_2 = random_con_decimales_y_naturales(0, 100);
                        if (signo_aleatorio == "s") {
                            resultado_provisional = numero_1 + numero_2;
                        }
                        if (signo_aleatorio == "r") {
                            resultado_provisional = numero_1 - numero_2;
                        }
                        if (signo_aleatorio == "m") {
                            resultado_provisional = numero_1 * numero_2;
                        }
                    }
                    else {
                        numero_1 = random_con_decimales_y_naturales(-100, 0);
                        numero_2 = random_con_decimales_y_naturales(-100, 0);
                        if (signo_aleatorio == "s") {
                            resultado_provisional = numero_1 + numero_2;
                        }
                        if (signo_aleatorio == "r") {
                            resultado_provisional = numero_1 - numero_2;
                        }
                        if (signo_aleatorio == "m") {
                            resultado_provisional = numero_1 * numero_2;
                        }
                    }
                }
            }

            else if (d == 2) {
                if (no == 1) {
                    numero_1 = random(-100, 100);
                    numero_2 = random(-100, 100);
                    if (signo_aleatorio == "s") {
                        resultado_provisional = numero_1 + numero_2;
                    }
                    if (signo_aleatorio == "r") {
                        resultado_provisional = numero_1 - numero_2;
                    }
                    if (signo_aleatorio == "m") {
                        resultado_provisional = numero_1 * numero_2;
                    }
                }
                else if (no == 2) {
                    numero_1 = random(0, 100);
                    numero_2 = random(0, 100);
                    if (signo_aleatorio == "s") {
                        resultado_provisional = numero_1 + numero_2;
                    }
                    if (signo_aleatorio == "r") {
                        resultado_provisional = numero_1 - numero_2;
                    }
                    if (signo_aleatorio == "m") {
                        resultado_provisional = numero_1 * numero_2;
                    }
                }
                else {
                    numero_1 = random(-100, 0);
                    numero_2 = random(-100, 0);
                    if (signo_aleatorio == "s") {
                        resultado_provisional = numero_1 + numero_2;
                    }
                    if (signo_aleatorio == "r") {
                        resultado_provisional = numero_1 - numero_2;
                    }
                    if (signo_aleatorio == "m") {
                        resultado_provisional = numero_1 * numero_2;
                    }
                }
            }

            else {
                resultado_provisional = 0.001;
                while (((resultado_provisional * 100) % 1) != 0) {
                    if (no == 1) {
                        numero_1 = random_con_decimales(-100, 100);
                        numero_2 = random_con_decimales(-100, 100);
                        if (signo_aleatorio == "s") {
                            resultado_provisional = numero_1 + numero_2;
                        }
                        if (signo_aleatorio == "r") {
                            resultado_provisional = numero_1 - numero_2;
                        }
                        if (signo_aleatorio == "m") {
                            resultado_provisional = numero_1 * numero_2;
                        }
                    }
                    else if (no == 2) {
                        numero_1 = random_con_decimales(0, 100);
                        numero_2 = random_con_decimales(0, 100);
                        if (signo_aleatorio == "s") {
                            resultado_provisional = numero_1 + numero_2;
                        }
                        if (signo_aleatorio == "r") {
                            resultado_provisional = numero_1 - numero_2;
                        }
                        if (signo_aleatorio == "m") {
                            resultado_provisional = numero_1 * numero_2;
                        }
                    }
                    else {
                        numero_1 = random_con_decimales(-100, 0);
                        numero_2 = random_con_decimales(-100, 0);
                        if (signo_aleatorio == "s") {
                            resultado_provisional = numero_1 + numero_2;
                        }
                        if (signo_aleatorio == "r") {
                            resultado_provisional = numero_1 - numero_2;
                        }
                        if (signo_aleatorio == "m") {
                            resultado_provisional = numero_1 * numero_2;
                        }
                    }
                }
            }
        }
    }

    // Escribir operación
    var primer_numero = document.getElementById("primer_numero");
    var signo = document.getElementById("signo");
    var segundo_numero = document.getElementById("segundo_numero");
    var igual = document.getElementById("igual");
    primer_numero.innerText = numero_1;
    segundo_numero.innerText = numero_2;
    igual.innerText = "=";

    if (signo_aleatorio == "s") {
        signo.innerText = " + ";
    }

    else if (signo_aleatorio == "r") {
        signo.innerText = " - ";
    }

    else {
        signo.innerText = " x ";
    }

    // Si hay un signo menos y luego un negativo, poner que sea suma
    if (numero_2 < 0) {
        segundo_numero.innerText = " (" + numero_2 + ") ";
    }

    // Si hay multiplicación y resta, poner paréntesis
    if ((signo_aleatorio == m) && (numero_2 < 0)) {
        segundo_numero.innerText = " (" + numero_2 + ") ";
    }

    // Redondear resultado, convertirlo a entero si sus decimales son .00, y eliminar ceros a la derecha innecesarios
    resultado_provisional = parseFloat(resultado_provisional.toString());
    resultado_provisional = resultado_provisional.toFixed(2);
    resultado_provisional = resultado_provisional.replace(/\.?0*$/, '');

    // Vaciar input
    // alert(resultado);

    if (resultado != null) {
        debugger;
        resultado.value = "";
        resultado.focus();
        // resultado.setAttribute("autofocus","true");

    }
    else {
        // Generar input resultado
        var resultado = document.createElement("input");
        resultado.type = "text";
        resultado.id = "resultado";
        resultado.autofocus = true;
        espacio_resultado.appendChild(resultado);
    }
}

function asignarEventoKeydown() {

    var resultado = document.getElementById("resultado");
    resultado.addEventListener('keydown', manejarKeydown);
    function manejarKeydown(event) {
        if (event.key === "Enter") {
            resultado.removeEventListener('keydown', manejarKeydown);
            generar_operacion();
            asignarEventoKeydown();
        }
    }
}

function cuenta_atras_ejercicio(minutos) {
    var tiempoTranscurrido = document.getElementById("tiempo_transcurrido");
    var tiempoRestante = (minutos * 60) - 1; // Convertir minutos a segundos
    var boton_siguiente_operacion = document.getElementById("espacio_boton_siguiente_operacion");
    var espacio_resultado = document.getElementById("espacio_resultado");
    var primer_numero = document.getElementById("primer_numero");
    var signo = document.getElementById("signo");
    var segundo_numero = document.getElementById("segundo_numero");
    var igual = document.getElementById("igual");
    tiempoTranscurrido.innerText = minutos + ":00";

    var intervalo = setInterval(function () {
        var minutosRestantes = Math.floor(tiempoRestante / 60);
        var segundosRestantes = tiempoRestante % 60;

        // Formatear los minutos y segundos con ceros iniciales si es necesario
        var minutosFormateados = minutosRestantes < 10 ? + minutosRestantes : minutosRestantes;
        var segundosFormateados = segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes;

        tiempoTranscurrido.textContent = minutosFormateados + ":" + segundosFormateados;

        if (tiempoRestante == 0 || parar_cuenta_atras == 1) {
            var espacio_boton_detener_operacion = document.getElementById("espacio_boton_detener_operacion");
            var boton_detener_operacion = document.getElementById("boton_detener_operacion");
            clearInterval(intervalo);
            tiempoTranscurrido.textContent = "Tiempo agotado";
            tiempoTranscurrido.id = "tiempo_agotado"
            boton_siguiente_operacion.innerHTML = "";
            espacio_resultado.innerHTML = "";
            primer_numero.innerText = "";
            signo.innerText = "";
            segundo_numero.innerText = "";
            igual.innerText = "";
            if (boton_detener_operacion != undefined) {
                espacio_boton_detener_operacion.removeChild(boton_detener_operacion);
            }
            mostrar_boton_volver_a_inicio();
        }
        else {
            tiempoRestante--;
        }
    }, 1000);
}

function mostrar_boton_anterior() {

    // Si no está creado el espacio de botones, y crearlo
    var espacio_botones = document.getElementById("espacio_botones");
    if (espacio_botones == undefined) {
        var espacio_botones = document.createElement("div");
        espacio_botones.id = "espacio_botones";
        document.body.appendChild(espacio_botones);
    }

    // Crear botón siguiente en caso de que no esté creado
    var espacio_boton_anterior = document.getElementById("espacio_boton_anterior");
    var espacio_boton_anterior = document.getElementById("espacio_boton_anterior");
    if (espacio_boton_anterior == null) {
        espacio_boton_anterior = document.createElement("span");
        espacio_boton_anterior.id = "espacio_boton_anterior";
        espacio_botones.appendChild(espacio_boton_anterior);
        var boton_anterior = document.createElement("input");
        boton_anterior.id = "boton_anterior";
        boton_anterior.type = "button";
        boton_anterior.value = "Anterior";
        espacio_boton_anterior.appendChild(boton_anterior);
    }
    else if (espacio_boton_anterior.innerHTML == "") {
        var boton_anterior = document.createElement("input");
        boton_anterior.id = "boton_anterior";
        boton_anterior.type = "button";
        boton_anterior.value = "Anterior";
        espacio_boton_anterior.appendChild(boton_anterior);
    }
    else {
        var boton_anterior = document.createElement("input");
        boton_anterior.id = "boton_anterior";
        boton_anterior.type = "button";
        boton_anterior.value = "Anterior";
        espacio_boton_anterior.appendChild(boton_anterior);
    }

    // Invocar a la función correcta, según el número de página que se haya definido
    if (numero_de_pagina_anterior == 2) {
        boton_anterior.addEventListener("click", function () {
            seleccionar_operaciones();
        });
    }
}

function mostrar_boton_siguiente(numero_de_pagina) {

    // Si no está creado el espacio de botones, y crearlo
    var espacio_botones = document.getElementById("espacio_botones");
    if (espacio_botones == undefined) {
        var espacio_botones = document.createElement("div");
        espacio_botones.id = "espacio_botones";
        document.body.appendChild(espacio_botones);
    }

    // Si está creado espacio_boton_siguiente, borrarlo
    var espacio_boton_siguiente = document.getElementById("espacio_boton_siguiente");
    if (espacio_boton_siguiente != undefined) {
        espacio_botones.removeChild(espacio_boton_siguiente);
    }

    // Crear botón siguiente
    espacio_boton_siguiente = document.createElement("span");
    espacio_boton_siguiente.id = "espacio_boton_siguiente";
    espacio_botones.appendChild(espacio_boton_siguiente);
    var boton_siguiente = document.createElement("input");
    boton_siguiente.id = "boton_siguiente";
    boton_siguiente.type = "button";
    boton_siguiente.value = "Siguiente";
    espacio_boton_siguiente.appendChild(boton_siguiente);

    // Invocar a la función correcta, según el número de página que se haya definido
    if (numero_de_pagina == 3) {
        boton_siguiente.addEventListener("click", seleccionar_opciones);
    }
    else if (numero_de_pagina == 4) {
        boton_siguiente.addEventListener("click", cuenta_atras);
        boton_siguiente.value = "Comenzar";
    }
}

function mostrar_boton_detener() {
    // Setear variable global parar_cuenta_atras
    parar_cuenta_atras = 0;

    // Crear botón si no está creado
    var espacio_boton_detener_operacion = document.getElementById("espacio_boton_detener_operacion");
    var boton_detener_operacion = document.createElement("input");
    espacio_boton_detener_operacion.appendChild(boton_detener_operacion);
    boton_detener_operacion.id = "boton_detener_operacion";
    boton_detener_operacion.type = "button";
    boton_detener_operacion.value = "Detener";
    boton_detener_operacion.addEventListener("click", function () {
        var tiempo_transcurrido = document.getElementById("tiempo_transcurrido");
        var boton_siguiente_operacion = document.getElementById("espacio_boton_siguiente_operacion");
        var espacio_resultado = document.getElementById("espacio_resultado");
        var primer_numero = document.getElementById("primer_numero");
        var signo = document.getElementById("signo");
        var segundo_numero = document.getElementById("segundo_numero");
        var igual = document.getElementById("igual");

        tiempo_transcurrido.innerText = "Tiempo agotado";
        tiempo_transcurrido.id = "";
        boton_siguiente_operacion.innerHTML = "";
        espacio_resultado.innerHTML = "";
        primer_numero.innerText = "";
        signo.innerText = "";
        segundo_numero.innerText = "";
        igual.innerText = "";

        parar_cuenta_atras = 1;

        // Eliminar el botón después de 1 ms
        setTimeout(function () {
            espacio_boton_detener_operacion.removeChild(boton_detener_operacion);
        }, 1);

        // Crear botón de volver a Inicio
        mostrar_boton_volver_a_inicio();
    });
}

function mostrar_boton_volver_a_inicio() {

    // Si no está creado el espacio de botones, y crearlo
    var espacio_botones = document.getElementById("espacio_botones");
    if (espacio_botones == undefined) {
        var espacio_botones = document.createElement("div");
        espacio_botones.id = "espacio_botones";
        document.body.appendChild(espacio_botones);
    }

    // Crear botón si no está creado
    var espacio_boton_volver_a_inicio = document.getElementById("espacio_boton_volver_a_inicio");
    if (espacio_boton_volver_a_inicio == undefined) {
        var espacio_boton_volver_a_inicio = document.createElement("span");
        espacio_boton_volver_a_inicio.id = "espacio_boton_volver_a_inicio";
        espacio_botones.appendChild(espacio_boton_volver_a_inicio);
        var boton_volver_a_inicio = document.createElement("input");
        boton_volver_a_inicio.id = "boton_volver_a_inicio";
        boton_volver_a_inicio.type = "button";
        boton_volver_a_inicio.value = "Volver a inicio";
        boton_volver_a_inicio.addEventListener("click", function () {
            // Ocultar tabla principal si está
            var tabla_principal = document.getElementById("tabla_principal");
            tabla_principal.style.display = "none";
            // Verificar si existe el elemento con el ID "tiempo_agotado"
            var tiempoAgotado = document.getElementById("tiempo_agotado");
            // Cambiar el ID solo si el elemento existe
            if (tiempoAgotado) {
                tiempoAgotado.id = "tiempo_transcurrido";
            }
            vaciar_texto();
            empecemos();
        });
        espacio_boton_volver_a_inicio.appendChild(boton_volver_a_inicio);
    }
    else {
        espacio_botones.removeChild(espacio_boton_volver_a_inicio);
        var espacio_boton_volver_a_inicio = document.createElement("span");
        espacio_boton_volver_a_inicio.id = "espacio_boton_volver_a_inicio";
        espacio_botones.appendChild(espacio_boton_volver_a_inicio);
        var boton_volver_a_inicio = document.createElement("input");
        boton_volver_a_inicio.id = "boton_volver_a_inicio";
        boton_volver_a_inicio.type = "button";
        boton_volver_a_inicio.value = "Volver a inicio";
        boton_volver_a_inicio.addEventListener("click", function () {
            // Ocultar tabla principal si está
            var tabla_principal = document.getElementById("tabla_principal");
            tabla_principal.style.display = "none";
            // Verificar si existe el elemento con el ID "tiempo_agotado"
            var tiempoAgotado = document.getElementById("tiempo_agotado");
            // Cambiar el ID solo si el elemento existe
            if (tiempoAgotado) {
                tiempoAgotado.id = "tiempo_transcurrido";
            }
            vaciar_texto();
            empecemos();
        });
        espacio_boton_volver_a_inicio.appendChild(boton_volver_a_inicio);
    }
}

function vaciar_texto() {

    // Vaciar preguntas
    var espacio_para_preguntas = document.getElementById("espacio_para_preguntas");
    if (espacio_para_preguntas != undefined) {
        document.body.removeChild(espacio_para_preguntas);
    }

    // Vaciar botones
    var espacio_boton_empecemos = document.getElementById("espacio_boton_empecemos");
    if (espacio_boton_empecemos != undefined) {
        document.body.removeChild(espacio_boton_empecemos);
    }

    var espacio_botones = document.getElementById("espacio_botones");
    if (espacio_botones != undefined) {
        document.body.removeChild(espacio_botones);
    }
}

function vaciar_divs() {

    // Vaciar divs
    var espacio_para_pregunta = document.getElementById("espacio_para_pregunta");
    if (espacio_para_pregunta != undefined) {
        document.body.removeChild(espacio_para_pregunta);
    }
    var espacio_boton_volver_a_inicio = document.getElementById("espacio_boton_volver_a_inicio");
    if (espacio_boton_volver_a_inicio != undefined) {
        document.body.removeChild(espacio_boton_volver_a_inicio);
    }
    var espacio_boton_anterior = document.getElementById("espacio_boton_anterior");
    if (espacio_boton_anterior != undefined) {
        document.body.removeChild(espacio_boton_anterior);
    }
    var espacio_boton_siguiente = document.getElementById("espacio_boton_siguiente");
    if (espacio_boton_siguiente != undefined) {
        document.body.removeChild(espacio_boton_siguiente);
    }
    var espacio_cuenta_atras = document.getElementById("espacio_cuenta_atras");
    if (espacio_cuenta_atras != undefined) {
        document.body.removeChild(espacio_cuenta_atras);
    }

}