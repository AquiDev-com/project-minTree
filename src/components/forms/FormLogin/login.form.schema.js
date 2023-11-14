import { z } from "zod";

const LoginFormSchema = z.object({
  email: z.string().email("O e-mail é obrigatório.").min(1),
  password: z.string().min(1, "A senha é obrigatória."),
});

export default LoginFormSchema;
