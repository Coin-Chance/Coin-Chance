import { SvgIcon } from "@mui/material";
import type { SxProps } from "@mui/material";

interface IconProps {
  width?: string;
  height?: string;
  sx?: SxProps;
}

export function CloseIcon(props: IconProps): JSX.Element {
  const { width = "30px", height = "30px", sx = {} } = props;

  return (
    <SvgIcon sx={{ width, height, ...sx }}>
      <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM20.0382 20.038C19.5988 20.4774 18.8865 20.4774 18.4472 20.038L15 16.5909L11.5528 20.0381C11.1135 20.4774 10.4012 20.4774 9.96186 20.0381C9.52252 19.5987 9.52252 18.8864 9.96186 18.4471L13.409 14.9999L9.96188 11.5528C9.52254 11.1134 9.52254 10.4011 9.96188 9.96178C10.4012 9.52244 11.1135 9.52244 11.5529 9.96178L15 13.4089L18.4471 9.96179C18.8865 9.52245 19.5988 9.52245 20.0381 9.96179C20.4775 10.4011 20.4775 11.1134 20.0381 11.5528L16.591 14.9999L20.0382 18.4471C20.4775 18.8864 20.4775 19.5987 20.0382 20.038Z"
          fill="#717184"
        />
      </svg>
    </SvgIcon>
  );
}
