import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./components/Modal/index";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <div className="App">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onclick={() => (modalOpen ? close() : open())}
      >
        Launch Modal
      </motion.button>

      {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </div>
  );
};

export default App;
