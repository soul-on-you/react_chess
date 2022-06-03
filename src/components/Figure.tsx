import React from "react";
import { IFigure } from "../models/figures/IFigure";

export interface IFigureComponentProps {
  figure: Required<IFigure>;
}

export default function FigureComponent({ figure }: IFigureComponentProps) {
  return (
    <img
      src={figure.logo}
      style={{ width: 52, height: 52, position: "relative" }}
      alt={figure.type}
    />
  );
}
