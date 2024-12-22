export type UserType = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
};
export type UserCrudType = {
  name: string;
  email: string;
  passwordHash: string;
  isAdmin: boolean;
};
