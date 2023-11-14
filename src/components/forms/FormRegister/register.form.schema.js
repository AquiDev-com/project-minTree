import { z } from "zod";

const RegisterFormSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório."),
    email: z
      .string()
      .email("Forneça um e-mail válido.")
      .min(1, "O e-mail é obrigatório."),
    password: z.string().min(3, "São necessários pelo menos 3 caracteres."),

    c_password: z.string().min(1, "Confirmar a senha é obrigatório."),
  })
  .refine(({ password, c_password }) => password === c_password, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
  });

export default RegisterFormSchema;
