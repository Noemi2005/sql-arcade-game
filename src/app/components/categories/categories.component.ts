import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameService } from "../../services/game.service";

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./categories.component.html"
})
export class CategoriesComponent {
  levelList = [
    {
      level: 1,
      tag: "TEORÍA BÁSICA",
      title: "Teoría y Conceptos SQL",
      desc: "Estructura de datos (Tabla, Registro, Columna), PK, FK, tipos de comandos (DDL, DML, DQL, DCL, TCL) y funciones CREATE, ALTER, DROP, TRUNCATE.",
      codeSnippet: "DDL vs DML vs DQL • PK & FK"
    },
    {
      level: 2,
      tag: "FUNDAMENTOS",
      title: "DDL Fundamental",
      desc: "Creación de tablas, tipos de datos estándar (INT, VARCHAR, DECIMAL, TIMESTAMP) y opciones por defecto.",
      codeSnippet: "CREATE TABLE productos (id INT...)"
    },
    {
      level: 3,
      tag: "RESTRICCIONES",
      title: "Constraints de Columna",
      desc: "Reglas de unicidad y validez: PRIMARY KEY, NOT NULL, UNIQUE, DEFAULT y expresiones CHECK.",
      codeSnippet: "edad INT CHECK (edad >= 18)"
    },
    {
      level: 4,
      tag: "RELACIONES",
      title: "Foreign Key & 1:N",
      desc: "Claves foráneas, tablas padre vs hija, integridad referencial y referencias primarias.",
      codeSnippet: "FOREIGN KEY (dep_id) REFERENCES..."
    },
    {
      level: 5,
      tag: "INTEGRIDAD",
      title: "Acciones Referenciales",
      desc: "Comportamientos en borrado y actualización: ON DELETE CASCADE, SET NULL, RESTRICT y ON UPDATE.",
      codeSnippet: "ON DELETE CASCADE"
    },
    {
      level: 6,
      tag: "AVANZADO",
      title: "Constraints Nombradas",
      desc: "Restricciones a nivel de tabla, nombres explícitos y claves primarias/únicas compuestas.",
      codeSnippet: "PRIMARY KEY (col1, col2)"
    },
    {
      level: 7,
      tag: "ESTRUCTURA",
      title: "ALTER TABLE",
      desc: "Modificación de estructuras existentes: agregar, modificar y eliminar columnas y restricciones.",
      codeSnippet: "ALTER TABLE t ADD CONSTRAINT..."
    },
    {
      level: 8,
      tag: "DESTRUCCIÓN",
      title: "DROP & Dependencias",
      desc: "Eliminación de objetos DDL y orden jerárquico correcto de creación y borrado de tablas.",
      codeSnippet: "DROP TABLE / DROP CONSTRAINT"
    },
    {
      level: 9,
      tag: "EXPERTO",
      title: "DDL Debugger",
      desc: "Detección de errores sintácticos y conceptuales complejos en scripts de código SQL real.",
      codeSnippet: "🐛 DDL DEBUGGER RETOS"
    },
    {
      level: 10,
      tag: "DESAFÍO EXTREMO",
      title: "Sintaxis DDL Pura",
      desc: "Sintaxis estricta de CREATE TABLE, opciones en código, restricciones nombradas y en línea.",
      codeSnippet: "⚡ RETOS SINTAXIS EXTREMA"
    }
  ];

  constructor(public gameService: GameService) {}
}
