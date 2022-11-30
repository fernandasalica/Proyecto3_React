import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const singupSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "EL nombre de usuario debe tener al menos 3 caracteres")
    .max(20, "Sólo se permiten hasta 20 caracteres")
    .required("Requerido"),
  password: yup
    .string()
    .min(5)
    .max(128, "El máximo de caracteres es 128")
    .matches(passwordRules, {
      message:
        "La contraseña debe tener min 5 letras, mayúscula, minúsculas y un dígito",
    })
    .required("Requerido"),
  confirmpass: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir")
    .required("Requerido"),
});

export const recoverySchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
});
