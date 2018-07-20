let lightIsOpen = 1;
let doorIsOpen = 1;
let airIsOpen = 1;
let bellIsOpen = 1;
let isMorning = 1;
let isNight = 1;
let num = 25;
$(function () {
  let lbutton = false;
  let airbutton = false;
  let doorbutton = false;
  let buzzerbutton = false;
  $('#open-light').on('click', function () {
    console.log('press')
    if (lightIsOpen !== 0) {
      $('#add-light').append('<img id="light" src="https://image.ibb.co/kJozdd/light.png" alt="light-open">')
      lightIsOpen = 0;
      $('#light-status2').html('<li>Open</li>')
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
    }
  })
  $('#close-light').on('click', function () {
    console.log('press')
    $('#add-light').html('')
    lightIsOpen = 1;
    $('#light-status2').html('<li>Close</li>')
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
  })
  $('#open-door').on('click', function () {
    console.log('press')
    if (doorIsOpen !== 0) {
      $('#add-door').append('<img id="door" src="https://image.ibb.co/iQU2Wy/door_open.png" alt="door-open">')
      doorIsOpen = 0;
      $('#door-status2').html('<li>Open</li>')
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
    }
  })
  $('#close-door').on('click', function () {
    console.log('press')
    $('#add-door').html('')
    doorIsOpen = 1;
    $('#door-status2').html('<li>Close</li>')
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
  })
  $('#open-air').on('click', function () {
    console.log('press')
    if (airIsOpen !== 0) {
      $('#add-air').append('<img id="air" src="https://image.ibb.co/caZVZJ/air_open.png" alt="light-open">')
      airIsOpen = 0;
      $('#air-status2').html('<li>Open</li>')
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
    }
  })
  $('#close-air').on('click', function () {
    console.log('press')
    $('#add-air').html('')
    airIsOpen = 1;
    $('#air-status2').html('<li>Close</li>')
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
  })
  $('#open-bell').on('click', function () {
    console.log('press')
    if (bellIsOpen !== 0) {
      $('#add-bell').append('<img id="bell" src="https://png.icons8.com/metro/1600/high-volume.png" alt="bell">')
      bellIsOpen = 0;
      $('#bell-status2').html('<li>Alert</li>')
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
    }
  })
  $('#close-bell').on('click', function () {
    console.log('press')
    $('#add-bell').html('')
    bellIsOpen = 1;
    $('#bell-status2').html('<li>Not-alert</li>')
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
  })
  $("#down").on("click", function () {
    num--;
    $("#tem").html(`<h1>${num}</h1>`)
    $("#tem-status").html(`<li>temperature: ${num} celsius degree</li>`)
  })
  $("#up").on("click", function () {
    num++;
    $("#tem").html(`<h1>${num}</h1>`)
    $("#tem-status").html(`<li>temperature: ${num} celsius degree</li>`)
  })

  // $('#sun').on('click', function () {
  //   console.log('press')
  //   if (isMorning !== 0) {
  //     $('#sun-moon').html('')
  //     $('#sun-moon').append('<img id="sun" src="https://image.ibb.co/gabDMy/146199.png" alt="sun">')
  //     isMorning = 0;
  //   }
  // })
  // $('#sun').on('click', function () {
  //   console.log('press')
  //   if (isMorning !== 1) {
  //     $('#sun-moon').html('')
  //     $('#sun-moon').append('<img id="moon" src="https://cdn.shopify.com/s/files/1/1061/1924/files/Moon_emoji_icon_png.png?11518588292157474409" alt="moon">')
  //     isMorning = 1;
  //   }
  // })
})
