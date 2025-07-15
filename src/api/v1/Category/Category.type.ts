export interface ICategory {
  name: string;
  description: string;
  categoryImage: string;
  isActive: boolean;
  isPinned?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
