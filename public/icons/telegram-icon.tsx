import { SvgIcon } from "@mui/material";
import type { SxProps } from "@mui/material";

interface IconProps {
  width?: string;
  height?: string;
  sx?: SxProps;
}

export function TelegramIcon(props: IconProps): JSX.Element {
  const { width = "29px", height = "24px", sx = {} } = props;

  return (
    <SvgIcon sx={{ width, height, ...sx }}>
      <svg viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.75059 10.5511L25.8609 0.131204C26.9947 -0.358805 28.2232 0.594699 28.0299 1.81464L24.7334 22.6149C24.5297 23.8997 22.9396 24.3911 22.0466 23.4452L16.6368 17.7147C15.5759 16.5909 15.4927 14.8614 16.4409 13.6411L20.2607 8.72499C20.479 8.44396 20.1342 8.07424 19.8387 8.27252L12.2441 13.3673C10.9553 14.2319 9.39159 14.5876 7.85566 14.3654L2.14787 13.5399C0.584269 13.3138 0.300354 11.1779 1.75059 10.5511Z"
          fill="#717184"
        />
      </svg>
    </SvgIcon>
  );
}
