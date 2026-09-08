import json

# Data structure generator for 200 high quality DDL questions in Spanish
raw_questions = []

def add_q(id_num, category, cat_label, diff, level, question, code, options, correct_idx, explanation):
    raw_questions.append({
        "id": id_num,
        "category": category,
        "categoryLabel": cat_label,
        "difficulty": diff,
        "level": level,
        "question": question,
        "code": code if code else None,
        "options": options,
        "correctAnswer": correct_idx,
        "explanation": explanation
    })

# We create 200 comprehensive questions
# LEVEL 1: DDL FUNDAMENTALS (25 Qs)
# LEVEL 2: CONSTRAINTS (25 Qs)
# LEVEL 3: RELACIONES Y FK (25 Qs)
# LEVEL 4: REFERENTIAL ACTIONS (25 Qs)
# LEVEL 5: NAMED & COMPOSITE CONSTRAINTS (25 Qs)
# LEVEL 6: ALTER TABLE (25 Qs)
# LEVEL 7: DROP & DEPENDENCIES (25 Qs)
# LEVEL 8: DDL DEBUGGER & EXPERT (25 Qs)

# Total 200 Questions!

qid = 1

# LEVEL 1 - DDL FUNDAMENTALS (1-25)
l1_data = [
    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "¿Cuál de los siguientes tipos de datos SQL es el más adecuado para almacenar códigos alfanuméricos de longitud exacta de 10 caracteres (como un código ISO de producto)?",
     "CREATE TABLE productos (\n    id INT PRIMARY KEY,\n    codigo_iso -- ¿Qué tipo de dato conviene aquí?\n);",
     ["CHAR(10)", "VARCHAR(10)", "TEXT", "DECIMAL(10,0)"], 0,
     "CHAR(N) asigna siempre una longitud fija de N caracteres, lo cual es óptimo en rendimiento y almacenamiento cuando se conoce que los datos siempre tendrán exactamente esa longitud."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "¿Qué sucede si se intenta definir una tabla sin columnas dentro de la instrucción CREATE TABLE?",
     "CREATE TABLE vacia ();",
     ["El motor SQL devuelve un error de sintaxis DDL.", "Se crea una tabla con 0 columnas correctamente.", "Se genera automáticamente una columna implícita 'id'.", "La tabla se crea pero queda bloqueada en modo solo lectura."], 0,
     "El estándar SQL exige que la declaración CREATE TABLE contenga la definición de al menos una columna."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "¿Cuál es el efecto de utilizar la opción IF NOT EXISTS en una declaración CREATE TABLE?",
     "CREATE TABLE IF NOT EXISTS clientes (\n    id INT PRIMARY KEY\n);",
     ["Evita que la sentencia falle con un error si la tabla ya existe previamente en la base de datos.", "Asegura que las columnas de la tabla no contengan valores vacíos.", "Verifica que las claves foráneas referenciadas existan antes de la creación.", "Crea una tabla temporal que se destruye al cerrar la sesión."], 0,
     "IF NOT EXISTS previene que la ejecución lance una excepción o detenga un script DDL cuando la estructura de la tabla ya se encuentra registrada."),

    ("CREATE_TABLE", "CREATE TABLE", "hard", 1,
     "Analiza la siguiente definición. ¿Qué columna puede aceptar implícitamente valores NULL?",
     "CREATE TABLE empleados (\n    emp_id INT PRIMARY KEY,\n    rfc VARCHAR(13) UNIQUE,\n    nombre VARCHAR(100) NOT NULL,\n    fecha_ingreso DATE DEFAULT CURRENT_DATE\n);",
     ["La columna 'rfc'", "La columna 'emp_id'", "La columna 'nombre'", "Ninguna columna permite NULL"], 0,
     "A diferencia de PRIMARY KEY (que impone NOT NULL implícitamente), la restricción UNIQUE permite valores NULL a menos que se agregue explícitamente la cláusula NOT NULL a la columna."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "En la siguiente sentencia, ¿cuál es la función de la palabra reservada DEFAULT?",
     "CREATE TABLE ordenes (\n    id INT PRIMARY KEY,\n    estado VARCHAR(20) DEFAULT 'PENDIENTE'\n);",
     ["Define un valor predeterminado que asumirá la columna cuando no se especifique en un registro.", "Obliga a que solo se pueda insertar el valor 'PENDIENTE'.", "Crea una restricción CHECK que valida la palabra 'PENDIENTE'.", "Convierte automáticamente la columna en clave foránea."], 0,
     "La cláusula DEFAULT especifica el valor automático que se asignará si la sentencia de inserción omite dicha columna."),

    ("CREATE_TABLE", "CREATE TABLE", "hard", 1,
     "¿Por qué la siguiente instrucción CREATE TABLE lanzará un error en la mayoría de los SGBD relacionales estándar?",
     "CREATE TABLE datos (\n    id INT PRIMARY KEY,\n    valor VARCHAR(50) DEFAULT NULL NOT NULL\n);",
     ["DEFAULT NULL entra en contradicción directa con la restricción NOT NULL.", "No se puede combinar VARCHAR con NOT NULL.", "DEFAULT debe ser escrito antes de PRIMARY KEY únicamente.", "La columna 'valor' requiere una restricción CHECK obligatoria."], 0,
     "No se puede asignar como valor por defecto NULL (DEFAULT NULL) si al mismo tiempo se prohíbe que la columna acepte valores nulos (NOT NULL)."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "¿Qué tipo de dato SQL se debe emplear para almacenar valores numéricos exactos de moneda evadiendo errores de redondeo de punto flotante?",
     "CREATE TABLE finanzas (\n    id INT PRIMARY KEY,\n    monto -- ¿Qué tipo garantiza precisión exacta?\n);",
     ["DECIMAL (o NUMERIC)", "FLOAT", "DOUBLE PRECISION", "REAL"], 0,
     "DECIMAL y NUMERIC son tipos de dato de punto fijo que almacenan números exactos. FLOAT y DOUBLE son de punto flotante y sufren de pequeñas imprecisiones de redondeo binario."),

    ("CREATE_TABLE", "CREATE TABLE", "hard", 1,
     "¿Qué restricción DDL se aplica automáticamente a una columna definida como PRIMARY KEY?",
     "CREATE TABLE usuarios (\n    id INT PRIMARY KEY\n);",
     ["La restricción NOT NULL y la creación de un índice de unicidad.", "Únicamente la restricción CHECK.", "La restricción AUTO_INCREMENT obligatoria.", "La restricción FOREIGN KEY hacia la tabla del sistema."], 0,
     "Por especificación de la norma SQL, declarar una columna como PRIMARY KEY le otorga implícitamente la restricción NOT NULL e impone unicidad absoluta sobre la columna."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "¿Cuál de las siguientes opciones representa una definición válida de columna para almacenar valores de verdadero/falso?",
     "CREATE TABLE configuracion (\n    id INT PRIMARY KEY,\n    activo BOOLEAN DEFAULT TRUE\n);",
     ["Es completamente válida en el estándar SQL.", "Es inválida porque BOOLEAN no permite valores DEFAULT.", "Es inválida porque TRUE debe ser escrito entre comillas simples 'TRUE'.", "Requiere obligatoriamente una restricción CHECK (activo IN (0,1))."], 0,
     "La sintaxis es 100% estándar y correcta. El tipo BOOLEAN admite los literales TRUE, FALSE y NULL (salvo que sea NOT NULL)."),

    ("CREATE_TABLE", "CREATE TABLE", "hard", 1,
     "¿Qué ocurre si intentas crear dos tablas con el mismo nombre dentro del mismo esquema o base de datos?",
     "CREATE TABLE roles (id INT);\nCREATE TABLE roles (id INT, nombre VARCHAR(50));",
     ["El segundo CREATE TABLE falla con un error de objeto ya existente.", "La segunda tabla reemplaza automáticamente a la primera.", "Se fusionan las columnas de ambas definiciones.", "La primera tabla pasa a llamarse roles_1."], 0,
     "Los nombres de tabla deben ser únicos dentro de un mismo esquema de base de datos. Crear una tabla duplicada genera un error DDL de conflicto de nombre."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "¿Qué diferencia existe entre los tipos VARCHAR(50) y CHAR(50)?",
     "col_a CHAR(50)\ncol_b VARCHAR(50)",
     ["CHAR(50) siempre ocupa 50 caracteres (rellenando con espacios), VARCHAR(50) ocupa solo la longitud del texto almacenado.", "VARCHAR(50) no permite almacenar espacios en blanco.", "CHAR(50) es para números y VARCHAR(50) para letras.", "No existe ninguna diferencia, son sinónimos exactos."], 0,
     "CHAR es de longitud fija (rellena con espacios si el texto es menor). VARCHAR es de longitud variable y guarda solo los caracteres reales utilizados más los bytes de control de longitud."),

    ("CREATE_TABLE", "CREATE TABLE", "hard", 1,
     "Analiza la sentencia. ¿Cuál es el problema de diseño o de sintaxis DDL?",
     "CREATE TABLE bitacora (\n    id INT NOT NULL,\n    descripcion TEXT,\n    PRIMARY KEY (id, id)\n);",
     ["No se puede repetir la misma columna 'id' dos veces dentro de la definición de la PRIMARY KEY.", "PRIMARY KEY a nivel de tabla exige al menos 3 columnas distintas.", "TEXT no puede ser usado si existe una PRIMARY KEY en la tabla.", "La palabra NOT NULL es incompatible con PRIMARY KEY."], 0,
     "Una clave primaria compuesta requiere columnas distintas. Especificar la misma columna dos veces en PRIMARY KEY (id, id) es redundante e inválido."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "¿Qué representa el tipo de dato DATE en SQL?",
     "fecha_nacimiento DATE",
     ["Almacena únicamente año, mes y día (sin horas, minutos ni segundos).", "Almacena fecha y hora con precisión de milisegundos.", "Almacena únicamente la hora del día.", "Almacena una estampa de tiempo Unix en formato de número entero."], 0,
     "El tipo DATE estándar almacena exclusivamente la fecha en formato YYYY-MM-DD sin información horaria."),

    ("CREATE_TABLE", "CREATE TABLE", "hard", 1,
     "¿Qué sucede cuando se omite el tamaño en un tipo VARCHAR durante el CREATE TABLE en SGBDs como PostgreSQL vs MySQL?",
     "nombre VARCHAR",
     ["En PostgreSQL equivale a texto ilimitado, pero en MySQL produce un error de sintaxis por requerir (N).", "En todos los SGBD asigna automáticamente VARCHAR(1).", "Convierte automáticamente la columna en INT.", "Asigna siempre VARCHAR(255) por defecto."], 0,
     "El comportamiento depende del dialecto SGBD: en ANSI/PostgreSQL VARCHAR sin parámetro actúa como texto sin límite específico, mientras que en MySQL/MariaDB exige especificar la longitud (N)."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "En DDL, ¿cuál es el propósito de definir restricciones a nivel de columna frente a restricciones a nivel de tabla?",
     "-- Nivel columna: id INT PRIMARY KEY\n-- Nivel tabla: PRIMARY KEY (id)",
     ["Ambas son equivalentes para restricciones simples, pero las claves compuestas y restricciones multicolumna exigen definirse a nivel de tabla.", "Las de nivel de tabla se ejecutan más rápido que las de nivel de columna.", "Las de nivel de columna se borran automáticamente al reiniciar la base de datos.", "No se pueden usar restricciones a nivel de columna en SQL estándar."], 0,
     "Las restricciones de columna se aplican a una sola columna individualmente. Las restricciones a nivel de tabla permiten agrupar múltiples columnas (como claves primarias compuestas o claves foráneas compuestas)."),

    ("CREATE_TABLE", "CREATE TABLE", "hard", 1,
     "¿Por qué la siguiente definición de columna generará una objeción en una auditoría de base de datos?",
     "precio INT DEFAULT 'gratis'",
     ["Porque se intenta asignar una cadena de texto 'gratis' como valor por defecto a una columna de tipo numérico INT.", "Porque INT no permite la cláusula DEFAULT.", "Porque las comillas simples solo se usan en PRIMARY KEY.", "Porque 'gratis' debe estar en mayúsculas."], 0,
     "El tipo del valor por defecto (DEFAULT) debe coincidir con el tipo de dato definido para la columna (incompatibilidad de tipos de dato)."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "¿Qué permite garantizar la cláusula NOT NULL sobre una columna de una tabla?",
     "telefono VARCHAR(20) NOT NULL",
     ["Imposibilita que se registren filas donde esta columna no contenga un valor válido (impide valores NULL).", "Asegura que todos los teléfonos registrados sean diferentes entre sí.", "Crea una relación de clave foránea automática.", "Establece un valor '0000000000' por defecto."], 0,
     "NOT NULL es una restricción de integridad de dominio que prohíbe el almacenamiento del marcador de ausencia de valor (NULL)."),

    ("CREATE_TABLE", "CREATE TABLE", "hard", 1,
     "¿Qué sucede si se ejecuta un CREATE TABLE definiendo dos columnas con exactamente el mismo nombre?",
     "CREATE TABLE prueba (\n    codigo INT,\n    codigo VARCHAR(50)\n);",
     ["Falla con un error DDL por duplicación de nombre de columna dentro de la misma tabla.", "El motor une ambas columnas en un tipo compuesto.", "La segunda columna reemplaza a la primera silenciosamente.", "Se crean dos columnas llamadas 'codigo_1' y 'codigo_2'."], 0,
     "Todas las columnas pertenecientes a una misma tabla deben tener nombres únicos e inconfundibles."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "¿Cuál de las siguientes afirmaciones sobre el tipo BIGINT es correcta?",
     "id_super BIGINT PRIMARY KEY",
     ["Es un número entero de 64 bits (8 bytes) utilizado para rangos numéricos muy extensos.", "Es un tipo decimal con hasta 64 posiciones decimales.", "Es equivalente exacto a VARCHAR(64).", "No pertenece al estándar SQL."], 0,
     "BIGINT almacena enteros grandes de 8 bytes (desde aproximadamente -9x10^18 hasta 9x10^18)."),

    ("CREATE_TABLE", "CREATE TABLE", "hard", 1,
     "Analiza la siguiente sintaxis DDL. ¿Qué resultado produce?",
     "CREATE TABLE sesion (\n    token CHAR(36),\n    creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    PRIMARY KEY (token)\n);",
     ["Crea la tabla 'sesion' asignando 'token' como clave primaria y la fecha actual por defecto en 'creado'.", "Error de sintaxis por usar CHAR en vez de VARCHAR para la clave primaria.", "Error de sintaxis por colocar PRIMARY KEY a nivel de tabla para una sola columna.", "Falla porque TIMESTAMP requiere NOT NULL explícito."], 0,
     "La sintaxis es totalmente válida. Las restricciones de clave primaria de una sola columna también pueden declararse a nivel de tabla."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "¿Qué tipo de dato DDL se utiliza para almacenar cadenas de caracteres de longitud variable en SQL?",
     "nombre VARCHAR(100)",
     ["VARCHAR", "CHAR", "INTEGER", "BOOLEAN"], 0,
     "VARCHAR (Variable Character) está destinado a texto donde el número de caracteres varía en cada registro hasta un límite N."),

    ("CREATE_TABLE", "CREATE TABLE", "hard", 1,
     "¿Cuál es el propósito del parámetro 'scale' (escala) en la definición DECIMAL(precision, scale)?",
     "monto DECIMAL(12, 4)",
     ["Indica la cantidad exacta de dígitos reservados a la derecha del punto decimal.", "Indica la cantidad máxima de dígitos a la izquierda del punto decimal.", "Indica el tamaño en Megabytes del archivo en disco.", "Indica la cantidad de decimales que se deben redondear a cero."], 0,
     "En DECIMAL(P, S), P (precisión) es el número total de dígitos y S (escala) es el número de esos dígitos que estarán a la derecha del punto decimal."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "¿Qué sucede si no se especifica una PRIMARY KEY al crear una tabla en un SGBD relacional estándar?",
     "CREATE TABLE notas (\n    estudiante VARCHAR(50),\n    calificacion INT\n);",
     ["La tabla se crea sin clave primaria (aunque según las buenas prácticas de modelado relacional siempre debe incluirse una).", "El SGBD rechaza la ejecución y lanza un error fatal.", "El SGBD borra la tabla inmediatamente.", "Todas las columnas se convierten automáticamente en clave primaria."], 0,
     "SQL permite crear tablas sin clave primaria, aunque en diseño relacional formal se considera una mala práctica ya que las filas carecen de identificador único formal."),

    ("CREATE_TABLE", "CREATE TABLE", "hard", 1,
     "¿Qué diferencia existe entre DATETIME y TIMESTAMP en la mayoría de los motores SQL?",
     "fecha_1 DATETIME,\nfecha_2 TIMESTAMP",
     ["TIMESTAMP almacena el tiempo con respecto a UTC y ajusta según la zona horaria de la sesión, mientras que DATETIME almacena el valor literal sin zona horaria.", "DATETIME solo guarda horas y TIMESTAMP solo guarda fechas.", "TIMESTAMP ocupa siempre 64 bytes y DATETIME 2 bytes.", "DATETIME es un tipo exclusivo de Oracle y TIMESTAMP exclusivo de MySQL."], 0,
     "TIMESTAMP convierte el valor a UTC para almacenarlo y lo convierte de nuevo a la zona horaria local al consultarse; DATETIME guarda la fecha/hora exactamente como se introduce."),

    ("CREATE_TABLE", "CREATE TABLE", "medium", 1,
     "¿Qué restricción se viola si se intenta insertar una fila sin enviar un valor en una columna declarada como 'NOT NULL' sin 'DEFAULT'?",
     "columna_req INT NOT NULL",
     ["Restricción NOT NULL (Violación de valor nulo no permitido).", "Restricción CHECK.", "Restricción FOREIGN KEY.", "Restricción de tipo de dato implícito."], 0,
     "Al declarar NOT NULL y no disponer de un valor DEFAULT, la columna exige imperativamente recibir un valor que no sea NULL.")
]

for item in l1_data:
    add_q(qid, item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8])
    qid += 1

print(f"Added Level 1 questions. Total now: {len(raw_questions)}")
