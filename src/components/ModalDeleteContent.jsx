export default function ModalDeleteContent({ setOpen }) {
  return (
    <div>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
            <ExclamationTriangleIcon
              aria-hidden="true"
              className="size-6 text-red-600"
            />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <DialogTitle
              as="h3"
              className="text-base font-semibold text-gray-900"
            >
              Deletar anúncio
            </DialogTitle>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Tem certeza que deseja deletar este anúncio? Esta ação não pode
                ser desfeita.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
        >
          Deletar
        </button>
        <button
          type="button"
          data-autofocus
          onClick={() => setOpen(false)}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
