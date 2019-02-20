

    var ulObj=document.getElementById("box").children[0].children[0];
    var liObj = document.getElementById("lb_list").children;
    var imgWidth=document.getElementById("box").children[0].offsetWidth;


    for(var i=0;i<liObj.length;i++){
        liObj[i].setAttribute("pic",i);
        liObj[i].onmouseover=function () {

            for(var j=0;j<liObj.length;j++){
                liObj[j].removeAttribute("class");
            }
            this.className="cur";
            var range = this.getAttribute("pic")
            animate(ulObj,-range*(imgWidth))

        }
    }

    setInterval(moveLeft(),50)

    var  curr=0;
    function moveLeft() {

        curr-=10;
        if(curr<=-ulObj.offsetWidth){
            curr=0;
        }
        ulObj.style.left = curr+"px";
    }


    function animate(ele,target){

        var timeId = setInterval(function () {
            var current = ele.offsetLeft;
            var step = 10;
            step = target>current?step:-step;
            current += step;
            if(Math.abs(target-current)>=Math.abs(step)){
                ele.style.left=current+"px";
            }else{
                clearInterval(timeId);
                ele.style.left=target+"px";
            }
        },10)
    }


    var sellphone= document.getElementById("sellphone")
    sellphone.onclick=function () {
        var value=document.getElementById("control").value;
        var getspan=document.querySelector(".inphone").lastElementChild;
        var reg=/^([1][3-8][0-9]{9})$/;
        if (value.match(reg)){
            getspan.style.color="green";
            getspan.style.fontSize="12px";
            getspan.innerHTML="手机输入正确";
        }
        else{
            getspan.style.color="red";
            getspan.style.fontSize="12px";
            getspan.innerHTML="请输入正确的手机号码";
        }
    }

    var getli=document.querySelector(".carlist").getElementsByTagName("li");
    var getbox=document.getElementById("carboxall").getElementsByTagName("li");

    for (let i=0;i<getli.length;i++){
        getli[i].onmouseover=function () {
                for (var j=0;j<getli.length;j++){
                    getli[j].className="";
                    for (var k = 0; k <getbox.length; k++) {
                        getbox[k].style.display="none";
                    }
                }
            getbox[i].style.display="block";
            this.className="newcur";
            }
        }
    var getnewli=document.getElementById("newlistin").getElementsByTagName("li");
    var getlibtn=document.getElementById("btnlist").getElementsByTagName("li");
    getlibtn[0].className="littlecur";
    for (let i=0;i<getlibtn.length;i++){
        getlibtn[i].onmouseover=function () {
            for (var j=0;j<getlibtn.length;j++){
                getlibtn[j].className="";
                for (var k=0;k<getnewli.length;k++){
                    getnewli[k].style.display="none";
                }
            }
            getnewli[i].style.display="inline-block";
            this.className="littlecur";
        }
    }

    var getcarli=document.getElementById("allcar_list").getElementsByTagName("li");
    var getcarbox=document.getElementById("allcar_list_box").children;

    for (let i=0;i<getcarli.length;i++){
        getcarli[i].onmouseover=function () {
            for (var j=0;j<getcarli.length;j++){
                getcarli[j].className="";
                for (var k=0;k<getcarbox.length;k++){
                    getcarbox[k].style.display="none";
                }
            }
            getcarbox[i].style.display="block";
        }
    }

    var getletter=document.getElementById("letter").getElementsByTagName("a");
    var getletterbox=document.getElementById("letterbox").children;
    for (let i=0;i<getletter.length;i++){
        getletter[i].onmouseover=function () {
            for (var j=0;j<getletter.length;j++){
                getletter[j].className="";
                for (var k=0;k<getletterbox.length;k++){
                    getletterbox[k].style.display="none";
                }
            }
            getletterbox[i].style.display="block";
            this.className="curr";
        }
    }

    var getletter2=document.getElementById("letter2").getElementsByTagName("a");
    var getletterbox2=document.getElementById("letterbox2").children;
    for (let i=0;i<getletter2.length;i++){
        getletter2[i].onmouseover=function () {
            for (var j=0;j<getletter2.length;j++){
                getletter2[j].className="";
                for (var k=0;k<getletterbox2.length;k++){
                    getletterbox2[k].style.display="none";
                }
            }
            getletterbox2[i].style.display="block";
            this.className="curr";
        }
    }









