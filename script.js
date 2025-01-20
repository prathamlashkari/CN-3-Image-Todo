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

    function manageFiles(files) {
        let totalFiles = fileList.children.length;
    
        Array.from(files).forEach(file => {
            if (!file.type.startsWith('image/')) {
                alert("File " + file.name + " is not an image and won't be added.");
            }
            else if (file.size > 1024 * 1024) {
                alert("File " + file.name + " is larger than 1MB and won't be added.");
            } else {
                totalFiles++;
                if (totalFiles <= MAX_IMAGES) {
                    displayFile(file);
                } else {
                    alert("Maximum images allowed is " + MAX_IMAGES + ". " + file.name + " won't be added.");
                }
            }
        });
    
        while (fileList.children.length > MAX_IMAGES) {
            fileList.removeChild(fileList.firstChild);
        }
    
        saveToLocalStorage();
    }

});