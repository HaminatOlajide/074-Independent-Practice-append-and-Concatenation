$("button").click(function() {
let college = $(".to-pack-input").val();
$("ul").append("<li>" + college + "</li>");
        console.log(college);
$(".course-list").append("I'm going to pack" + " " + college);

});