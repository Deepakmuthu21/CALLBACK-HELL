const div = document.getElementById("container")

setTimeout(() => {
    div.innerHTML="<b>10<b>"
    setTimeout(()=>{
        div.innerHTML="<b>9<b>"
        setTimeout(()=>{
            div.innerHTML="<b>8<b>"
            setTimeout(()=>{
                div.innerHTML="<b>7<b>"
                setTimeout(()=>{
                    div.innerHTML="<b>6<b>"
                    setTimeout(()=>{
                        div.innerHTML="<b>5<b>"
                        setTimeout(()=>{
                            div.innerHTML="<b>4<b>"
                            setTimeout(()=>{
                                div.innerHTML="<b>3<b>"
                                setTimeout(()=>{
                                    div.innerHTML="<b>2<b>"
                                    setTimeout(()=>{
                                        div.innerHTML="<b>1<b>"
                                        setTimeout(()=>{
                                            div.innerHTML="<b><i>HAPPY INDEPANDENCE DAY</i></b>"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000);