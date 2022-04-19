
var sum=[]
var total=0
function pat(){
    let incChildCount = Array.from(document.getElementById("inc").children).length;
    if(incChildCount > 5) return
    var num1=50
    parseInt(num1)
    sum.push(num1);
    console.log(sum);
    for(var i=0;i<sum.length;i++){
        total += sum[i]
    }
    console.log("t1",total)
    var b = document.getElementById("value");
    b.innerHTML=total;
    let a = document.createElement('p')
    a.innerHTML='Patty'     
    document.getElementById('inc').appendChild(a)
    let l1 = document.createElement('div')
    l1.style.backgroundColor = 'brown'
    l1.style.height = '10px'
    l1.style.width = '150px'
    document.getElementById('icon').appendChild(l1)
    i++
}


function che(){
    let incChildCount = Array.from(document.getElementById("inc").children).length;
    if(incChildCount > 5) return
    var num2=10
    sum.pop(total)
    sum.push(num2);
    
    for(var i=0;i<sum.length;i++){
        total += sum[i]
    }
    console.log("sum2",sum)
    console.log("t2",total)
    var c = document.getElementById("value");
    c.innerHTML=total;
    let b = document.createElement('p')
    b.innerHTML='Cheese'
    document.getElementById('inc').appendChild(b)
    let l2 = document.createElement('div')
    l2.style.backgroundColor = 'yellow'
    l2.style.height = '10px'
    l2.style.width = '150px'
    document.getElementById('icon').appendChild(l2)
    i++
}


function tom(){
    let incChildCount = Array.from(document.getElementById("inc").children).length;
    if(incChildCount > 5) return
    var num3=10
    sum.pop(total)
    sum.push(num3);
    for(var i=0;i<sum.length;i++){
        total += sum[i]
    }
    console.log("t3",total)
    var d = document.getElementById("value");
    d.innerHTML=total;
    let c = document.createElement('p')
    c.innerHTML='Tomatoes'
    document.getElementById('inc').appendChild(c)
    let l3 = document.createElement('div')
    l3.style.backgroundColor = 'red'
    l3.style.height = '10px'
    l3.style.width = '150px'
    document.getElementById('icon').appendChild(l3)
}

function oni(){
    let incChildCount = Array.from(document.getElementById("inc").children).length;
    if(incChildCount > 5) return
    var num4=15
    sum.pop(total)
    sum.push(num4);
    for(var i=0;i<sum.length;i++){
        total += sum[i]
    }
    console.log("t4",total)
    var c = document.getElementById("value");
    c.innerHTML=total;
    let d = document.createElement('p')
    d.innerHTML='onion'
    document.getElementById('inc').appendChild(d)
    let l4 = document.createElement('div')
    l4.style.backgroundColor = 'white'
    l4.style.height = '10px'
    l4.style.width = '150px'
    document.getElementById('icon').appendChild(l4)
}

function leu(){
    let incChildCount = Array.from(document.getElementById("inc").children).length;
    if(incChildCount > 5) return
    var num5=30
    sum.pop(total)
    sum.push(num5);
    for(var i=0;i<sum.length;i++){
        total += sum[i]
    }
    console.log("t5",total)
    var c = document.getElementById("value");
    c.innerHTML=total;
    let e = document.createElement('p')
    e.innerHTML='lettue'
    document.getElementById('inc').appendChild(e)
    let l5 = document.createElement('div')
    l5.style.backgroundColor = 'green'
    l5.style.height = '10px'
    l5.style.width = '150px'
    document.getElementById('icon').appendChild(l5)
}

let ff = document.getElementById('burger0')
ff.style.backgroundColor='#e2bd8c'
ff.style.height='50px'
ff.style.width= '150px'
ff.style.borderRadius ='4px'
ff.style.borderBottomRightRadius='30px'
ff.style.borderBottomLeftRadius='30px'
    document.getElementById('div2').appendChild(ff)

    let gg = document.getElementById('burger6')
gg.style.backgroundColor='#e2bd8c'
gg.style.height='50px'
gg.style.width= '150px'
gg.style.borderRadius ='4px'
gg.style.borderTopRightRadius='30px'
gg.style.borderTopLeftRadius='30px'
    document.getElementById('div4').appendChild(gg)