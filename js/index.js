$(document).ready(() => {
  console.log("Hoal")
})

$("#btn_open_menu").click(() => {
  const navigation = $(".navigation")
  navigation.css('marginTop', '0')
})
$("#btn_close_menu").click(() => {
  const navigation = $(".navigation")
  navigation.css('marginTop', '-100%')
  setTimeout(() => {
    navigation.css('marginTop', '-300%')
  },1000)
})
