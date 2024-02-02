import { SvgIcon } from "@mui/material";
import type { SxProps } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IconProps {
  width?: string;
  height?: string;
  sx?: SxProps;
}

export function TimeDividerIcon(props: IconProps): JSX.Element {
  const matches = useMediaQuery("(min-width:600px)");
  const {
    width = matches ? "30px" : "20px",
    height = matches ? "100px" : "80px",
    sx = {},
  } = props;

  return (
    <SvgIcon sx={{ width, height, ...sx }}>
      <svg viewBox="0 0 8 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.99414 24.4063C2.96289 24.4063 2.07747 24.0417 1.33789 23.3125C0.608724 22.5729 0.244141 21.6875 0.244141 20.6562C0.244141 19.6354 0.608724 18.7604 1.33789 18.0313C2.07747 17.3021 2.96289 16.9375 3.99414 16.9375C4.99414 16.9375 5.86914 17.3021 6.61914 18.0313C7.36914 18.7604 7.74414 19.6354 7.74414 20.6562C7.74414 21.3437 7.56706 21.974 7.21289 22.5469C6.86914 23.1094 6.41602 23.5625 5.85352 23.9062C5.29102 24.2396 4.67122 24.4063 3.99414 24.4063ZM3.99414 7.59375C2.96289 7.59375 2.07747 7.22917 1.33789 6.5C0.608724 5.77083 0.244141 4.88542 0.244141 3.84375C0.244141 2.82292 0.608724 1.95312 1.33789 1.23438C2.07747 0.505207 2.96289 0.140623 3.99414 0.140623C4.99414 0.140623 5.86914 0.505207 6.61914 1.23438C7.36914 1.95312 7.74414 2.82292 7.74414 3.84375C7.74414 4.54167 7.56706 5.17708 7.21289 5.75C6.86914 6.3125 6.41602 6.76042 5.85352 7.09375C5.29102 7.42708 4.67122 7.59375 3.99414 7.59375Z"
          fill="#5235E8"
          fill-opacity="0.5"
        />
      </svg>
    </SvgIcon>
  );
}
