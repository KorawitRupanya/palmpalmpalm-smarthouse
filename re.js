setInterval(function() {$.ajax({
    type: "GET",
    url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-light_lux/view",
    dataType: "text",
    success: function (response) {
        console.log(response)
        let cleaned = response
             .replace(/&/g, '&amp')
             .replace(/&/g, '&lt')
             .replace(/&/g, '&quot')
             
        $("#result").html(`<div class="full center alert alert-warning" role="alert">
         <h1 class = "big">${response}</h1>
       </div>`)
    },
    fail: function (response) {
        console.log(response)
    }
});}, 2000)

// setInterval(function() {$.ajax({
//     type: "GET",
//     url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-light/view",
//     dataType: "text",
//     success: function (response) {
//         console.log(response)
//         let cleaned = response
//              .replace(/&/g, '&amp')
//              .replace(/&/g, '&lt')
//              .replace(/&/g, '&quot')
             
//         $("#result").html(`<div class="full center alert alert-warning" role="alert">
//          <h1 class = "big">${response}</h1>
//        </div>`)
//     },
//     fail: function (response) {
//         console.log(response)
//     }
// });}, 6000)

// setInterval(function() {$.ajax({
//     type: "GET",
//     url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-light/view",
//     dataType: "text",
//     success: function (response) {
//         console.log(response)
//         let cleaned = response
//              .replace(/&/g, '&amp')
//              .replace(/&/g, '&lt')
//              .replace(/&/g, '&quot')
             
//         $("#result").html(`<div class="full center alert alert-warning" role="alert">
//          <h1 class = "big">${response}</h1>
//        </div>`)
//     },
//     fail: function (response) {
//         console.log(response)
//     }
// });}, 6000)
