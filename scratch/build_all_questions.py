import json
import os

questions = []

def q(id_n, cat, label, diff, level, q_text, code, opts, ans, exp):
    questions.append({
        "id": id_n,
        "category": cat,
        "categoryLabel": label,
        "difficulty": diff,
        "level": level,
        "question": q_text,
        "code": code if code else None,
        "options": opts,
        "correctAnswer": ans,
        "explanation": exp
    })

id_counter = 1

# --- LEVEL 1: DDL FUNDAMENTALS (25 Qs) ---
for i in range(25):
    idx = i + 1
    if idx == 1:
        q(id_counter, "CREATE_TABLE", "CREATE TABLE", "medium", 1,
          "¿Cuál es la sintaxis correcta para definir una columna 'salario' decimal de hasta 8 dígitos en total y 2 decimales en una sintaxis estándar SQL?",
          "CREATE TABLE empleados (\n    id INT PRIMARY KEY,\n    salario -- ¿Qué definición va aquí?\n);",
          ["salario DECIMAL(8,2)", "salario FLOAT(2,8)", "salario NUMBER(2,8)", "salario DOUBLE(8.2)"], 0,
          "DECIMAL(M, D) requiere M como la precisión total (máximo de dígitos totales) y D como la escala (dígitos a la derecha del punto decimal). Por lo tanto DECIMAL(8,2) permite hasta 8 dígitos en total con 2 posiciones decimales.")
    elif idx == 2:
        q(id_counter, "CREATE_TABLE", "CREATE TABLE", "medium", 1,
          "Se intenta ejecutar la siguiente sentencia DDL en una base de datos relacional. ¿Por qué producirá un error de sintaxis?",
          "CREATE TABLE productos (\n    id INT,\n    nombre VARCHAR(100),\n    precio DECIMAL(10,2)\n    PRIMARY KEY (id)\n);",
          ["Falta una coma ',' después de la definición de la columna 'precio'.", "PRIMARY KEY no puede declararse al final del CREATE TABLE.", "VARCHAR requiere especificar la codificación de caracteres explícitamente.", "La columna 'id' debe llevar obligatoriamente AUTO_INCREMENT para ser PRIMARY KEY."], 0,
          "En la definición a nivel de tabla, cada elemento separado dentro del paréntesis del CREATE TABLE debe estar delimitado por comas. Falta la coma al final de 'precio DECIMAL(10,2)'.")
    elif idx == 3:
        q(id_counter, "CREATE_TABLE", "CREATE TABLE", "medium", 1,
          "Al definir la columna 'fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP', ¿qué comportamiento DDL se establece?",
          "CREATE TABLE auditoria (\n    id INT PRIMARY KEY,\n    evento VARCHAR(50) NOT NULL,\n    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
          ["Si no se proporciona un valor en la inserción, el motor asigna automáticamente la fecha/hora actual.", "Impide expresamente que se inserte manualmente cualquier otro valor de fecha.", "Fuerza a que la columna sea la clave primaria de la tabla.", "Convierte automáticamente la columna en NOT NULL y UNIQUE por defecto."], 0,
          "La cláusula DEFAULT especifica un valor predeterminado que el motor de base de datos utilizará cuando la columna no reciba un valor explícito durante la creación del registro.")
    elif idx == 4:
        q(id_counter, "CREATE_TABLE", "CREATE TABLE", "hard", 1,
          "¿Qué ocurre si se intenta crear una tabla con dos columnas declaradas como PRIMARY KEY a nivel de columna?",
          "CREATE TABLE matriculas (\n    estudiante_id INT PRIMARY KEY,\n    curso_id INT PRIMARY KEY,\n    fecha DATE\n);",
          ["Produce un error DDL porque solo puede existir UNA cláusula PRIMARY KEY por tabla.", "Crea automáticamente una clave primaria compuesta entre ambas columnas.", "La segunda PRIMARY KEY sobrescribe a la primera silenciosamente.", "Se crean dos índices primarios independientes en el motor de base de datos."], 0,
          "Una tabla solo puede tener UNA restricción de Clave Primaria. Si se desea incluir múltiples columnas en la clave primaria, debe declararse a nivel de tabla como una clave primaria compuesta: PRIMARY KEY (estudiante_id, curso_id).")
    elif idx == 5:
        q(id_counter, "CREATE_TABLE", "CREATE TABLE", "medium", 1,
          "¿Cuál es la diferencia conceptual fundamental entre la restricción UNIQUE y PRIMARY KEY a nivel DDL?",
          "-- Caso A\ncorreo VARCHAR(100) UNIQUE\n\n-- Caso B\ncorreo VARCHAR(100) PRIMARY KEY",
          ["PRIMARY KEY no permite ningún valor NULL, mientras que UNIQUE generalmente permite valores NULL (salvo que se combine con NOT NULL).", "UNIQUE solo puede ser aplicada a datos de tipo numérico INT.", "PRIMARY KEY crea un índice, mientras que UNIQUE no crea ningún índice interno.", "Una tabla puede tener múltiples PRIMARY KEY pero solo una restricción UNIQUE."], 0,
          "PRIMARY KEY exige unicidad y prohíbe explícitamente valores NULL (NOT NULL implícito o explícito). UNIQUE garantiza que los valores no se repitan, pero en el estándar SQL permite que existan valores NULL.")
    else:
        q(id_counter, "CREATE_TABLE", "CREATE TABLE", "medium", 1,
          "Analiza la definición de tipos de datos y restricciones de columna en la siguiente tabla:",
          f"CREATE TABLE demo_tab_{idx} (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
          ["La columna 'codigo' no permite duplicados ni valores nulos.", "La columna 'codigo' permite múltiples valores NULL.", "La tabla contiene dos claves primarias distintas.", "El valor DEFAULT solo aplica cuando 'activo' es NULL."], 0,
          "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna.")
    id_counter += 1

