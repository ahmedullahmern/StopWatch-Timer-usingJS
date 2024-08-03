var min_html = document.getElementById("min")
var sec_html = document.getElementById("sec")
var mlsec_html = document.getElementById("mlsec")


var start_btn = document.getElementById("start_btn")
var stop_btn = document.getElementById("stop_btn")
var reset_btn = document.getElementById("reset_btn")

var minutes = 0
var seconds = 0
var milliseconds = 0

var setinervalUpdated

stop_btn.disabled = true
reset_btn.disabled = true

function start() {
    start_btn.disabled = true
    start_btn.style.opacity = "0.3"
    stop_btn.disabled = false
    reset_btn.disabled = false
    setinervalUpdated = setInterval(function () {
        milliseconds++
        if (milliseconds >= 99) {
            seconds++
            milliseconds = 0
        }
        if (seconds >= 56) {
            minutes++
            seconds = 0
        }
        mlsec_html.innerText = milliseconds
        sec_html.innerText = seconds < 10 ? "0" + seconds : seconds
        min_html.innerText = minutes < 10 ? "0" + minutes : minutes
    }, 10)
}
function stop() {
    start_btn.disabled = false
    start_btn.style.opacity = "0.8"

    clearInterval(setinervalUpdated)
}
function reset() {
    start_btn.disabled = false
    start_btn.style.opacity = "0.8"
    clearInterval(setinervalUpdated)
    milliseconds = 0
    seconds = 0
    minutes = 0
    sec_html.innerText = "00"
    min_html.innerText = "00"
    mlsec_html.innerText = "00"
}



start_btn.addEventListener("mouseover", function () {
    if (!start_btn.disabled) {
        start_btn.style.opacity = "0.8"
    }
})

start_btn.addEventListener("mouseout", function () {
    if (!start_btn.disabled) {
        start_btn.style.opacity = "1.0"
    }
})
