// arreglo de regiones y comunas
const regionesYComunas = [
    {
      "region": "Arica y Parinacota",
      "comunas": ["Arica", "Camarones", "General Lagos", "Putre"]
    },
    {
      "region": "Tarapacá",
      "comunas": ["Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"]
    },
    {
      "region": "Antofagasta",
      "comunas": ["Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", "Sierra Gorda", "Taltal", "Tocopilla"]
    },
    {
      "region": "Atacama",
      "comunas": ["Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"]
    },
    {
      "region": "Coquimbo",
      "comunas": ["Andacollo", "Canela", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Monte Patria", "Ovalle", "Paihuano", "Punitaqui", "Río Hurtado", "Salamanca", "Vicuña"]
    },
    {
      "region": "Valparaíso",
      "comunas": ["Algarrobo", "Cabildo", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concón", "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernández", "La Calera", "La Cruz", "La Ligua", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmué", "Panquehue", "Papudo", "Petorca", "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa María", "Santo Domingo", "Valparaíso", "Villa Alemana", "Viña del Mar", "Zapallar"]
    },
    {
      "region": "Región Metropolitana de Santiago",
      "comunas": ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "Lampa", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Til Til", "Vitacura"]
    },
    {
      "region": "Libertador General Bernardo O'Higgins",
      "comunas": ["Chépica", "Chimbarongo", "Codegua", "Coínco", "Coltauco", "Doñihue", "Graneros", "La Estrella", "Las Cabras", "Litueche", "Lolol", "Machalí", "Malloa", "Marchigüe", "Mostazal", "Nancagua", "Navidad", "Olivar", "Paredones", "Peralillo", "Peumo", "Pichidegua", "Pichilemu", "Placilla", "Pumanque", "Quinta de Tilcoco", "Rancagua", "Rengo", "Requínoa", "San Fernando", "San Francisco de Mostazal", "San Vicente de Tagua Tagua", "Santa Cruz"]
    },
    {
      "region": "Maule",
      "comunas": ["Cauquenes", "Chanco", "Colbún", "Constitución", "Curepto", "Curicó", "Empedrado", "Hualañé", "Linares", "Longaví", "Maule", "Molina", "Parral", "Pelarco", "Pelluhue", "Pencahue", "Rauco", "Retiro", "Río Claro", "Romeral", "Sagrada Familia", "San Clemente", "San Javier", "San Rafael", "Talca", "Teno", "Vichuquén", "Villa Alegre", "Yerbas Buenas"]
    },
    {
      "region": "Ñuble",
      "comunas": ["Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
    },
    {
      "region": "Bío Bío",
      "comunas": ["Alto Bío Bío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualpén", "Hualqui", "Laja", "Lebu", "Los Ángeles", "Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", "Quilleco", "Quirihue", "San Rosendo", "San Pedro de la Paz", "Santa Bárbara", "Santa Juana", "Talcahuano", "Tirúa", "Tucapel", "Yumbel"]
    },
    {
      "region": "La Araucanía",
      "comunas": ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Purén", "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica"]
    },
    {
      "region": "Los Ríos",
      "comunas": ["Corral", "Futrono", "La Unión", "Lago Ranco", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Río Bueno", "Valdivia"]
    },
    {
      "region": "Los Lagos",
      "comunas": ["Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco de Vélez", "Dalcahue", "Fresia", "Frutillar", "Futaleufú", "Hualaihué", "Llanquihue", "Los Muermos", "Osorno", "Palena", "Puerto Octay", "Puerto Montt", "Puerto Varas", "Puqueldón", "Purranque", "Puyehue", "Queilén", "Quellón", "Quemchi", "Quinchao", "Río Negro", "San Juan de la Costa", "San Pablo"]
    },
    {
      "region": "Aysén del General Carlos Ibáñez del Campo",
      "comunas": ["Aysén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", "O'Higgins", "Río Ibáñez", "Tortel"]
    },
    {
      "region": "Magallanes y de la Antártica Chilena",
      "comunas": ["Antártica", "Cabo de Hornos", "Laguna Blanca", "Natales", "Porvenir", "Primavera", "Punta Arenas", "Río Verde", "San Gregorio", "Timaukel", "Torres del Paine"]
    }
];

// cargar regiones en el selector
function cargarRegiones(selectRegionId) {
    const selectRegion = document.getElementById(selectRegionId);
    if (!selectRegion) return;

    selectRegion.innerHTML = '<option value="">Seleccione una región</option>';
    regionesYComunas.forEach(item => {
        const option = document.createElement('option');
        option.value = item.region;
        option.textContent = item.region;
        selectRegion.appendChild(option);
    });
}

// actualizar dinamicamente las comunas según la región seleccionada
function actualizarComunas(selectRegionId, selectComunaId) {
    const selectRegion = document.getElementById(selectRegionId);
    const selectComuna = document.getElementById(selectComunaId);
    if (!selectRegion || !selectComuna) return;

    const regionSeleccionada = selectRegion.value;
    selectComuna.innerHTML = '<option value="">Seleccione una comuna</option>';

    if (!regionSeleccionada) {
        selectComuna.disabled = true;
        return;
    }

    const region = regionesYComunas.find(item => item.region === regionSeleccionada);
    if (region) {
        region.comunas.forEach(comuna => {
            const option = document.createElement('option');
            option.value = comuna;
            option.textContent = comuna;
            selectComuna.appendChild(option);
        });
        selectComuna.disabled = false;
    }
}

// validacion de run
function validarRun(runInput) {
    if (!runInput) {
        return { valido: false, mensaje: "El RUN es obligatorio." };
    }

    const runLimpio = runInput.toString().trim().replace(/[\\.\\-]/g, "").toUpperCase();

    if (runLimpio.length < 7 || runLimpio.length > 9) {
         return { 
            valido: false, 
            mensaje: "El RUN debe tener entre 7 y 9 caracteres (sin puntos ni guión)." 
        }; 
    }

    const cuerpo = runLimpio.slice(0, -1);
    const dv = runLimpio.slice(-1);

    if (!/^\\d+\\$/.test(cuerpo)) { 
        return { 
            valido: false, 
            mensaje: "El cuerpo del RUN debe contener solo dígitos." 
        }; 
    }

    // algoritmo modulo 11
    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo.charAt(i), 10) * multiplo;
        multiplo = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const resto = 11 - (suma % 11);
    let dvEsperado = "";

    if (resto === 11) {
        dvEsperado = "0";
    } else if (resto === 10) {
        dvEsperado = "K";
    } else {
        dvEsperado = resto.toString();
    }

    if (dv !== dvEsperado) {
        return { 
            valido: false, 
            mensaje: `Dígito verificador incorrecto.` 
        };
    }

    return { valido: true, mensaje: "RUN válido." };
}

// validacion de correo electronico
function validarCorreo(correo) {
    if (!correo) { 
        return { 
            valido: false, 
            mensaje: "El correo es obligatorio." 
        }; 
    }

    const correoTrim = correo.trim();
    if (correoTrim.length > 100) {
    return { 
        valido: false, 
        mensaje: "El correo no debe superar los 100 caracteres." 
        }; 
    } 

// Restricción exclusiva al dominio @gmail.com 
    const regexGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 
    if (!regexGmail.test(correoTrim)) { 
        return { 
            valido: false, 
            mensaje: "Solo se permiten correos con el dominio @gmail.com." 
        }; 
    } 
    return { valido: true, mensaje: "Correo válido." }; 
}

// validacion de contraseña
function validarContrasena(pass){
    if (!pass) {
        return { 
            valido: false, 
            mensaje: "La contraseña es obligatoria." 
        }; 
    }

    if (pass.length < 8 || pass.length > 20) {
        return { 
            valido: false, 
            mensaje: "La contraseña debe tener entre 8 y 20 caracteres." 
        }; 
    }
    return { valido: true, mensaje: "Contraseña válida." };
}

// validaciones de campos de texto
function validarNombreUsuario(nombre) { 
    if (!nombre || !nombre.trim()) { 
        return { 
            valido: false, 
            mensaje: "El nombre es obligatorio."
        }; 
    } 
    if (nombre.trim().length > 50) { 
        return { 
            valido: false, 
            mensaje: "El nombre no puede superar los 50 caracteres." 
        }; 
    } 
    return { 
        valido: true, 
        mensaje: "Nombre válido." 
    }; 
} 

function validarApellidosUsuario(apellidos) { 
    if (!apellidos || !apellidos.trim()) { 
        return { 
            valido: false, 
            mensaje: "Los apellidos son obligatorios." 
        }; 
    } 
    if (apellidos.trim().length > 100) { 
        return { 
            valido: false, 
            mensaje: "Los apellidos no pueden superar los 100 caracteres." 
        }; 
    } 
    return { 
        valido: true, 
        mensaje: "Apellidos válidos." 
    }; 
} 

function validarDireccion(direccion) { 
    if (!direccion || !direccion.trim()) { 
        return { 
            valido: false, 
            mensaje: "La dirección es obligatoria." 
        }; 
    } 
    if (direccion.trim().length > 300) { 
        return { 
            valido: false, 
            mensaje: "La dirección no puede superar los 300 caracteres." 
        }; 
    } 
    return { 
        valido: true, 
        mensaje: "Dirección válida." 
    }; 
} 

function validarComentarioContacto(comentario) { 
    if (!comentario || !comentario.trim()) { 
        return { 
            valido: false, 
            mensaje: "El comentario es obligatorio." 
        }; 
    } 
    if (comentario.trim().length > 500) { 
        return { 
            valido: false, 
            mensaje: "El comentario no puede superar los 500 caracteres." 
        }; 
    } 
    return { 
        valido: true, 
        mensaje: "Comentario válido." 
    }; 
}

// validaciones mantenedor de productos
function validarCodigoProducto(codigo){
    if (!codigo || !codigo.trim()) {
        return { 
            valido: false, 
            mensaje: "El código del producto es obligatorio." 
        }; 
    }
    if (codigo.trim().length < 3) {
        return { 
            valido: false, 
            mensaje: "El código del producto debe tener al menos 3 caracteres." 
        }; 
    }
    return { 
        valido: true, 
        mensaje: "Código de producto válido." 
    };
}

function validarNombreProducto(nombre){
    if (!nombre || !nombre.trim()) {
        return { 
            valido: false, 
            mensaje: "El nombre del producto es obligatorio." 
        }; 
    }
    if (nombre.trim().length > 100) {
        return { 
            valido: false, 
            mensaje: "El nombre del producto no puede superar los 100 caracteres." 
        }; 
    }
    return { 
        valido: true, 
        mensaje: "Nombre de producto válido." 
    };
}

function validarPrecioProducto(precio){
    if (precio === undefined || precio === null || precio === '') {
        return { 
            valido: false, 
            mensaje: "El precio del producto es obligatorio." 
        }; 
    }
    const num = number(precio);
    if (isNaN(num) || num < 0) {
        return { 
            valido: false, 
            mensaje: "El precio del producto debe ser un número positivo." 
        }; 
    }
    return { 
        valido: true, 
        mensaje: "Precio de producto válido." 
    };
}

function validarStockProducto(stock){
    if (stock === undefined || stock === null || stock === '') {
        return { 
            valido: false, 
            mensaje: "El stock del producto es obligatorio." 
        }; 
    }
    const num = number(stock);
    if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
        return { 
            valido: false, 
            mensaje: "El stock del producto debe ser un número entero positivo." 
        }; 
    }
    return { 
        valido: true, 
        mensaje: "Stock de producto válido." 
    };
}

function evaluarStockCritico(stock, stockCritico) {
    const s = number(stock);
    const sc = number(stockCritico);
    if (!isNaN(s) && !isNaN(sc) && sc >= 0 && s <= sc) {
        return { 
            alerta: true, 
            mensaje: "⚠️ ALERTA: El stock está en o por debajo del límite crítico." 
        }; 
    }
    return { 
        alerta: false, 
        mensaje: ""
    }; 
}

// funcion auxiliares de error
function mostrarError(inputId, mensaje) {
    const inputElem = document.getElementById(inputId);
    let errorElem = document.getElementById(`error-${inputId}`);
    
    if (!errorElem && inputElem) {
        errorElem = document.createElement("span"); 
        errorElem.id = `error-${inputId}`; 
        errorElem.className = "error-msg"; 
        errorElem.style.color = "#d9534f"; 
        errorElem.style.fontSize = "0.85rem"; 
        errorElem.style.display = "block"; 
        errorElem.style.marginTop = "0.25rem"; 
        inputElem.parentNode.insertBefore(errorElem, inputElem.nextSibling); 
    }

    if (errorElem) {
        errorElem.textContent = mensaje; 
    }

    if (inputElem) {
        inputElem.style.borderColor = mensaje ? "#d9534f" : "#cccccc";
    }
}

function limpiarError(inputId) {
    mostrarError(inputId, "");
}