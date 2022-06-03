import { Cell } from "../Cell";
import { Figure, FigureTypes } from "./IFigure";
import logoBlack from "../../assets/black-tower.svg";
import logoWhite from "../../assets/white-tower.svg";
import { Colors } from "../Colors";

export class Tower extends Figure {
  readonly logo: string;
  readonly type: FigureTypes = FigureTypes.TOWER;

  constructor(cell: Cell, color: Colors) {
    super(cell, color);
    this.logo = color === Colors.BLACK ? logoBlack : logoWhite;
  }

  public override canMove(target: Cell): boolean {
    if (super.canMove(target)) {
      if (this.cell.isEmptyVertical(target)) return true;
      if (this.cell.isEmptyHorizontal(target)) return true;
    }
    return false;
  }

  moveFigure(target: Cell): void {}
}
