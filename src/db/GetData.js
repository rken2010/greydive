import db from "./db.json"

function getData(){
    const transformData = JSON.stringify(db)
    const data = JSON.parse(transformData)
    return data
}

function getClient( NombreCliente ){
    const info = getData()
    const client = info.find((c) => c.cliente === NombreCliente)
    return client
}

function getQuestion(){
    const info = getData()
    const question = []

    info.forEach((item) => { 
        item.preguntas.forEach((mensaje) => {
        const Newid = question.length + 1
        const newElement = {...mensaje, id:Newid}
        question.push(newElement);
        });
      });

    return question 
}

export { getData , getClient, getQuestion}