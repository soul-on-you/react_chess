import { Cell } from "../Cell";
import { Figure, FigureTypes } from "./IFigure";

export class Knight extends Figure {
  moveFigure(target: Cell): void {
    throw new Error("Method not implemented.");
  }
  type: FigureTypes = FigureTypes.KNIGHT;
}
