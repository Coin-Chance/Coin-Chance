import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
// import { paths } from "@root/paths";
import { GUEST_PATH } from "@routes";
// import { Issuer } from "@enums/auth";
import { useSelector } from "@store";
import { useRouter } from "next/navigation";
import { TableLoader } from "@atoms";

// const loginPaths: Record<Issuer, string> = {
//   [Issuer.JWT]: paths.auth.jwt.login,
//   [Issuer.SLACK]: paths.auth.slack.login,
// };

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard(props: any): JSX.Element | null {
  const { children } = props;
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [checked, setChecked] = useState<boolean>(false);

  const check = useCallback(() => {
    if (!isAuthenticated) {
      const searchParams = new URLSearchParams({
        returnTo: window.location.pathname + window.location.search,
      }).toString();
      const href = GUEST_PATH?.root;
      router.push(href);
    } else {
      setChecked(true);
    }
    setChecked(true);
  }, [isAuthenticated, router]);

  // Only check on mount, this allows us to redirect the user manually when auth state changes
  useEffect(() => {
    check();
  }, [check]);

  if (!checked) {
    return <TableLoader />;
  }

  // If got here, it means that the redirect did not occur, and that tells us that the user is
  // authenticated / authorized.

  return <>{children}</>;
}
