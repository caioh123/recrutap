import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  telephone: Yup.string().nullable(),
  age: Yup.number().min(0, "Invalid age").required("Age is required."),
  wageExpectation: Yup.number().min(0, "Invalid salary expectation").nullable(),
  wageActual: Yup.number().min(0, "Invalid actual salary").nullable(),
  lastCompany: Yup.string().nullable(),
  seniority: Yup.string().nullable(),
  gender: Yup.string().nullable(),
  pcd: Yup.boolean().nullable(),

  country: Yup.string().nullable(),
  state: Yup.string().nullable(),
  city: Yup.string().nullable(),
  neighbourhood: Yup.string().nullable(),

  begin: Yup.date().nullable(),
  allocation: Yup.string().nullable(),
  realocation: Yup.boolean().nullable(),
  travel: Yup.boolean().nullable(),

  education: Yup.string().nullable(),
  skills: Yup.array().nullable(),
  language1: Yup.array().of(Yup.string()).nullable(),
  language2: Yup.array().of(Yup.string()).nullable(),
  language1Level: Yup.array().of(Yup.string()).nullable(),
  language2Level: Yup.array().of(Yup.string()).nullable(),
  softSkills: Yup.array().of(Yup.string()).nullable(),

  socials: Yup.string().nullable(),
  weblink: Yup.string().nullable(),
  cv: Yup.string().nullable(),

  languages: Yup.array().of(Yup.string()).min(1, 'At least one language must be selected'),
  
  
});

export const initialValues = {
    name: "",
    email: "",
    telephone: "",
    age: 0,
    wageExpectation: 0,
    wageActual: 0,
    lastCompany: "",
    seniority: "",
    gender: "",
    pcd: false,
  
    country: "",
    state: "",
    city: "",
    neighbourhood: "",
  
    begin: "",
    allocation: "",
    realocation: false,
    travel: false,
    softSkills: [],
  
    education: "",
    skills: [],
    language1: "",
    language1Level: "",
    language2: "",
    language2Level: "",
  
    socials: "",
    weblink: "",
    cv: "",

    status: "",
  };