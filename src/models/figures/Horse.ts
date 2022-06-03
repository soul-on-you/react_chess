import { Cell } from "../Cell";
import { Figure, FigureTypes } from "./IFigure";
import logoBlack from "../../assets/black-horse.svg";
import logoWhite from "../../assets/white-horse.svg";
import { Colors } from "../Colors";

export class Horse extends Figure {
  readonly logo: string;
  readonly type: FigureTypes = FigureTypes.HORSE;

  constructor(cell: Cell, color: Colors) {
    super(cell, color);
    this.logo = color === Colors.BLACK ? logoBlack : logoWhite;
  }

  public override canMove(target: Cell): boolean {
    if (super.canMove(target)) {
      const dx = Math.abs(this.cell.x - target.x);
      const dy = Math.abs(this.cell.y - target.y);
      return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
    }
    return false;
  }

  moveFigure(target: Cell): void {}
}
