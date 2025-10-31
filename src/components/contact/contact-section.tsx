import React from 'react'
import Container from '../container'
import SideHeaders from '../sideheaders'
import ContactContent from './contact-content'

const ContactSection = () => {
  return (
    <div>
      <Container className="min-h-full py-8 border-color-new dark:border-color-new  border-t border-color-new dark:border-color-new">
        <SideHeaders>Want to work together? Let’s connect.</SideHeaders>
        <ContactContent />
      </Container>
    </div>
  )
}

export default ContactSection