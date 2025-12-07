import { formatCurrency } from "@/utils/format";
import { twMerge } from "tailwind-merge";

interface Props {
  amount: number;
  className?: string;
}

const PriceFormatter = ({ amount, className }: Props) => {
  return (
    <span
      className={twMerge("text-sm font-semibold text-darkColor", className)}
    >
      {formatCurrency(amount)}
    </span>
  );
};

export default PriceFormatter;
