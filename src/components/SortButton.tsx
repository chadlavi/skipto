import { ButtonHTMLAttributes } from "react";

export const SortButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className=" align-baseline" />
);
