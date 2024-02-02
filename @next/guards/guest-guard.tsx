"use client";
import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import { GUEST_PATH } from "@routes";
import { useSelector } from "@store";
import { useRouter } from "next/navigation";
import { TableLoader } from "@atoms";

interface GuestGuardProps {
  children: ReactNode;
}

export function GuestGuard(props: GuestGuardProps): JSX.Element | null {
  const { children } = props;
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const [checked, setChecked] = useState<boolean>(false);

  const check = useCallback(() => {
    if (isAuthenticated) {
      router.replace(GUEST_PATH.root);
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, router]);

  // Only check on mount, this allows us to redirect the user manually when auth state changes
  useEffect(() => {
    check();
  }, [check]);

  if (!checked) {
    return <TableLoader />;
  }

  // If got here, it means that the redirect did not occur, and that tells us that the user is authorized.

  return <>{children}</>;
}
