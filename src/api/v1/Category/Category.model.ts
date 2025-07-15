import mongoose, { Schema } from 'mongoose';
import { ICategory } from './Category.type';

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      unique: true,
      trim: true,
      maxlength: [100, 'Category name cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Category description is required'],
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    categoryImage: {
      type: String,
      required: [true, 'Category image is required'],
    },


    Products:[{
     type: Schema.Types.ObjectId,
      ref: 'Product',
    }],

    isActive: {
      type: Boolean,
      default: true, // Default to active
    },
    isPinned: {
      type: Boolean,
      default: false, // Default to not pinned
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

CategorySchema.index.name;


export default mongoose.model<ICategory>('Category', CategorySchema);
