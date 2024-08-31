vzns = [
    {
        number: 'ВЗН №132313',
        sender: 'Цех 01 / участок Цеха 01',
        receiver: 'Цех 02 / участок Цеха 02',
        date: '15.06.2024'
    },
    {
        number: 'ВЗН №7063041',
        sender: 'Цех 01 / участок Цеха 01',
        receiver: 'Цех 02 / участок Цеха 02',
        date: '15.06.2024'
    },
    {
        number: 'ВЗН №7063041',
        sender: 'Цех 01',
        receiver: 'Цех 02',
        date: '15.06.2024'
    },
    {
        number: 'ВЗН №7063041',
        sender: 'Цех 01',
        receiver: 'Цех 02',
        date: '15.06.2024'
    },
    {
        number: 'ВЗН №7063041',
        sender: 'Цех 01',
        receiver: 'Цех 02',
        date: '15.06.2024'
    },
    {
        number: 'ВЗН №7063041',
        sender: 'Цех 01',
        receiver: 'Цех 02',
        date: '15.06.2024'
    },
    {
        number: 'ВЗН №7063041',
        sender: 'Цех 01',
        receiver: 'Цех 02',
        date: '15.06.2024'
    }
]

const vznsList = document.getElementById('vzns-list')

vzns.forEach(vzn => {
    const li = document.createElement('li')
    li.className = 'info'
    li.innerHTML=`
        <div class="info__main">
            <h2 class="info__main__number">${vzn.number}</h2>
            <div class="info__main__text">
                <p>Отправитель: ${vzn.sender}</p>
                <p>Получатель: ${vzn.receiver}</p>
                <p>Дата выдачи: ${vzn.date}</p>
            </div>
        </div>
    `
    vznsList.appendChild(li);   
});