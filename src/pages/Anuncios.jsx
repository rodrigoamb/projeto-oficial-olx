import { useEffect, useState } from "react";
import BodyList from "../components/BodyList";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FormAddAnuncio from "../components/FormAddAnuncio";
import Modal from "../components/Modal";
import ModalDeleteContent from "../components/ModalDeleteContent";
import { getMeusAnuncios } from "../services/getMeusAnuncios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Anuncios() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [anunciosData, setAnunciosData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAnuncios = async () => {
      setLoading(true);
      toast.loading("Carregando anúncios...");
      const response = await getMeusAnuncios();

      setAnunciosData(response);
      toast.dismiss();
      setLoading(false);
      toast.success("Anúncios carregados com sucesso!");
    };
    fetchAnuncios();
  }, []);

  return (
    <div>
      {loading ? null : (
        <>
          <Header titulo={"Meus anúncios"} setOpen={setOpen} />
          <BodyList
            titulo={"Meus anúncios"}
            setOpenModal={setOpenModal}
            anunciosData={anunciosData}
          />
          <Footer />

          <Drawer
            open={open}
            setOpen={setOpen}
            tituloDrawer={"Adicionar anúncio"}
          >
            <FormAddAnuncio />
          </Drawer>

          <Modal open={openModal} setOpen={setOpenModal}>
            <ModalDeleteContent setOpen={setOpenModal} />
          </Modal>
        </>
      )}
    </div>
  );
}
