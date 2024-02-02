import { SxProps } from "@mui/material";

export interface IGenericDialog {
  open: boolean;
  setOpen?(value: boolean): void;
  children?: React.ReactNode;
  dialogTitle?: string | JSX.Element;
  size?: string | number;
  sx?: SxProps;
}
