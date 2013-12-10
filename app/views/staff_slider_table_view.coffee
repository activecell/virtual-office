App.StaffSliderTable = Ember.View.extend
  didInsertElement: ->
    $("#slider1").slider
      value: 30
      min: 0
      max: 500
      step: 5
      slide: (event, ui) ->
        $(".js-time1").html ui.value
        $(".js-amt1").html ui.value * 10

    $("#slider2").slider
      value: 0
      min: 0
      max: 500
      step: 5
      slide: (event, ui) ->
        $(".js-time2").html ui.value
        $(".js-amt2").html ui.value * 25

    $("#slider3").slider
      value: 0
      min: 0
      max: 500
      step: 5
      slide: (event, ui) ->
        $(".js-time3").html ui.value
        $(".js-amt3").html ui.value * 50

    $("#slider4").slider
      value: 0
      min: 0
      max: 500
      step: 5
      slide: (event, ui) ->
        $(".js-time4").html ui.value
        $(".js-amt4").html ui.value * 100

    $(".js-time1").html $("#slider1").slider("value")
    $(".js-amt1").html 10 * $("#slider1").slider("value")
    $(".js-time2").html $("#slider2").slider("value")
    $(".js-amt2").html 25 * $("#slider2").slider("value")
    $(".js-time3").html $("#slider3").slider("value")
    $(".js-amt3").html 50 * $("#slider3").slider("value")
    $(".js-time4").html $("#slider4").slider("value")
    $(".js-amt5").html 100 * $("#slider4").slider("value")