import { Cell } from "../Cell";
import { Colors } from "../Colors";
import logo from "../../assets/black-bishop.svg";
import { nanoid } from "nanoid";

export enum FigureTypes {
  TOWER = "Ладья",
  HORSE = "Конь",
  BISHOP = "Слон",
  QUEEN = "Королева",
  KING = "Король",
  KNIGHT = "Пешка",
}

export interface IFigure {
  id: string;
  logo: typeof logo | null;
  cell: Cell;
  color: Colors;
  type: FigureTypes;

  canMove(target: Cell): boolean;
  moveFigure(target: Cell): void;
}

export abstract class Figure implements IFigure {
  id: string;
  logo: string | null;
  cell: Cell;
  color: Colors;
  abstract type: FigureTypes;

  constructor(cell: Cell, color: Colors) {
    this.id = nanoid(10);
    this.logo = logo;
    this.cell = cell;
    this.cell.figure = this;
    this.color = color;
  }

  canMove(target: Cell): boolean {
    return true;
  }

  abstract moveFigure(target: Cell): void;
}

