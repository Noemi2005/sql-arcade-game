import { Question } from '../models/question.model';

export const QUESTIONS_DATA: Question[] = [
  // --- LEVEL 1: TEORÍA BÁSICA Y DDL FUNDAMENTAL ---
  {
    "id": 1,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Cuál es la sintaxis correcta para definir una columna 'salario' decimal de hasta 8 dígitos en total y 2 decimales en SQL?",
    "code": "CREATE TABLE empleados (\n    id INT PRIMARY KEY,\n    salario -- ¿Qué definición va aquí?\n);",
    "options": [
      "salario DECIMAL(8,2)",
      "salario FLOAT(2,8)",
      "salario NUMBER(2,8)",
      "salario DOUBLE(8.2)"
    ],
    "correctAnswer": 0,
    "explanation": "DECIMAL(M, D) requiere M como la precisión total (máximo de dígitos totales) y D como la escala (dígitos a la derecha del punto decimal). Por lo tanto DECIMAL(8,2) permite hasta 8 dígitos con 2 decimales."
  },
  {
    "id": 2,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "easy",
    "level": 1,
    "question": "Se intenta ejecutar la siguiente sentencia DDL en una base de datos relacional. ¿Por qué producirá un error de sintaxis?",
    "code": "CREATE TABLE productos (\n    id INT,\n    nombre VARCHAR(100),\n    precio DECIMAL(10,2)\n    PRIMARY KEY (id)\n);",
    "options": [
      "Falta una coma ',' después de la definición de la columna 'precio'.",
      "PRIMARY KEY no puede declararse al final del CREATE TABLE.",
      "VARCHAR requiere especificar la codificación de caracteres explícitamente.",
      "La columna 'id' debe llevar obligatoriamente AUTO_INCREMENT para ser PRIMARY KEY."
    ],
    "correctAnswer": 0,
    "explanation": "En la definición a nivel de tabla, cada elemento separado dentro del paréntesis del CREATE TABLE debe estar delimitado por comas. Falta la coma al final de 'precio DECIMAL(10,2)'."
  },
  {
    "id": 3,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "easy",
    "level": 1,
    "question": "Al definir la columna 'fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP', ¿qué comportamiento DDL se establece?",
    "code": "CREATE TABLE auditoria (\n    id INT PRIMARY KEY,\n    evento VARCHAR(50) NOT NULL,\n    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
    "options": [
      "Si no se proporciona un valor en la inserción, el motor asigna automáticamente la fecha/hora actual.",
      "Impide expresamente que se inserte manualmente cualquier otro valor de fecha.",
      "Fuerza a que la columna sea la clave primaria de la tabla.",
      "Convierte automáticamente la columna en NOT NULL y UNIQUE por defecto."
    ],
    "correctAnswer": 0,
    "explanation": "La cláusula DEFAULT especifica un valor predeterminado que el motor de base de datos utilizará cuando la columna no reciba un valor explícito durante la creación del registro."
  },
  {
    "id": 4,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "¿Qué ocurre si se intenta crear una tabla con dos columnas declaradas como PRIMARY KEY a nivel de columna?",
    "code": "CREATE TABLE matriculas (\n    estudiante_id INT PRIMARY KEY,\n    curso_id INT PRIMARY KEY,\n    fecha DATE\n);",
    "options": [
      "Produce un error DDL porque solo puede existir UNA cláusula PRIMARY KEY por tabla.",
      "Crea automáticamente una clave primaria compuesta entre ambas columnas.",
      "La segunda PRIMARY KEY sobrescribe a la primera silenciosamente.",
      "Se crean dos índices primarios independientes en el motor de base de datos."
    ],
    "correctAnswer": 0,
    "explanation": "Una tabla solo puede tener UNA restricción de Clave Primaria. Si se desea incluir múltiples columnas en la clave primaria, debe declararse a nivel de tabla como una clave primaria compuesta: PRIMARY KEY (estudiante_id, curso_id)."
  },
  {
    "id": 5,
    "category": "BASIC_THEORY",
    "categoryLabel": "TEORÍA BÁSICA",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Cuál de los siguientes comandos pertenece a la categoría DDL (Data Definition Language)?",
    "code": "-- Selecciona el comando que modifica la estructura del esquema",
    "options": [
      "ALTER TABLE",
      "INSERT INTO",
      "UPDATE",
      "SELECT"
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE es un comando DDL porque modifica la estructura o definición de un objeto de la base de datos. INSERT, UPDATE y SELECT son DML/DQL."
  },
  {
    "id": 6,
    "category": "BASIC_THEORY",
    "categoryLabel": "TEORÍA BÁSICA",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Cuál es la diferencia fundamental entre el comando DROP TABLE y el comando TRUNCATE TABLE?",
    "code": "-- Comparación DDL\nDROP TABLE clientes;\nTRUNCATE TABLE clientes;",
    "options": [
      "DROP destruye la estructura de la tabla por completo; TRUNCATE borra todos los datos pero conserva la estructura.",
      "TRUNCATE elimina la tabla de la base de datos; DROP solo borra las filas.",
      "DROP es un comando DML mientras que TRUNCATE es un comando DQL.",
      "No existe ninguna diferencia; ambos comandos realizan exactamente lo mismo."
    ],
    "correctAnswer": 0,
    "explanation": "DROP TABLE elimina tanto el objeto tabla como toda su estructura del diccionario de datos. TRUNCATE TABLE vacía rápidamente los registros pero mantiene intacta la definición DDL de la tabla."
  },
  {
    "id": 7,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "¿Cuál es la principal ventaja de utilizar el tipo de dato VARCHAR(50) en lugar de CHAR(50)?",
    "code": "nombre_var VARCHAR(50),\nnombre_fijo CHAR(50)",
    "options": [
      "VARCHAR asigna espacio dinámico según la longitud del texto real; CHAR siempre reserva 50 caracteres con espacios de relleno.",
      "CHAR permite almacenar caracteres numéricos mientras que VARCHAR solo acepta letras.",
      "VARCHAR sólo se puede usar en claves primarias.",
      "CHAR es de longitud variable y VARCHAR de longitud fija."
    ],
    "correctAnswer": 0,
    "explanation": "CHAR es un tipo de dato de longitud fija que rellena con espacios hasta alcanzar N caracteres. VARCHAR ajusta su tamaño al texto insertado más una pequeña cabecera de longitud."
  },
  {
    "id": 8,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Qué sucede al ejecutar un CREATE TABLE con la cláusula IF NOT EXISTS cuando la tabla ya existe?",
    "code": "CREATE TABLE IF NOT EXISTS usuarios (\n    id INT PRIMARY KEY,\n    email VARCHAR(100)\n);",
    "options": [
      "El motor ignora la sentencia sin lanzar un error y conserva la tabla existente.",
      "La sentencia sobrescribe y reemplaza la tabla existente perdiendo los datos.",
      "Se produce un error fatal de sintaxis interrumpiendo el script.",
      "Se crea una tabla duplicada con el prefijo _copy."
    ],
    correctAnswer: 0,
    explanation: "IF NOT EXISTS evita que el script falle con un error de creación si el objeto tabla ya está presente en el esquema activo."
  },

  // --- LEVEL 2: DDL FUNDAMENTAL Y TIPOS DE DATOS ---
  {
    "id": 9,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "RESTRICCIONES",
    "difficulty": "easy",
    "level": 2,
    "question": "¿Cuál es la diferencia conceptual fundamental entre la restricción UNIQUE y PRIMARY KEY a nivel DDL?",
    "code": "-- Caso A: correo VARCHAR(100) UNIQUE\n-- Caso B: correo VARCHAR(100) PRIMARY KEY",
    "options": [
      "PRIMARY KEY no permite ningún valor NULL, mientras que UNIQUE generalmente permite valores NULL.",
      "UNIQUE solo puede ser aplicada a datos de tipo numérico INT.",
      "PRIMARY KEY crea un índice, mientras que UNIQUE no crea ningún índice interno.",
      "Una tabla puede tener múltiples PRIMARY KEY pero solo una restricción UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "PRIMARY KEY exige unicidad y prohíbe explícitamente valores NULL. UNIQUE garantiza unicidad entre valores presentes pero permite valores NULL según el estándar SQL."
  },
  {
    "id": 10,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "RESTRICCIONES",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Qué operación viola la restricción CHECK definida en la siguiente columna 'descuento'?",
    "code": "CREATE TABLE ofertas (\n    id INT PRIMARY KEY,\n    descuento DECIMAL(5,2) CHECK (descuento >= 0.00 AND descuento <= 50.00)\n);",
    "options": [
      "Insertar un valor de 55.00 en la columna descuento.",
      "Insertar un valor de 0.00 en la columna descuento.",
      "Insertar un valor de 25.50 en la columna descuento.",
      "Insertar NULL en la columna descuento (si no tiene NOT NULL)."
    ],
    "correctAnswer": 0,
    "explanation": "La condición CHECK exige que descuento esté dentro del rango de 0.00 a 50.00. Insertar 55.00 evalúa la condición como FALSE y aborta la transacción."
  },
  {
    "id": 11,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "RESTRICCIONES",
    "difficulty": "medium",
    "level": 2,
    "question": "Analiza la siguiente restricción CHECK sobre un rango numérico y determina qué valor será rechazado por la base de datos:",
    "code": "CREATE TABLE inventario (\n    sku VARCHAR(20) PRIMARY KEY,\n    stock INT CHECK (stock > 0)\n);",
    "options": [
      "Un valor de 0 en la columna stock.",
      "Un valor de 1 en la columna stock.",
      "Un valor de 100 en la columna stock.",
      "Cualquier valor entero positivo."
    ],
    "correctAnswer": 0,
    "explanation": "La expresión 'stock > 0' es una desigualdad estricta. El valor 0 produce FALSE (0 no es estrictamente mayor que 0), provocando la violación de la restricción CHECK."
  },
  {
    "id": 12,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Qué tipo de dato DDL es el más adecuado para almacenar texto largo como descripciones de artículos sin límite estricto prefijado?",
    "code": "CREATE TABLE articulos (\n    id INT PRIMARY KEY,\n    titulo VARCHAR(200),\n    contenido TEXT -- ¿Es este el tipo adecuado?\n);",
    "options": [
      "TEXT",
      "CHAR(255)",
      "INT",
      "BOOLEAN"
    ],
    "correctAnswer": 0,
    "explanation": "El tipo TEXT permite almacenar cadenas de caracteres extensas de longitud variable (hasta 64KB o más según el motor), ideal para cuerpos de artículos o comentarios."
  },
  {
    "id": 13,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "RESTRICCIONES",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Qué sucede al intentar insertar un valor duplicado en una columna declarada como UNIQUE?",
    "code": "CREATE TABLE usuarios (\n    id INT PRIMARY KEY,\n    email VARCHAR(100) UNIQUE\n);",
    "options": [
      "El motor de base de datos rechaza la inserción con un error de violación de restricción de unicidad.",
      "La nueva fila reemplaza automáticamente a la fila antigua.",
      "El valor se guarda con un número secuencial añadido al final.",
      "La restricción UNIQUE se deshabilita para permitir el duplicado."
    ],
    "correctAnswer": 0,
    explanation: "La restricción UNIQUE requiere que todos los valores no nulos presentes en la columna sean distintos entre sí. Insertar un valor idéntico arroja una excepción de unicidad."
  },
  {
    "id": 14,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "RESTRICCIONES",
    "difficulty": "easy",
    "level": 2,
    "question": "¿Cuál es el valor por defecto de una columna si no se especifica la cláusula DEFAULT ni NOT NULL?",
    "code": "CREATE TABLE notas (\n    id INT PRIMARY KEY,\n    observacion VARCHAR(255)\n);",
    "options": [
      "NULL",
      "0",
      "Cadena vacía ''",
      "FALSE"
    ],
    "correctAnswer": 0,
    "explanation": "Por defecto en SQL, las columnas que aceptan valores nulos y no tienen definida una cláusula DEFAULT asumen 'DEFAULT NULL'."
  },

  // --- LEVEL 3: CONSTRAINTS DE COLUMNA Y PRIMARY KEY ---
  {
    "id": 15,
    "category": "PRIMARY_KEY",
    "categoryLabel": "PRIMARY KEY",
    "difficulty": "medium",
    "level": 3,
    "question": "Dadas las siguientes definiciones, ¿cuáles son los dos requisitos indispensables de una PRIMARY KEY?",
    "code": "CREATE TABLE facturas (\n    numero_factura INT PRIMARY KEY\n);",
    "options": [
      "Debe contener valores 100% únicos y no permitir valores NULL.",
      "Debe ser de tipo entero y de incremento automático obligatorio.",
      "Debe coincidir con el nombre de la tabla.",
      "Debe estar vinculada obligatoriamente a una Foreign Key."
    ],
    "correctAnswer": 0,
    "explanation": "Una Clave Primaria combina intrínsecamente la unicidad de valores (UNIQUE) con la prohibición absoluta de nulos (NOT NULL) para identificar unívocamente cada fila."
  },
  {
    "id": 16,
    "category": "PRIMARY_KEY",
    "categoryLabel": "PRIMARY KEY",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Cómo se define correctamente una Clave Primaria Compuesta por dos columnas?",
    "code": "-- Sintaxis a nivel de tabla\nCREATE TABLE detalle_pedido (\n    pedido_id INT,\n    producto_id INT,\n    cantidad INT,\n    -- ¿Cómo se declara la PK compuesta?\n);",
    "options": [
      "PRIMARY KEY (pedido_id, producto_id)",
      "pedido_id INT PRIMARY KEY, producto_id INT PRIMARY KEY",
      "PRIMARY KEY pedido_id AND producto_id",
      "CONSTRAINT pk PRIMARY KEY (pedido_id) AND PRIMARY KEY (producto_id)"
    ],
    "correctAnswer": 0,
    "explanation": "Las claves primarias compuestas sólo pueden declararse a nivel de tabla especificando las columnas entre paréntesis delimitadas por comas: PRIMARY KEY (col1, col2)."
  },
  {
    "id": 17,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "RESTRICCIONES",
    "difficulty": "medium",
    "level": 3,
    "question": "¿Qué ocurre al evaluar una restricción CHECK cuando el valor provisto en la inserción es NULL?",
    "code": "CREATE TABLE empleados (\n    id INT PRIMARY KEY,\n    edad INT CHECK (edad >= 18)\n);",
    "options": [
      "La condición CHECK evalúa a UNKNOWN y permite la inserción (salvo que la columna sea también NOT NULL).",
      "Rechaza inmediatamente la inserción con un error de verificación.",
      "Convierte el valor NULL a 18 automáticamente.",
      "Asigna 0 y luego falla la restricción."
    ],
    "correctAnswer": 0,
    "explanation": "En la lógica tripartita de SQL (TRUE, FALSE, UNKNOWN), las restricciones CHECK solo rechazan la inserción si el resultado de la expresión es FALSE. Si es NULL, la comparación evalúa a UNKNOWN y se permite."
  },
  {
    "id": 18,
    "category": "PRIMARY_KEY",
    "categoryLabel": "PRIMARY KEY",
    "difficulty": "medium",
    "level": 3,
    "question": "¿Cuántas restricciones PRIMARY KEY se pueden definir en una sola tabla?",
    "code": "CREATE TABLE configuracion (...);",
    "options": [
      "Exactamente 1 como máximo por tabla.",
      "Tantas como columnas de tipo INT existan.",
      "Hasta 3 si son claves compuestas.",
      "Ilimitadas siempre que tengan nombres diferentes."
    ],
    "correctAnswer": 0,
    "explanation": "Cada tabla en un modelo relacional puede tener como máximo UNA sola restricción de Clave Primaria, aunque esta puede estar formada por una o múltiples columnas (compuesta)."
  },
  {
    "id": 19,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "RESTRICCIONES",
    "difficulty": "hard",
    "level": 3,
    "question": "Evalúa la validez DDL de la siguiente declaración de columna con múltiple restricción:",
    "code": "codigo VARCHAR(20) NOT NULL UNIQUE DEFAULT 'PENDIENTE'",
    "options": [
      "Es completamente válida: combina restricción de no nulidad, unicidad y un valor por defecto.",
      "Es inválida porque UNIQUE y NOT NULL no pueden combinarse en la misma columna.",
      "Es inválida porque DEFAULT solo se puede usar con valores numéricos.",
      "Es inválida porque falta especificar el nombre de la restricción con CONSTRAINT."
    ],
    "correctAnswer": 0,
    "explanation": "Es una declaración DDL estándar perfectamente válida. Una columna puede tener múltiples restricciones en su línea de definición separadas por espacios."
  },

  // --- LEVEL 4: FOREIGN KEY Y RELACIONES ---
  {
    "id": 20,
    "category": "FOREIGN_KEY",
    "categoryLabel": "FOREIGN KEY",
    "difficulty": "medium",
    "level": 4,
    "question": "Dadas las siguientes definiciones DDL, ¿cuál es la tabla PADRE y cuál es la tabla HIJA?",
    "code": "CREATE TABLE departamentos (\n    id INT PRIMARY KEY,\n    nombre VARCHAR(50)\n);\n\nCREATE TABLE empleados (\n    id INT PRIMARY KEY,\n    nombre VARCHAR(50),\n    dep_id INT REFERENCES departamentos(id)\n);",
    "options": [
      "'departamentos' es la tabla PADRE y 'empleados' es la tabla HIJA.",
      "'empleados' es la tabla PADRE y 'departamentos' es la tabla HIJA.",
      "Ambas son tablas padre independientes.",
      "No existe relación jerárquica entre estas dos tablas."
    ],
    "correctAnswer": 0,
    "explanation": "La tabla 'departamentos' contiene la Clave Primaria referenciada (PADRE). La tabla 'empleados' contiene la Clave Foránea (HIJA) que apunta a la clave primaria de la tabla padre."
  },
  {
    "id": 21,
    "category": "FOREIGN_KEY",
    "categoryLabel": "FOREIGN KEY",
    "difficulty": "medium",
    "level": 4,
    "question": "¿Qué ocurre si se intenta ejecutar un CREATE TABLE con una Foreign Key que hace referencia a una tabla que aún NO ha sido creada?",
    "code": "CREATE TABLE pedidos (\n    id INT PRIMARY KEY,\n    cliente_id INT REFERENCES clientes(id) -- 'clientes' aún no existe\n);",
    "options": [
      "Falla con un error de referencia indicando que la tabla o clave referenciada no existe.",
      "Crea automáticamente la tabla 'clientes' en segundo plano.",
      "Crea la tabla 'pedidos' suspendiendo la Foreign Key temporalmente.",
      "Convierte la Foreign Key en una columna normal sin restricción."
    ],
    "correctAnswer": 0,
    explanation: "El motor de base de datos valida la existencia del objeto relacional referenciado al momento de ejecutar la sentencia DDL. Si 'clientes' no existe, la sentencia falla."
  },
  {
    "id": 22,
    "category": "FOREIGN_KEY",
    "categoryLabel": "FOREIGN KEY",
    "difficulty": "hard",
    "level": 4,
    "question": "¿Identifica cuál de las siguientes cláusulas define correctamente una Foreign Key a nivel de tabla?",
    "code": "CREATE TABLE pagos (\n    id INT PRIMARY KEY,\n    factura_id INT,\n    monto DECIMAL(10,2),\n    -- ¿Cómo se define la FK a nivel de tabla?\n);",
    "options": [
      "FOREIGN KEY (factura_id) REFERENCES facturas(id)",
      "FOREIGN KEY factura_id TO facturas.id",
      "ADD FK (factura_id) LINK TO facturas(id)",
      "CONSTRAINT FK_PAGO REFERENCES facturas(factura_id)"
    ],
    "correctAnswer": 0,
    "explanation": "La sintaxis estándar DDL a nivel de tabla para una clave foránea es: FOREIGN KEY (columna_local) REFERENCES tabla_padre(columna_padre)."
  },
  {
    "id": 23,
    "category": "FOREIGN_KEY",
    "categoryLabel": "FOREIGN KEY",
    "difficulty": "medium",
    "level": 4,
    "question": "¿Qué requisito técnico debe cumplir la columna referenciada en la tabla PADRE por una Foreign Key?",
    "code": "REFERENCES tabla_padre(columna_referenciada)",
    "options": [
      "Debe ser una PRIMARY KEY o tener una restricción UNIQUE definida sobre ella.",
      "Debe tener exactamente el mismo nombre que la columna foránea.",
      "Debe ser obligatoriamente de tipo VARCHAR.",
      "Debe ser una columna que permita valores duplicados."
    ],
    "correctAnswer": 0,
    "explanation": "Para garantizar la integridad referencial, la columna de la tabla padre referenciada por una FK debe ser unívoca, es decir, poseer una restricción PRIMARY KEY o UNIQUE."
  },
  {
    "id": 24,
    "category": "FOREIGN_KEY",
    "categoryLabel": "FOREIGN KEY",
    "difficulty": "medium",
    "level": 4,
    "question": "¿Se puede insertar un valor NULL en una columna declarada como FOREIGN KEY?",
    "code": "CREATE TABLE proyectos (\n    id INT PRIMARY KEY,\n    lider_id INT REFERENCES empleados(id)\n);",
    "options": [
      "Sí, a menos que la columna también esté explícitamente declarada como NOT NULL.",
      "No, las claves foráneas prohíben absolutamente los valores NULL.",
      "Solo si la tabla padre tiene un registro con id = 0.",
      "Solo si se usa la cláusula ON DELETE CASCADE."
    ],
    "correctAnswer": 0,
    "explanation": "Una clave foránea permite valores NULL (indicando ausencia de relación) a menos que la definición de la columna incluya explícitamente la restricción NOT NULL."
  },

  // --- LEVEL 5: ACCIONES REFERENCIALES ---
  {
    "id": 25,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "ACCIONES REFERENCIALES",
    "difficulty": "medium",
    "level": 5,
    "question": "¿Qué ocurre con los registros de la tabla HIJA cuando se borra una fila en la tabla PADRE bajo la regla ON DELETE CASCADE?",
    "code": "FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE",
    "options": [
      "Se eliminan automáticamente todos los registros asociados en la tabla hija.",
      "Se colocan en NULL todas las claves foráneas de los registros asociados.",
      "El borrado en la tabla padre es bloqueado con un error de restricción.",
      "Los registros hijos se mueven a una tabla de archivo histórico."
    ],
    "correctAnswer": 0,
    "explanation": "ON DELETE CASCADE propaga automáticamente la eliminación: al borrar un registro padre, la base de datos elimina automáticamente todas las filas hijas asociadas."
  },
  {
    "id": 26,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "ACCIONES REFERENCIALES",
    "difficulty": "medium",
    "level": 5,
    "question": "¿Qué requisito debe cumplir la columna foránea para poder usar la regla ON DELETE SET NULL?",
    "code": "FOREIGN KEY (dep_id) REFERENCES departamentos(id) ON DELETE SET NULL",
    "options": [
      "La columna foránea dep_id NO debe ser NOT NULL (debe permitir valores nulos).",
      "La columna dep_id debe ser la clave primaria de la tabla hija.",
      "La columna dep_id debe tener una restricción CHECK positiva.",
      "La columna dep_id debe ser de tipo VARCHAR únicamente."
    ],
    "correctAnswer": 0,
    "explanation": "Si la columna foránea estuviera configurada como NOT NULL, intentar ejecutar SET NULL ante un borrado del padre provocaría un error de violación de nulidad."
  },
  {
    "id": 27,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "ACCIONES REFERENCIALES",
    "difficulty": "easy",
    "level": 5,
    "question": "¿Cuál es el comportamiento de la acción por defecto (RESTRICT / NO ACTION) ante un intento de eliminar un registro padre con hijos existentes?",
    "code": "FOREIGN KEY (categoria_id) REFERENCES categorias(id) -- Sin especificar ON DELETE",
    "options": [
      "Impide el borrado del registro en la tabla padre lanzando una excepción de integridad referencial.",
      "Borra en cascada los registros asociados en la tabla hija.",
      "Establece las referencias en la tabla hija a NULL.",
      "Elimina la restricción Foreign Key de la base de datos."
    ],
    "correctAnswer": 0,
    "explanation": "Por defecto (RESTRICT / NO ACTION), el motor prohíbe la eliminación o modificación de un registro padre si existen registros en tablas hijas vinculados a él."
  },
  {
    "id": 28,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "ACCIONES REFERENCIALES",
    "difficulty": "hard",
    "level": 5,
    "question": "Evalúa el efecto de la cláusula ON UPDATE CASCADE en la siguiente definición:",
    "code": "FOREIGN KEY (codigo_dep) REFERENCES departamentos(codigo) ON UPDATE CASCADE",
    "options": [
      "Si la clave primaria 'codigo' del departamento cambia, el nuevo valor se actualiza automáticamente en las filas hijas.",
      "Si cambia cualquier columna de la tabla hija, se actualiza la clave del departamento padre.",
      "Prohíbe modificar cualquier valor en la tabla padre.",
      "Elimina los registros hijos cuando se actualiza el registro padre."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE propaga los cambios de valor de la clave primaria referenciada del registro padre hacia las columnas foráneas de todas las filas hijas vinculadas."
  },
  {
    "id": 29,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "ACCIONES REFERENCIALES",
    "difficulty": "hard",
    "level": 5,
    "question": "¿Cuál es la diferencia entre ON DELETE SET DEFAULT y ON DELETE SET NULL?",
    "code": "-- Comparativa de reglas referenciales",
    "options": [
      "SET DEFAULT asigna el valor predeterminado configurado en la columna; SET NULL asigna NULL.",
      "SET DEFAULT elimina la fila hija; SET NULL la conserva sin cambios.",
      "SET DEFAULT sólo se aplica en actualizaciones; SET NULL en eliminaciones.",
      "No existe diferencia; ambas asignan NULL a la clave foránea."
    ],
    "correctAnswer": 0,
    "explanation": "SET DEFAULT asigna a la columna foránea el valor especificado en su cláusula DEFAULT al borrar la fila padre. SET NULL reemplaza la clave foránea con el valor NULL."
  },

  // --- LEVEL 6: CONSTRAINTS NOMBRADAS Y COMPUESTAS ---
  {
    "id": 30,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "medium",
    "level": 6,
    "question": "¿Por qué es highly recomendable asignar un nombre explícito a las restricciones utilizando la palabra clave CONSTRAINT?",
    "code": "CONSTRAINT chk_precio_positivo CHECK (precio > 0)",
    "options": [
      "Facilita la identificación del error en logs y permite eliminar o modificar la restricción mediante ALTER TABLE de forma precisa.",
      "Hace que las consultas SELECT se ejecuten 10 veces más rápido.",
      "Es un requisito obligatorio sin el cual el comando CREATE TABLE falla.",
      "Permite ignorar la restricción durante inserciones masivas."
    ],
    "correctAnswer": 0,
    "explanation": "Nombrar restricciones (ej. chk_precio_positivo) proporciona nombres claros en los mensajes de error y permite referenciarlas directamente en sentencias DDL como ALTER TABLE ... DROP CONSTRAINT."
  },
  {
    "id": 31,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente definición de tabla con clave primaria compuesta nombrada. ¿Qué filas serán rechazadas por duplicación?",
    "code": "CREATE TABLE inscripciones (\n    alumno_id INT,\n    curso_id INT,\n    gestion INT,\n    CONSTRAINT pk_inscripciones PRIMARY KEY (alumno_id, curso_id)\n);",
    "options": [
      "Cualquier fila que repita la misma combinación de (alumno_id, curso_id).",
      "Cualquier fila que repita el mismo alumno_id con diferente curso_id.",
      "Cualquier fila que repita el mismo curso_id con diferente alumno_id.",
      "Las filas que tengan gestion idéntico independientemente de los otros campos."
    ],
    "correctAnswer": 0,
    "explanation": "En una clave primaria compuesta (alumno_id, curso_id), la unicidad se exige para la combinación de ambas columnas. Se rechaza una fila si ya existe otra con la misma dupla de valores."
  },
  {
    "id": 32,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "medium",
    "level": 6,
    "question": "Examina la sintaxis DDL con restricciones nombradas. ¿Cuál es la restricción UNIQUE declarada a nivel de tabla?",
    "code": "CREATE TABLE cuentas (\n    id INT PRIMARY KEY,\n    numero_cuenta VARCHAR(20),\n    banco_id INT,\n    CONSTRAINT uk_cuenta_banco UNIQUE (numero_cuenta, banco_id)\n);",
    "options": [
      "uk_cuenta_banco garantiza que no existan dos cuentas con el mismo número en el mismo banco.",
      "uk_cuenta_banco prohíbe que el banco_id sea nulo.",
      "uk_cuenta_banco es la clave primaria de la tabla cuentas.",
      "uk_cuenta_banco elimina la tabla si se inserta un número duplicado."
    ],
    "correctAnswer": 0,
    "explanation": "CONSTRAINT uk_cuenta_banco UNIQUE (numero_cuenta, banco_id) establece una restricción de unicidad compuesta entre el número de cuenta y el identificador del banco."
  },
  {
    "id": 33,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 6,
    "question": "¿Cómo se nombra correctamente una Foreign Key a nivel de tabla usando la palabra clave CONSTRAINT?",
    "code": "CREATE TABLE envios (\n    id INT PRIMARY KEY,\n    pedido_id INT,\n    -- ¿Cómo se declara con nombre?\n);",
    "options": [
      "CONSTRAINT fk_envio_pedido FOREIGN KEY (pedido_id) REFERENCES pedidos(id)",
      "FOREIGN KEY fk_envio_pedido (pedido_id) REFERENCES pedidos(id)",
      "ADD CONSTRAINT (pedido_id) REFERENCES pedidos(id) AS fk_envio_pedido",
      "CONSTRAINT FOREIGN KEY fk_envio_pedido (pedido_id) REFERENCES pedidos(id)"
    ],
    "correctAnswer": 0,
    "explanation": "La sintaxis formal para nombrar cualquier restricción en DDL es: CONSTRAINT nombre_restriccion TIPO_RESTRICCION (columnas) [opciones]."
  },

  // --- LEVEL 7: ALTER TABLE ---
  {
    "id": 34,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "medium",
    "level": 7,
    "question": "¿Cuál es la sintaxis SQL estándar para agregar una nueva columna 'telefono' a una tabla existente 'clientes'?",
    "code": "-- Sentencia DDL para modificar estructura de tabla",
    "options": [
      "ALTER TABLE clientes ADD COLUMN telefono VARCHAR(20);",
      "UPDATE TABLE clientes ADD telefono VARCHAR(20);",
      "INSERT COLUMN telefono VARCHAR(20) INTO clientes;",
      "MODIFY TABLE clientes INSERT COLUMN telefono VARCHAR(20);"
    ],
    "correctAnswer": 0,
    "explanation": "Para añadir una nueva columna a una tabla existente se utiliza la cláusula DDL ALTER TABLE nombre_tabla ADD [COLUMN] nombre_columna TIPO_DATO."
  },
  {
    "id": 35,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "medium",
    "level": 7,
    "question": "¿Cómo se elimina una restricción nombrada 'fk_usuarios_rol' de una tabla 'usuarios'?",
    "code": "-- Sentencia DDL para borrar restricción existente",
    "options": [
      "ALTER TABLE usuarios DROP CONSTRAINT fk_usuarios_rol;",
      "DELETE CONSTRAINT fk_usuarios_rol FROM usuarios;",
      "REMOVE FOREIGN KEY fk_usuarios_rol FROM usuarios;",
      "ALTER TABLE usuarios DELETE CONSTRAINT fk_usuarios_rol;"
    ],
    "correctAnswer": 0,
    "explanation": "En la mayoría de los RDBMS estándar SQL, una restricción nombrada existente se elimina mediante: ALTER TABLE nombre_tabla DROP CONSTRAINT nombre_restriccion."
  },
  {
    "id": 36,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 7,
    "question": "¿Cuál de las siguientes sentencias permite agregar una Foreign Key a una tabla ya existente?",
    "code": "-- Agregar restricción referencial a 'pedidos'",
    "options": [
      "ALTER TABLE pedidos ADD CONSTRAINT fk_pedidos_cliente FOREIGN KEY (cliente_id) REFERENCES clientes(id);",
      "UPDATE TABLE pedidos ADD FOREIGN KEY (cliente_id) REFERENCES clientes(id);",
      "ALTER TABLE pedidos INSERT FOREIGN KEY (cliente_id) REFERENCES clientes(id);",
      "CREATE FOREIGN KEY fk_pedidos_cliente ON pedidos(cliente_id) REFERENCES clientes(id);"
    ],
    "correctAnswer": 0,
    "explanation": "Para añadir una clave foránea a una tabla existente se utiliza: ALTER TABLE tabla ADD CONSTRAINT nombre_fk FOREIGN KEY (columna) REFERENCES tabla_padre(col_padre)."
  },
  {
    "id": 37,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 7,
    "question": "Se ejecuta la sentencia 'ALTER TABLE productos DROP COLUMN stock;'. ¿Qué sucede con los datos existentes en dicha columna?",
    "code": "ALTER TABLE productos DROP COLUMN stock;",
    "options": [
      "La columna 'stock' y todos sus datos almacenados son eliminados permanentemente del esquema.",
      "La columna se oculta pero los datos se pueden recuperar con UN-DROP.",
      "Se borra la columna únicamente si no contenía ningún valor.",
      "Los datos se transfieren automáticamente a una tabla temporal de respaldo."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN elimina irreversiblemente la columna especificada junto con todos los valores almacenados en ella para todas las filas."
  },
  {
    "id": 38,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 7,
    "question": "¿Qué precaución o requisito se debe cumplir al modificar el tipo de dato de una columna de VARCHAR(100) a VARCHAR(20) en una tabla con datos?",
    "code": "ALTER TABLE clientes ALTER COLUMN codigo TYPE VARCHAR(20);",
    "options": [
      "Ningún registro existente en la tabla puede superar los 20 caracteres de longitud, o de lo contrario el comando fallará.",
      "La tabla debe estar completamente vacía sin ningún dato.",
      "Es obligatorio eliminar la clave primaria antes de alterar el tipo de dato.",
      "Los valores de más de 20 caracteres se truncan silenciosamente sin aviso."
    ],
    "correctAnswer": 0,
    "explanation": "Reducir la longitud de un tipo de columna de texto provocará un error de conversión si existen registros cuyo contenido sobrepase el nuevo límite de tamaño."
  },

  // --- LEVEL 8: DROP Y DEPENDENCIAS ---
  {
    "id": 39,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP & DEPENDENCIAS",
    "difficulty": "hard",
    "level": 8,
    "question": "Se tienen tres tablas relacionadas: 'paises' (padre), 'provincias' (hija de paises) y 'ciudades' (hija de provincias). ¿En qué orden deben eliminarse (DROP TABLE) para no violar restricciones de FK?",
    "code": "-- Dependencia: ciudades -> provincias -> paises",
    "options": [
      "ciudades, luego provincias, y finalmente paises.",
      "paises, luego provincias, y finalmente ciudades.",
      "provincias, luego ciudades, y finalmente paises.",
      "El orden de eliminación no tiene ninguna importancia en DDL."
    ],
    "correctAnswer": 0,
    "explanation": "Para evitar errores de integridad referencial, las tablas hijas (las que contienen las claves foráneas) deben eliminarse antes que las tablas padre a las cuales referencian."
  },
  {
    "id": 40,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP & DEPENDENCIAS",
    "difficulty": "hard",
    "level": 8,
    "question": "¿En qué orden correcto deben CREARSE las tablas 'paises', 'provincias' y 'ciudades' para que los CREATE TABLE no fallen por falta de referencias?",
    "code": "-- Jerarquía de dependencias relacionales",
    "options": [
      "paises primero, luego provincias, y finalmente ciudades.",
      "ciudades primero, luego provincias, y finalmente paises.",
      "provincias primero, luego paises, y finalmente ciudades.",
      "No importa el orden de creación en ningún motor de base de datos."
    ],
    "correctAnswer": 0,
    "explanation": "Las tablas padre deben crearse antes que las tablas hijas para que al definir las Foreign Keys en las tablas hijas, las tablas referenciadas ya existan en el esquema."
  },
  {
    "id": 41,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP & DEPENDENCIAS",
    "difficulty": "expert",
    "level": 8,
    "question": "Analiza la consecuencia de intentar ejecutar 'DROP TABLE clientes;' si la tabla 'pedidos' tiene una Foreign Key que la referenciaría:",
    "code": "-- 'pedidos' hace referencia a 'clientes'\nDROP TABLE clientes;",
    "options": [
      "La sentencia falla y rechaza la eliminación de la tabla 'clientes' debido a la dependencia referencial activa.",
      "Elimina 'clientes' y también elimina automáticamente la tabla 'pedidos'.",
      "Elimina 'clientes' dejando la Foreign Key de 'pedidos' apuntando a nada.",
      "Convierte la tabla 'clientes' en una vista automáticamente."
    ],
    "correctAnswer": 0,
    "explanation": "Por defecto (RESTRICT), el motor de base de datos prohíbe eliminar un objeto tabla si existen otros objetos o restricciones activas que dependen directamente de él."
  },
  {
    "id": 42,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP & DEPENDENCIAS",
    "difficulty": "expert",
    "level": 8,
    "question": "¿Qué efecto produce ejecutar 'DROP TABLE clientes CASCADE;' en motores de base de datos que soportan esa cláusula?",
    "code": "DROP TABLE clientes CASCADE;",
    "options": [
      "Elimina la tabla 'clientes' y automáticamente remueve las restricciones de Foreign Key dependientes en las tablas hijas.",
      "Elimina la tabla 'clientes' y todas las filas de todas las tablas de la base de datos.",
      "Borra sólo las filas de la tabla 'clientes' sin tocar la estructura.",
      "Es un comando inválido que siempre lanza error de sintaxis."
    ],
    "correctAnswer": 0,
    explanation: "La cláusula CASCADE en DROP TABLE obliga a la eliminación de la tabla seleccionada y deshace/elimina automáticamente todas las restricciones de clave foránea que apuntaban hacia ella."
  },

  // --- LEVEL 9: DDL DEBUGGER RETOS EXTREMOS ---
  {
    "id": 43,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 9,
    "question": "🐛 DDL DEBUGGER: Identifica el error sintáctico o conceptual en el siguiente script SQL:",
    "code": "CREATE TABLE proyectos (\n    id INT PRIMARY KEY,\n    presupuesto DECIMAL(10,2),\n    CONSTRAINT chk_presupuesto CHECK presupuesto > 0 -- Falla aquí\n);",
    "options": [
      "La expresión de la restricción CHECK debe estar obligatoriamente encerrada entre paréntesis: CHECK (presupuesto > 0).",
      "El nombre 'chk_presupuesto' no puede contener guiones bajos.",
      "DECIMAL(10,2) no admite restricciones de tipo CHECK.",
      "La palabra CONSTRAINT solo puede usarse con PRIMARY KEY."
    ],
    "correctAnswer": 0,
    explanation: "La cláusula CHECK requiere que la condición o expresión lógica evaluada esté delimitada por paréntesis obligatorios: CHECK (expresión)."
  },
  {
    "id": 44,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 9,
    "question": "🐛 DDL DEBUGGER: Encuentra la falla en la siguiente instrucción DDL de creación de tabla:",
    code: "CREATE TABLE usuarios (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    email VARCHAR(100),\n    PRIMARY KEY (email)\n);",
    "options": [
      "Se intentó declarar dos PRIMARY KEY en la misma tabla ('id' a nivel de columna y 'email' a nivel de tabla).",
      "AUTO_INCREMENT exige que la columna sea VARCHAR.",
      "VARCHAR(100) no se puede usar si existe una columna INT.",
      "Falta un punto y coma dentro del paréntesis final."
    ],
    "correctAnswer": 0,
    "explanation": "Una tabla sólo puede tener una Clave Primaria. Definir 'id INT PRIMARY KEY' y luego 'PRIMARY KEY (email)' causa un conflicto por doble declaración de clave primaria."
  },
  {
    "id": 45,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 9,
    "question": "🐛 DDL DEBUGGER: ¿Por qué fallará este script DDL al ejecutarse en un motor SQL estándar?",
    "code": "CREATE TABLE ventas (\n    id INT PRIMARY KEY,\n    monto DECIMAL(10,2) DEFAULT 'CIEN'\n);",
    "options": [
      "Incompatibilidad de tipos: Se intenta asignar una cadena de texto 'CIEN' como valor por defecto de una columna numérica DECIMAL.",
      "DEFAULT solo se permite en columnas de tipo TIMESTAMP.",
      "El valor por defecto de DECIMAL debe llevar paréntesis obligatorios.",
      "La columna 'id' no puede ser PRIMARY KEY si 'monto' tiene un DEFAULT."
    ],
    "correctAnswer": 0,
    "explanation": "El valor especificado en la cláusula DEFAULT debe ser compatible con el tipo de dato de la columna. Asignar 'CIEN' a un DECIMAL causa un error de conversión de tipos."
  },
  {
    "id": 46,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 9,
    "question": "🐛 DDL DEBUGGER: Analiza la siguiente instrucción DDL y detecta el error en la restricción nombrada:",
    "code": "CREATE TABLE vehiculos (\n    vin VARCHAR(17) PRIMARY KEY,\n    modelo VARCHAR(50),\n    CONSTRAINT vin UNIQUE (vin)\n);",
    "options": [
      "El nombre de la restricción 'vin' duplica el nombre de la columna 'vin', lo cual puede causar conflictos de identificadores en el esquema.",
      "La restricción UNIQUE no acepta columnas de tipo VARCHAR.",
      "No se puede usar la palabra CONSTRAINT en columnas que ya son PRIMARY KEY.",
      "PRIMARY KEY deshabilita las restricciones de tipo UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "Asignar a una restricción el mismo nombre exacto que una columna de la tabla produce ambigüedades y errores en muchos motores de bases de datos que requieren identificadores únicos dentro del espacio de nombres de la tabla."
  },
  {
    "id": 47,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 9,
    "question": "🐛 DDL DEBUGGER: Analiza este intento de modificación DDL mediante ALTER TABLE:",
    "code": "ALTER TABLE empleados ADD CONSTRAINT CHECK (salario > 0);",
    "options": [
      "Al usar la sintaxis ADD CONSTRAINT se debe proveer explícitamente el nombre de la restricción antes de la palabra CHECK.",
      "ALTER TABLE no permite agregar restricciones CHECK después de crear la tabla.",
      "La palabra ADD debe ser reemplazada por INSERT.",
      "Falta indicar la columna en la que se aplicará la restricción entre comillas."
    ],
    "correctAnswer": 0,
    "explanation": "Si se incluye el término 'CONSTRAINT', la sintaxis exige la presencia de un identificador de nombre (ej: ADD CONSTRAINT chk_salario CHECK (salario > 0)). Para omitir el nombre debe usarse directamente 'ADD CHECK (salario > 0)'."
  },
  {
    "id": 48,
    "category": "EXECUTION_ORDER",
    "categoryLabel": "ORDEN DE EJECUCIÓN",
    "difficulty": "expert",
    "level": 9,
    "question": "🎯 RETO DDL: Se requiere diseñar el esquema para un sistema bancario con 'clientes' y 'cuentas'. ¿Cuál de los siguientes scripts es 100% libre de errores de ejecución?",
    "code": "-- Opciones de scripts SQL DDL completos",
    "options": [
      "CREATE TABLE clientes (id INT PRIMARY KEY, nombre VARCHAR(100));\nCREATE TABLE cuentas (id INT PRIMARY KEY, cliente_id INT REFERENCES clientes(id));",
      "CREATE TABLE cuentas (id INT PRIMARY KEY, cliente_id INT REFERENCES clientes(id));\nCREATE TABLE clientes (id INT PRIMARY KEY, nombre VARCHAR(100));",
      "CREATE TABLE clientes (id INT PRIMARY KEY, nombre VARCHAR(100));\nCREATE TABLE cuentas (id INT PRIMARY KEY, cliente_id INT PRIMARY KEY REFERENCES clientes(id));",
      "CREATE TABLE clientes (id INT PRIMARY KEY, cliente_id INT REFERENCES cuentas(id));\nCREATE TABLE cuentas (id INT PRIMARY KEY);"
    ],
    "correctAnswer": 0,
    "explanation": "La tabla 'clientes' debe crearse en primer lugar para que la clave primaria 'clientes(id)' esté disponible cuando 'cuentas' defina su clave foránea apuntando a ella."
  }
];
