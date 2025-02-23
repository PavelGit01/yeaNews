import { ReactNode } from "react";
import { IPagginationProps } from "../../model/types/types";
import PagginationButtons from "../PagginationButtons/PagginationButtons";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: ReactNode;
}

const Paggination = ({
  top,
  bottom,
  children,
  ...props
}: Props & IPagginationProps) => {
  return (
    <>
      {top && <PagginationButtons {...props} />}
      {children}
      {bottom && <PagginationButtons {...props} />}
    </>
  );
};

export default Paggination;
