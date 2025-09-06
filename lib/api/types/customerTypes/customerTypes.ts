export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contactNumber?: string;
  address?: string;
  role?: "admin" | "customer";
}

export interface AuthenticateUser {
  id: number;
  name: string;
}