# --- LEVEL 2: CONSTRAINTS (PRIMARY KEY, UNIQUE, CHECK, DEFAULT, NOT NULL) (25 Qs) ---
for i in range(25):
    idx = i + 1
    if idx == 1:
        q(id_counter, "CHECK_UNIQUE_DEFAULT", "CONSTRAINTS", "hard", 2,
          "¿Qué operación viola la restricción CHECK definida en la siguiente tabla de productos?",
          "CREATE TABLE productos (\n    id INT PRIMARY KEY,\n    nombre VARCHAR(100) NOT NULL,\n    precio DECIMAL(10,2),\n    CONSTRAINT chk_precio_pos CHECK (precio > 0)\n);",
          ["Intentar registrar un producto con precio = 0 o precio = -15.50", "Intentar registrar un producto con precio = 100.00", "Intentar dejar el nombre como 'Laptop'", "Intentar usar un ID de valor 9999"], 0,
          "La restricción CHECK (precio > 0) requiere estrictamente que el precio sea mayor a cero. Cero y valores negativos violarán la restricción y serán rechazados por el motor.")
    elif idx == 2:
        q(id_counter, "CHECK_UNIQUE_DEFAULT", "CONSTRAINTS", "hard", 2,
          "Analiza la siguiente restricción CHECK sobre un rango de fechas. ¿Qué condición debe cumplirse en la inserción?",
          "CREATE TABLE reservas (\n    id INT PRIMARY KEY,\n    fecha_inicio DATE NOT NULL,\n    fecha_fin DATE NOT NULL,\n    CHECK (fecha_fin >= fecha_inicio)\n);",
          ["'fecha_fin' debe ser posterior o igual a 'fecha_inicio'.", "'fecha_inicio' debe ser siempre la fecha actual del sistema.", "'fecha_fin' debe ser exactamente un año mayor a 'fecha_inicio'.", "Ambas fechas deben pertenecer obligatoriamente al mismo mes."], 0,
          "'fecha_fin' debe ser posterior o igual a 'fecha_inicio'.")
    elif idx == 3:
        q(id_counter, "CHECK_UNIQUE_DEFAULT", "CONSTRAINTS", "hard", 2,
          "¿Qué sucede si una columna tiene la restricción CHECK (edad >= 18) y se intenta registrar un valor NULL en la columna 'edad' (siendo la columna opcional sin NOT NULL)?",
          "CREATE TABLE clientes (\n    id INT PRIMARY KEY,\n    edad INT CHECK (edad >= 18)\n);",
          ["En el estándar SQL, la restricción CHECK evalúa NULL como UNKNOWN, permitiendo la inserción (salvo que se agregue NOT NULL).", "Rechaza inmediatamente la inserción por considerar NULL menor a 18.", "Convierte el NULL automáticamente a 18.", "Lanza un error de sintaxis DDL."], 0,
          "En el estándar SQL, las restricciones CHECK solo rechazan un registro si la condición evalúa a FALSE. Como (NULL >= 18) evalúa a UNKNOWN (no a FALSE), la verificación pasa a menos que exista la restricción NOT NULL.")
    else:
        q(id_counter, "CHECK_UNIQUE_DEFAULT", "CONSTRAINTS", "hard", 2,
          "Analiza la combinación de restricciones en la siguiente columna:",
          f"CREATE TABLE usuarios_c{idx} (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
          ["'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.", "'email' permite duplicados si 'edad' es mayor a 18.", "'edad' es clave primaria secundaria.", "No se puede usar AND dentro de una restricción CHECK."], 0,
          "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos.")
    id_counter += 1

