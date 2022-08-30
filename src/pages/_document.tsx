import { Html, Head, Main, NextScript } from 'next/document'
import Modal from 'react-modal'
// import ChirpModal from '../Modals/ChirpModal.js'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  )
}
