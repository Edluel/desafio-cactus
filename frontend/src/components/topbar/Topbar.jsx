import React from 'react'
import './topbar.css'

export default function Topbar() {


  return (
    <div className="topbar">
      <button onClick={() => window.location.href = '/'}>Cliente</button>
      <button onClick={() => window.location.href = '/create'}>Cadastrar</button>
      <button onClick={() => window.location.href = '/update'}>Atualizar</button>
      <button onClick={() => window.location.href = '/del'}>Remover</button>
    </div>
  )
}
