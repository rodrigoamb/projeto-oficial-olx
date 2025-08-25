import { baseUrl } from "../utils/baseUrlApi";

export async function registraNovoUsuario(data) {
  try {
    const response = await fetch(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (response.ok) {
      return json;
    }
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
  }
}
