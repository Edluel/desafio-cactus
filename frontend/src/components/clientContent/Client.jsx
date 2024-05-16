import React from 'react'
import './client.css'

export default function Client(props) {
  const { data } = props

  return (
    <div>
      {data && !data.message && (
        <div className='counters'>
          <p>Resultados: {data.length}</p>
          <p>Online: {data.filter(cliente => cliente.statusCliente).length}</p>
          <p>Offline: {data.filter(cliente => !cliente.statusCliente).length}</p>
          <p>Rendimento esperado: R${Math.round(data.reduce((total, cliente) => total + cliente.valorPlano, 0))}</p>        </div>
      )}
      {data && data.message ? (
        <h1>{data.message}</h1> // Exibe a mensagem de erro
      ) : (
      data && data.map((cliente) => (
        <div className='client-container'>
          <div key={cliente.id} className='client-card'>
            <h3>{cliente.nomeCliente}</h3>
            <p>Status: {cliente.statusCliente.toString()}</p>
            <p>IP-Concentrador: {cliente.ipConcentrador}</p>
            <p>Concentrador: {cliente.nomeConcentrador}</p>
            <p><a href={`https://www.google.com/maps/search/?api=1&query=${cliente.latitudeCliente},${cliente.longitudeCliente}`} target="_blank">Localizacao</a></p>
            <p>Conexão Inicial: {cliente.conexaoInicial.slice(0, 10)}</p>
            {cliente.conexaoFinal && (
              <p>Conexão Final: {cliente.conexaoFinal.slice(0,10)}</p>
            )}
            <p>Tempo Conectado: {Math.round(cliente.tempoConectado / 3600)}Hs</p>
            <p>Consumo Download: {(cliente.consumoDownload / (1024 * 1024 * 1024)).toFixed(2)} GB</p>
            <p>Consumo Upload: {(cliente.consumoUpload / (1024 * 1024 * 1024)).toFixed(2)} GB</p>
            {cliente.motivoDesconexao && (
              <p>Motivo de Desconexão: {cliente.motivoDesconexao}</p>
            )}
            <p>POP: {cliente.popCliente}</p>
            <p>Endereço: {cliente.enderecoCliente}</p>
            <p>Bairro: {cliente.bairroCliente}</p>
            <p>Cidade: {cliente.cidadeCliente}</p>
            <p>Plano do Contrato: {cliente.planoContrato}</p>
            <p>Status da Internet: {["Desconhecido", "Ativo", "Desativado", "Bloqueio Manual", "Bloqueio Automático", "Financeiro em Atraso", "Aguardando"][cliente.statusInternet]}</p>
            <p>Valor do Plano: {cliente.valorPlano}</p>
            <p className='client-card-id' onClick={() => { navigator.clipboard.writeText(cliente.id); alert('Copiado para área de transferência!'); }}>Id: {cliente.id}</p>
          </div>
        </div>
      ))
      )}
    </div>
  );
}

//ef={`https://www.google.com/maps/search/?api=1&query=${cliente.latitudeCliente},${cliente.longitudeCliente}`} target="_blank">Localizacao</a>


{/* <div key={cliente.id} className='client-card'>
<h3>{cliente.nomeCliente}</h3>
<p>Status: {cliente.statusCliente}</p>
<p>IP do Concentrador: {cliente.ipConcentrador}</p>
<p>Nome do Concentrador: {cliente.nomeConcentrador}</p>
<p>Conexão do Cliente: {cliente.conexaoCliente}</p>
<p>Localização: Latitude {cliente.latitudeCliente}, Longitude {cliente.longitudeCliente}</p>
<p>Conexão Inicial: {cliente.conexaoInicial}</p>
<p>Conexão Final: {cliente.conexaoFinal}</p>
<p>Tempo Conectado: {cliente.tempoConectado}</p>
<p>Consumo Download: {cliente.consumoDownload}</p>
<p>Consumo Upload: {cliente.consumoUpload}</p>
<p>Motivo de Desconexão: {cliente.motivoDesconexao}</p>
<p>POP do Cliente: {cliente.popCliente}</p>
<p>Endereço: {cliente.enderecoCliente}</p>
<p>Bairro: {cliente.bairroCliente}</p>
<p>Cidade: {cliente.cidadeCliente}</p>
<p>Status do Contrato: {cliente.contratoStatus}</p>
<p>Plano do Contrato: {cliente.planoContrato}</p>
<p>Status da Internet: {cliente.statusInternet}</p>
<p>Velocidade de Download: {cliente.downloadCliente}</p>
<p>Velocidade de Upload: {cliente.uploadCliente}</p>
<p>Valor do Plano: {cliente.valorPlano}</p>
<p>Timestamp: {cliente.timestamp}</p>
</div> */}