document.addEventListener("DOMContentLoaded", function() {
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    const MAX_IMAGES = 5;

    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.backgroundColor = '#e0e0e0';
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.style.backgroundColor = '#fff';
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.backgroundColor = '#fff';

        const files = e.dataTransfer.files;
        manageFiles(files);
    });

    fileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        manageFiles(files);
    });

    dropzone.addEventListener('click', () => {
        fileInput.click();
    });

});