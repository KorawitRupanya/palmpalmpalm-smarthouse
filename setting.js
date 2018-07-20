$(function () {
  let lbutton = false;
  let airbutton = false;
  let doorbutton = false;
  let buzzerbutton = false;
  // setInterval(function () {

  //     $.ajax({
  //         type: "GET",
  //         url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm/set",
  //         data: "",
  //         dataType: "dataType",
  //         success: function (response) {

  //         }
  //     });
  // }, 1000)

  $('#buzzerbutton').on('click', function () {
    buzzerbutton = !buzzerbutton
    if (buzzerbutton === true) {
      $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-web_button_pressed/set",
        data: { value: 0 },
        dataType: "text",
        success: function (response) {
          console.log('Great')
        }, fail: {
          function(response) {
            console.log('asdsajdhasnjdhsajd')
            console.log(response)
          }
        }
      });
    } else {
      $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-web_button_pressed/set",
        data: { value: 1 },
        dataType: "text",
        success: function (response) {
          console.log('Great')
        }, fail: {
          function(response) {
            console.log('asdsajdhasnjdhsajd')
            console.log(response)
          }
        }
      });
    }
  })


  $('#doorbutton').on('click', function () {
    doorbutton = !doorbutton
    if (doorbutton === true) {
      $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-motor/set",
        data: { value: 1 },
        dataType: "text",
        success: function (response) {
          console.log('Great')
        }, fail: {
          function(response) {
            console.log('asdsajdhasnjdhsajd')
            console.log(response)
          }
        }
      });
    } else {
      $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-motor/set",
        data: { value: 0 },
        dataType: "text",
        success: function (response) {
          console.log('Great')
        }, fail: {
          function(response) {
            console.log('asdsajdhasnjdhsajd')
            console.log(response)
          }
        }
      });
    }
  })

  $('#airbutton').on('click', function () {
    airbutton = !airbutton
    if (airbutton === true) {
      $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-air/set",
        data: { value: 1 },
        dataType: "text",
        success: function (response) {
          console.log('Great')
        }, fail: {
          function(response) {
            console.log('asdsajdhasnjdhsajd')
            console.log(response)
          }
        }
      });
    } else {
      $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-air/set",
        data: { value: 0 },
        dataType: "text",
        success: function (response) {
          console.log('Great')
        }, fail: {
          function(response) {
            console.log('asdsajdhasnjdhsajd')
            console.log(response)
          }
        }
      });
    }
  })

  $('#lightbutton').on('click', function () {
    lbutton = !lbutton
    if (lbutton === true) {
      $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-light/set",
        data: { value: 1 },
        dataType: "text",
        success: function (response) {
          console.log('Great')
        }, fail: {
          function(response) {
            console.log('asdsajdhasnjdhsajd')
            console.log(response)
          }
        }
      });
    } else {
      $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th:1515/api/palmpalmpalm-light/set",
        data: { value: 0 },
        dataType: "text",
        success: function (response) {
          console.log('Great')
        }, fail: {
          function(response) {
            console.log('asdsajdhasnjdhsajd')
            console.log(response)
          }
        }
      });
    }
  })
})
