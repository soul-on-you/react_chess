import { Cell } from "../Cell";
import { Colors } from "../Colors";
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
  logo: string;
  cell: Cell;
  readonly color: Colors;
  type: FigureTypes;

  canMove(target: Cell): boolean;
  moveFigure(target: Cell): void;
}

export abstract class Figure implements IFigure {
  id: string;
  cell: Cell;
  color: Colors;
  abstract logo: string;
  abstract readonly type: FigureTypes;

  constructor(cell: Cell, color: Colors) {
    this.id = nanoid(10);
    this.cell = cell;
    this.cell.figure = this;
    this.color = color;
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false;
    if (target.figure?.type === FigureTypes.KING) return false;
    return true;
  }

  abstract moveFigure(target: Cell): void;
}
