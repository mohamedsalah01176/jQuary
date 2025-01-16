
$(document).ready(function(){

 //! Next()(+),NextAll(),Childern()(> *)
  // $("li:first").next("h2").css("color","red");
  // $("li:first").nextAll().css("color","red");
  // $("h1").next("h2").css("color","red");
  // $(".div").children().css("color","green");
  // $(".div > *")

//! Array Functions --> makeArray(coll) , inArray, unique,merge,map,grep

 //* convert from nodeList or arguments to array

  //  let nodeList=document.querySelectorAll("p");
  //  console.log(nodeList);
  //  let array=jQuery.makeArray(nodeList);
  //  console.log(array);
  //  console.log(Array.isArray(nodeList));

   //*  return idx if not exist return  -1
      // let array=[1,2,3,4,5]
      // console.log(jQuery.inArray(3,array))
      // console.log(jQuery.inArray(6,array))

 

    //* Merges 2 arrs into 1st arr
    //  let arr1=[1,2,3];
    //  let arr2=[5,6,7];
    //  let merged =jQuery.merge(arr1,arr2);
    //  console.log(merged);
    //  console.log(arr1);

  


//* map apply function on each item in arr & return new arr
 

    // let arr=[1,2,3];
    // let newArr=jQuery.map(arr,function(val){
    //   return val*val;
    // })
    // console.log(newArr);
  

    //* grep (filters)(array, callback, [invert])
    // let arr=[1,2,3,4,5];

    // let evenArr=jQuery.grep(arr,function(value){
    //   return value%2===0;
    // },true)
    // console.log(evenArr);
   
    


//! Each() method
$("li").each(function(value){
  // console.log(index+ ":" +$(this).text());
  // console.log(value);
})

//! Clone(),clone(true)
  //* Shallow() --> ele,child 
 //* shallow(true) --> ele,childs,event 



  // $("#btn").click(function(){
  //    alert("Original Button Clicked");
  // })


  // $("#cloneButton").click(function(){

  //   let clonedBox=$("#box").clone(true);
  //   $("body").append(clonedBox);


  // })
 
//! DOM Manipulation(create-insert-wrap-replace)
  // $(".traverseImage").prepend("<img src='dd.png'/>");
  // $("<img src='dd.png'/>").prependTo(".traverseImage");
  // $(".traverseImage").append("<img src='dd.png'/>");
  // $("<img src='dd.png'/>").appendTo(".traverseImage");

  // $(".traverseImage").insertBefore("<img src='dd.png'/>");

  // $(".item").wrap("<div class='wrapperEach'></div>")
  // $(".item").wrapInner("<span class='wrapInner'></span>")
  // $(".item").wrapAll("<div class='wrapAll'></div>")
  // $(".circulateList").click(function(){
  //   $("ul").prepend($("ul li:last"));

  // })

//  $("#para").replaceWith("<p>New content</p>");
//  $("<div>new Content</div>").replaceAll("p")


//! DOM Manipulation(empty-remove)
// $("ul").empty();
// $('ul li.bold').remove();

//! Events 

  //  $("#test").click(function(){

  //   $(this).show(1000);

  //  })

  //  $("#test").dblclick(function(){
    
  //   $(this).hide(1000);

  //  })


  //  $("#test").mouseenter(function(){
    
  //   $(this).css("color","red");

  //  })

  //  $("#test").mouseleave(function(){
    
  //   $(this).css("color","green");

  //  })

  //  $("#test").hover(function(){
    
  //   $(this).css("color","green");

  //  })

  //  $("#test").hover(
  //    function(){
  //     $(this).css("color","green");

  //    },
  //    function(){
  //     $(this).css("color","red");

  //    }
  //  )


//! Events(on,off,one,trigger)

    //*on:Attach event handlers (supports delegation)
    //*off:Remove event handlers attached via .on()
    //*trigger:Programmatically trigger an event.
    //*one:Programmatically trigger an event.

      $().click()

    // $('#test').on('click', function() {
    //   alert('Button clicked!');
    // });

//     $("img:eq(0)").on('click',function(){
//         $(this).attr("src","dd.png");
//         $("h2").trigger("myEvent");
//     })

//     $("h2").on("myEvent",function(){
//       $(this).css("color","red");

// })

    // $("ul").on("click","li:first",{username:"Ali"},function(event){
    //     $(this).text(event.data.username).css("color","red");
    // })

    // $("#test")
    // .on("click",function(){console.log("first")})
    // .on("click",function(){console.log("second")})

    // $("#test").off("click");

    // $("#haga").click(function(){
    //   console.log("haaggaaa");
    // })

   
     
  




    // $("#wrapper").on("click","button",function(){
    //   console.log("clikced delegation");
    // })

    // $("#wrapper").append("<button>New Button1</button>");
    // $("#wrapper").append("<button>New Button2</button>");


  
    // $("#test").one('click',function(){console.log("hagaaa")})
    // $("#test").trigger("click");
    // $("#test").trigger("click");
   

  //* Delegation 
  

//! Animate()

  //* animate({css},duration,easing,complete)

    //* Basic Animation
      //  $("#animateBtn").click(function(){
      //      $("#animatedBox").animate({
      //         left:"500px",
      //         opacity:1,
      //         height:"200px",
      //         width:"200px",
      //      },1000)
      //  })

      //  $("#box").animate({
      //     height:"200px"
      //  },1000,function(){
      //   alert("Animation complete");
      //  })

   
  

  
 
//! interactions,effects(jqueryUI)




//! widgets(chrome)
//* help developers to build interface 
//*without need to write login from scratch



//! jquery no conflict and minifying ,(semicolon)
// ()()()()
  $

(function(param){
  var libObj={
    //* logic goes here 
    x:30,
  }
  param._obj=libObj;   // jquery
    return _obj 

    $c  bind it to window obj
    noconflict:function

    
    


})(this)

  

 
 


})