import { ReactElement } from "react";
export declare type Props = {
    children: ReactElement[] | ReactElement;
    maxPercent?: number;
    minPercent?: number;
    changePerChar: number;
    startAtChar?: number;
    stopAtChar?: number;
};
export declare function ReactFontSizeByTextLength({ children, maxPercent, minPercent, changePerChar, startAtChar, stopAtChar, }: Props): JSX.Element;