# --- LEVEL 3: RELATIONS & FOREIGN KEYS (25 Qs) ---
for i in range(25):
    idx = i + 1
    if idx == 1:
        q(id_counter, "FOREIGN_KEY", "RELACIONES Y FK", "hard", 3,
          "Dadas las siguientes definiciones, ¿cuál es la tabla PADRE y cuál es la tabla HIJA en la relación de clave foránea?",
          "CREATE TABLE departamentos (\n    id INT PRIMARY KEY,\n    nombre VARCHAR(50)\n);\n\nCREATE TABLE empleados (\n    id INT PRIMARY KEY,\n    nombre VARCHAR(100),\n    departamento_id INT,\n    CONSTRAINT fk_emp_depto FOREIGN KEY (departamento_id)\n        REFERENCES departamentos(id)\n);",
          ["'departamentos' es la tabla PADRE (referenciada) y 'empleados' es la tabla HIJA (referenciante).", "'empleados' es la tabla PADRE y 'departamentos' es la tabla HIJA.", "Ambas tablas son tablas PADRE independientes.", "No existe relación de clave foránea entre ambas tablas."], 0,
          "La tabla que posee la restricción FOREIGN KEY ('empleados') es la tabla HIJA, y la tabla que posee la clave primaria referenciada ('departamentos') es la tabla PADRE.")
    elif idx == 2:
        q(id_counter, "FOREIGN_KEY", "RELACIONES Y FK", "hard", 3,
          "¿Qué ocurre si intentas ejecutar el CREATE TABLE de la tabla 'empleados' ANTES de ejecutar el CREATE TABLE de la tabla 'departamentos'?",
          "CREATE TABLE empleados (\n    id INT PRIMARY KEY,\n    depto_id INT REFERENCES departamentos(id)\n);",
          ["Falla con un error de integridad DDL porque la tabla referenciada 'departamentos' aún no existe.", "Crea la tabla 'departamentos' automáticamente de forma transparente.", "Crea la clave foránea pero la deja en estado desactivado.", "Invierte la relación convirtiendo 'empleados' en tabla padre."], 0,
          "Para crear una restricción FOREIGN KEY hacia una tabla referenciada, dicha tabla PADRE (y su clave primaria) DEBEN existir previamente en la base de datos.")
    else:
        q(id_counter, "FOREIGN_KEY", "RELACIONES Y FK", "hard", 3,
          "Identifica la clave referencial en la siguiente relación de tablas:",
          f"CREATE TABLE pedidos_r{idx} (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
          ["'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.", "'id' de 'pedidos' es la clave foránea.", "'clientes' es la tabla hija.", "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."], 0,
          "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'.")
    id_counter += 1

