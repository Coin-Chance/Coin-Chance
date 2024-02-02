import { SvgIcon } from "@mui/material";
import type { SxProps } from "@mui/material";

interface IconProps {
  width?: string;
  height?: string;
  sx?: SxProps;
}

export function TickIcon(props: IconProps): JSX.Element {
  const { width = "150px", height = "150px", sx = {} } = props;

  return (
    <SvgIcon sx={{ width, height, ...sx }}>
      <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity="0.4"
          d="M137.5 75C137.5 109.518 109.518 137.5 75 137.5C40.4822 137.5 12.5 109.518 12.5 75C12.5 40.4822 40.4822 12.5 75 12.5C109.518 12.5 137.5 40.4822 137.5 75Z"
          fill="#49B540"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M102.878 52.5501C104.921 54.1395 105.29 57.0846 103.7 59.1281L78.6564 91.3272C74.7582 96.3392 67.4256 96.9896 62.706 92.742L46.8643 78.4844C44.94 76.7526 44.784 73.7887 46.5158 71.8644C48.2477 69.9402 51.2115 69.7842 53.1358 71.516L68.9776 85.7736C69.6518 86.3804 70.6993 86.2875 71.2562 85.5715L96.3 53.3724C97.8893 51.3289 100.834 50.9607 102.878 52.5501Z"
          fill="#49B540"
        />
      </svg>
    </SvgIcon>
  );
}
