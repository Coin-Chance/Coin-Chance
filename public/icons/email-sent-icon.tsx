import { SvgIcon } from "@mui/material";
import type { SxProps } from "@mui/material";

interface IconProps {
  width?: string;
  height?: string;
  sx?: SxProps;
}

export function EmailSentIcon(props: IconProps): JSX.Element {
  const { width = "233px", height = "238px", sx = {} } = props;

  return (
    <SvgIcon sx={{ width, height, ...sx }}>
      <svg viewBox="0 0 233 238" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.8516 99.3439L34.1349 238L222.799 234.953L232.692 101.441L125.624 18.8613L19.8516 99.3439Z"
          fill="#DAD3FF"
        />
        <path
          d="M76.6625 25.6781L107.774 2L214.842 84.5795L204.954 218.096L16.2892 221.143L2.00586 82.4826L19.6606 69.0503L76.6625 25.6781Z"
          stroke="#5235E8"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M2.00586 82.4827L214.842 84.5795L129.035 143.448L117.235 131.845L101.85 145.454L2.00586 82.4827Z"
          fill="#5235E8"
        />
        <path
          d="M34.0566 103.678V14.0469H186.881C186.503 14.0469 186.503 103.197 186.881 103.197L129.452 144.139L117.195 132.047L101.818 145.261L34.0566 103.678Z"
          fill="white"
          stroke="#5235E8"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M16.2871 221.143L117.233 131.845L204.951 218.096"
          stroke="#5235E8"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M129.033 143.448L214.84 84.584"
          stroke="#5235E8"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
        <path
          d="M101.85 145.454L2.00586 82.4827"
          stroke="#5235E8"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
        <path
          d="M116.171 120.72C134.337 120.72 149.063 105.994 149.063 87.8278C149.063 69.662 134.337 54.9358 116.171 54.9358C98.0055 54.9358 83.2793 69.662 83.2793 87.8278C83.2793 105.994 98.0055 120.72 116.171 120.72Z"
          fill="#DED8FF"
        />
        <path
          d="M110.622 115.375C128.788 115.375 143.514 100.648 143.514 82.4826C143.514 64.3168 128.788 49.5906 110.622 49.5906C92.4567 49.5906 77.7305 64.3168 77.7305 82.4826C77.7305 100.648 92.4567 115.375 110.622 115.375Z"
          stroke="#5235E8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M95.4766 82.5158L107.902 94.2007L125.766 70.9707"
          stroke="#5235E8"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}
