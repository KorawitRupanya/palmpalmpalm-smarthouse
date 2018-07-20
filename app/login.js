$(function () {
    
    $('#butt-log').on("click", function () {  
    let username = $("#exampleDropdownFormEmail1").val()
    let resuser = "PalmPalmm"
    let respass = "123Palmpalmm"
    //  $.ajax({
    //     type: "GET",
    //     url: "http://ecourse.cpe.ku.ac.th:1515/api/PlamPlammPlammm-Username/view",
    //     dataType: "text",
    //     success: function (response) {
    //         // console.log(response)
    //         // let cleaned = response
    //         //      .replace(/&/g, '&amp')
    //         //      .replace(/&/g, '&lt')
    //         //      .replace(/&/g, '&quot')
    //         // if (username !== response) {
    //         //     $("#result").append(`<div class="alert alert-warning" role="alert">
    //         //     <h1>${response}</h1>
    //         //   </div>`)
    //         // }
    //         resuser = response

    //     },
    //     fail: function (response) {
    //         console.log(response)
    //     }
    // });
     let password = $("#exampleDropdownFormPassword1").val()
    // $.ajax({
    //     type: "GET",
    //     url: "http://ecourse.cpe.ku.ac.th:1515/api/PlamPlammPlammm-Password/view",
    //     dataType: "text",
    //     success: function (response) {
    //         // console.log(response)
    //         // let cleaned = response
    //         //      .replace(/&/g, '&amp')
    //         //      .replace(/&/g, '&lt')
    //         //      .replace(/&/g, '&quot')
    //         // if (password !== response) {
    //         //     $("#result").append(`<h2>other : <h2><div class="alert alert-warning" role="alert">
    //         //     <h1>${response}</h1>
    //         //   </div>`)
    //         // }
    //         respass = response
    //     },
    //     fail: function (response) {
    //         console.log(response)
    //     }
    // });
    if (resuser === username && respass === password) {
        alert("Yessssss")
    }
    else
        alert ("Nooooo")
} 
)})
