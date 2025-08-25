import { useState } from "react";

export default function FormAddAnuncio() {
  const [dataAddAnuncios, setDataAddAnuncios] = useState({
    titulo: "",
    preco: 0,
    descricaoCurta: "",
    descricaoCompleta: "",
    imagem: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDataAddAnuncios((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmitAddAnuncio(event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log("Dados do anúncio:", dataAddAnuncios);
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmitAddAnuncio}>
      <div>
        <label className="font-medium">Título do anúncios</label>
        <input
          type="text"
          name="titulo"
          value={dataAddAnuncios.titulo}
          onChange={handleChange}
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#6F0AD6] shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Preço de venda</label>
        <input
          type="number"
          name="preco"
          value={dataAddAnuncios.preco}
          onChange={handleChange}
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#6F0AD6] shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Descrição curta</label>
        <input
          type="text"
          name="descricaoCurta"
          value={dataAddAnuncios.descricaoCurta}
          onChange={handleChange}
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#6F0AD6] shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Descrição detalhada</label>
        <textarea
          name="descricaoCompleta"
          value={dataAddAnuncios.descricaoCompleta}
          onChange={handleChange}
          required
          className="w-full mt-2 px-3 py-2 h-[250px] text-gray-500 bg-transparent outline-none border focus:border-[#6F0AD6] shadow-sm rounded-lg resize-none"
        ></textarea>
      </div>
      <div>
        <label className="font-medium">Link da imagem</label>
        <input
          type="text"
          name="imagem"
          value={dataAddAnuncios.imagem}
          onChange={handleChange}
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#6F0AD6] shadow-sm rounded-lg"
        />
      </div>
      <div>
        <button className="w-full px-4 py-2 text-white font-medium bg-[#6F0AD6] hover:bg-[#812fd3] active:bg-[#6F0AD6] rounded-lg duration-150 cursor-pointer">
          Adicionar
        </button>
      </div>
    </form>
  );
}
