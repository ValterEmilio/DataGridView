
const configDGV={
    endpoint:"produtos.json",
}

const dataGridView=(configDGV)=>{
    fetch(configDGV.endpoint)
    .then(resultado=>resultado.json())
    .then(resultado=>{
        console.log(resultado)
})
}
