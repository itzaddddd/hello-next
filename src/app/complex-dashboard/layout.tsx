import React, { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
  notifications: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  login: ReactNode;
};

export default function DashboardLayout(
  { 
    children,
    notifications,
    users,
    revenue,
    login
  }: DashboardLayoutProps
) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1}} >
          {notifications}
        </div>
      </div>
    </div>
  ) : (
    <div>
      {login}
    </div>
  )
}
