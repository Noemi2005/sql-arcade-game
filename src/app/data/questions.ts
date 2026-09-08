import { Question } from '../models/question.model';

export const QUESTIONS_DATA: Question[] = [
  {
    "id": 1,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "¿Cuál es la sintaxis correcta para definir una columna 'salario' decimal de hasta 8 dígitos en total y 2 decimales en una sintaxis estándar SQL?",
    "code": "CREATE TABLE empleados (\n    id INT PRIMARY KEY,\n    salario -- ¿Qué definición va aquí?\n);",
    "options": [
      "salario DECIMAL(8,2)",
      "salario FLOAT(2,8)",
      "salario NUMBER(2,8)",
      "salario DOUBLE(8.2)"
    ],
    "correctAnswer": 0,
    "explanation": "DECIMAL(M, D) requiere M como la precisión total (máximo de dígitos totales) y D como la escala (dígitos a la derecha del punto decimal). Por lo tanto DECIMAL(8,2) permite hasta 8 dígitos en total con 2 posiciones decimales."
  },
  {
    "id": 2,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
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
    "difficulty": "medium",
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
    "difficulty": "hard",
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
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "¿Cuál es la diferencia conceptual fundamental entre la restricción UNIQUE y PRIMARY KEY a nivel DDL?",
    "code": "-- Caso A\ncorreo VARCHAR(100) UNIQUE\n\n-- Caso B\ncorreo VARCHAR(100) PRIMARY KEY",
    "options": [
      "PRIMARY KEY no permite ningún valor NULL, mientras que UNIQUE generalmente permite valores NULL (salvo que se combine con NOT NULL).",
      "UNIQUE solo puede ser aplicada a datos de tipo numérico INT.",
      "PRIMARY KEY crea un índice, mientras que UNIQUE no crea ningún índice interno.",
      "Una tabla puede tener múltiples PRIMARY KEY pero solo una restricción UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "PRIMARY KEY exige unicidad y prohíbe explícitamente valores NULL (NOT NULL implícito o explícito). UNIQUE garantiza que los valores no se repitan, pero en el estándar SQL permite que existan valores NULL."
  },
  {
    "id": 6,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 6 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #6.",
    "code": "CREATE TABLE demo_tab_6 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 7,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 7 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #7.",
    "code": "CREATE TABLE demo_tab_7 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 8,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 8 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #8.",
    "code": "CREATE TABLE demo_tab_8 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 9,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 9 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #9.",
    "code": "CREATE TABLE demo_tab_9 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 10,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 10 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #10.",
    "code": "CREATE TABLE demo_tab_10 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 11,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 11 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #11.",
    "code": "CREATE TABLE demo_tab_11 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 12,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 12 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #12.",
    "code": "CREATE TABLE demo_tab_12 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 13,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 13 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #13.",
    "code": "CREATE TABLE demo_tab_13 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 14,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 14 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #14.",
    "code": "CREATE TABLE demo_tab_14 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 15,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 15 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #15.",
    "code": "CREATE TABLE demo_tab_15 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 16,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 16 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #16.",
    "code": "CREATE TABLE demo_tab_16 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 17,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 17 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #17.",
    "code": "CREATE TABLE demo_tab_17 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 18,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 18 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #18.",
    "code": "CREATE TABLE demo_tab_18 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 19,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 19 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #19.",
    "code": "CREATE TABLE demo_tab_19 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 20,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 20 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #20.",
    "code": "CREATE TABLE demo_tab_20 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 21,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 21 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #21.",
    "code": "CREATE TABLE demo_tab_21 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 22,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 22 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #22.",
    "code": "CREATE TABLE demo_tab_22 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 23,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 23 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #23.",
    "code": "CREATE TABLE demo_tab_23 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 24,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 24 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #24.",
    "code": "CREATE TABLE demo_tab_24 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 25,
    "category": "CREATE_TABLE",
    "categoryLabel": "CREATE TABLE",
    "difficulty": "medium",
    "level": 1,
    "question": "Pregunta 25 sobre DDL Fundamental: Analiza la definición de tipos de datos y restricciones de columna en la tabla de demostración #25.",
    "code": "CREATE TABLE demo_tab_25 (\n    id INT PRIMARY KEY,\n    codigo VARCHAR(20) NOT NULL UNIQUE,\n    activo BOOLEAN DEFAULT TRUE\n);",
    "options": [
      "La columna 'codigo' no permite duplicados ni valores nulos.",
      "La columna 'codigo' permite múltiples valores NULL.",
      "La tabla contiene dos claves primarias distintas.",
      "El valor DEFAULT solo aplica cuando 'activo' es NULL."
    ],
    "correctAnswer": 0,
    "explanation": "Al combinar NOT NULL y UNIQUE en la columna 'codigo', se garantiza que no existan registros vacíos ni duplicados en esa columna."
  },
  {
    "id": 26,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "¿Qué operación viola la restricción CHECK definida en la siguiente tabla de productos?",
    "code": "CREATE TABLE productos (\n    id INT PRIMARY KEY,\n    nombre VARCHAR(100) NOT NULL,\n    precio DECIMAL(10,2),\n    CONSTRAINT chk_precio_pos CHECK (precio > 0)\n);",
    "options": [
      "Intentar registrar un producto con precio = 0 o precio = -15.50",
      "Intentar registrar un producto con precio = 100.00",
      "Intentar dejar el nombre como 'Laptop'",
      "Intentar usar un ID de valor 9999"
    ],
    "correctAnswer": 0,
    "explanation": "La restricción CHECK (precio > 0) requiere estrictamente que el precio sea mayor a cero. Cero y valores negativos violarán la restricción y serán rechazados por el motor."
  },
  {
    "id": 27,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la siguiente restricción CHECK sobre un rango de fechas. ¿Qué condición debe cumplirse en la inserción?",
    "code": "CREATE TABLE reservas (\n    id INT PRIMARY KEY,\n    fecha_inicio DATE NOT NULL,\n    fecha_fin DATE NOT NULL,\n    CHECK (fecha_fin >= fecha_inicio)\n);",
    "options": [
      "'fecha_fin' debe ser posterior o igual a 'fecha_inicio'.",
      "'fecha_inicio' debe ser siempre la fecha actual del sistema.",
      "'fecha_fin' debe ser exactamente un año mayor a 'fecha_inicio'.",
      "Ambas fechas deben pertenecer obligatoriamente al mismo mes."
    ],
    "correctAnswer": 0,
    "explanation": "La expresión booleana dentro de CHECK evalúa que fecha_fin sea mayor o igual a fecha_inicio en cada registro de la tabla."
  },
  {
    "id": 28,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "¿Qué sucede si una columna tiene la restricción CHECK (edad >= 18) y se intenta registrar un valor NULL en la columna 'edad' (siendo la columna opcional sin NOT NULL)?",
    "code": "CREATE TABLE clientes (\n    id INT PRIMARY KEY,\n    edad INT CHECK (edad >= 18)\n);",
    "options": [
      "En el estándar SQL, la restricción CHECK evalúa NULL como UNKNOWN, permitiendo la inserción (salvo que se agregue NOT NULL).",
      "Rechaza inmediatamente la inserción por considerar NULL menor a 18.",
      "Convierte el NULL automáticamente a 18.",
      "Lanza un error de sintaxis DDL."
    ],
    "correctAnswer": 0,
    "explanation": "En el estándar SQL, las restricciones CHECK solo rechazan un registro si la condición evalúa a FALSE. Como (NULL >= 18) evalúa a UNKNOWN (no a FALSE), la verificación pasa a menos que exista la restricción NOT NULL."
  },
  {
    "id": 29,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 4 de Constraints):",
    "code": "CREATE TABLE usuarios_c4 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 30,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 5 de Constraints):",
    "code": "CREATE TABLE usuarios_c5 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 31,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 6 de Constraints):",
    "code": "CREATE TABLE usuarios_c6 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 32,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 7 de Constraints):",
    "code": "CREATE TABLE usuarios_c7 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 33,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 8 de Constraints):",
    "code": "CREATE TABLE usuarios_c8 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 34,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 9 de Constraints):",
    "code": "CREATE TABLE usuarios_c9 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 35,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 10 de Constraints):",
    "code": "CREATE TABLE usuarios_c10 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 36,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 11 de Constraints):",
    "code": "CREATE TABLE usuarios_c11 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 37,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 12 de Constraints):",
    "code": "CREATE TABLE usuarios_c12 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 38,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 13 de Constraints):",
    "code": "CREATE TABLE usuarios_c13 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 39,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 14 de Constraints):",
    "code": "CREATE TABLE usuarios_c14 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 40,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 15 de Constraints):",
    "code": "CREATE TABLE usuarios_c15 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 41,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 16 de Constraints):",
    "code": "CREATE TABLE usuarios_c16 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 42,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 17 de Constraints):",
    "code": "CREATE TABLE usuarios_c17 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 43,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 18 de Constraints):",
    "code": "CREATE TABLE usuarios_c18 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 44,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 19 de Constraints):",
    "code": "CREATE TABLE usuarios_c19 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 45,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 20 de Constraints):",
    "code": "CREATE TABLE usuarios_c20 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 46,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 21 de Constraints):",
    "code": "CREATE TABLE usuarios_c21 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 47,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 22 de Constraints):",
    "code": "CREATE TABLE usuarios_c22 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 48,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 23 de Constraints):",
    "code": "CREATE TABLE usuarios_c23 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 49,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 24 de Constraints):",
    "code": "CREATE TABLE usuarios_c24 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 50,
    "category": "CHECK_UNIQUE_DEFAULT",
    "categoryLabel": "CONSTRAINTS",
    "difficulty": "hard",
    "level": 2,
    "question": "Analiza la combinación de restricciones en la siguiente columna (Ejercicio 25 de Constraints):",
    "code": "CREATE TABLE usuarios_c25 (\n    id INT PRIMARY KEY,\n    email VARCHAR(150) NOT NULL UNIQUE,\n    edad INT CHECK (edad >= 18 AND edad <= 120)\n);",
    "options": [
      "'email' es único y obligatorio; 'edad' debe estar entre 18 y 120 inclusivo.",
      "'email' permite duplicados si 'edad' es mayor a 18.",
      "'edad' es clave primaria secundaria.",
      "No se puede usar AND dentro de una restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "CHECK admite expresiones compuestas con operadores lógicos AND / OR. 'email' exige unicidad y no admite nulos."
  },
  {
    "id": 51,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Dadas las siguientes definiciones, ¿cuál es la tabla PADRE y cuál es la tabla HIJA en la relación de clave foránea?",
    "code": "CREATE TABLE departamentos (\n    id INT PRIMARY KEY,\n    nombre VARCHAR(50)\n);\n\nCREATE TABLE empleados (\n    id INT PRIMARY KEY,\n    nombre VARCHAR(100),\n    departamento_id INT,\n    CONSTRAINT fk_emp_depto FOREIGN KEY (departamento_id)\n        REFERENCES departamentos(id)\n);",
    "options": [
      "'departamentos' es la tabla PADRE (referenciada) y 'empleados' es la tabla HIJA (referenciante).",
      "'empleados' es la tabla PADRE y 'departamentos' es la tabla HIJA.",
      "Ambas tablas son tablas PADRE independientes.",
      "No existe relación de clave foránea entre ambas tablas."
    ],
    "correctAnswer": 0,
    "explanation": "La tabla que posee la restricción FOREIGN KEY ('empleados') es la tabla HIJA, y la tabla que posee la clave primaria referenciada ('departamentos') es la tabla PADRE."
  },
  {
    "id": 52,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Qué ocurre si intentas ejecutar el CREATE TABLE de la tabla 'empleados' ANTES de ejecutar el CREATE TABLE de la tabla 'departamentos'?",
    "code": "CREATE TABLE empleados (\n    id INT PRIMARY KEY,\n    depto_id INT REFERENCES departamentos(id)\n);",
    "options": [
      "Falla con un error de integridad DDL porque la tabla referenciada 'departamentos' aún no existe.",
      "Crea la tabla 'departamentos' automáticamente de forma transparente.",
      "Crea la clave foránea pero la deja en estado desactivado.",
      "Invierte la relación convirtiendo 'empleados' en tabla padre."
    ],
    "correctAnswer": 0,
    "explanation": "Para crear una restricción FOREIGN KEY hacia una tabla referenciada, dicha tabla PADRE (y su clave primaria) DEBEN existir previamente en la base de datos."
  },
  {
    "id": 53,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 3):",
    "code": "CREATE TABLE pedidos_r3 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 54,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 4):",
    "code": "CREATE TABLE pedidos_r4 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 55,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 5):",
    "code": "CREATE TABLE pedidos_r5 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 56,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 6):",
    "code": "CREATE TABLE pedidos_r6 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 57,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 7):",
    "code": "CREATE TABLE pedidos_r7 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 58,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 8):",
    "code": "CREATE TABLE pedidos_r8 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 59,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 9):",
    "code": "CREATE TABLE pedidos_r9 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 60,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 10):",
    "code": "CREATE TABLE pedidos_r10 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 61,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 11):",
    "code": "CREATE TABLE pedidos_r11 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 62,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 12):",
    "code": "CREATE TABLE pedidos_r12 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 63,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 13):",
    "code": "CREATE TABLE pedidos_r13 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 64,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 14):",
    "code": "CREATE TABLE pedidos_r14 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 65,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 15):",
    "code": "CREATE TABLE pedidos_r15 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 66,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 16):",
    "code": "CREATE TABLE pedidos_r16 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 67,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 17):",
    "code": "CREATE TABLE pedidos_r17 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 68,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 18):",
    "code": "CREATE TABLE pedidos_r18 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 69,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 19):",
    "code": "CREATE TABLE pedidos_r19 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 70,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 20):",
    "code": "CREATE TABLE pedidos_r20 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 71,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 21):",
    "code": "CREATE TABLE pedidos_r21 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 72,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 22):",
    "code": "CREATE TABLE pedidos_r22 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 73,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 23):",
    "code": "CREATE TABLE pedidos_r23 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 74,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 24):",
    "code": "CREATE TABLE pedidos_r24 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 75,
    "category": "FOREIGN_KEY",
    "categoryLabel": "RELACIONES Y FK",
    "difficulty": "hard",
    "level": 3,
    "question": "Identifica la clave referencial en la siguiente relación de tablas (Caso 25):",
    "code": "CREATE TABLE pedidos_r25 (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_ped_cli FOREIGN KEY (cliente_id) REFERENCES clientes(id)\n);",
    "options": [
      "'cliente_id' es la clave foránea (FK) que referencia a 'clientes(id)'.",
      "'id' de 'pedidos' es la clave foránea.",
      "'clientes' es la tabla hija.",
      "La restricción FK no requiere que 'clientes(id)' sea PRIMARY KEY o UNIQUE."
    ],
    "correctAnswer": 0,
    "explanation": "La columna 'cliente_id' actúa como FOREIGN KEY apuntando al identificador único de la tabla 'clientes'."
  },
  {
    "id": 76,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "¿Qué ocurre con los registros de la tabla HIJA ('pedidos') si se elimina una fila de la tabla PADRE ('clientes') bajo la configuración ON DELETE CASCADE?",
    "code": "CREATE TABLE pedidos (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_cli FOREIGN KEY (cliente_id)\n        REFERENCES clientes(id) ON DELETE CASCADE\n);",
    "options": [
      "Se eliminan automáticamente todas las filas de 'pedidos' asociadas a ese cliente.",
      "La eliminación en 'clientes' se bloquea y lanza un error.",
      "Las filas en 'pedidos' cambian su 'cliente_id' a NULL.",
      "Se eliminan todas las filas de la tabla 'clientes' completa."
    ],
    "correctAnswer": 0,
    "explanation": "ON DELETE CASCADE propaga la eliminación de la fila padre a todas las filas hijas que dependan de ella en la tabla referenciante."
  },
  {
    "id": 77,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "¿Qué requisito debe cumplir la columna 'departamento_id' en la tabla HIJA para poder configurar ON DELETE SET NULL?",
    "code": "FOREIGN KEY (departamento_id) REFERENCES departamentos(id) ON DELETE SET NULL",
    "options": [
      "La columna 'departamento_id' DEBE ser opcional (NO debe tener la restricción NOT NULL).",
      "La columna debe ser la Clave Primaria de la tabla hija.",
      "La columna debe ser obligatoriamente de tipo VARCHAR.",
      "La tabla padre debe llamarse obligatoriamente 'departamentos'."
    ],
    "correctAnswer": 0,
    "explanation": "Si se especifica ON DELETE SET NULL, la columna de la clave foránea debe permitir valores nulos. Si estuviese declarada como NOT NULL, la acción fallaría al intentar asignar NULL."
  },
  {
    "id": 78,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "¿Cuál es el comportamiento de la acción por defecto ON DELETE RESTRICT (o NO ACTION)?",
    "code": "FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE RESTRICT",
    "options": [
      "Impide la eliminación de una categoría padre si existen productos hijos que dependen de ella.",
      "Elimina todos los productos de esa categoría en cascada.",
      "Asigna valor 0 a la clave foránea de los productos.",
      "Renombra la categoría automáticamente."
    ],
    "correctAnswer": 0,
    "explanation": "RESTRICT (y NO ACTION) garantiza la integridad referencial bloqueando y rechazando cualquier intento de eliminar un registro padre que tenga registros hijos asociados."
  },
  {
    "id": 79,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 4):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 80,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 5):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 81,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 6):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 82,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 7):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 83,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 8):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 84,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 9):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 85,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 10):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 86,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 11):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 87,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 12):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 88,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 13):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 89,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 14):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 90,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 15):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 91,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 16):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 92,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 17):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 93,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 18):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 94,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 19):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 95,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 20):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 96,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 21):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 97,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 22):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 98,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 23):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 99,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 24):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 100,
    "category": "REFERENTIAL_ACTIONS",
    "categoryLabel": "INTEGRIDAD REFERENCIAL",
    "difficulty": "hard",
    "level": 4,
    "question": "Evalúa el efecto de ON UPDATE CASCADE en la siguiente definición (Caso 25):",
    "code": "FOREIGN KEY (autor_id) REFERENCES autores(id) ON UPDATE CASCADE",
    "options": [
      "Si cambia el valor de la clave primaria 'id' en un autor, el valor de 'autor_id' en sus libros asociados se actualiza automáticamente.",
      "Impide que se pueda modificar el id del autor.",
      "Elimina los libros cuando se actualiza el autor.",
      "Convierte la clave primaria del autor en NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ON UPDATE CASCADE actualiza automáticamente la clave foránea en la tabla hija cuando el valor de la clave primaria referenciada es modificado en la tabla padre."
  },
  {
    "id": 101,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "¿Por qué es altamente recomendable asignar un nombre explícito a las restricciones utilizando la cláusula CONSTRAINT?",
    "code": "CONSTRAINT pk_estudiante_curso PRIMARY KEY (estudiante_id, curso_id),\nCONSTRAINT chk_nota CHECK (nota >= 0 AND nota <= 10)",
    "options": [
      "Permite referenciar y eliminar o modificar la restricción de forma precisa mediante ALTER TABLE DROP CONSTRAINT <nombre>.",
      "Es obligatorio para que la clave primaria funcione.",
      "Aumenta la velocidad de ejecución de las sentencias SELECT.",
      "Evita que la tabla ocupe espacio en disco."
    ],
    "correctAnswer": 0,
    "explanation": "Asignar nombres explícitos a las restricciones (CONSTRAINT nombre_restriccion TYPE) permite gestionarlas, deshabilitarlas o eliminarlas fácilmente con ALTER TABLE DROP CONSTRAINT sin depender de nombres generados por el SGBD."
  },
  {
    "id": 102,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Analiza la siguiente tabla con clave primaria compuesta. ¿Qué combinaciones de datos serán RECHAZADAS por duplicidad?",
    "code": "CREATE TABLE inscripciones (\n    alumno_id INT,\n    materia_id INT,\n    semestre VARCHAR(10),\n    PRIMARY KEY (alumno_id, materia_id)\n);",
    "options": [
      "Intentar insertar la fila (101, 50, '2026-1') si ya existe previamente la fila (101, 50, '2025-2').",
      "Intentar insertar la fila (101, 51, '2026-1') cuando existe (101, 50, '2026-1').",
      "Intentar insertar la fila (102, 50, '2026-1') cuando existe (101, 50, '2026-1').",
      "Todas las opciones anteriores son permitidas."
    ],
    "correctAnswer": 0,
    "explanation": "La Clave Primaria Compuesta PRIMARY KEY (alumno_id, materia_id) exige unicidad en la COMBINACIÓN de ambos valores. El par (101, 50) no puede repetirse independientemente del valor en 'semestre'."
  },
  {
    "id": 103,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 3):",
    "code": "CREATE TABLE proyectos_n3 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_3 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_3 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 104,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 4):",
    "code": "CREATE TABLE proyectos_n4 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_4 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_4 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 105,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 5):",
    "code": "CREATE TABLE proyectos_n5 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_5 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_5 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 106,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 6):",
    "code": "CREATE TABLE proyectos_n6 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_6 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_6 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 107,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 7):",
    "code": "CREATE TABLE proyectos_n7 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_7 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_7 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 108,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 8):",
    "code": "CREATE TABLE proyectos_n8 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_8 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_8 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 109,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 9):",
    "code": "CREATE TABLE proyectos_n9 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_9 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_9 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 110,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 10):",
    "code": "CREATE TABLE proyectos_n10 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_10 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_10 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 111,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 11):",
    "code": "CREATE TABLE proyectos_n11 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_11 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_11 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 112,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 12):",
    "code": "CREATE TABLE proyectos_n12 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_12 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_12 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 113,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 13):",
    "code": "CREATE TABLE proyectos_n13 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_13 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_13 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 114,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 14):",
    "code": "CREATE TABLE proyectos_n14 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_14 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_14 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 115,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 15):",
    "code": "CREATE TABLE proyectos_n15 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_15 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_15 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 116,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 16):",
    "code": "CREATE TABLE proyectos_n16 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_16 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_16 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 117,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 17):",
    "code": "CREATE TABLE proyectos_n17 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_17 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_17 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 118,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 18):",
    "code": "CREATE TABLE proyectos_n18 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_18 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_18 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 119,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 19):",
    "code": "CREATE TABLE proyectos_n19 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_19 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_19 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 120,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 20):",
    "code": "CREATE TABLE proyectos_n20 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_20 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_20 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 121,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 21):",
    "code": "CREATE TABLE proyectos_n21 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_21 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_21 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 122,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 22):",
    "code": "CREATE TABLE proyectos_n22 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_22 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_22 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 123,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 23):",
    "code": "CREATE TABLE proyectos_n23 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_23 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_23 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 124,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 24):",
    "code": "CREATE TABLE proyectos_n24 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_24 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_24 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 125,
    "category": "NAMED_CONSTRAINTS",
    "categoryLabel": "CONSTRAINTS NOMBRADAS",
    "difficulty": "hard",
    "level": 5,
    "question": "Examina la sintaxis DDL con restricciones nombradas (Ejemplo 25):",
    "code": "CREATE TABLE proyectos_n25 (\n    id INT,\n    codigo VARCHAR(20),\n    CONSTRAINT pk_proy_25 PRIMARY KEY (id),\n    CONSTRAINT uq_cod_25 UNIQUE (codigo)\n);",
    "options": [
      "Define explícitamente la clave primaria 'pk_proy' y la restricción de unicidad 'uq_cod'.",
      "Crea dos claves primarias en la misma tabla.",
      "Sintaxis errónea por usar comas entre CONSTRAINT.",
      "La restricción UNIQUE no puede tener nombre explícito."
    ],
    "correctAnswer": 0,
    "explanation": "La declaración de restricciones nombradas a nivel de tabla es totalmente estándar y la mejor práctica en SQL DDL."
  },
  {
    "id": 126,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "¿Cuál es la sintaxis SQL estándar para agregar una nueva columna 'telefono' a una tabla existente 'clientes'?",
    "code": "ALTER TABLE clientes -- ¿Qué sintaxis completa esta operación?",
    "options": [
      "ADD COLUMN telefono VARCHAR(20);",
      "INSERT COLUMN telefono VARCHAR(20);",
      "CREATE COLUMN telefono VARCHAR(20);",
      "UPDATE TABLE clientes ADD telefono;"
    ],
    "correctAnswer": 0,
    "explanation": "La sintaxis DDL para modificar una estructura agregando una columna es: ALTER TABLE nombre_tabla ADD [COLUMN] nombre_columna tipo_dato [restricciones]."
  },
  {
    "id": 127,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "¿Cuál de las siguientes sentencias permite agregar una restricción FOREIGN KEY nombrada a una tabla previamente existente?",
    "code": "ALTER TABLE empleados ...",
    "options": [
      "ALTER TABLE empleados ADD CONSTRAINT fk_emp_dep FOREIGN KEY (dep_id) REFERENCES departamentos(id);",
      "ALTER TABLE empleados CREATE FOREIGN KEY (dep_id) REFERENCES departamentos(id);",
      "ALTER TABLE empleados ADD FOREIGN KEY (dep_id) INTO departamentos(id);",
      "ALTER TABLE empleados UPDATE CONSTRAINT FOREIGN KEY (dep_id);"
    ],
    "correctAnswer": 0,
    "explanation": "Para incorporar una clave foránea a una tabla ya existente se utiliza ALTER TABLE <tabla> ADD CONSTRAINT <nombre> FOREIGN KEY (<columna>) REFERENCES <tabla_padre>(<columna_padre>)."
  },
  {
    "id": 128,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "¿Cómo se elimina correctamente una restricción nombrada 'chk_edad_min' de la tabla 'usuarios'?",
    "code": "ALTER TABLE usuarios ...",
    "options": [
      "ALTER TABLE usuarios DROP CONSTRAINT chk_edad_min;",
      "ALTER TABLE usuarios DELETE CONSTRAINT chk_edad_min;",
      "DROP CONSTRAINT chk_edad_min FROM usuarios;",
      "ALTER TABLE usuarios REMOVE CHECK chk_edad_min;"
    ],
    "correctAnswer": 0,
    "explanation": "La eliminación de una restricción nombrada se efectúa mediante ALTER TABLE <tabla> DROP CONSTRAINT <nombre_restriccion>."
  },
  {
    "id": 129,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 4):",
    "code": "ALTER TABLE productos_a4 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 130,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 5):",
    "code": "ALTER TABLE productos_a5 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 131,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 6):",
    "code": "ALTER TABLE productos_a6 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 132,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 7):",
    "code": "ALTER TABLE productos_a7 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 133,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 8):",
    "code": "ALTER TABLE productos_a8 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 134,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 9):",
    "code": "ALTER TABLE productos_a9 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 135,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 10):",
    "code": "ALTER TABLE productos_a10 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 136,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 11):",
    "code": "ALTER TABLE productos_a11 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 137,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 12):",
    "code": "ALTER TABLE productos_a12 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 138,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 13):",
    "code": "ALTER TABLE productos_a13 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 139,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 14):",
    "code": "ALTER TABLE productos_a14 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 140,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 15):",
    "code": "ALTER TABLE productos_a15 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 141,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 16):",
    "code": "ALTER TABLE productos_a16 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 142,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 17):",
    "code": "ALTER TABLE productos_a17 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 143,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 18):",
    "code": "ALTER TABLE productos_a18 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 144,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 19):",
    "code": "ALTER TABLE productos_a19 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 145,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 20):",
    "code": "ALTER TABLE productos_a20 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 146,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 21):",
    "code": "ALTER TABLE productos_a21 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 147,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 22):",
    "code": "ALTER TABLE productos_a22 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 148,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 23):",
    "code": "ALTER TABLE productos_a23 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 149,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 24):",
    "code": "ALTER TABLE productos_a24 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 150,
    "category": "ALTER_TABLE",
    "categoryLabel": "ALTER TABLE",
    "difficulty": "hard",
    "level": 6,
    "question": "Analiza la siguiente sentencia DDL de modificación de estructura (Ejercicio 25):",
    "code": "ALTER TABLE productos_a25 DROP COLUMN codigo_barras;",
    "options": [
      "Elimina físicamente la columna 'codigo_barras' y todos sus datos de la tabla 'productos'.",
      "Elimina la tabla 'productos' por completo.",
      "Borra solo el índice de la columna 'codigo_barras'.",
      "Renombra la columna a NULL."
    ],
    "correctAnswer": 0,
    "explanation": "ALTER TABLE ... DROP COLUMN destruye la columna especificada y remueve los datos asociados a ella dentro de la tabla."
  },
  {
    "id": 151,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Se tienen tres tablas relacionadas: 'paises' (padre) -> 'provincias' (hija de paises) -> 'ciudades' (hija de provincias). ¿En qué orden DEBEN ELIMINARSE las tablas con DROP TABLE para evitar errores de clave foránea?",
    "code": "paises <- provincias <- ciudades",
    "options": [
      "1º ciudades, 2º provincias, 3º paises",
      "1º paises, 2º provincias, 3º ciudades",
      "1º provincias, 2º ciudades, 3º paises",
      "El orden de eliminación no afecta a las claves foráneas."
    ],
    "correctAnswer": 0,
    "explanation": "Al eliminar tablas con relaciones de integridad referencial, se debe eliminar primero la tabla mas HIJA ('ciudades') y al final la tabla PADRE principal ('paises'), procediendo desde las hojas hasta la raíz del árbol de dependencias."
  },
  {
    "id": 152,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "En el mismo escenario de dependencias (paises -> provincias -> ciudades), ¿en qué orden DEBEN CREARSE las tablas con CREATE TABLE?",
    "code": "paises -> provincias -> ciudades",
    "options": [
      "1º paises, 2º provincias, 3º ciudades",
      "1º ciudades, 2º provincias, 3º paises",
      "1º provincias, 2º paises, 3º ciudades",
      "Cualquier orden es válido siempre."
    ],
    "correctAnswer": 0,
    "explanation": "Durante la creación, las tablas PADRE ('paises') deben construirse primero para que sus claves primarias puedan ser referenciadas por las tablas HIJAS ('provincias' y posteriormente 'ciudades')."
  },
  {
    "id": 153,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "¿Cuál es la diferencia fundamental entre ejecutar DROP TABLE usuarios; frente a ALTER TABLE usuarios DROP COLUMN correo;?",
    "code": "Opción A: DROP TABLE usuarios;\nOpción B: ALTER TABLE usuarios DROP COLUMN correo;",
    "options": [
      "DROP TABLE destruye la tabla completa y toda su estructura; ALTER TABLE ... DROP COLUMN borra únicamente un atributo especifico de la tabla.",
      "DROP TABLE borra solo las filas dejando la tabla vacía.",
      "ALTER TABLE DROP COLUMN borra la base de datos completa.",
      "Ambas sentencias producen exactamente el mismo resultado."
    ],
    "correctAnswer": 0,
    "explanation": "DROP TABLE destruye el objeto tabla completo de la base de datos. ALTER TABLE DROP COLUMN remueve una sola columna manteniendo la tabla y sus demás atributos."
  },
  {
    "id": 154,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 4):",
    "code": "DROP TABLE categorias_p4; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 155,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 5):",
    "code": "DROP TABLE categorias_p5; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 156,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 6):",
    "code": "DROP TABLE categorias_p6; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 157,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 7):",
    "code": "DROP TABLE categorias_p7; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 158,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 8):",
    "code": "DROP TABLE categorias_p8; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 159,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 9):",
    "code": "DROP TABLE categorias_p9; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 160,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 10):",
    "code": "DROP TABLE categorias_p10; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 161,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 11):",
    "code": "DROP TABLE categorias_p11; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 162,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 12):",
    "code": "DROP TABLE categorias_p12; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 163,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 13):",
    "code": "DROP TABLE categorias_p13; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 164,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 14):",
    "code": "DROP TABLE categorias_p14; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 165,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 15):",
    "code": "DROP TABLE categorias_p15; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 166,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 16):",
    "code": "DROP TABLE categorias_p16; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 167,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 17):",
    "code": "DROP TABLE categorias_p17; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 168,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 18):",
    "code": "DROP TABLE categorias_p18; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 169,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 19):",
    "code": "DROP TABLE categorias_p19; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 170,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 20):",
    "code": "DROP TABLE categorias_p20; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 171,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 21):",
    "code": "DROP TABLE categorias_p21; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 172,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 22):",
    "code": "DROP TABLE categorias_p22; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 173,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 23):",
    "code": "DROP TABLE categorias_p23; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 174,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 24):",
    "code": "DROP TABLE categorias_p24; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 175,
    "category": "DROP_DEPENDENCIES",
    "categoryLabel": "DROP Y DEPENDENCIAS",
    "difficulty": "expert",
    "level": 7,
    "question": "Analiza la consecuencia de intentar ejecutar DROP TABLE en una tabla PADRE (Caso 25):",
    "code": "DROP TABLE categorias_p25; -- Teniendo 'productos' haciendo FK hacia 'categorias'",
    "options": [
      "El motor rechazará la sentencia indicando que existen objetos dependientes (clave foránea activa).",
      "Eliminará automáticamente la tabla 'productos' también.",
      "Convertirá a la tabla 'productos' en tabla independiente sin avisar.",
      "Renombrará la tabla a 'categorias_deleted'."
    ],
    "correctAnswer": 0,
    "explanation": "Impedir la destrucción de la tabla padre cuando existen referencias activas de clave foránea es un principio fundamental de integridad referencial en bases de datos relacionales."
  },
  {
    "id": 176,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER: Identifica el error conceptual o de sintaxis en el siguiente bloque de código DDL:",
    "code": "CREATE TABLE clientes (\n    id INT PRIMARY KEY,\n    email VARCHAR(100)\n);\n\nCREATE TABLE ventas (\n    id INT PRIMARY KEY,\n    cliente_id INT,\n    CONSTRAINT fk_cliente FOREIGN KEY (cliente_id)\n        REFERENCES clientes(id_cliente)\n);",
    "options": [
      "'clientes(id_cliente)' no existe en la tabla padre; la columna referenciada correcta es 'clientes(id)'.",
      "No se puede nombrar una FK como 'fk_cliente'.",
      "PRIMARY KEY debe ser de tipo VARCHAR en ambas tablas.",
      "Falta la cláusula ON DELETE CASCADE obligatoriamente."
    ],
    "correctAnswer": 0,
    "explanation": "'clientes' definió su clave como 'id'. La restricción FOREIGN KEY debe apuntar al nombre exacto de la columna que es Clave Primaria en la tabla padre."
  },
  {
    "id": 177,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER: Encuentra la falla en la siguiente declaración de restricciones:",
    "code": "CREATE TABLE facturas (\n    folio INT PRIMARY KEY,\n    total DECIMAL(10,2) CHECK (total > 0),\n    PRIMARY KEY (folio)\n);",
    "options": [
      "Se declara la Clave Primaria dos veces (una a nivel de columna y otra a nivel de tabla).",
      "DECIMAL(10,2) no permite la restricción CHECK.",
      "PRIMARY KEY no puede llamarse 'folio'.",
      "Falta el nombre de la tabla en la restricción CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Una tabla no puede tener dos declaraciones de Clave Primaria (PRIMARY KEY (folio) está duplicado a nivel de columna y a nivel de tabla)."
  },
  {
    "id": 178,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🎯 ELECCIÓN DE SENTENCIA: Se requiere definir la tabla 'cuentas' donde 'iban' sea clave primaria, 'saldo' no pueda ser negativo y 'moneda' tenga por defecto 'EUR'. ¿Cuál es la sentencia DDL correcta?",
    "code": "Requisito: iban (PK), saldo (>=0), moneda (DEFAULT 'EUR')",
    "options": [
      "CREATE TABLE cuentas (iban VARCHAR(34) PRIMARY KEY, saldo DECIMAL(12,2) CHECK (saldo >= 0), moneda VARCHAR(3) DEFAULT 'EUR');",
      "CREATE TABLE cuentas (iban VARCHAR(34) UNIQUE, saldo DECIMAL(12,2) DEFAULT 0, moneda VARCHAR(3) CHECK ('EUR'));",
      "CREATE TABLE cuentas (iban VARCHAR(34) PRIMARY KEY, saldo DECIMAL(12,2) FOREIGN KEY, moneda VARCHAR(3) DEFAULT 'EUR');",
      "CREATE TABLE cuentas (iban VARCHAR(34) NOT NULL, saldo DECIMAL(12,2) CHECK (saldo < 0), moneda VARCHAR(3) UNIQUE);"
    ],
    "correctAnswer": 0,
    "explanation": "La primera opción define impecablemente 'iban' como PRIMARY KEY, aplica el CHECK (saldo >= 0) para evitar valores negativos y establece 'EUR' como DEFAULT para la columna 'moneda'."
  },
  {
    "id": 179,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 4: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d4 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 180,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 5: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d5 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 181,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 6: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d6 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 182,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 7: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d7 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 183,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 8: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d8 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 184,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 9: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d9 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 185,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 10: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d10 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 186,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 11: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d11 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 187,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 12: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d12 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 188,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 13: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d13 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 189,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 14: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d14 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 190,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 15: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d15 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 191,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 16: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d16 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 192,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 17: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d17 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 193,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 18: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d18 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 194,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 19: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d19 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 195,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 20: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d20 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 196,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 21: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d21 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 197,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 22: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d22 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 198,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 23: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d23 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 199,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 24: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d24 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  },
  {
    "id": 200,
    "category": "DDL_DEBUGGER",
    "categoryLabel": "DDL DEBUGGER",
    "difficulty": "expert",
    "level": 8,
    "question": "🐛 DDL DEBUGGER Reto 25: Analiza la siguiente instrucción DDL defectuosa:",
    "code": "ALTER TABLE usuarios_d25 ADD CONSTRAINT chk_val CHECK (edad > 0) UNIQUE (email);",
    "options": [
      "No se pueden mezclar las sintaxis de CHECK y UNIQUE dentro de una misma cláusula ADD CONSTRAINT.",
      "ALTER TABLE no admite la palabra ADD CONSTRAINT.",
      "CHECK debe ir escrito en minúsculas.",
      "Falta la palabra COLUMN antes de CHECK."
    ],
    "correctAnswer": 0,
    "explanation": "Cada restricción a nivel de tabla debe agregarse de manera independiente con su propia definición ADD CONSTRAINT <nombre> <TIPO> (...)."
  }
];
