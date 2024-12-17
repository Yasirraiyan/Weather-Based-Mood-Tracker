function logMood() {
    const mood = document.getElementById('mood').value;
    const comments = document.getElementById('comments').value;
    const log = {
        mood: mood,
        comments: comments,
        date: new Date().toLocaleString()
    };

    let moodLogs = JSON.parse(localStorage.getItem('moodLogs')) || [];
    moodLogs.push(log);
    localStorage.setItem('moodLogs', JSON.stringify(moodLogs));

    alert('Mood logged successfully!');
}
