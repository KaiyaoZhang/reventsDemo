import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

const HostDetailModal = ({hostedBy, hostPhotoURL}) => (
   <Modal trigger={<a>{hostedBy}</a>}>
    <Modal.Header>Host Info</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='small' src={hostPhotoURL} />
      <Modal.Description>
        <Header>Hello Everyone!</Header>
        <p>
          I am {hostedBy}, welcome to join my event!
        </p>
        <p>If you like it, please give me a <strong>thumb up!</strong></p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default HostDetailModal
