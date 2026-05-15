import { useEffect, useState } from "react";

const STORAGE_KEY = "mk_auth_v1";
const EXPECTED_EMAIL = "mahpil@gmail.com";
const EXPECTED_PASSWORD = "mahpil@9899";

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => {
    try {
      l();
    } catch {
      // ignore listener errors
    }
  });
}

export function isAuthed(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function signIn(email: string, password: string): boolean {
  const ok =
    email.trim().toLowerCase() === EXPECTED_EMAIL &&
    password === EXPECTED_PASSWORD;
  if (ok) {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage failure (private mode, etc.)
    }
    notify();
  }
  return ok;
}

export function signOut(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore storage failure
  }
  notify();
}

/** Reactive hook for components that need to follow auth state changes. */
export function useAuth(): boolean {
  const [authed, setAuthed] = useState<boolean>(() => isAuthed());

  useEffect(() => {
    const handle = () => setAuthed(isAuthed());
    listeners.add(handle);
    // Sync across tabs / windows
    window.addEventListener("storage", handle);
    return () => {
      listeners.delete(handle);
      window.removeEventListener("storage", handle);
    };
  }, []);

  return authed;
}
