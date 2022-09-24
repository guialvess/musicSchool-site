var p = document.getElementsByClassName("hide");
console.log(p);
setTimeout(()=>{
    p[0].style.display = "inline-block";
},500);
setTimeout(()=>{
    p[1].style.display = "inline-block";
},600);



// JQuery abaixo


let iconm1 = $(".icon-music1");
let iconm2 = $(".icon-music2");
let iconm3 = $(".icon-music3");
let iconm4 = $(".icon-music4");

setInterval(() => {
     iconm1.fadeToggle(800, () => {
         iconm2.fadeToggle(800, () => {
             iconm3.fadeToggle(900, () => {
                 iconm4.fadeToggle(400)
             })
         })
     });

},3000);

// o código acima cria uma animação entre os icones de música 


// codigo acima configura o Iframe

// $(".instruments-item1").addClass("instruments-item1Novo")
$("iframe").attr({src:'https://www.youtube.com/embed/hj4BF7a7oXE'})
$(".instruments-item1").mouseover(() => {
    $(".instruments-item1").mouseout(() => {
        $(".instruments-item1").removeClass("instruments-item1Novo")
    })
})
$(".instruments-item1").mouseover(() => {
    $(".instruments-item1").addClass("instruments-item1Novo")
})
$(".instruments-item1").mouseout(() => {
    $(".instruments-item1").removeClass("instruments-item1Novo")
})
$(".instruments-item1").click(() => {
    $("iframe").attr({src:'https://www.youtube.com/embed/hj4BF7a7oXE'})
    $(".instrument-active").text("Saxofone")
    $(".instrumento-rel").text("Saxofone")
})

// item 2
$(".instruments-item2").mouseover(() => {
    $(".instruments-item2").addClass("instruments-item2Novo")
})
$(".instruments-item2").mouseout(() => {
    $(".instruments-item2").removeClass("instruments-item2Novo")
})
$(".instruments-item2").click(() => {
    $("iframe").attr({src:'https://www.youtube.com/embed/jGph8a1mt8M'})
    $(".instrument-active").text("Guitarra")
    $(".instrumento-rel").text("Guitarra")

})

// item3
$(".instruments-item3").mouseover(() => {
    $(".instruments-item3").addClass("instruments-item3Novo")
})
$(".instruments-item3").mouseout(() => {
    $(".instruments-item3").removeClass("instruments-item3Novo")
})
$(".instruments-item3").click(() => {
    $("iframe").attr({src:'https://www.youtube.com/embed/w-rBt4pSiqk'})
    $(".instrument-active").text("Piano")
    $(".instrumento-rel").text("Piano")


})

// item4
$(".instruments-item4").mouseover(() => {
    $(".instruments-item4").addClass("instruments-item4Novo")
})
$(".instruments-item4").mouseout(() => {
    $(".instruments-item4").removeClass("instruments-item4Novo")
})
$(".instruments-item4").click(() => {
    $("iframe").attr({src:'https://www.youtube.com/embed/O8lSTW7wNKw'})
    $(".instrument-active").text("Flauta")
    $(".instrumento-rel").text("Flauta")


})

// item5
$(".instruments-item5").mouseover(() => {
    $(".instruments-item5").addClass("instruments-item5Novo")
})
$(".instruments-item5").mouseout(() => {
    $(".instruments-item5").removeClass("instruments-item5Novo")
})
$(".instruments-item5").click(() => {
    $("iframe").attr({src:'https://www.youtube.com/embed/3FLxUjw79mk'})
    $(".instrument-active").text("Bateria")
    $(".instrumento-rel").text("Bateria")

})

// item6
$(".instruments-item6").mouseover(() => {
    $(".instruments-item6").addClass("instruments-item6Novo")
})
$(".instruments-item6").mouseout(() => {
    $(".instruments-item6").removeClass("instruments-item6Novo")
})
$(".instruments-item6").click(() => {
    $("iframe").attr({src:'https://www.youtube.com/embed/MpkQXFiDbIU'})
    $(".instrument-active").text("Violão")
    $(".instrumento-rel").text("Violão")

})

var animate = "animate__animated animate__bounce";
$(".passo1").mouseover(() => {
    $(".passo1").find("object").addClass(animate)
    $(".passo1").find(".passo-title").css({color:'#3636ee'})
})
$(".passo1").mouseout(() => {
    $(".passo1").find("object").removeClass(animate)
    $(".passo1").find(".passo-title").css({color:'white'})
})

$(".passo2").mouseover(() => {
    $(".passo2").find("object").addClass(animate)
    $(".passo2").find(".passo-title").css({color:'#3636ee'})
})
$(".passo2").mouseout(() => {
    $(".passo2").find("object").removeClass(animate)
    $(".passo2").find(".passo-title").css({color:'white'})

})

$(".passo3").mouseover(() => {
    $(".passo3").find("object").addClass(animate)
    $(".passo3").find(".passo-title").css({color:'#3636ee'})

})
$(".passo3").mouseout(() => {
    $(".passo3").find("object").removeClass(animate)
    $(".passo3").find(".passo-title").css({color:'white'})

})

$(".passo4").mouseover(() => {
    $(".passo4").find("object").addClass(animate)
    $(".passo4").find(".passo-title").css({color:'#3636ee'})

})
$(".passo4").mouseout(() => {
    $(".passo4").find("object").removeClass(animate)
    $(".passo4").find(".passo-title").css({color:'white'})

})

// animate div

$(".passos").addClass("animate__animated animate__zoomIn")
    $(".termos").addClass("animate__animated animate__slideInLeft")




//menu mobile


function togglemenu() {
    let mn = document.getElementById('menu-mob');
    console.log(mn);
    if(mn.style.display == 'none' || mn.style.display == ''){
        mn.style.display = 'block';
    }else {
        mn.style.display = 'none';
    }
}





