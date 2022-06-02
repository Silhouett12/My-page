const btnToggle = document.getElementById('toggle-btn');
console.log(btnToggle)

btnToggle.addEventListener("click", function () {
    document.getElementById("navbar").classList.toggle("active")
})