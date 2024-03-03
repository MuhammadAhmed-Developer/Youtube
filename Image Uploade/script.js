function readURL(input) {
    let imgPrev = document.getElementById('imgPrev');
    let clearButton = document.getElementById('clear');

    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            imgPrev.src = e.target.result;
        };

        reader.onloadend = function () {
            clearButton.style.display = 'flex';
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        imgPrev.src = 'https://static.vecteezy.com/system/resources/previews/004/968/473/original/upload-or-add-a-picture-jpg-file-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg';
        clearButton.style.display = 'none';
    }
}


function clearFileInput() {
    let fileInput = document.getElementById('customFileBrowser');
    let imgPrev = document.getElementById('imgPrev');
    let clearButton = document.getElementById('clear');

    fileInput.value = '';
    imgPrev.src = 'https://static.vecteezy.com/system/resources/previews/004/968/473/original/upload-or-add-a-picture-jpg-file-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg';
    clearButton.style.display = 'none';
}

document.getElementById('clear').addEventListener('click', clearFileInput);