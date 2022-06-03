import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { Horse } from "./figures/Horse";
import { King } from "./figures/King";
import { Knight } from "./figures/Kinght";
import { Queen } from "./figures/Queen";
import { Tower } from "./figures/Tower";

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2)
          row.push(new Cell(this, j, i, Colors.WHITE, null)); // добавляем белые
        else row.push(new Cell(this, j, i, Colors.BLACK, null)); // добавляем черные
      }

      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number): Cell {
    if (x < 8 && y < 8) return this.cells[y][x];
    throw new Error("Can't get figure, out of board range");
  }

  public initFigures() {
    this.addKnights();
    this.addTowers();
    this.addHorses();
    this.addBishops();
    this.addQueens();
    this.addKings();
  }

  public highlightCells(selectedCell: Cell | null): void {
    // if (selectedCell?.figure)
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        row[j].available = !!selectedCell?.figure?.canMove(row[j]);
      }
    }
  }

  public getCopy(this: Board): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }

  private addKnights(): void {
    for (let i = 0; i < 8; i++) new Knight(this.getCell(i, 1), Colors.WHITE);
    for (let i = 0; i < 8; i++) new Knight(this.getCell(i, 6), Colors.BLACK);
  }
  private addTowers(): void {
    new Tower(this.getCell(0, 0), Colors.WHITE);
    new Tower(this.getCell(7, 0), Colors.WHITE);
    new Tower(this.getCell(0, 7), Colors.BLACK);
    new Tower(this.getCell(7, 7), Colors.BLACK);
  }
  private addHorses(): void {
    new Horse(this.getCell(1, 0), Colors.WHITE);
    new Horse(this.getCell(6, 0), Colors.WHITE);
    new Horse(this.getCell(1, 7), Colors.BLACK);
    new Horse(this.getCell(6, 7), Colors.BLACK);
  }
  private addBishops(): void {
    new Bishop(this.getCell(2, 0), Colors.WHITE);
    new Bishop(this.getCell(5, 0), Colors.WHITE);
    new Bishop(this.getCell(2, 7), Colors.BLACK);
    new Bishop(this.getCell(5, 7), Colors.BLACK);
  }
  private addQueens(): void {
    new Queen(this.getCell(3, 0), Colors.WHITE);
    new Queen(this.getCell(4, 7), Colors.BLACK);
  }
  private addKings(): void {
    new King(this.getCell(4, 0), Colors.WHITE);
    new King(this.getCell(3, 7), Colors.BLACK);
  }
}
