import React from 'react'
import { useEffect, useState } from 'react'
import './searchbar.css'

export default function Search(props) {
  const { setData } = props
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("id");

  useEffect(() => {
    const manyData = async () => {
      const response = await fetch('http://localhost:3333/findManyCliente')
      let json = await response.json()
      json = JSON.parse(json)
      
      if (response.ok) {
        setData(json)
      }
    }

    manyData()
  }, [])

  function handleSearchInput(event) {
    setSearchValue(event.target.value);
  }

  function handleSearchType(event) {
    setSearchType(event.target.value);
  }

  async function searchClient() {

    if (searchType === "id") {
      
      if (isNaN(searchValue)) {
        const response = await fetch('http://localhost:3333/findById/'+searchValue)
        let json = await response.json()

        if (!response.ok) {
          // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
          console.error('Erro ao buscar cliente:', json.message);
          console.log(json)
        } else {
          json = [JSON.parse(json)] // converte para array
        }

        setData(json);
      }
    } else if (searchType === "name") {
      
      if (isNaN(searchValue)) {
        const response = await fetch('http://localhost:3333/findByName/'+searchValue)
        let json = await response.json()

        if (!response.ok) {
          // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
          console.error('Erro ao buscar cliente:', json.message);
          console.log(json)
        } else {
          json = JSON.parse(json) // converte para array
        }

        setData(json);
      }
    } else if (searchType === "internetStatus") {
      const response = await fetch('http://localhost:3333/findByInternet/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "contractPlan") {
      const response = await fetch('http://localhost:3333/findByContractPlan/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "ipConcentrador") {
      const response = await fetch('http://localhost:3333/findByIp/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "concentrador") {
      const response = await fetch('http://localhost:3333/findByConcentrator/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "diconnectReason") {
      const response = await fetch('http://localhost:3333/findByDisconnectReason/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "pop") {
      const response = await fetch('http://localhost:3333/findByPop/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "city") {
      const response = await fetch('http://localhost:3333/findByCity/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "neighborhod") {
      const response = await fetch('http://localhost:3333/findByNeighborhood/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "coonnectedTimeGt") {
      const response = await fetch('http://localhost:3333/findByConnectedTime/gt/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "coonnectedTime") {
      const response = await fetch('http://localhost:3333/findByConnectedTime/lt/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "downloadConsumptionGt") {
      const response = await fetch('http://localhost:3333/findByDownloadConsumption/gt/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "downloadConsumption") {
      const response = await fetch('http://localhost:3333/findByDownloadConsumption/lt/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "uploadConsumptionGt") {
      const response = await fetch('http://localhost:3333/findByUploadConsumption/gt/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "uploadConsumption") {
      const response = await fetch('http://localhost:3333/findByUploadConsumption/lt/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "") {
      const response = await fetch(''+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "planValueGt") {
      const response = await fetch('http://localhost:3333/findByPlanValue/gt/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    } else if (searchType === "planValue") {
      const response = await fetch('http://localhost:3333/findByPlanValue/lt/'+searchValue)
      let json = await response.json()

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Erro ao buscar cliente:', json.message);
        console.log(json)
      } else {
        json = JSON.parse(json) // converte para array
      }

      setData(json);
    }
  }



  return (

    <div className="search-container">
      {searchType === "internetStatus" ? (
        <select
          id="search-input"
          value={searchValue}
          onChange={handleSearchInput}
        >
          <option value="0">Desconhecido</option>
          <option value="1">Ativo</option>
          <option value="2">Desativado</option>
          <option value="3">Bloqueio Manual</option>
          <option value="4">Bloqueio Automático</option>
          <option value="5">Financeiro em Atraso</option>
          <option value="6">Aguardando Assinatura</option>
        </select>
      ) : (
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchInput}
        />
      )}
      <select id="search-type" value={searchType} onChange={handleSearchType}>
        <option value="id">ID</option>
        <option value="name">Nome</option>
        <option value="internetStatus">Status da Internet</option>
        <option value="contractPlan">Plano contratado</option>
        <option value="ipConcentrador">IpConcentrador</option>
        <option value="concentrador">Nome Concentrador</option>
        <option value="diconnectReason">Motivo Desconexao</option>
        <option value="pop">POP</option>
        <option value="city">Cidade</option>
        <option value="neighborhod">Bairro</option>
        <option value="coonnectedTimeGt">Min Tempo</option>
        <option value="downloadConsumptionGt">Min Consumo D</option>
        <option value="uploadConsumptionGt">Min Consumo U</option>
        <option value="planValueGt">Min Valor Plano</option>
        <option value="coonnectedTime">Max Tempo</option>
        <option value="downloadConsumption">Max Consumo D</option>
        <option value="uploadConsumption">Max Consumo U</option>
        <option value="planValue">Max Valor Plano</option>
      </select>
      <button id="search-button" onClick={searchClient}>
        Buscar
      </button>
    </div>
  )
}
