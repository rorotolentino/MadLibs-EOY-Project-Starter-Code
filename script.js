let storiesCreated = 0; 
$("button").click(function(){
    storiesCreated = storiesCreated+1;
    let name = $(".name-input").val();
    let transport = $(".transport-input").val();
    let adjective = $(".adjective-input").val();
    let number = $(".number-input").val();
    
    console.log(storiesCreated);
    console.log(name);
    console.log(transport);
    console.log(adjective);
    console.log(number);
    
 $(".story").append( " Once upon a time a little lad named " + name + " took a " + transport + " on their trip to Magic Mountain " + " the trip was " + adjective + " and took " + number + " hours ");
    });