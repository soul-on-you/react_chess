import { nanoid } from "nanoid";
import { Colors } from "./Colors";
import { IFigure } from "./figures/IFigure";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: IFigure | null;
  available:boolean ;
  id:string;

  constructor(x:number, y:number, color: Colors, figure: IFigure|null) {
      this.id = nanoid(10);
      this.x = x;
      this.y = y;
      this.color = color;
      this.figure = figure; 
      this.available = false;
  }
}
