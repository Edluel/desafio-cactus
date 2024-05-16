import React from 'react'
import cactuLogo from '../../assets/images/logo.png'
import './header.css'

export default function Header() {

  const email = 'contato@cactusoft.com.br';
  
  const handleCopyEmail = () => {

    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  
 
    alert('E-mail copiado para a área de transferência!');
    };

  return (
    <div className="header">
      <div className="header-logo" >
        <img src={cactuLogo} alt="cactus-logo" />
      </div>
      <div className="header-contact">
        <h1>Contato:</h1>
        <a href={``} onClick={handleCopyEmail}>
          {email}
        </a>

      </div>
    </div>
  )
}
