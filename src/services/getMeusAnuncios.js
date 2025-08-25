import { baseUrl } from "../utils/baseUrlApi";

export async function getMeusAnuncios() {
  try {
    const userId = JSON.parse(localStorage.getItem("userId"));

    const response = await fetch(
      `${baseUrl}/api/anuncios/getAllMyAnuncios?userId=${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar anúncios:", error);
    throw error;
  }
}