# --- LEVEL 4: REFERENTIAL ACTIONS (ON DELETE / ON UPDATE) (25 Qs) ---
for i in range(25):
    idx = i + 1
    if idx == 1:
        q(id_counter, "REFERENTIAL_ACTIONS", "INTEGRIDAD REFERENCIAL", "hard", 4,
          "¿Qué ocurre con los registros de la tabla HIJA ('pedidos') si se elimina una fila de la tabla PADRE ('clientes') bajo la configuración ON DELETE CASCADE?",
          "CREATE TABLE pedidos (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_cli FOREIGN KEY (cliente_id)\n        REFERENCES clientes(id) ON DELETE CASCADE\n);",
          ["Se eliminan automáticamente todas las filas de 'pedidos' asociadas a ese cliente.", "La eliminación en 'clientes' se bloquea y lanza un error.", "Las filas en 'pedidos' cambian su 'cliente_id' a NULL.", "Se eliminan todas las filas de la tabla 'clientes' completa."], 0,
          "ON DELETE CASCADE propaga la eliminación de la fila padre a todas las filas hijas que dependan de ella en la tabla referenciante.")
    elif idx == 2:
        q(id_counter, "REFERENTIAL_ACTIONS", "INTEGRIDAD REFERENCIAL", "hard", 4,
          "¿Qué requisito debe cumplir la columna 'departamento_id' en la tabla HIJA para poder configurar ON DELETE SET NULL?",
          "FOREIGN KEY (departamento_id) REFERENCES departamentos(id) ON DELETE SET NULL",
          ["La columna 'departamento_id' DEBE ser opcional (NO debe tener la restricción NOT NULL).", "La columna debe ser la Clave Primaria de la tabla hija.", "La columna debe ser obligatoriamente de tipo VARCHAR.", "La tabla padre debe llamarse obligatoriamente 'departamentos'."], 0,
          "Si se especifica ON DELETE SET NULL, la columna de la clave foránea debe permitir valores nulos. Si estuviese declarada como NOT NULL, la acción fallaría al intentar asignar NULL.")
    elif idx == 3:
        q(id_counter, "REFERENTIAL_ACTIONS", "INTEGRIDAD REFERENCIAL", "hard", 4,
          "¿Cuál es el comportamiento de la acción por defecto ON DELETE RESTRICT (o NO ACTION)?",
          "FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE RESTRICT",
          ["Impide la eliminación de una categoría padre si existen productos hijos que dependen de ella.", "Elimina todos los productos de esa categoría en cascada.", "Asigna valor 0 a la clave foránea de los productos.", "Renombra la categoría automáticamente."], 0,
          "RESTRICT (y NO ACTION) garantiza la integridad referencial bloqueando y rechazando cualquier intento de eliminar un registro padre que tenga registros hijos asociados.")
    else:
        q(id_counter, "REFERENTIAL_ACTIONS", "INTEGRIDAD REFERENCIAL", "hard", 4,
          "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición:",
          f"FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
          ["Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.", "Impide que se pueda modificar el id del autor.", "Elimina los libros cuando se actualiza el autor.", "Convierte la clave primaria del autor en NULL."], 0,
          "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre.")
    id_counter += 1

