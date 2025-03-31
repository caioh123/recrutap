import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),
  
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters"),

  skills: Yup.array()
    .of(Yup.string())
    .required("Skills are required")
    .min(1, "Add at least one skill"),

  education: Yup.string(),

  languages: Yup.array().of(
    Yup.object({
      name: Yup.string(),
      level: Yup.string()
    })
  ),

  pcd: Yup.boolean()
    .required("PCD field is required"),

  country: Yup.string(),
  state: Yup.string(),
  city: Yup.string(),
  neighbourhood: Yup.string(),
  
  alocation: Yup.string()
    .oneOf(['remote', 'hybrid', 'onsite'], "Invalid allocation type"),

  travel: Yup.boolean()
    .required("Travel field is required"),

  duration: Yup.string(),

  quantity: Yup.number()
    .required("Quantity is required")
    .min(1, "Quantity must be at least 1")
    .integer("Quantity must be an integer"),

  jobOwner: Yup.string(),

  priority: Yup.string()
    .oneOf(['low', 'medium', 'high'], "Invalid priority"),

  status: Yup.string()
    .oneOf(['draft', 'published', 'closed'], "Invalid status"),

  internalNotes: Yup.string(),

  salary: Yup.number()
    .min(0, "Salary cannot be negative")
    .typeError("Salary must be a valid number"),

  companyId: Yup.string()
    .required("Company ID is required")
    .uuid("Invalid company ID"),

    responsible: Yup.string()
    .required("Responsible field is required"),

    department: Yup.string()
    .required("Department field is required"),

    companyOwner: Yup.string()
    .required("Company Owner field is required"),

    telephone: Yup.string()
    .required("Telephone is required")
    
});

export const initialValues = {
  title: "",
  description: "",
  skills: [],
  education: "",
  language1: "",
  language2: "",
  language1Level: "",
  language2Level: "",
  pcd: false,
  country: "",
  state: "",
  city: "",
  neighbourhood: "",
  allocation: "",
  travel: false,
  duration: "",
  quantity: 0,
  jobOwner: "",
  priority: "",
  status: "",
  internalNotes: "",
  salary: 0,
  companyId: "",
  candidates: [],
  tags: [],
  responsible: "",
  department: "",
  telephone: ""
  
}
