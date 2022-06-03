import { Cell } from "../Cell";
import { Figure, FigureTypes } from "./IFigure";
import logoBlack from "../../assets/black-knight.svg";
import logoWhite from "../../assets/white-knight.svg";
import { Colors } from "../Colors";

enum Direction {
  DOWN = "DOWN",
  UP = "UP",
}

export class Knight extends Figure {
  readonly logo: string;
  readonly type: FigureTypes = FigureTypes.KNIGHT;

  private isFirstStepDone: boolean = false;

  constructor(cell: Cell, color: Colors) {
    super(cell, color);
    this.logo = color === Colors.BLACK ? logoBlack : logoWhite;
  }

  public override canMove(target: Cell): boolean {
    if (super.canMove(target)) {
      const direction =
        this.cell.figure!.color === Colors.WHITE
          ? Direction.DOWN
          : Direction.UP;

      const delta = direction === Direction.DOWN ? 1 : -1;

      if (target.x === this.cell.x) {
        if (
          (target.y === this.cell.y + delta ||
            (!this.isFirstStepDone &&
              target.y === this.cell.y + delta * 2 &&
              this.cell._board
                .getCell(target.x, target.y - delta)
                .isEmpty())) &&
          target.isEmpty()
        )
          return true;
      }

      if (
        target.y === this.cell.y + delta &&
        (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
        target.figure &&
        this.isEnemy(target.figure)
      )
        return true;
    }
    return false;
  }

  moveFigure(target: Cell): void {
    this.isFirstStepDone = true;
  }
}
