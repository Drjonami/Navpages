const featureBtn = document.getElementById('feature-btn');
const companyBtn = document.getElementById('company-btn');
const featureBlg = document.getElementById('feature-blg');
const companyBlg = document.getElementById('company-blg');

featureBtn.addEventListener('click', () => {
    if (featureBlg.classList.contains('display-none')) {
        featureBlg.classList.remove('display-none')
    }
    else {
        featureBlg.classList.add('display-none')
    }
})

companyBtn.addEventListener('click', () => {
    if (companyBlg.classList.contains('display-none')) {
        companyBlg.classList.remove('display-none')
    }
    else {
        companyBlg.classList.add('display-none')
    }
})
