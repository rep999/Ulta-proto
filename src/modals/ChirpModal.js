import React from 'react'
import Modal from 'react-modal'

export const ChirpModal = (props) => (
  <Modal
    id="confirmationModal"
    isOpen={props.modalOpen}
    style={{
      content: {
        color: 'white',
        borderRadius: '23px',
        width: '420px',
        overflow: 'none',
        marginLeft: '41.9vw',
        marginTop: '36vh',
        height: '245px',
      },
    }}
    onRequestClose={() => props.setModalOpen(false)}
  >
    <div className="chirpModalContainer">
      <button
        className="chirpModalCancelButton"
        onClick={() => props.setModalOpen(false)}
      ></button>
      <div className="chirpModalTitleContainer">
        <h2 className="chirpModalTitle">Zookeeper not running</h2>
      </div>
      <p className="chirpModalModalBody">
        Not enough zookeepers are running. Kafka couldn’t start up because
        zookeeper is not available. <br /> Error Message: : {props.errorMessage}
      </p>
    </div>
  </Modal>
)
