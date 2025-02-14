import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  telephone: Yup.string().nullable(),
  age: Yup.number().min(0, "Invalid age").nullable(),
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
  skills: Yup.array().of(Yup.string()).nullable(),
  language1: Yup.array().of(Yup.string()).nullable(),
  language2: Yup.array().of(Yup.string()).nullable(),
  language1Level: Yup.array().of(Yup.string()).nullable(),
  language2Level: Yup.array().of(Yup.string()).nullable(),
  softSkills: Yup.array().of(Yup.string()).nullable(),

  socials: Yup.string().nullable(),
  weblink: Yup.string().url("Invalid URL").nullable(),
  cv: Yup.string().nullable(),

  status: Yup.string().required("Status is required"),
  
});

export const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    age: "",
    wageExpectation: "",
    wageActual: "",
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