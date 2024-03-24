const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
function printObj (result){
    for (let key in result){
        if (key !== 'clients' && key !== 'partners'){
            console.log (key + ':' + result[key]);
        }
    }
};
function FindValueByKey(companyName, currentObject) {
    if (currentObject.name === companyName) {
        return printObj(currentObject);
    }
    if (currentObject.clients) {
        for (let i = 0; i < currentObject.clients.length; i++) {
            let result = FindValueByKey(companyName, currentObject.clients[i]);
            if (result) {
                return printObj(result);
            }
        }
    }
    if (currentObject.partners) {
        for (let i = 0; i < currentObject.partners.length; i++) {
            let result = FindValueByKey(companyName, currentObject.partners[i]);
            if (result) {
                return printObj(result);
            }
        }
    }
}
FindValueByKey('Велика Компанія', company);