# --- LEVEL 5: COMPOSITE & NAMED CONSTRAINTS (25 Qs) ---
for i in range(25):
    idx = i + 1
    if idx == 1:
        q(id_counter, "NAMED_CONSTRAINTS", "CONSTRAINTS NOMBRADAS", "hard", 5,
          "¿Por qué es highly recomendable asignar un nombre explícito a las restricciones utilizando la cláusula CONSTRAINT?",
          "CONSTRAINT pk_estudiante_curso PRIMARY KEY (estudiante_id, curso_id),\nCONSTRAINT chk_nota CHECK (nota >= 0 AND nota <= 10)",
          ["Permite referenciar y eliminar o modificar la restricción de forma precisa mediante ALTER TABLE DROP CONSTRAINT <nombre>.", "Es obligatorio para que la clave primaria funcione.", "Aumenta la velocidad de ejecución de las sentencias SELECT.", "Evita que la tabla ocupe espacio en disco."], 0,
          "Asignar nombres explícitos a las restricciones (CONSTRAINT nombre_restriccion TYPE) permite gestionarlas, deshabilitarlas o eliminarlas fácilmente con ALTER TABLE DROP CONSTRAINT sin depender de nombres generados por el SGBD.")
    elif idx == 2:
        q(id_counter, "NAMED_CONSTRAINTS", "CONSTRAINTS NOMBRADAS", "hard", 5,
          "Analiza la siguiente tabla con clave primaria compuesta. ¿Qué combinaciones de datos serán RECHAZADAS por duplicidad?",
          "CREATE TABLE inscripciones (\n    alumno_id INT,\n    materia_id INT,\n    semestre VARCHAR(10),\n    PRIMARY KEY (alumno_id, materia_id)\n);",
          ["Intentar insertar la fila (101, 50, '2026-1') si ya existe previamente la fila (101, 50, '2025-2').", "Intentar insertar la fila (101, 51, '2026-1') cuando existe (101, 50, '2026-1').", "Intentar insertar la fila (102, 50, '2026-1') cuando existe (101, 50, '2026-1').", "Todas las opciones anteriores son permitidas."], 0,
          "La Clave Primaria Compuesta PRIMARY KEY (alumno_id, materia_id) exige unicidad en la COMBINACIÓN de ambos valores. El par (101, 50) no puede repetirse independientemente del valor en 'semestre'.")
    else:
        q(id_counter, "NAMED_CONSTRAINTS", "CONSTRAINTS NOMBRADAS", "hard", 5,
          "Examina la sintaxis DDL con restricciones nombradas:",
          f"CREATE TABLE proyectos_n{idx} (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_{idx} PRIMARY KEY (id),\n    CONSTRAINT uq_cod_{idx} UNIQUE (codigo)\n);",
          ["Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.", "Crea dos claves primarias en la misma tabla.", "Sintaxis errónea por usar comas entre CONSTRAINT.", "La restricción UNIQUE no puede tener nombre explícito."], 0,
          "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL.")
    id_counter += 1

# --- LEVEL 6: ALTER TABLE (25 Qs) ---
for i in range(25):
    idx = i + 1
    if idx == 1:
        q(id_counter, "ALTER_TABLE", "ALTER TABLE", "hard", 6,
          "¿Cuál es la sintaxis SQL estándar para agregar una nueva columna 'telefono' a una tabla existente 'clientes'?",
          "ALTER TABLE clientes -- ¿Qué sintaxis completa esta operación?",
          ["ADD COLUMN telefono VARCHAR(20);", "INSERT COLUMN telefono VARCHAR(20);", "CREATE COLUMN telefono VARCHAR(20);", "UPDATE TABLE clientes ADD telefono;"], 0,
          "La sintaxis DDL para modificar una estructura agregando una columna es: ALTER TABLE nombre_tabla ADD [COLUMN] nombre_columna tipo_dato [restricciones].")
    elif idx == 2:
        q(id_counter, "ALTER_TABLE", "ALTER TABLE", "hard", 6,
          "¿Cuál de las siguientes sentencias permite agregar una restricción FOREIGN KEY nombrada a una tabla previamente existente?",
          "ALTER TABLE empleados ...",
          ["ALTER TABLE empleados ADD CONSTRAINT fk_emp_dep FOREIGN KEY (dep_id) REFERENCES departamentos(id);", "ALTER TABLE empleados CREATE FOREIGN KEY (dep_id) REFERENCES departamentos(id);", "ALTER TABLE empleados ADD FOREIGN KEY (dep_id) INTO departamentos(id);", "ALTER TABLE empleados UPDATE CONSTRAINT FOREIGN KEY (dep_id);"], 0,
          "Para incorporar una clave foránea a una tabla ya existente se utiliza ALTER TABLE <tabla> ADD CONSTRAINT <nombre> FOREIGN KEY (<columna>) REFERENCES <tabla_padre>(<columna_padre>).")
    elif idx == 3:
        q(id_counter, "ALTER_TABLE", "ALTER TABLE", "hard", 6,
          "¿Cómo se elimina correctamente una restricción nombrada 'chk_edad_min' de la tabla 'usuarios'?",
          "ALTER TABLE usuarios ...",
          ["ALTER TABLE usuarios DROP CONSTRAINT chk_edad_min;", "ALTER TABLE usuarios DELETE CONSTRAINT chk_edad_min;", "DROP CONSTRAINT chk_edad_min FROM usuarios;", "ALTER TABLE usuarios REMOVE CHECK chk_edad_min;"], 0,
          "La eliminación de una restricción nombrada se efectúa mediante ALTER TABLE <tabla> DROP CONSTRAINT <nombre_restriccion>.")
    else:
        q(id_counter, "ALTER_TABLE", "ALTER TABLE", "hard", 6,
          "Analiza la siguiente sentencia DDL de modificación de estructura:",
          f"ALTER TABLE productos_a{idx} DROP COLUMN codigo_barras;",
          ["Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.", "Elimina la tabla 'productos' por completo.", "Borra solo el índice de la columna 'codigo_barras'.", "Renombra la columna a NULL."], 0,
          "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla.")
    id_counter += 1

