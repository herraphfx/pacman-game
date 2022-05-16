// START PAGE
function audio_button() {
    let audio_button_change = document.getElementById('audio');
    let audio_control = document.getElementById('audio_tag')

    if (audio_button_change.className === 'bi bi-volume-up-fill fa-2x') {
        audio_button_change.setAttribute('class', 'bi bi-volume-mute-fill fa-2x');
        audio_control.pause();
    }
    else {
        audio_button_change.setAttribute('class', 'bi bi-volume-up-fill fa-2x');
        audio_control.play();
    }
}

let high_score_text2 = document.getElementById('high_score2');
let high_score2 = 0;

function Check_High_Score2() {
    high_score2 = localStorage.getItem('high-score');

    high_score_text2.innerText = high_score2;

    if (high_score2 === null) {
        high_score_text2.innerText = '0';
        high_score2 = 0;
    }
}
Check_High_Score2();
