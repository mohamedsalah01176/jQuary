$("document").ready(function() {

    //task1
    $("#con").css({"border":"2px solid blue","width":"300px","padding":"10px 15px","margin-top":"10px","background":"green"});
    $("#start").click(function(){
        $("#con").animate({
            width:"500px",
            borderWidth:"20px",
            fontSize:"35px",
            marginLeft:"80px",
        },2000)
    })


    $("#return").click(function(){
        $("#con").animate({
            width:"300px",
            borderWidth:"2px",
            fontSize:"19px",
            marginLeft:"0px",
        },2000)
    })



    //task2
    $("#nextStart").click(function(){
        $("#imagTask2").animate({
            left:"700px",
            top:"400px",
            rotate: "360deg", 
            scale:"2",
        },2000)
    })


    //task3
    $("#dra").draggable({
        
        drag:function(){
        $("#img2").effect("bounce","slow");
    }});

    $("#img1").droppable({
        drop:function(){$("#dra").hide(2000)}
    }
    )

    $c.set("name","mohamed");
    console.log($c.get("name"));
    let cookCon=$c.noConfilict();
    cookCon.set("age",10);
    cookCon.set("name","nada");
})







// function Employee(){
//     console.log(this);//employee
//     this.name="Employee";
//     this.display=function(){
//         console.log(this);//employee
//         setTimeout(function(){
//             console.log(this);//window
//         })
//     }
// }

//solve
// function Employee(){
//     console.log(this);//employee
//     this.name="Employee";
//     this.display=function(){
//         console.log(this);//employee
//         var that=this;
//         setTimeout((function(){
//             console.log(this);//employee
//             console.log(that);//employee
//         }).apply(this))
//     }
// }

// var emp=new Employee()
// emp.display()





// function Employee2(){
//     console.log(this);//employee
//     this.name="Employee";
//     var display=function(){
//         console.log(this);//window
//         setTimeout(function(){
//             console.log(this);//window
//         })
//     }
//     display();
// }

// //solve
// function Employee2(){
//     console.log(this);//employee
//     this.name="Employee";
//     var display=(function(){
//         console.log(this);//employee
//         var that=this;
//         setTimeout(function(){
//             console.log(that);//employee
//         }.apply(this))
//     }).apply(this)
// }
// var emp=new Employee2()
// console.log(emp.name)






// //without using new
// function Employee3(){
//     console.log(this);//window
//     this.name="Employee";
//     var display=function(){
//         console.log(this);//window
//         setTimeout(function(){
//             console.log(this);//window
//         })
//     }
//     display();
// }
// console.log(name)
// var emp=Employee3()
