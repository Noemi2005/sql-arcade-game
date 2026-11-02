# -*- coding: utf-8 -*-
"""
BANCO DE PREGUNTAS: BASE DE DATOS RECURSOS HUMANOS (HR)
Generador en Python para 50 preguntas completas de consultas SQL.
Incluye sentencias SELECT, WHERE, LIKE, JOIN, GROUP BY, HAVING, subconsultas y funciones agregadas.
Todas con timeLimit de 180s y diagrama relacional 'bd_hr.png'.
"""

import json
from pathlib import Path

QUESTIONS = [
  {
    "id": 1,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Cuál consulta SQL devuelve el nombre (first_name), apellido (last_name) y salario (salary) de todos los empleados con un salario mayor a 10,000, ordenados de mayor a menor salario?",
    "code": "-- Obtener empleados con altos ingresos ordenados descendente",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT first_name, last_name, salary FROM employees WHERE salary > 10000 ORDER BY salary DESC;",
      "SELECT first_name, last_name, salary FROM employees WHERE salary > 10000 SORT BY salary DESC;",
      "SELECT first_name, last_name, salary FROM employees HAVING salary > 10000 ORDER BY salary ASC;",
      "SELECT first_name, last_name, salary FROM employees WHERE salary >= 10000 GROUP BY salary DESC;"
    ],
    "correctAnswer": 0,
    "explanation": "Para ordenar de mayor a menor se utiliza ORDER BY salary DESC. En SQL estándar la cláusula correcta es ORDER BY, no SORT BY ni GROUP BY sin agregaciones.",
    "timeLimit": 180
  },
  {
    "id": 2,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Qué consulta SQL lista el nombre, apellido y correo electrónico de los empleados cuyo apellido comience con la letra \"K\"?",
    "code": "-- Filtrar empleados con patrón de texto al inicio",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT first_name, last_name, email FROM employees WHERE last_name LIKE 'K%';",
      "SELECT first_name, last_name, email FROM employees WHERE last_name = 'K*';",
      "SELECT first_name, last_name, email FROM employees WHERE last_name CONTAINS 'K';",
      "SELECT first_name, last_name, email FROM employees WHERE last_name LIKE '%K';"
    ],
    "correctAnswer": 0,
    "explanation": "El operador LIKE con el comodín 'K%' filtra las cadenas que inician exactamente con la letra \"K\". '%K' buscaría cadenas que terminan en \"K\".",
    "timeLimit": 180
  },
  {
    "id": 3,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Cuál consulta obtiene a los empleados contratados (hire_date) durante el año 2005 (entre el 1 de enero y el 31 de diciembre de 2005)?",
    "code": "-- Filtrado por rango cronológico en hire_date",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT employee_id, first_name, last_name, hire_date FROM employees WHERE hire_date BETWEEN '2005-01-01' AND '2005-12-31';",
      "SELECT employee_id, first_name, last_name, hire_date FROM employees WHERE hire_date IN ('2005-01-01', '2005-12-31');",
      "SELECT employee_id, first_name, last_name, hire_date FROM employees WHERE hire_date = '2005';",
      "SELECT employee_id, first_name, last_name, hire_date FROM employees HAVING hire_date BETWEEN '2005-01-01' AND '2005-12-31';"
    ],
    "correctAnswer": 0,
    "explanation": "El operador BETWEEN incluye ambos extremos del rango de fechas inclusive. El operador IN solo compararía contra esas dos fechas puntuales.",
    "timeLimit": 180
  },
  {
    "id": 4,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Qué consulta SQL selecciona los empleados que pertenecen a los departamentos 50, 80 o 90?",
    "code": "-- Pertenencia a un conjunto de identificadores",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT first_name, last_name, department_id FROM employees WHERE department_id IN (50, 80, 90);",
      "SELECT first_name, last_name, department_id FROM employees WHERE department_id = (50, 80, 90);",
      "SELECT first_name, last_name, department_id FROM employees WHERE department_id BETWEEN 50 AND 90;",
      "SELECT first_name, last_name, department_id FROM employees HAVING department_id IN (50, 80, 90);"
    ],
    "correctAnswer": 0,
    "explanation": "La cláusula IN (50, 80, 90) evalúa la pertenencia a una lista discreta de valores. BETWEEN traería también departamentos como 60 y 70.",
    "timeLimit": 180
  },
  {
    "id": 5,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Cuál consulta devuelve únicamente los empleados que NO reciben comisión (es decir, donde commission_pct no tiene valor)?",
    "code": "-- Comprobación de valores nulos",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT first_name, last_name, salary FROM employees WHERE commission_pct IS NULL;",
      "SELECT first_name, last_name, salary FROM employees WHERE commission_pct = NULL;",
      "SELECT first_name, last_name, salary FROM employees WHERE commission_pct == 0;",
      "SELECT first_name, last_name, salary FROM employees WHERE commission_pct IS NOT TRUE;"
    ],
    "correctAnswer": 0,
    "explanation": "En SQL, los valores ausentes o nulos se comparan exclusivamente con IS NULL. La expresión = NULL siempre evalúa a UNKNOWN/falso en lógica trivalente SQL.",
    "timeLimit": 180
  },
  {
    "id": 6,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Qué consulta muestra la lista sin duplicados de todos los identificadores de puestos (job_id) que tienen asignados los empleados en la empresa?",
    "code": "-- Eliminación de registros repetidos",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT DISTINCT job_id FROM employees ORDER BY job_id;",
      "SELECT UNIQUE_ALL job_id FROM employees;",
      "SELECT job_id FROM employees WHERE DUPLICATE = FALSE;",
      "SELECT job_id FROM employees GROUP BY ALL;"
    ],
    "correctAnswer": 0,
    "explanation": "La palabra reservada DISTINCT suprime las filas duplicadas en el conjunto de resultados proyectado.",
    "timeLimit": 180
  },
  {
    "id": 7,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Cuál consulta SQL devuelve los empleados que tienen un salario entre 3,000 y 6,000 Y que además trabajan en el departamento 50?",
    "code": "-- Condiciones lógicas combinadas AND",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT first_name, last_name, salary, department_id FROM employees WHERE (salary BETWEEN 3000 AND 6000) AND department_id = 50;",
      "SELECT first_name, last_name, salary, department_id FROM employees WHERE (salary >= 3000 OR salary <= 6000) AND department_id = 50;",
      "SELECT first_name, last_name, salary, department_id FROM employees WHERE salary IN (3000, 6000) AND department_id = 50;",
      "SELECT first_name, last_name, salary, department_id FROM employees HAVING salary BETWEEN 3000 AND 6000 AND department_id = 50;"
    ],
    "correctAnswer": 0,
    "explanation": "La conjunción AND requiere que ambas expresiones se cumplan simultáneamente: salario dentro del rango y departamento igual a 50.",
    "timeLimit": 180
  },
  {
    "id": 8,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Qué consulta SQL lista todos los países de la tabla COUNTRIES cuyo nombre termine con las letras \"a\" o \"ia\"?",
    "code": "-- Coincidencia de patrones con terminación",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT country_id, country_name FROM countries WHERE country_name LIKE '%a';",
      "SELECT country_id, country_name FROM countries WHERE country_name = '%a';",
      "SELECT country_id, country_name FROM countries WHERE country_name LIKE 'a%';",
      "SELECT country_id, country_name FROM countries WHERE country_name CONTAINS '*a';"
    ],
    "correctAnswer": 0,
    "explanation": "El patrón '%a' coincide con cualquier texto sin importar la longitud inicial siempre que termine en la letra \"a\" (lo que cubre \"ia\", \"na\", etc.).",
    "timeLimit": 180
  },
  {
    "id": 9,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Cuál consulta selecciona los puestos de trabajo (JOBS) donde el salario máximo supera los 15,000 ordenados alfabéticamente por título de puesto?",
    "code": "-- Filtrado de catálogo y ordenamiento alfabético",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT job_title, min_salary, max_salary FROM jobs WHERE max_salary > 15000 ORDER BY job_title ASC;",
      "SELECT job_title, min_salary, max_salary FROM jobs WHERE max_salary > 15000 ORDER BY max_salary ASC;",
      "SELECT job_title, min_salary, max_salary FROM jobs HAVING max_salary > 15000 ORDER BY job_title ASC;",
      "SELECT job_title, min_salary, max_salary FROM jobs WHERE min_salary > 15000 GROUP BY job_title;"
    ],
    "correctAnswer": 0,
    "explanation": "Filtra en la tabla JOBS con WHERE max_salary > 15000 y ordena alfabéticamente de la A a la Z mediante ORDER BY job_title ASC.",
    "timeLimit": 180
  },
  {
    "id": 10,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Qué consulta calcula el salario anual proyectado (salario mensual multiplicado por 12) con el alias \"salario_anual\" para cada empleado?",
    "code": "-- Expresión aritmética en la proyección SELECT",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT first_name, last_name, (salary * 12) AS salario_anual FROM employees;",
      "SELECT first_name, last_name, (salary x 12) = salario_anual FROM employees;",
      "SELECT first_name, last_name, MULTIPLY(salary, 12) FROM employees;",
      "SELECT first_name, last_name, salary * 12 INTO salario_anual FROM employees;"
    ],
    "correctAnswer": 0,
    "explanation": "En SQL el operador aritmético de multiplicación es el asterisco (*) y el renombre de la columna proyectada se efectúa con la cláusula AS alias.",
    "timeLimit": 180
  },
  {
    "id": 11,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Cuál consulta muestra los empleados que NO tienen asignado ningún supervisor o jefe (manager_id es nulo)?",
    "code": "-- Jerarquía: empleado raíz / Director general",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT employee_id, first_name, last_name, job_id FROM employees WHERE manager_id IS NULL;",
      "SELECT employee_id, first_name, last_name, job_id FROM employees WHERE manager_id = 0;",
      "SELECT employee_id, first_name, last_name, job_id FROM employees WHERE manager_id != NULL;",
      "SELECT employee_id, first_name, last_name, job_id FROM employees HAVING manager_id IS NULL;"
    ],
    "correctAnswer": 0,
    "explanation": "El director o presidente no tiene supervisor, por lo que su manager_id contiene NULL. Se verifica usando WHERE manager_id IS NULL.",
    "timeLimit": 180
  },
  {
    "id": 12,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Qué consulta SQL devuelve las ciudades (city) y estado/provincia (state_province) de la tabla LOCATIONS ubicadas en el país \"US\"?",
    "code": "-- Filtrado simple en tabla de ubicaciones",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT city, state_province FROM locations WHERE country_id = 'US';",
      "SELECT city, state_province FROM locations WHERE country_name = 'US';",
      "SELECT city, state_province FROM locations WHERE country_id LIKE '_US_';",
      "SELECT city, state_province FROM locations HAVING country_id = 'US';"
    ],
    "correctAnswer": 0,
    "explanation": "En la tabla LOCATIONS, la columna que almacena el código de país es country_id (clave foránea hacia COUNTRIES).",
    "timeLimit": 180
  },
  {
    "id": 13,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "easy",
    "level": 1,
    "question": "¿Cuál consulta SQL devuelve los primeros 5 empleados con mayor salario de la tabla EMPLOYEES?",
    "code": "-- Limitación de resultados",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT first_name, last_name, salary FROM employees ORDER BY salary DESC LIMIT 5;",
      "SELECT first_name, last_name, salary FROM employees WHERE ROWNUM <= 5;",
      "SELECT TOP 5 first_name, last_name, salary FROM employees;",
      "SELECT first_name, last_name, salary FROM employees LIMIT 5 ORDER BY salary DESC;"
    ],
    "correctAnswer": 0,
    "explanation": "La sintaxis estándar moderna ordena primero por salario descendente (ORDER BY salary DESC) y posteriormente aplica la cláusula LIMIT 5.",
    "timeLimit": 180
  },
  {
    "id": 14,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Cuál consulta calcula la cantidad total de empleados, el salario promedio y el salario máximo de toda la empresa?",
    "code": "-- Funciones de agregación globales",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT COUNT(employee_id) AS total_empleados, AVG(salary) AS salario_promedio, MAX(salary) AS salario_maximo FROM employees;",
      "SELECT SUM(employee_id) AS total_empleados, MEAN(salary) AS salario_promedio, TOP(salary) AS salario_maximo FROM employees;",
      "SELECT COUNT(*) AS total_empleados, AVERAGE(salary) AS salario_promedio, HIGH(salary) AS salario_maximo FROM employees;",
      "SELECT TOTAL(employee_id), AVG(salary), PEAK(salary) FROM employees GROUP BY salary;"
    ],
    "correctAnswer": 0,
    "explanation": "Las funciones agregadas estándar son COUNT(), AVG() (average) y MAX(). MEAN, AVERAGE o TOP no son funciones agregadas de cálculo en SQL estándar.",
    "timeLimit": 180
  },
  {
    "id": 15,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Qué consulta calcula el salario promedio agrupado por departamento (department_id), mostrando el identificador de departamento y dicho promedio redondeado?",
    "code": "-- Agrupamiento básico con GROUP BY",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT department_id, ROUND(AVG(salary), 2) AS salario_promedio FROM employees WHERE department_id IS NOT NULL GROUP BY department_id;",
      "SELECT department_id, ROUND(AVG(salary), 2) AS salario_promedio FROM employees WHERE department_id IS NOT NULL ORDER BY department_id;",
      "SELECT department_id, AVG(salary) AS salario_promedio FROM employees WHERE department_id IS NOT NULL;",
      "SELECT department_id, SUM(salary)/COUNT(*) FROM employees GROUP BY salary;"
    ],
    "correctAnswer": 0,
    "explanation": "Toda columna no agregada en el SELECT (como department_id) debe figurar obligatoriamente en la cláusula GROUP BY.",
    "timeLimit": 180
  },
  {
    "id": 16,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Cuál consulta SQL devuelve únicamente los departamentos que tienen más de 5 empleados asignados?",
    "code": "-- Filtrado de agregaciones con HAVING",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT department_id, COUNT(employee_id) AS total_empleados FROM employees GROUP BY department_id HAVING COUNT(employee_id) > 5;",
      "SELECT department_id, COUNT(employee_id) AS total_empleados FROM employees WHERE COUNT(employee_id) > 5 GROUP BY department_id;",
      "SELECT department_id, COUNT(employee_id) AS total_empleados FROM employees GROUP BY department_id WHERE total_empleados > 5;",
      "SELECT department_id, COUNT(employee_id) AS total_empleados FROM employees HAVING COUNT(employee_id) > 5;"
    ],
    "correctAnswer": 0,
    "explanation": "No se pueden usar funciones de agregación como COUNT() en la cláusula WHERE. El filtro sobre grupos agregados se realiza exclusivamente con HAVING.",
    "timeLimit": 180
  },
  {
    "id": 17,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Qué consulta obtiene la suma total de salarios que la empresa paga por cada tipo de puesto (job_id), ordenando el gasto de mayor a menor?",
    "code": "-- Suma salarial por puesto y orden descendente",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT job_id, SUM(salary) AS total_nomina FROM employees GROUP BY job_id ORDER BY total_nomina DESC;",
      "SELECT job_id, COUNT(salary) AS total_nomina FROM employees GROUP BY job_id ORDER BY total_nomina DESC;",
      "SELECT job_id, SUM(salary) AS total_nomina FROM employees ORDER BY total_nomina DESC;",
      "SELECT job_id, TOTAL(salary) AS total_nomina FROM employees GROUP BY job_id SORT BY total_nomina DESC;"
    ],
    "correctAnswer": 0,
    "explanation": "SUM(salary) totaliza la masa salarial y GROUP BY job_id clasifica la suma por cada código de puesto, ordenando por el alias total_nomina DESC.",
    "timeLimit": 180
  },
  {
    "id": 18,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Cuál consulta SQL encuentra el salario mínimo y el salario máximo dentro de cada departamento, pero solo para aquellos departamentos cuyo salario máximo sea superior a 12,000?",
    "code": "-- Filtrado avanzado de grupos con HAVING MAX()",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT department_id, MIN(salary) AS min_sal, MAX(salary) AS max_sal FROM employees GROUP BY department_id HAVING MAX(salary) > 12000;",
      "SELECT department_id, MIN(salary) AS min_sal, MAX(salary) AS max_sal FROM employees WHERE MAX(salary) > 12000 GROUP BY department_id;",
      "SELECT department_id, MIN(salary) AS min_sal, MAX(salary) AS max_sal FROM employees GROUP BY department_id HAVING salary > 12000;",
      "SELECT department_id, MIN(salary), MAX(salary) FROM employees WHERE salary > 12000 GROUP BY department_id;"
    ],
    "correctAnswer": 0,
    "explanation": "HAVING MAX(salary) > 12000 evalúa la condición después de agrupar. La opción D descartaría empleados individuales antes de calcular el mínimo del departamento.",
    "timeLimit": 180
  },
  {
    "id": 19,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Qué consulta cuenta cuántos empleados tienen registrada una comisión (commission_pct no nulo)?",
    "code": "-- Conteo de valores no nulos en una columna específica",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT COUNT(commission_pct) AS empleados_con_comision FROM employees;",
      "SELECT COUNT(*) AS empleados_con_comision FROM employees WHERE commission_pct = TRUE;",
      "SELECT SUM(commission_pct) AS empleados_con_comision FROM employees;",
      "SELECT COUNT(DISTINCT *) AS empleados_con_comision FROM employees WHERE commission_pct IS NOT NULL;"
    ],
    "correctAnswer": 0,
    "explanation": "COUNT(nombre_columna) omite automáticamente todos los valores NULL, contando únicamente los registros con valor real.",
    "timeLimit": 180
  },
  {
    "id": 20,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Cuál consulta SQL calcula el salario promedio de los empleados agrupados por departamento y puesto (job_id) simultáneamente?",
    "code": "-- Agrupación multinivel compuesta",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT department_id, job_id, AVG(salary) AS salario_medio FROM employees GROUP BY department_id, job_id;",
      "SELECT department_id, job_id, AVG(salary) AS salario_medio FROM employees GROUP BY department_id;",
      "SELECT department_id, job_id, AVG(salary) AS salario_medio FROM employees GROUP BY job_id;",
      "SELECT department_id, job_id, MEAN(salary) FROM employees GROUP BY (department_id + job_id);"
    ],
    "correctAnswer": 0,
    "explanation": "Para agrupar por dos dimensiones (departamento y puesto), se listan ambas columnas separadas por coma en la cláusula GROUP BY department_id, job_id.",
    "timeLimit": 180
  },
  {
    "id": 21,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Qué consulta devuelve el promedio salarial de aquellos puestos (job_id) cuyo promedio de salario sea estrictamente mayor a 8,000?",
    "code": "-- Agrupación con filtro sobre el promedio",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT job_id, AVG(salary) AS salario_promedio FROM employees GROUP BY job_id HAVING AVG(salary) > 8000;",
      "SELECT job_id, AVG(salary) AS salario_promedio FROM employees WHERE AVG(salary) > 8000 GROUP BY job_id;",
      "SELECT job_id, AVG(salary) AS salario_promedio FROM employees WHERE salary > 8000 GROUP BY job_id;",
      "SELECT job_id, AVG(salary) AS salario_promedio FROM employees GROUP BY job_id WHERE AVG(salary) > 8000;"
    ],
    "correctAnswer": 0,
    "explanation": "HAVING AVG(salary) > 8000 filtra los grupos cuyo promedio calculado excede 8000. WHERE salary > 8000 filtraría empleados antes del promedio alterando el resultado.",
    "timeLimit": 180
  },
  {
    "id": 22,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Cuál consulta obtiene los departamentos que tienen exactamente 1 empleado (departamentos unipersonales)?",
    "code": "-- Conteo exacto mediante HAVING",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT department_id, COUNT(*) AS total FROM employees WHERE department_id IS NOT NULL GROUP BY department_id HAVING COUNT(*) = 1;",
      "SELECT department_id, COUNT(*) AS total FROM employees WHERE COUNT(*) = 1 GROUP BY department_id;",
      "SELECT department_id FROM employees WHERE total = 1 GROUP BY department_id;",
      "SELECT department_id, COUNT(*) AS total FROM employees HAVING COUNT(*) = 1;"
    ],
    "correctAnswer": 0,
    "explanation": "Se agrupan los empleados por departamento y se restringe a los grupos donde COUNT(*) sea exactamente 1 mediante HAVING COUNT(*) = 1.",
    "timeLimit": 180
  },
  {
    "id": 23,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Qué consulta calcula la diferencia salarial entre el empleado que más gana y el que menos gana en toda la empresa?",
    "code": "-- Diferencia aritmética entre extremos agregados",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT (MAX(salary) - MIN(salary)) AS brecha_salarial FROM employees;",
      "SELECT TOP(salary) - BOTTOM(salary) AS brecha_salarial FROM employees;",
      "SELECT MAX(salary - MIN(salary)) FROM employees;",
      "SELECT DIFF(MAX(salary), MIN(salary)) FROM employees;"
    ],
    "correctAnswer": 0,
    "explanation": "Se restan los resultados de las dos funciones agregadas: MAX(salary) - MIN(salary).",
    "timeLimit": 180
  },
  {
    "id": 24,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Cuál consulta agrupa a los empleados por el año de contratación (YEAR de hire_date) y cuenta cuántos ingresaron en cada año?",
    "code": "-- Agrupación por función temporal extractora",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT EXTRACT(YEAR FROM hire_date) AS anio_ingreso, COUNT(*) AS total_ingresos FROM employees GROUP BY EXTRACT(YEAR FROM hire_date) ORDER BY anio_ingreso;",
      "SELECT YEAR(hire_date) AS anio_ingreso, COUNT(*) AS total_ingresos FROM employees ORDER BY anio_ingreso;",
      "SELECT hire_date, COUNT(*) FROM employees GROUP BY YEAR;",
      "SELECT EXTRACT(YEAR FROM hire_date) AS anio_ingreso, SUM(*) FROM employees GROUP BY hire_date;"
    ],
    "correctAnswer": 0,
    "explanation": "EXTRACT(YEAR FROM hire_date) obtiene el año de la fecha. Al proyectarlo y agruparlo con GROUP BY EXTRACT(YEAR FROM hire_date), se obtiene el conteo anual.",
    "timeLimit": 180
  },
  {
    "id": 25,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "medium",
    "level": 2,
    "question": "¿Qué consulta muestra los puestos de trabajo (job_id) donde trabajan empleados cuyo salario supere 10,000, pero únicamente mostrando los puestos donde existan al menos 2 personas con ese nivel salarial?",
    "code": "-- Combinación de WHERE previo y HAVING posterior",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT job_id, COUNT(*) AS empleados_senior FROM employees WHERE salary > 10000 GROUP BY job_id HAVING COUNT(*) >= 2;",
      "SELECT job_id, COUNT(*) AS empleados_senior FROM employees GROUP BY job_id HAVING salary > 10000 AND COUNT(*) >= 2;",
      "SELECT job_id, COUNT(*) AS empleados_senior FROM employees WHERE salary > 10000 AND COUNT(*) >= 2 GROUP BY job_id;",
      "SELECT job_id, COUNT(*) AS empleados_senior FROM employees HAVING COUNT(*) >= 2;"
    ],
    "correctAnswer": 0,
    "explanation": "El filtro WHERE salary > 10000 descarta empleados de menor salario y luego HAVING COUNT(*) >= 2 asegura que queden al menos dos empleados que cumplan la condición.",
    "timeLimit": 180
  },
  {
    "id": 26,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Cuál consulta realiza un INNER JOIN usando alias para mostrar el nombre del empleado, su salario y el nombre del departamento en el que trabaja?",
    "code": "-- Unión básica entre EMPLOYEES y DEPARTMENTS con alias e. y d.",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT e.first_name, e.last_name, e.salary, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;",
      "SELECT e.first_name, e.last_name, e.salary, d.department_name FROM employees e, departments d WHERE e.employee_id = d.department_id;",
      "SELECT employees.first_name, departments.department_name FROM employees JOIN departments USING (salary);",
      "SELECT e.first_name, e.last_name, e.salary, d.department_name FROM employees e FULL JOIN departments d ON e.job_id = d.department_id;"
    ],
    "correctAnswer": 0,
    "explanation": "Se unen las tablas employees (alias e) y departments (alias d) sobre la clave foránea e.department_id = d.department_id con sintaxis estándar INNER JOIN.",
    "timeLimit": 180
  },
  {
    "id": 27,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Qué consulta muestra el nombre de TODOS los departamentos y el apellido de sus empleados, incluyendo aquellos departamentos que actualmente no tienen ningún empleado (LEFT JOIN)?",
    "code": "-- Conservación de filas de la tabla izquierda sin coincidencias",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT d.department_name, e.last_name FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id;",
      "SELECT d.department_name, e.last_name FROM departments d INNER JOIN employees e ON d.department_id = e.department_id;",
      "SELECT d.department_name, e.last_name FROM departments d RIGHT JOIN employees e ON d.department_id = e.department_id WHERE e.last_name IS NULL;",
      "SELECT d.department_name, e.last_name FROM departments d CROSS JOIN employees e;"
    ],
    "correctAnswer": 0,
    "explanation": "Un LEFT JOIN desde departments hacia employees garantiza que todos los departamentos aparezcan en el resultado, rellenando con NULL cuando no haya empleados.",
    "timeLimit": 180
  },
  {
    "id": 28,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Cuál consulta une 3 tablas con alias para mostrar el nombre del empleado (e.), su puesto de trabajo (j.job_title) y el nombre de su departamento (d.department_name)?",
    "code": "-- Multi-JOIN de tres entidades",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT e.first_name, e.last_name, j.job_title, d.department_name FROM employees e INNER JOIN jobs j ON e.job_id = j.job_id INNER JOIN departments d ON e.department_id = d.department_id;",
      "SELECT e.first_name, e.last_name, j.job_title, d.department_name FROM employees e JOIN jobs j ON e.department_id = j.job_id JOIN departments d ON j.job_id = d.department_id;",
      "SELECT e.first_name, e.last_name, j.job_title, d.department_name FROM employees e, jobs j, departments d WHERE e.job_id = d.department_id;",
      "SELECT e.first_name, e.last_name, j.job_title, d.department_name FROM employees e LEFT JOIN jobs j ON e.salary = j.min_salary;"
    ],
    "correctAnswer": 0,
    "explanation": "Se encadenan los dos INNER JOIN: primero e.job_id = j.job_id para obtener el título del trabajo y luego e.department_id = d.department_id para el departamento.",
    "timeLimit": 180
  },
  {
    "id": 29,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Qué consulta calcula la cantidad de empleados por departamento mostrando el nombre del departamento (d.department_name), ordenando de mayor a menor cantidad de personal?",
    "code": "-- Agrupación con JOIN y función agregada COUNT",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT d.department_name, COUNT(e.employee_id) AS total_empleados FROM departments d INNER JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_name ORDER BY total_empleados DESC;",
      "SELECT d.department_name, COUNT(e.employee_id) AS total_empleados FROM departments d, employees e GROUP BY d.department_name;",
      "SELECT d.department_name, SUM(e.employee_id) FROM departments d JOIN employees e ON d.department_id = e.department_id;",
      "SELECT d.department_name, COUNT(*) FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id;"
    ],
    "correctAnswer": 0,
    "explanation": "Une departments con employees mediante INNER JOIN, agrupa por d.department_name y cuenta los employee_id asignados ordenando de mayor a menor.",
    "timeLimit": 180
  },
  {
    "id": 30,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Cuál consulta une cuatro tablas (EMPLOYEES, DEPARTMENTS, LOCATIONS, COUNTRIES) para mostrar el nombre del empleado, su departamento, la ciudad y el país donde trabaja?",
    "code": "-- Cadena relacional cuádruple de JOINs",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT e.first_name, e.last_name, d.department_name, l.city, c.country_name FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id JOIN countries c ON l.country_id = c.country_id;",
      "SELECT e.first_name, e.last_name, d.department_name, l.city, c.country_name FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON e.employee_id = l.location_id JOIN countries c ON l.country_id = c.country_id;",
      "SELECT e.first_name, e.last_name, d.department_name, l.city, c.country_name FROM employees e, departments d, locations l, countries c WHERE e.department_id = c.country_id;",
      "SELECT e.first_name, e.last_name, d.department_name, l.city, c.country_name FROM employees e JOIN countries c ON e.department_id = c.region_id;"
    ],
    "correctAnswer": 0,
    "explanation": "Sigue la jerarquía correcta del esquema: e.department_id = d.department_id -> d.location_id = l.location_id -> l.country_id = c.country_id.",
    "timeLimit": 180
  },
  {
    "id": 31,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Qué consulta muestra el nombre del departamento y el nombre completo del gerente o manager que lo dirige, uniendo DEPARTMENTS con EMPLOYEES por el manager_id?",
    "code": "-- Relación de jefatura de departamento",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT d.department_name, e.first_name, e.last_name FROM departments d INNER JOIN employees e ON d.manager_id = e.employee_id;",
      "SELECT d.department_name, e.first_name, e.last_name FROM departments d INNER JOIN employees e ON d.department_id = e.manager_id;",
      "SELECT d.department_name, e.first_name, e.last_name FROM departments d LEFT JOIN employees e ON d.location_id = e.employee_id;",
      "SELECT d.department_name, e.first_name, e.last_name FROM departments d JOIN employees e ON d.manager_id = e.department_id;"
    ],
    "correctAnswer": 0,
    "explanation": "En DEPARTMENTS, la columna d.manager_id apunta al e.employee_id del empleado que ejerce como director de dicho departamento.",
    "timeLimit": 180
  },
  {
    "id": 32,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Cuál consulta SQL devuelve los departamentos que NO tienen ningún empleado asociado (empleando LEFT JOIN y filtro de nulos)?",
    "code": "-- Detección de registros huérfanos mediante LEFT JOIN / IS NULL",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT d.department_id, d.department_name FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id WHERE e.employee_id IS NULL;",
      "SELECT d.department_id, d.department_name FROM departments d INNER JOIN employees e ON d.department_id = e.department_id WHERE e.employee_id IS NULL;",
      "SELECT d.department_id, d.department_name FROM departments d RIGHT JOIN employees e ON d.department_id = e.department_id WHERE d.department_id IS NULL;",
      "SELECT d.department_id, d.department_name FROM departments d FULL JOIN employees e ON d.department_id = e.department_id;"
    ],
    "correctAnswer": 0,
    "explanation": "Al hacer LEFT JOIN de departments hacia employees, aquellos departamentos sin coincidencias tendrán valores NULL en todas las columnas de e, permitiendo filtrar con WHERE e.employee_id IS NULL.",
    "timeLimit": 180
  },
  {
    "id": 33,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Qué consulta calcula el promedio salarial por cada región (REGIONS) uniendo toda la cadena geográfica desde EMPLOYEES hasta REGIONS?",
    "code": "-- Agregación a nivel continental/regional",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT r.region_name, ROUND(AVG(e.salary), 2) AS salario_medio_regional FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id JOIN countries c ON l.country_id = c.country_id JOIN regions r ON c.region_id = r.region_id GROUP BY r.region_name;",
      "SELECT r.region_name, AVG(e.salary) FROM employees e JOIN regions r ON e.department_id = r.region_id GROUP BY r.region_name;",
      "SELECT r.region_name, SUM(e.salary) FROM countries c JOIN regions r ON c.region_id = r.region_id GROUP BY r.region_name;",
      "SELECT r.region_name, AVG(e.salary) FROM employees e CROSS JOIN regions r GROUP BY r.region_name;"
    ],
    "correctAnswer": 0,
    "explanation": "Une la secuencia completa e -> d -> l -> c -> r, agrupa por el nombre de la región r.region_name y calcula el promedio salarial de sus empleados.",
    "timeLimit": 180
  },
  {
    "id": 34,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Cuál consulta muestra los empleados cuyo salario actual es menor que el salario mínimo (j.min_salary) o mayor que el salario máximo (j.max_salary) establecido para su puesto?",
    "code": "-- Validación de coherencia salarial contra catálogo de puestos",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT e.employee_id, e.first_name, e.last_name, e.salary, j.min_salary, j.max_salary FROM employees e JOIN jobs j ON e.job_id = j.job_id WHERE e.salary < j.min_salary OR e.salary > j.max_salary;",
      "SELECT e.employee_id, e.first_name, e.last_name, e.salary, j.min_salary, j.max_salary FROM employees e JOIN jobs j ON e.job_id = j.job_id WHERE e.salary BETWEEN j.min_salary AND j.max_salary;",
      "SELECT e.employee_id, e.first_name, e.last_name FROM employees e, jobs j WHERE e.salary != j.min_salary;",
      "SELECT e.employee_id, e.first_name, e.last_name FROM employees e JOIN jobs j ON e.salary = j.max_salary;"
    ],
    "correctAnswer": 0,
    "explanation": "Compara la columna de salario actual del empleado con los límites estipulados en la tabla JOBS mediante la condición WHERE e.salary < j.min_salary OR e.salary > j.max_salary.",
    "timeLimit": 180
  },
  {
    "id": 35,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Qué consulta une la tabla JOB_HISTORY con JOBS y EMPLOYEES para listar los puestos anteriores que desempeñó el empleado con id 101?",
    "code": "-- Historial laboral y puestos pasados",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT e.first_name, e.last_name, j.job_title, jh.start_date, jh.end_date FROM job_history jh JOIN employees e ON jh.employee_id = e.employee_id JOIN jobs j ON jh.job_id = j.job_id WHERE jh.employee_id = 101 ORDER BY jh.start_date;",
      "SELECT e.first_name, e.last_name, j.job_title, jh.start_date, jh.end_date FROM job_history jh JOIN employees e ON jh.job_id = e.job_id JOIN jobs j ON jh.employee_id = j.job_id WHERE jh.employee_id = 101;",
      "SELECT e.first_name, e.last_name, j.job_title FROM job_history jh, employees e WHERE jh.start_date = e.hire_date;",
      "SELECT e.first_name, e.last_name, j.job_title FROM job_history jh JOIN jobs j ON jh.department_id = j.job_id;"
    ],
    "correctAnswer": 0,
    "explanation": "Une job_history con employees por jh.employee_id = e.employee_id y con jobs por jh.job_id = j.job_id, filtrando por el empleado 101.",
    "timeLimit": 180
  },
  {
    "id": 36,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Cuál consulta devuelve el total de departamentos ubicados en cada ciudad (LOCATIONS), ordenando de mayor a menor cantidad de departamentos?",
    "code": "-- Agrupación de departamentos por ubicación geográfica",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT l.city, COUNT(d.department_id) AS total_departamentos FROM locations l INNER JOIN departments d ON l.location_id = d.location_id GROUP BY l.city ORDER BY total_departamentos DESC;",
      "SELECT l.city, COUNT(d.department_id) AS total_departamentos FROM locations l, departments d GROUP BY l.city;",
      "SELECT l.city, SUM(d.department_id) FROM locations l JOIN departments d ON l.location_id = d.location_id GROUP BY l.city;",
      "SELECT l.city, COUNT(*) FROM locations l LEFT JOIN departments d ON l.country_id = d.location_id;"
    ],
    "correctAnswer": 0,
    "explanation": "Une locations con departments por l.location_id = d.location_id, agrupa por l.city y proyecta el conteo de departamentos en cada urbe.",
    "timeLimit": 180
  },
  {
    "id": 37,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Qué consulta realiza un LEFT JOIN de EMPLOYEES con DEPARTMENTS y filtra para listar los empleados que NO tienen ningún departamento asignado?",
    "code": "-- Empleados sin departamento asignado (valor NULL)",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT e.employee_id, e.first_name, e.last_name, e.department_id FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id WHERE e.department_id IS NULL;",
      "SELECT e.employee_id, e.first_name, e.last_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id WHERE d.department_name IS NULL;",
      "SELECT e.employee_id, e.first_name FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id WHERE e.department_id = 0;",
      "SELECT e.employee_id, e.first_name FROM employees e CROSS JOIN departments d WHERE d.department_id IS NULL;"
    ],
    "correctAnswer": 0,
    "explanation": "Si un empleado no tiene departamento asignado en su registro (department_id IS NULL), esta consulta lo localiza directamente.",
    "timeLimit": 180
  },
  {
    "id": 38,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "hard",
    "level": 3,
    "question": "¿Cuál consulta une EMPLOYEES con DEPARTMENTS y calcula la masa salarial (SUM de salarios) por cada departamento, mostrando solo aquellos departamentos cuyo gasto salarial total sea superior a 50,000?",
    "code": "-- Masa salarial departamental filtrada con HAVING",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT d.department_name, SUM(e.salary) AS gasto_total FROM departments d JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_name HAVING SUM(e.salary) > 50000 ORDER BY gasto_total DESC;",
      "SELECT d.department_name, SUM(e.salary) AS gasto_total FROM departments d JOIN employees e ON d.department_id = e.department_id WHERE SUM(e.salary) > 50000 GROUP BY d.department_name;",
      "SELECT d.department_name, SUM(e.salary) AS gasto_total FROM departments d, employees e WHERE e.salary > 50000 GROUP BY d.department_name;",
      "SELECT d.department_name, AVG(e.salary) FROM departments d JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_name HAVING gasto_total > 50000;"
    ],
    "correctAnswer": 0,
    "explanation": "Une las tablas, agrupa por d.department_name y aplica HAVING SUM(e.salary) > 50000 para restringir el listado a los departamentos con presupuesto salarial mayor a 50,000.",
    "timeLimit": 180
  },
  {
    "id": 39,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "expert",
    "level": 4,
    "question": "¿Cuál consulta realiza un Self-Join en EMPLOYEES para listar el nombre y apellido de cada empleado junto con el nombre y apellido de su supervisor o jefe directo?",
    "code": "-- Auto-unión jerárquica: empleado (e.) y supervisor (m.)",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT e.first_name AS empleado_nombre, e.last_name AS empleado_apellido, m.first_name AS jefe_nombre, m.last_name AS jefe_apellido FROM employees e LEFT JOIN employees m ON e.manager_id = m.employee_id;",
      "SELECT e.first_name, e.last_name, m.first_name, m.last_name FROM employees e INNER JOIN employees m ON e.employee_id = m.manager_id;",
      "SELECT e.first_name, m.first_name FROM employees e, employees m WHERE e.employee_id = m.employee_id;",
      "SELECT e.first_name, m.first_name FROM employees e RIGHT JOIN employees m ON e.department_id = m.department_id;"
    ],
    "correctAnswer": 0,
    "explanation": "Se hace un LEFT JOIN de la tabla employees consigo misma: el alias e representa al empleado y m al manager, uniéndolos por e.manager_id = m.employee_id.",
    "timeLimit": 180
  },
  {
    "id": 40,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "expert",
    "level": 4,
    "question": "¿Qué consulta SQL utiliza un Self-Join para identificar a todos los empleados que ganan MÁS dinero que su propio jefe directo?",
    "code": "-- Comparación de atributos entre empleado y su respectivo jefe",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT e.first_name AS empleado, e.salary AS salario_empleado, m.first_name AS jefe, m.salary AS salario_jefe FROM employees e INNER JOIN employees m ON e.manager_id = m.employee_id WHERE e.salary > m.salary;",
      "SELECT e.first_name, e.salary, m.first_name, m.salary FROM employees e INNER JOIN employees m ON e.employee_id = m.manager_id WHERE e.salary > m.salary;",
      "SELECT e.first_name, e.salary FROM employees e WHERE e.salary > (SELECT MAX(salary) FROM employees);",
      "SELECT e.first_name, m.first_name FROM employees e JOIN employees m ON e.manager_id = m.employee_id HAVING e.salary > m.salary;"
    ],
    "correctAnswer": 0,
    "explanation": "Une al empleado con su jefe (e.manager_id = m.employee_id) y filtra en el WHERE donde e.salary > m.salary.",
    "timeLimit": 180
  },
  {
    "id": 41,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "expert",
    "level": 4,
    "question": "¿Cuál consulta SQL devuelve los empleados cuyo salario es estrictamente superior al salario promedio de toda la empresa?",
    "code": "-- Subconsulta escalar en la cláusula WHERE",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT employee_id, first_name, last_name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees) ORDER BY salary DESC;",
      "SELECT employee_id, first_name, last_name, salary FROM employees WHERE salary > AVG(salary) ORDER BY salary DESC;",
      "SELECT employee_id, first_name, last_name, salary FROM employees GROUP BY employee_id HAVING salary > AVG(salary);",
      "SELECT employee_id, first_name, last_name, salary FROM employees WHERE salary > ALL(salary);"
    ],
    "correctAnswer": 0,
    "explanation": "Como WHERE no admite funciones agregadas directas, se utiliza una subconsulta escalar independiente: (SELECT AVG(salary) FROM employees).",
    "timeLimit": 180
  },
  {
    "id": 42,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "expert",
    "level": 4,
    "question": "¿Qué consulta devuelve los empleados que ganan más que el salario promedio de SU PROPIO departamento (subconsulta correlacionada)?",
    "code": "-- Subconsulta correlacionada por departamento",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT e1.first_name, e1.last_name, e1.salary, e1.department_id FROM employees e1 WHERE e1.salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e2.department_id = e1.department_id);",
      "SELECT e1.first_name, e1.last_name, e1.salary, e1.department_id FROM employees e1 WHERE e1.salary > (SELECT AVG(e2.salary) FROM employees e2);",
      "SELECT e1.first_name, e1.last_name, e1.salary FROM employees e1 GROUP BY e1.department_id HAVING e1.salary > AVG(e1.salary);",
      "SELECT e1.first_name, e1.last_name FROM employees e1 JOIN employees e2 ON e1.salary > AVG(e2.salary);"
    ],
    "correctAnswer": 0,
    "explanation": "La subconsulta correlacionada calcula el promedio del departamento específico de e1: WHERE e2.department_id = e1.department_id.",
    "timeLimit": 180
  },
  {
    "id": 43,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "expert",
    "level": 4,
    "question": "¿Cuál consulta lista los departamentos que tienen al menos un empleado contratado utilizando el operador EXISTS?",
    "code": "-- Verificación de existencia semi-join con EXISTS",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT d.department_id, d.department_name FROM departments d WHERE EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.department_id);",
      "SELECT d.department_id, d.department_name FROM departments d WHERE EXISTS (SELECT COUNT(*) FROM employees);",
      "SELECT d.department_id, d.department_name FROM departments d WHERE d.department_id EXISTS (employees);",
      "SELECT d.department_id, d.department_name FROM departments d WHERE (SELECT 1 FROM employees e) IS NOT NULL;"
    ],
    "correctAnswer": 0,
    "explanation": "EXISTS devuelve verdadero tan pronto como la subconsulta correlacionada encuentra la primera fila coincidente en employees.",
    "timeLimit": 180
  },
  {
    "id": 44,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "expert",
    "level": 4,
    "question": "¿Qué consulta utiliza NOT EXISTS para encontrar los puestos de trabajo (JOBS) que NUNCA han sido ocupados en la historia por ningún empleado en la tabla JOB_HISTORY?",
    "code": "-- Anti-join con NOT EXISTS",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT j.job_id, j.job_title FROM jobs j WHERE NOT EXISTS (SELECT 1 FROM job_history jh WHERE jh.job_id = j.job_id);",
      "SELECT j.job_id, j.job_title FROM jobs j WHERE NOT EXISTS (SELECT * FROM employees e WHERE e.job_id = j.job_id);",
      "SELECT j.job_id, j.job_title FROM jobs j WHERE j.job_id NOT IN (NULL);",
      "SELECT j.job_id, j.job_title FROM jobs j JOIN job_history jh ON j.job_id != jh.job_id;"
    ],
    "correctAnswer": 0,
    "explanation": "NOT EXISTS evalúa que no exista ninguna fila en job_history vinculada a ese job_id, identificando puestos sin historial previo.",
    "timeLimit": 180
  },
  {
    "id": 45,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "expert",
    "level": 4,
    "question": "¿Cuál consulta SQL devuelve al empleado (o empleados) que tiene el salario más alto de toda la empresa sin usar LIMIT ni ORDER BY?",
    "code": "-- Subconsulta para valor extremo absoluto",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT employee_id, first_name, last_name, salary FROM employees WHERE salary = (SELECT MAX(salary) FROM employees);",
      "SELECT employee_id, first_name, last_name, salary FROM employees WHERE salary >= ALL(SELECT salary FROM departments);",
      "SELECT employee_id, first_name, last_name, salary FROM employees HAVING salary = MAX(salary);",
      "SELECT employee_id, first_name, last_name, salary FROM employees WHERE MAX(salary) = salary;"
    ],
    "correctAnswer": 0,
    "explanation": "La subconsulta (SELECT MAX(salary) FROM employees) obtiene el importe máximo absoluto y el WHERE filtra al empleado que percibe dicha cantidad exacta.",
    "timeLimit": 180
  },
  {
    "id": 46,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "expert",
    "level": 4,
    "question": "¿Qué consulta lista los empleados que fueron contratados antes que su propio jefe o supervisor?",
    "code": "-- Antigüedad: empleado con fecha anterior a su manager",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT e.first_name AS empleado, e.hire_date AS ingreso_empleado, m.first_name AS jefe, m.hire_date AS ingreso_jefe FROM employees e INNER JOIN employees m ON e.manager_id = m.employee_id WHERE e.hire_date < m.hire_date;",
      "SELECT e.first_name, e.hire_date, m.first_name, m.hire_date FROM employees e INNER JOIN employees m ON e.manager_id = m.employee_id WHERE e.hire_date > m.hire_date;",
      "SELECT e.first_name, m.first_name FROM employees e, employees m WHERE e.hire_date = m.hire_date;",
      "SELECT e.first_name, m.first_name FROM employees e JOIN employees m ON e.employee_id = m.manager_id WHERE e.hire_date < m.hire_date;"
    ],
    "correctAnswer": 0,
    "explanation": "Une al empleado con su jefe directo (e.manager_id = m.employee_id) y compara las fechas con e.hire_date < m.hire_date.",
    "timeLimit": 180
  },
  {
    "id": 47,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "expert",
    "level": 4,
    "question": "¿Cuál consulta obtiene los nombres de departamentos y sus ciudades para aquellos departamentos que se ubican en países con más de 2 ubicaciones (LOCATIONS) registradas?",
    "code": "-- Subconsulta con IN y agregación en tabla relacionada",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT d.department_name, l.city FROM departments d JOIN locations l ON d.location_id = l.location_id WHERE l.country_id IN (SELECT country_id FROM locations GROUP BY country_id HAVING COUNT(location_id) > 2);",
      "SELECT d.department_name, l.city FROM departments d JOIN locations l ON d.location_id = l.location_id WHERE COUNT(l.location_id) > 2;",
      "SELECT d.department_name, l.city FROM departments d, locations l WHERE l.country_id > 2;",
      "SELECT d.department_name, l.city FROM departments d JOIN locations l ON d.location_id = l.location_id HAVING COUNT(l.country_id) > 2;"
    ],
    "correctAnswer": 0,
    "explanation": "La subconsulta genera la lista de country_id que tienen más de dos sedes mediante GROUP BY country_id HAVING COUNT(location_id) > 2 y el WHERE principal filtra con IN.",
    "timeLimit": 180
  },
  {
    "id": 48,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "expert",
    "level": 4,
    "question": "¿Qué consulta calcula el porcentaje que representa el salario de cada empleado respecto a la masa salarial total de toda la empresa?",
    "code": "-- Cálculo de participación porcentual con subconsulta escalar",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT first_name, last_name, salary, ROUND((salary * 100.0) / (SELECT SUM(salary) FROM employees), 4) AS porcentaje_total FROM employees ORDER BY porcentaje_total DESC;",
      "SELECT first_name, last_name, salary, ROUND((salary * 100.0) / SUM(salary), 4) AS porcentaje_total FROM employees GROUP BY salary;",
      "SELECT first_name, last_name, salary, PERCENT(salary) FROM employees;",
      "SELECT first_name, last_name, salary, (salary / TOTAL(salary)) * 100 FROM employees;"
    ],
    "correctAnswer": 0,
    "explanation": "Divide salary entre la subconsulta escalar (SELECT SUM(salary) FROM employees) multiplicada por 100 para obtener el porcentaje exacto de la nómina global.",
    "timeLimit": 180
  },
  {
    "id": 49,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "expert",
    "level": 4,
    "question": "¿Cuál consulta SQL devuelve los empleados que han cambiado de puesto al menos dos veces (tienen 2 o más registros en JOB_HISTORY)?",
    "code": "-- Filtrado de historial laboral con subconsulta correlacionada/agrupada",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT e.employee_id, e.first_name, e.last_name FROM employees e WHERE e.employee_id IN (SELECT jh.employee_id FROM job_history jh GROUP BY jh.employee_id HAVING COUNT(*) >= 2);",
      "SELECT e.employee_id, e.first_name, e.last_name FROM employees e JOIN job_history jh ON e.employee_id = jh.employee_id WHERE COUNT(jh.job_id) >= 2;",
      "SELECT e.employee_id, e.first_name, e.last_name FROM employees e WHERE (SELECT COUNT(*) FROM job_history) >= 2;",
      "SELECT e.employee_id, e.first_name, e.last_name FROM employees e GROUP BY e.employee_id HAVING COUNT(job_id) >= 2;"
    ],
    "correctAnswer": 0,
    "explanation": "La subconsulta agrupa en job_history por employee_id y con HAVING COUNT(*) >= 2 extrae los identificadores de aquellos trabajadores con dos o más rotaciones.",
    "timeLimit": 180
  },
  {
    "id": 50,
    "category": "HR_DATABASE",
    "categoryLabel": "BD RECURSOS HUMANOS",
    "difficulty": "expert",
    "level": 4,
    "question": "¿Qué consulta identifica a los supervisores (managers) que tienen a su cargo a 6 o más empleados bajo su mando directo?",
    "code": "-- Conteo de subordinados agrupando por supervisor",
    "imageUrl": "bd_hr.png",
    "imageAlt": "Diagrama Relacional BD Recursos Humanos (HR)",
    "options": [
      "SELECT m.employee_id, m.first_name, m.last_name, COUNT(e.employee_id) AS empleados_a_cargo FROM employees m INNER JOIN employees e ON m.employee_id = e.manager_id GROUP BY m.employee_id, m.first_name, m.last_name HAVING COUNT(e.employee_id) >= 6 ORDER BY empleados_a_cargo DESC;",
      "SELECT m.employee_id, m.first_name, m.last_name, COUNT(*) FROM employees m WHERE m.manager_id >= 6 GROUP BY m.employee_id;",
      "SELECT m.employee_id, m.first_name, m.last_name FROM employees m WHERE (SELECT COUNT(*) FROM employees e WHERE e.manager_id = m.employee_id) < 6;",
      "SELECT m.employee_id, m.first_name, m.last_name, SUM(e.employee_id) FROM employees m JOIN employees e ON m.manager_id = e.employee_id GROUP BY m.employee_id;"
    ],
    "correctAnswer": 0,
    "explanation": "Une al jefe m con sus subordinados directos e (m.employee_id = e.manager_id), agrupa por los datos del jefe y filtra con HAVING COUNT(e.employee_id) >= 6.",
    "timeLimit": 180
  }
]

def generate_ts():
    """Genera el archivo TypeScript con el banco de 50 preguntas para el juego SQL Arcade."""
    header = """import { Question } from '../models/question.model';

/**
 * BANCO DE PREGUNTAS: BASE DE DATOS RECURSOS HUMANOS (HR)
 * Total: 50 preguntas de consultas SQL completas (SELECT, WHERE, LIKE, JOIN, GROUP BY, HAVING, subconsultas).
 * Todas las preguntas tienen un tiempo límite estricto de 180 segundos y muestran permanentemente el diagrama relacional bd_hr.png.
 */
export const QUESTIONS_HR_DATA: Question[] = """
    
    ts_code = header + json.dumps(QUESTIONS, indent=2, ensure_ascii=False) + ";\n"
    
    out_path = Path(__file__).resolve().parent.parent / "src" / "app" / "data" / "questions_hr.ts"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(ts_code)
    print(f"Archivo generado exitosamente en: {out_path} ({len(QUESTIONS)} preguntas)")

if __name__ == "__main__":
    generate_ts()
