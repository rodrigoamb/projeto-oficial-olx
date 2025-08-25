export default function DetalhesMeusAnuncios() {
  return (
    <main className="flex overflow-hidden">
      <div className="flex-1 hidden lg:block">
        <div className="h-full flex flex-col items-center justify-center">
          <img
            src={
              "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            loading="lazy"
            alt="foto anúncio"
            className="rounded-lg w-[500px]"
          />
        </div>
      </div>
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Editar anúncio
            </h3>
            <p className="mt-3">Edite seus anúncios</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 mt-12 lg:pb-12"
          >
            <div>
              <label className="font-medium">Titulo do anúncio</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Preço</label>
              <input
                type="number"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Descrição curta</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Descrição Completa</label>
              <textarea
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>

            <div>
              <label className="font-medium">Link da imagem</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
            >
              Editar anúncio
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
