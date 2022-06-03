import { nanoid } from "nanoid";
import { Board } from "./Board";
import { Colors } from "./Colors";
import { IFigure } from "./figures/IFigure";

export class Cell {
  private readonly _board: Board;
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: IFigure | null;
  available: boolean;
  id: string;

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: IFigure | null
  ) {
    this._board = board;
    this.id = nanoid(10);
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.available = false;
  }

  public moveFigure(target: Cell) {
    if (this.figure && this.figure.canMove(target)) {
      this.figure?.moveFigure(target);
      target.figure = this.figure;
      target.figure.cell = target;
      this.figure = null;
    }
  }

  isEmpty(): boolean {
    return this.figure === null;
  }

  public isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) return false;

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);

    for (let y = min + 1; y < max; y++)
      if (!this._board.getCell(this.x, y).isEmpty()) return false;

    return true;
  }
  public isEmptyHorizontal(target: Cell): boolean {
    if (this.y !== target.y) return false;

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);

    for (let x = min + 1; x < max; x++)
      if (!this._board.getCell(x, this.y).isEmpty()) return false;

    return true;
  }
  public isEmptyDiagonal(target: Cell): boolean {
    const x = Math.abs(target.x - this.x);
    const y = Math.abs(target.y - this.y);

    if (x !== y) return false;

    const dx = this.x < target.x ? 1 : -1;
    const dy = this.y < target.y ? 1 : -1;

    for (let i = 1; i < y; i++)
      if (!this._board.getCell(this.x + dx * i, this.y + dy * i).isEmpty())
        return false;

    return true;
  }
}
