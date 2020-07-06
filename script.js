anime({
    targets: 'img',
    translateX: 500,
    translateY: 50,
    direction: 'alternate',
    loop: true,
    easing: 'spring(1, 80, 10, 0)'
});



function askUser() {
        const data =[]
        document.getElementById("bet").style.display ="none";
        let ask_container = document.querySelector(".ack_container")
        let btn_start = document.createElement("button");
        btn_start.innerText ="Start";
        let btn_close = document.createElement("button");
        btn_close.innerText ="Закрыть";
        ask_container.append(btn_start)
        btn_start.addEventListener('click', function () {
            let readyContinue = confirm("Готовы ли вы продолжать?")
            console.log("readyContinue", readyContinue);
            if(readyContinue){
                 let letStarted = confirm("Давайте начьнем")
                if(letStarted){
                    let yourName = prompt("Ваше Имя")
                      data.push(yourName)
                    let yourAge = prompt("Ваш Возраст")
                    data.push(yourAge)
                    let yourExperience  = prompt("Опыт Работы")
                    data.push(yourExperience)
                    let yourPosition  = prompt("Kem работали")
                    data.push(yourPosition)
                    console.log("Data",data)
                    $.post("core.php",{name:data[0],
                                        age:data[1],
                                        experionce:data[2],
                                        position:data[3],
                                        submit:"submit"
                    }).done(function( data ) {
                        alert( "Data Loaded: " + data );
                    });
                }
            }else {
                ask_container.removeChild(btn_start)
                ask_container.append(btn_close)
                btn_close.addEventListener('click',function () {
                    window.open('index.php', '_self', '');
                    window.close();
                })
            }


        })

}

setTimeout(askUser,1000)