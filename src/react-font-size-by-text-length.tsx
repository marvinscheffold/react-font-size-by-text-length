import React, { ReactElement } from "react";

export type Props = {
  children: ReactElement[] | ReactElement;
  maxPercent?: number;
  minPercent?: number;
  changePerChar: number;
  startAtChar?: number;
  stopAtChar?: number;
};

export function ReactFontSizeByTextLength({
  children,
  maxPercent = 100,
  minPercent = 0,
  changePerChar,
  startAtChar = 0,
  stopAtChar = Infinity,
}: Props) {
  const fontSizeInPercent = getNewFontSizeInPercent(
    maxPercent,
    minPercent,
    changePerChar,
    startAtChar,
    stopAtChar,
    Array.isArray(children)
      ? getNumberOfCharsForMultipleChildren(children)
      : getNumberOfCharsForSingleChild(children)
  );

  return <span style={{ fontSize: `${fontSizeInPercent}%` }}>{children}</span>;
}

const getNumberOfCharsForSingleChild = (child: ReactElement): number => {
  return child.props.children.length;
};

const getNumberOfCharsForMultipleChildren = (
  children: ReactElement[]
): number => {
  let returnable = 0;
  children.forEach((child) => {
    if (child.props.children) {
      returnable += child.props.children.length;
    } else {
      returnable += 1;
    }
  });

  return returnable;
};

const getNewFontSizeInPercent = (
  maxPercent: number,
  minPercent: number,
  changePerChar: number,
  startAtChar: number,
  stopAtChar: number,
  numberOfChars: number
): number => {
  const numberOfCharsAdjusted = Math.min(numberOfChars, stopAtChar);

  const numberOfCharToConsiderForCalculation = Math.max(
    0,
    numberOfCharsAdjusted - (startAtChar - 1)
  );

  const fontSizeInPercent = Math.max(
    minPercent,
    maxPercent - changePerChar * numberOfCharToConsiderForCalculation
  );
  return fontSizeInPercent;
};
