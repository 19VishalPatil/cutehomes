export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contactNumber?: string;
  address?: string;
}

export interface AuthenticateUser {
  id: number;
  name: string;
}
