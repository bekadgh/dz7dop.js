const ipt1 = document.querySelector('#ipt1')
const ipt2 = document.querySelector('#ipt2')
const btn = document.querySelector('#btn')
const user = 'beka'
const password = '1234'
class Avtorizasia {
    constructor(username,password){ 
        this.username = username,
        this.password = password
    }
    startEngine() {

    }
}
class avto extends Avtorizasia{
    constructor(username,password) {
        super(username,password)
    }
    startEngine(){
        btn.addEventListener('click', function (){
            if(ipt1.value === user || ipt2.value === password) {
                console.log("Верно");
            }else if (ipt1.value != user || ipt2.value != password) {
                console.log('');
            }
        })
    }
}
const userAll = new avto ("Beka",1234)

userAll.startEngine()