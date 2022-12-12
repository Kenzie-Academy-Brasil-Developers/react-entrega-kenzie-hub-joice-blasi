import * as yup from "yup";

export const UpdateTechSchema = yup.object().shape({
  status: yup.string().required("O status é obrigatório"),
});
