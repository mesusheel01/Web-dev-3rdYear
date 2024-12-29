// // $ -> document.querySelector
// $("h1").css("color","red"); 
// $("button").css("color","black")

// $("h1").addClass("big-title margin-50");
// // $("button").addClass("big-title margin-50");
// // $("button").text("Don't pull out my rage!").css("color","red").css("background-color","black");
// // $("a").attr("href","https://www.yahoo.com" );
// $("a").addClass("search");


// $(document).keypress(function(event){
//     $("h1").text(event.key);
//     console.log(event.key);
// })

// $("h1").on("mouseover",function(){
//     $("button").css("color","pink");
// })

// $("h1").before("<h2>Mai hoon Gian</h2>");
// $("h1").after("<h2>Mai hoon Gian</h2>");
// $("h1").prepend("<h2>Mai hoon Gian</h2>");
// $("h1").append("<h2>Mai hoon Gian</h2>");

// $("button").remove(); will remove all the buttons in the HTML document

// hide,show,toggle,fadeIn,fadeOut,fadeToggle,slideup,slidedown
// $("button").on("click",function(){
//     $("h1").fadeToggle();
// })
//every up and down method comes with toggle 
$("button").on("click",function(){
    $("h1").slideToggle();
})