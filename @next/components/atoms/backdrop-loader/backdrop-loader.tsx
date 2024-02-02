import { Backdrop, CircularProgress } from "@mui/material";

/**
 * Represents Page Level Loader.
 * @return - Loading component if loading is true.
 */
export const BackdropLoader = ({
  loading,
}: {
  loading: boolean;
}): JSX.Element => {
  return (
    <Backdrop
      sx={{
        color: (theme) => theme.palette.common.lightOrange,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={loading}
      data-testid="backdrop-loader"
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
