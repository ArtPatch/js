let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:[],
    income: [],
    savings: false
};
let a1 = prompt('Введите обязательную статью расходов в этом меясце', ''),
    a2 = prompt('Во сколько обойдется?', ''),
    a3 = prompt('Введите обязательную статью расходов в этом меясце', ''),
    a4 = prompt('Во сколько обойдется?', '');

appData.expenses[a1]=[a3];
appData.expenses[a2]=[a4];

alert(appData.budget / 30);
