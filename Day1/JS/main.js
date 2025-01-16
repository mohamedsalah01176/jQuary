$("document").ready(function(){
    //task1
    let about=$("button:eq(0)");
    let aboutCon=$(".maincon .aboutCon");
    about.click(function(){
        $(".maincon div  , .dropdown .service1 ,.dropdown .service2,.dropdown .service3").not(".aboutCon").hide()
        aboutCon.toggle(2000)
    });




    //task2
    let gallary=$("button:eq(1)");
    let galleryCon=$(".maincon .galleryCon");
    let left=$(".maincon .galleryCon .left");
    let right=$(".maincon .galleryCon .right");
    let mainImage=$(".maincon .galleryCon .mainImage");

    let flag=1;
    gallary.click(function(){
        $(".maincon div , .dropdown .service1 ,.dropdown .service2,.dropdown .service3").not(".galleryCon").hide();
        if(galleryCon.css("display")=="none"){
            galleryCon.fadeIn(2000);
        }else{
            galleryCon.fadeOut(2000);
        }

        right.click(function(){
            if(flag==1){
                flag=1;
            }else{
                flag--;
            }
            mainImage.attr("src",`../image/${flag}.jpg`)
        })
        left.click(function(){
            if(flag==8){
                flag=8;
            }else{
                flag++;
            }
            mainImage.attr("src",`../image/${flag}.jpg`)
        })
    })




    //task3
    let services=$("button:eq(2)");
    let service1=$(".dropdown .service1");
    let service2=$(".dropdown .service2");
    let service3=$(".dropdown .service3");
    
    services.click(function(){
        $(".maincon div ").hide();
        service1.slideDown(1500,function(){
            service2.slideDown(1500,function(){
                service3.slideDown(1500);
            })
        })
    })


    //task4
    let complain=$(".btns button:eq(3)");
    let form=$(".maincon form")
    let mainComplainCon=$(".mainComplainCon");
    let complainCon=$(".mainComplainCon .complainCon");

    complain.click(function(){
        $(".maincon div, .dropdown .service1 , .dropdown .service2 ,.dropdown .service3 ").not(".mainComplainCon").hide();
        mainComplainCon.fadeIn(1500);
        mainComplainCon.html(`
            <form>
                <input type="text" required placeholder="Name">
                <input type="email" required placeholder="Email">
                <input type="text" required placeholder="Phone">
                <div class="complainCon">
                    <h3>complain</h3>
                    <textarea cols="30" rows="10" title="text"></textarea>
                </div>
                <button class="submit">submit</button>
            </form>`)
        
            let name=$("input:eq(0)").val();
            let email=$("input:eq(1)").val();
            let phone=$("input:eq(2)").val();
            let textArea=$("input:eq(3)").val();
            mainComplainCon.on("click",".submit",function(e){
                e.preventDefault();
                name=$("input:eq(0)").val();
                email=$("input:eq(1)").val();
                phone=$("input:eq(2)").val();
                textArea=$("textarea").val();
                if(name !== "" && email !== "" && phone !== ""){
                    mainComplainCon.html(`
                        <div class="conText">
                            <h2>your Name is <span>${name}</span></h2>
                            <h2>your email is <span>${email}</span></h2>
                            <h2>your phone is <span>${phone}</span></h2>
                            <h2>your complain is <span>${textArea}</span></h2>
                            <button class="back">go back</button>
                        </div>
                        `)
                }else{
                    alert("please full field");
                }
            })
            mainComplainCon.on("click",".back",function(){
                mainComplainCon.html(`
                    <form>
                        <input value='${name}' type="text" required placeholder="Name">
                        <input value='${email}' type="email" required placeholder="Email">
                        <input value='${phone}' type="text" required placeholder="Phone">
                        <div class="complainCon">
                            <h3>complain</h3>
                            <textarea cols="30"  rows="10" title="text">${textArea}</textarea>
                        </div>
                        <button class="submit">submit</button>
                    </form>`)
            })
        
    })
    

});

