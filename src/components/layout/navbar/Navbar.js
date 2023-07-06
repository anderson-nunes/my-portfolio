import { Link } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import Modal from "react-modal"


export function Navbar() {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div>
        <div className={styles.content}>
          <h2>anderson</h2>
          <h2>anderson</h2>
        </div>
      </div>
      <div className={styles.container}>
        <HiOutlineMenuAlt3 className={styles.open} onClick={openModal} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Menu Modal"
          overlayClassName={styles.modal_overlay}
          className={styles.moda_content}
        >
          <FiX className={styles.close} onClick={closeModal} />
          <div className={styles.open_modal}>
            <ul>
              <li>HOME</li>
              <li>CONTATO</li>
              <li>CONTATO</li>
            </ul>
          </div>
        </Modal>
      </div>
    </nav>
  );
}
