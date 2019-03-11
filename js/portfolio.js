let menuEl = document.getElementById("menu");
let downloadEl = document.getElementById("download-file");

downloadEl.addEventListener( "click", downloadFile);

function downloadFile(e) {
  console.log(e.target.id);
  let filename="./projects-files/texto1.txt"
  //downloadEl.setAttribute("href", encodeURIComponent(filename));
  downloadEl.setAttribute("download",filename);
}