import React from 'react'
import Container from '../container'
import SideHeaders from '../sideheaders'
import ContactContent from './contact-content'

const ContactSection = () => {
  return (
    <div>
      <SideHeaders>Want to work together? Let’s connect.</SideHeaders>
      <Container className="min-h-full py-8 border-color-new dark:border-color-new">
        <ContactContent />
      </Container>
    </div>
  )
}

export default ContactSection