let stClient = null;

const sendMessage =()=>{
    let txtName= document.getElementById('txtName')
    let txtMessage= document.getElementById('txtMessage')
    stClient.publish({
        destination: '/app/envio',
        body: JSON.stringify({
            nombre: txtName.value,
            contenido: txtMessage.value,
        })
    })
}
document.addEventListener('DOMContentLoaded',()=>{
    const btnSend= document.getElementById('btnSend')
    btnSend.addEventListener('click',(e) => {
        e.preventDefault()
        sendMessage()
    })
})