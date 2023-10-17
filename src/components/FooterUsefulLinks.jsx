import React from 'react'

const FooterUsefulLinks = ({ footerUsefulLinks }) => {
  return (
    <>
        <p class="mb-4">
          <a href={ footerUsefulLinks.url } class="">
              { footerUsefulLinks.usefulLink }
          </a>
        </p>
    </>
  )
}

export default FooterUsefulLinks