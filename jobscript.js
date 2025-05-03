<script>
let bookmark = document.getElementsByClassName('bookmark')
Array.from(bookmark).forEach(v => v.addEventListener('click', function () {

    let el = this.parentElement.getElementsByClassName('bookmark')[0]

    if (el.classList.contains("fa-heart-o")) {
        el.classList.remove("fa-heart-o")
        el.classList.add("fa-heart")
        el.innerText = "Job saved"

    } else {
        el.classList.remove("fa-heart")
        el.classList.add("fa-heart-o")
        el.innerText = "Save Job"
    }
}));
document.getElementById("searchBtn").addEventListener("click", function () {
    const jobId = 101;
    const title = "Frontend Developer";
    const company = "OpenAI";
    const location = "Remote";

    const url = `job-details.html?jobId=${jobId}&title=${encodeURIComponent(title)}&company=${encodeURIComponent(company)}&location=${encodeURIComponent(location)}`;
    window.location.href = url;
});
</script>