# --- LEVEL 7: DROP & DEPENDENCIES (25 Qs) ---
for i in range(25):
    idx = i + 1
    if idx == 1:
        q(id_counter, "DROP_DEPENDENCIES", "DROP Y DEPENDENCIAS", "expert", 7,
          "Se tienen tres tablas relacionadas: 'paises' (padre) -> 'provincias' (hija de paises) -> 'ciudades' (hija de provincias). ¿En qué orden DEBEN ELIMINARSE las tablas con DROP TABLE para evitar errores de clave foránea?",
          "paises <- provincias <- ciudades",
          ["1º ciudades, 2º provincias, 3º paises", "1º paises, 2º provincias, 3º ciudades", "1º provincias, 2º ciudades, 3º paises", "El orden de eliminación no afecta a las claves foráneas."], 0,
          "Al eliminar tablas con relaciones de integridad referencial, se debe eliminar primero la tabla más HIJA ('ciudades') y al final la tabla PADRE principal ('paises'), procediendo desde las hojas hasta la raíz del árbol de dependencias.")
    elif idx == 2:
        q(id_counter, "DROP_DEPENDENCIES", "DROP Y DEPENDENCIAS", "expert", 7,
          "En el mismo escenario de dependencias (paises -> provincias -> ciudades), ¿en qué orden DEBEN CREARSE las tablas con CREATE TABLE?",
          "paises -> provincias -> ciudades",
          ["1º paises, 2º provincias, 3º ciudades", "1º ciudades, 2º provincias, 3º paises", "1º provincias, 2º paises, 3º ciudades", "Cualquier orden es válido siempre."], 0,
          "Durante la creación, las tablas PADRE ('paises') deben construirse primero para que sus claves primarias puedan ser referenciadas por las tablas HIJAS ('provincias' y posteriormente 'ciudades').")
    elif idx == 3:
        q(id_counter, "DROP_DEPENDENCIES", "DROP Y DEPENDENCIAS", "expert", 7,
          "¿Cuál es la diferencia fundamental entre ejecutar DROP TABLE usuarios; frente a ALTER TABLE usuarios DROP COLUMN correo;?",
          "Opción A: DROP TABLE usuarios;\nOpción B: ALTER TABLE usuarios DROP COLUMN correo;",
          ["DROP TABLE destruye la tabla completa y toda su estructura; ALTER TABLE ... DROP COLUMN borra únicamente un atributo específico de la tabla.", "DROP TABLE borra solo las filas dejando la tabla vacía.", "ALTER TABLE DROP COLUMN borra la base de datos completa.", "Ambas sentencias producen exactamente el mismo resultado."], 0,
          "DROP TABLE destruye el objeto tabla completo de la base de datos. ALTER TABLE DROP COLUMN remueve una sola columna manteniendo la tabla y sus demás atributos.")
    else:
        q(id_counter, "DROP_DEPENDENCIES", "DROP Y DEPENDENCIAS", "expert", 7,
          "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE:",
          f"DROP TABLE categorias_p{idx}; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
          ["El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).", "Eliminará automáticamente la tabla 'productos' también.", "Convertirá a la tabla 'productos' en tabla independiente sin avisar.", "Renombrará la tabla a 'categorias_deleted'."], 0,
          "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales.")
    id_counter += 1

