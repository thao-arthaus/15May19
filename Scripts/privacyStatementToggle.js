const statementBtn = document.getElementById('privacy-statement-btn');
const statement = document.getElementsByClassName('privacy-statement')[0]
statementBtn.addEventListener('click', function() {
    const trial = statementBtn.childNodes[1];
    if (statement.className === 'privacy-statement ') {
        statement.className = 'privacy-statement expanded';
        trial.style.transform = 'rotate(180deg) translateY(2px)';

    } else {
        statement.className = 'privacy-statement ';
        trial.style.transform = 'rotate(0deg)';
    }
    //alert('testing');
})
