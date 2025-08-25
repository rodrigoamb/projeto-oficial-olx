import { baseUrl } from "../utils/baseUrlApi";

export async function fazerLogin(data) {
  try {
    const response = await fetch(`${baseUrl}/api/auth/login`, {
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
    console.error("Erro ao fazer login do usuário:", error);
  }
}
