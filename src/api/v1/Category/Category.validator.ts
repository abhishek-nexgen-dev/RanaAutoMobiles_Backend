import zod from 'zod';


export let Category_Validator = zod.object({
    name: zod.string().min(1, "Category name is required").max(100, "Category name cannot exceed 100 characters"),
    description: zod.string().min(1, "Category description is required").max(500, "Description cannot exceed 500 characters"),
}).strict();