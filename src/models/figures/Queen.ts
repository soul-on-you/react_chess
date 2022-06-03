import { Cell } from "../Cell";
import { Figure, FigureTypes } from "./IFigure";
import logoBlack from "../../assets/black-queen.svg";
import logoWhite from "../../assets/white-queen.svg";
import { Colors } from "../Colors";

export class Queen extends Figure {
  readonly logo: string;
  readonly type: FigureTypes = FigureTypes.QUEEN;

  constructor(cell: Cell, color: Colors) {
    super(cell, color);
    this.logo = color === Colors.BLACK ? logoBlack : logoWhite;
  }

  public override canMove(target: Cell): boolean {
    if (super.canMove(target)) {
      if (this.cell.isEmptyVertical(target)) return true;
      if (this.cell.isEmptyHorizontal(target)) return true;
      if (this.cell.isEmptyDiagonal(target)) return true;
    }
    return false;
  }

  moveFigure(target: Cell): void {}
}
