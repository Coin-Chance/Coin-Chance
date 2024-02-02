import { SvgIcon } from "@mui/material";
import type { SxProps } from "@mui/material";

interface IconProps {
  width?: string;
  height?: string;
  sx?: SxProps;
}

export function DirectIcon(props: IconProps): JSX.Element {
  const { width = "44px", height = "44px", sx = {} } = props;

  return (
    <SvgIcon sx={{ width, height, ...sx }}>
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse
          cx="11.0026"
          cy="7.33332"
          rx="3.66667"
          ry="3.66667"
          fill="#5235E8"
        />
        <ellipse
          opacity="0.4"
          cx="11"
          cy="14.6667"
          rx="5.5"
          ry="3.66667"
          fill="#5235E8"
        />
        <circle cx="33.0026" cy="29.3333" r="3.66667" fill="#5235E8" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.6263 3.66666C20.6263 2.90726 21.2419 2.29166 22.0013 2.29166C32.8859 2.29166 41.7096 11.1154 41.7096 22C41.7096 22.7594 41.094 23.375 40.3346 23.375C39.5752 23.375 38.9596 22.7594 38.9596 22C38.9596 12.6342 31.3671 5.04166 22.0013 5.04166C21.2419 5.04166 20.6263 4.42605 20.6263 3.66666ZM3.66797 20.625C4.42736 20.625 5.04297 21.2406 5.04297 22C5.04297 31.3658 12.6355 38.9583 22.0013 38.9583C22.7607 38.9583 23.3763 39.5739 23.3763 40.3333C23.3763 41.0927 22.7607 41.7083 22.0013 41.7083C11.1167 41.7083 2.29297 32.8846 2.29297 22C2.29297 21.2406 2.90858 20.625 3.66797 20.625Z"
          fill="#5235E8"
        />
        <ellipse
          opacity="0.4"
          cx="33"
          cy="36.6667"
          rx="5.5"
          ry="3.66667"
          fill="#5235E8"
        />
      </svg>
    </SvgIcon>
  );
}
