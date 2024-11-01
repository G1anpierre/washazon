"use client";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import styles from "./ProfileClient.module.css";

import React from "react";

export const ProfileClient = () => {
  const { user, error, isLoading } = useUser();

  //   if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <div className={styles.container}>
      <Image
        src={user.picture || ""}
        alt={user.name || ""}
        width={24}
        height={24}
      />
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div>
        <Link href="/api/auth/logout">
          <div>Logout</div>
        </Link>
      </div>
    </div>
  ) : (
    <Link href="/api/auth/login">
      <div>Login</div>
    </Link>
  );
};
