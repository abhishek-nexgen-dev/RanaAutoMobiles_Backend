export interface IRole extends Document {
  name: string; // e.g., 'SuperAdmin', 'Admin'
  description: string;
}