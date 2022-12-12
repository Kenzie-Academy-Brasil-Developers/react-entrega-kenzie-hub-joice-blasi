import * as yup from "yup";

export const CreateTechSchema = yup.object().shape({
  title: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome precisa ter pelo menos 3 caracteres")
    .max(30, "O nome pode ter no máximo 30 caracteres"),

  status: yup.string().required("O status é obrigatório"),
});
