const getTrends = async () => {
    let result = await fetch('http://localhost:8080/trends')
    let resultado = await result.json()
    return resultado;
  }
  
  const showTrends = async () => {
    let result = await getTrends()
    console.log(result)
  }
  showTrends();