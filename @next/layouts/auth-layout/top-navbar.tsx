import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { authNavData } from "./navbar.data";
import Link from "next/link";
import Image from "next/image";
import { WebsiteLogo } from "public/images";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import { GUEST_PATH } from "@routes";
import { useRouter, usePathname } from "next/navigation";
import { LogoutIcon } from "public/icons";
import { authActions, useSelector } from "@store";
import { useDispatch } from "@store";
import useMediaQuery from "@mui/material/useMediaQuery";
import toast from "react-hot-toast";

export function TopNavBar() {
  const matches = useMediaQuery("(min-width:1400px)");
  const dispatch = useDispatch();
  const pathname = usePathname();
  const { isAuthenticated, user } = useSelector((state: any) => state.auth);

  const { push } = useRouter();
  const { palette } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
    handleClose();
    push(GUEST_PATH.root);
    toast.success("You have been Logged out", {
      style: {
        color: "black",
        background: "rgba(188, 176, 244, 0.9)",
      },
    });
  };
  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
        borderBottom: `1px solid ${palette.common.lightOrange}`,
        margin: "0 auto",
        maxWidth: matches ? "82rem" : "70rem",
        width: "100%",
        py: 1,
      }}
      position="static"
    >
      <Toolbar
        sx={{
          "&.MuiToolbar-root": {
            px: 0,
          },
        }}
      >
        <Link href="/">
          <Image src={WebsiteLogo} alt="website-logo" />
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pathname !== "/create-new-password" &&
              authNavData.map(({ id, name, link }) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
          </Menu>
        </Box>
        <Stack
          direction="row"
          spacing={"12px"}
          sx={{
            pt: "4px",
            pl: "42px",
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
          }}
        >
          {pathname !== "/create-new-password" &&
            authNavData.map((page) => (
              <Link
                key={page.id}
                href={page.link}
                onClick={handleCloseNavMenu}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color:
                      pathname === page?.link
                        ? "primary.main"
                        : "secondary.light",
                    px: "10px",
                    py: "4px",
                  }}
                >
                  {page.name}
                </Typography>
              </Link>
            ))}
        </Stack>
        {isAuthenticated ? (
          <>
            {" "}
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ width: "fit-content", padding: "0px", minWidth: 40 }}
            >
              <Avatar
                sx={{
                  boxShadow: 3,
                  width: "40px",
                  fontSize: "14px",
                  height: "40px",
                  backgroundColor: "#ADA3F5",
                  transform: "capti",
                }}
              >
                {user?.email && user.email.slice(0, 2).toUpperCase()}
              </Avatar>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                "& .css-h9akuy-MuiPaper-root-MuiMenu-paper-MuiPopover-paper": {
                  borderRadius: "16px",
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{
                  borderBottom: `1px solid ${palette?.common?.lightOrange}`,
                  mx: 1,
                  py: 1,
                }}
              >
                <Avatar
                  sx={{
                    boxShadow: 3,
                    width: "40px",
                    fontSize: "14px",
                    height: "40px",
                    backgroundColor: "#ADA3F5",
                  }}
                >
                  {user?.email && user.email.slice(0, 2).toUpperCase()}
                </Avatar>
                <Typography
                  fontSize={10}
                  fontWeight={500}
                  sx={{ pl: "8px" }}
                  color="secondary.light"
                >
                  {user?.email}
                </Typography>
              </MenuItem>
              <MenuItem sx={{ py: 1, mx: 2 }} onClick={logoutHandler}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <LogoutIcon />
                  <Typography
                    variant="caption"
                    fontWeight={500}
                    color="error.main"
                    sx={{ pl: "8px" }}
                  >
                    Logout
                  </Typography>
                </Box>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            {pathname !== "/forgot-password" &&
              pathname !== "/sign-in" &&
              pathname !== "/create-new-password" && (
                <Button
                  onClick={() => {
                    push(GUEST_PATH.signIn);
                  }}
                  variant="outlined"
                  sx={{
                    height: "2.5rem",
                    minWidth: "8rem",
                    width: "8rem",
                  }}
                >
                  Sign in
                </Button>
              )}
            {pathname === "/sign-in" && (
              <Button
                onClick={() => {
                  push(GUEST_PATH.signUp);
                }}
                variant="outlined"
                sx={{
                  height: "2.5rem",
                  minWidth: "8rem",
                  width: "8rem",
                }}
              >
                Sign Up
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
