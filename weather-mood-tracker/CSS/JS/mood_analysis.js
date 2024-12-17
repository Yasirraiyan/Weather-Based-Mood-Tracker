document.addEventListener('DOMContentLoaded', () => {
    const moodAnalysis = document.getElementById('moodAnalysis');
    const moodLogs = JSON.parse(localStorage.getItem('moodLogs')) || [];

    if (moodLogs.length === 0) {
        moodAnalysis.innerHTML = '<p>No mood data available.</p>';
    } else {
        moodLogs.forEach(log => {
            const logEntry = document.createElement('div');
            logEntry.className = 'log-entry';
            logEntry.innerHTML = `
                <p>Date: ${log.date}</p>
                <p>Mood: ${log.mood}</p>
                <p>Comments: ${log.comments}</p>
            `;
            moodAnalysis.appendChild(logEntry);
        });
    }
});
