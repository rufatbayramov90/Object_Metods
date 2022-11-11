const user = {
    age : 27,
    name : 'Qedir',
    surname : 'Inanir',
    setAge(newAge){
        this.age = newAge;
    },
    getYearsBeforeRetirement(){
        return (65-this.age)
    }
}
user.setAge(58);
console.log(user.age);
result = user.getYearsBeforeRetirement();
console.log(`${user.name} ${user.surname} senin pensiyana ${result} il qalib`)

// Mustei kredit karti ile isleek ucun obyekt yaradilir
const client = {
    fullName : 'Qedir Inanir',
    creditLimit : 4000,
    balans : -300,
    precentOfMinPayment : 5,
    getBalance(){
        result = this.balans <0 ? (`Balansiniz ${client.balans}  Borcunuz - ${client.balans*(-1)} `) : (`Balansiniz ${client.balans*(-1)} `) 
        return result;
    },
    getMinPayment(){
        result = this.balans > 0 ? (`Sizin borcunuz yoxdur`) : (`Minimum odenisiniz ${this.balans*(-1)*this.precentOfMinPayment/100}`) 
        return result;
    },
    withdraw(cash){
        result= cash <= this.balans ? this.balans-cash : (`Cari məbləğ hesabda mövcud deyil!`)
        return result;
    },
    refill(money){
        this.balans+=money;
        return this.balans;        
        }
}
console.log(client.getBalance());
console.log(client.getMinPayment());
console.log(client.withdraw(300));
console.log(client.refill(400));
// ---------------------------------------------
/*
const calculator = {
    total(a,b){
        result = a + b;
        return result;
    },
    exit(a,b){
        result = a - b;
        return result;
    },
    shoot(a,b){
        result = a * b;
        return result;
    },
    division(a,b){
        result = a / b;
        return result;
    }
}
console.log(calculator.total(4,5));
console.log(calculator.exit(4,5));
console.log(calculator.shoot(4,5));
console.log(calculator.division(4,5))
*/