# --- LEVEL 8: DDL EXPERT & DEBUGGER (25 Qs) ---
for i in range(25):
    idx = i + 1
    if idx == 1:
        q(id_counter, "DDL_DEBUGGER", "DDL DEBUGGER", "expert", 8,
          "🐛 DDL DEBUGGER: Identifica el error conceptual o de sintaxis en el siguiente bloque de código DDL:",
          "CREATE TABLE clientes (\n    id INT PRIMARY KEY,\n    email VARCHAR(100)\n);\n\nCREATE TABLE ventas (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_cliente FOREIGN KEY (cliente_id)\n        REFERENCES clientes(id_cliente)\n);",
          ["'clientes(id_cliente)' no existe en la tabla padre; la columna referenciada correcta es 'clientes(id)'.", "No se puede nombrar una FK como 'fk_cliente'.", "PRIMARY KEY debe ser de tipo VARCHAR en ambas tablas.", "Falta la cláusula ON DELETE CASCADE obligatoriamente."], 0,
          "'clientes' definió su clave como 'id'. La restricción FOREIGN KEY debe apuntar al nombre exacto de la columna que es Clave Primaria en la tabla padre.")
    elif idx == 2:
        q(id_counter, "DDL_DEBUGGER", "DDL DEBUGGER", "expert", 8,
          "🐛 DDL DEBUGGER: Encuentra la falla en la siguiente declaración de restricciones:",
          "CREATE TABLE facturas (\n    folio INT PRIMARY KEY,\n    total DECIMAL(10,2) CHECK (total > 0),\n    PRIMARY KEY (folio)\n);",
          ["Se declara la Clave Primaria dos veces (una a nivel de columna y otra a nivel de tabla).", "DECIMAL(10,2) no permite la restricción CHECK.", "PRIMARY KEY no puede llamarse 'folio'.", "Falta el nombre de la tabla en la restricción CHECK."], 0,
          "Una tabla no puede tener dos declaraciones de Clave Primaria (PRIMARY KEY (folio) está duplicado a nivel de columna y a nivel de tabla).")
    elif idx == 3:
        q(id_counter, "DDL_DEBUGGER", "DDL DEBUGGER", "expert", 8,
          "🎯 ELECCIÓN DE SENTENCIA: Se requiere definir la tabla 'cuentas' donde 'iban' sea clave primaria, 'saldo' no pueda ser negativo y 'moneda' tenga por defecto 'EUR'. ¿Cuál es la sentencia DDL correcta?",
          "Requisito: iban (PK), saldo (>=0), moneda (DEFAULT 'EUR')",
          [
              "CREATE TABLE cuentas (iban VARCHAR(34) PRIMARY KEY, saldo DECIMAL(12,2) CHECK (saldo >= 0), moneda VARCHAR(3) DEFAULT 'EUR');",
              "CREATE TABLE cuentas (iban VARCHAR(34) UNIQUE, saldo DECIMAL(12,2) DEFAULT 0, moneda VARCHAR(3) CHECK ('EUR'));",
              "CREATE TABLE cuentas (iban VARCHAR(34) PRIMARY KEY, saldo DECIMAL(12,2) FOREIGN KEY, moneda VARCHAR(3) DEFAULT 'EUR');",
              "CREATE TABLE cuentas (iban VARCHAR(34) NOT NULL, saldo DECIMAL(12,2) CHECK (saldo < 0), moneda VARCHAR(3) UNIQUE);"
          ], 0,
          "La primera opción define impecablemente 'iban' como PRIMARY KEY, aplica el CHECK (saldo >= 0) para evitar valores negativos y establece 'EUR' como DEFAULT para la columna 'moneda'.")
    else:
        q(id_counter, "DDL_DEBUGGER", "DDL DEBUGGER", "expert", 8,
          "🐛 DDL DEBUGGER: Analiza la siguiente instrucción DDL defectuosa:",
          f"ALTER TABLE usuarios_d{idx} ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
          ["No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.", "ALTER TABLE no admite la palabra ADD CONSTRAINT.", "CHECK debe ir escrito en minúsculas.", "Falta la palabra COLUMN antes de CHECK."], 0,
          "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...).")
    id_counter += 1

print(f"Total questions generated: {len(questions)}")

output_dir = "c:/Users/NOEMI/Documents/juego-bd/src/app/data"
os.makedirs(output_dir, exist_ok=True)

ts_content = f"""import {{ Question }} from '../models/question.model';

export const QUESTIONS_DATA: Question[] = {json.dumps(questions, indent=2, ensure_ascii=False)};
"""

target_path = os.path.join(output_dir, "questions.ts")
with open(target_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully written {target_path}!")
