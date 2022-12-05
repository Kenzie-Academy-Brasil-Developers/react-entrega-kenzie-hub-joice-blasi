import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome precisa ter pelo menos 3 caracteres")
    .max(200, "O nome pode ter no máximo 200 caracteres"),

  email: yup
    .string()
    .required("O email é obrigatório")
    .email("É necessário fornecer um email válido"),

  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(
      /(?=.*?[A-Z])/,
      "A senha deve conter pelo menos uma letra maiúscula"
    )
    .matches(
      /(?=.*?[a-z])/,
      "A senha deve conter pelo menos uma letra minúscula"
    )
    .matches(/(?=.*?[0-9])/, "A senha deve conter pelo menos um número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha deve conter pelo menos um caracter especial"
    )
    .matches(/.{8,}/, "A senha deve conter pelo menos 8 caracteres"),

  passwordConfirmation: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([yup.ref("password")], "A senha não confere"),

  bio: yup
    .string()
    .required("A bio é obrigatória")
    .min(3, "A bio precisa ter pelo menos 3 caracteres")
    .max(200, "A bio pode ter no máximo 200 caracteres"),

  contact: yup
    .string()
    .required("O contato é obrigatório")
    .min(3, "O contato precisa ter pelo menos 3 caracteres")
    .max(100, "O contato pode ter no máximo 100 caracteres"),

  course_module: yup.string().required("Campo obrigatório"),
});
