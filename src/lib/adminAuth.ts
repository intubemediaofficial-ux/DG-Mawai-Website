const ADMIN_EMAIL = "Dgmawainew@gmail.com";
const ADMIN_PASSWORD_HASH = "AjeetKing@123";
const AUTH_KEY = "dg-mawai-admin-auth-v1";

export function verifyAdmin(email: string, password: string): boolean {
  return (
    email.toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
    password === ADMIN_PASSWORD_HASH
  );
}

export function isAdminLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(AUTH_KEY) === "true";
}

export function loginAdmin(): void {
  window.sessionStorage.setItem(AUTH_KEY, "true");
}

export function logoutAdmin(): void {
  window.sessionStorage.removeItem(AUTH_KEY);
}
