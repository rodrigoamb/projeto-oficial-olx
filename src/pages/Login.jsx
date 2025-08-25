import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fazerLogin } from "../services/fazerLogin";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const [dataCredentials, setDataCredentials] = useState({
    email: "",
    senha: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChangeCredentials(event) {
    const { name, value } = event.target;
    setDataCredentials((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmitToLogin(event) {
    event.preventDefault();

    if (
      dataCredentials.email.trim() === "" ||
      dataCredentials.senha.trim() === ""
    ) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    const response = await fazerLogin(dataCredentials);

    if (response) {
      const token = response.token;
      const userId = response.userId;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", JSON.stringify(userId));

      setDataCredentials({
        email: "",
        senha: "",
      });

      navigate("/meus-anuncios");
    } else {
      toast.error("Erro ao fazer login. Verifique suas credenciais.");
    }

    setLoading(false);
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <img
            src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Anúncie e venda com facilidade
            </h3>
            <p className="">
              Não possui uma conta?{" "}
              <Link
                to={"/cadastro"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
          <div className="relative">
            <span className="block w-full h-px bg-gray-300"></span>
            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
              Faça login na sua conta
            </p>
          </div>
          <form onSubmit={handleSubmitToLogin} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={dataCredentials.email}
                onChange={handleChangeCredentials}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#6F0AD6] shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Senha</label>
              <input
                type="password"
                name="senha"
                value={dataCredentials.senha}
                onChange={handleChangeCredentials}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#6F0AD6] shadow-sm rounded-lg"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={
                loading
                  ? "w-full px-4 py-2 text-white font-medium bg-gray-500 rounded-lg duration-150"
                  : "w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              }
            >
              {loading ? "Carregando..." : "Entrar"}
            </button>
          </form>
        </div>
        <div className="text-center">
          <a href="javascript:void(0)" className="hover:text-indigo-600">
            Esqueceu sua senha?
          </a>
        </div>
      </div>
    </main>
  );
}
