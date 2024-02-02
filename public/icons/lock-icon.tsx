import { SvgIcon } from "@mui/material";
import type { SxProps } from "@mui/material";

interface IconProps {
  width?: string;
  height?: string;
  sx?: SxProps;
}

export function LockIcon(props: IconProps): JSX.Element {
  const { width = "100px", height = "118px", sx = {} } = props;

  return (
    <SvgIcon sx={{ width, height, ...sx }}>
      <svg viewBox="0 0 100 118" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.5668 14.5144C40.1504 11.3515 44.8466 9.4375 50.0013 9.4375C61.2196 9.4375 70.3138 18.5317 70.3138 29.75H75.0008C76.6031 29.75 78.1703 29.9007 79.6888 30.1888V29.75C79.6888 13.354 66.3973 0.0625 50.0013 0.0625C42.4754 0.0625 35.5936 2.869 30.363 7.4856C28.4221 9.19872 28.2374 12.1609 29.9505 14.1019C31.6636 16.0428 34.6258 16.2275 36.5668 14.5144Z"
          fill="#5235E8"
        />
        <path
          opacity="0.4"
          d="M0 54.75C0 40.9429 11.1929 29.75 25 29.75H75C88.8071 29.75 100 40.9429 100 54.75V92.25C100 106.057 88.8071 117.25 75 117.25H25C11.1929 117.25 0 106.057 0 92.25V54.75Z"
          fill="#5235E8"
        />
        <path
          d="M62.5 73.5C62.5 80.4036 56.9036 86 50 86C43.0964 86 37.5 80.4036 37.5 73.5C37.5 66.5964 43.0964 61 50 61C56.9036 61 62.5 66.5964 62.5 73.5Z"
          fill="#5235E8"
        />
      </svg>
    </SvgIcon>
  );
}
