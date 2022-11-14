function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
    class firstclass{
    constructor(name,text,time=gettime()){
        this.name=name;
        this.time=time;
        this.text=text;
    }
    toString() {

        console.log(`${this.time} ${this.name}: ${this.text}`)
      }
      toHTML(){
        return `<p>${this.time}  ${this.name}:  ${this.text} </ p>`
    }
}
class secondclass{
    constructor(){
        this.history=[]
    }
    send(name,text){
        this.history.push(new firstclass(name,text,gettime()));
    }
    show_history(){
        let h=document.querySelector('.historys');
        this.history.forEach(el=> h.innerHTML+=el.toHTML());

    }
    
}
let buttonn = document.querySelector('button');
buttonn.addEventListener('click',function(){
    let sender=document.querySelector('.sender');
    let message= document.querySelector('.message');
    let  T= new secondclass();
    T.send(sender.value, message.value);
    console.log(T.history);
    let h=document.querySelector('.historys');
    T.show_history();
    sender.value='';
    message.value='';
})