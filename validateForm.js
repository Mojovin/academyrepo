function validateForm(){

    const numberInput = document.getElementById('number').value.trim()
    const senderInput = document.getElementById('sender').value.trim()
    const recipientInput = document.getElementById('recipient').value.trim()
    const dateInput = document.getElementById('date').value.trim()
    let isValid = true
    let message = ''
 
    if(!/^\d{1,20}$/.test(numberInput)){
        alert(message += 'Номер ВЗН должен быть целым положительным числом до 20 знаков.\n')
        isValid = false
    }
 
    if(senderInput.length > 50 || senderInput.length === 0){
        alert(message += 'Получатель должен содержать до 50 символов.\n')
        isValid = false
    }
 
    if(senderInput.length > 50 || senderInput.length === 0){
        alert(message += 'Отправитель должен содержать до 50 символов.\n')
        isValid = false
    }
 
    if(recipientInput.length > 50 || recipientInput.length === 0){
        alert(message += 'Получатель должен содержать до 50 символов.\n')
        isValid = false
    }
     
    if(!/^\d{2}\.\d{2}\.\d{4} - \d{2}\.\d{2}\.\d{4}$/.test(dateInput)){
        alert(message += 'Дата принятия должна быть в формате "dd.mm.yyyy - dd.mm.yyyy".\n')
        isValid = false
    }
 
    if(isValid){
        alert(message = 'Все данные введены корректно.')
    }

    return isValid
}