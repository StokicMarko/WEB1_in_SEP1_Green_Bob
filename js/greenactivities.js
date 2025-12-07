document.addEventListener("DOMContentLoaded", loadActivities); 

async function loadActivities() {
    try {
        const response = await fetch('../json/greenActivities.json');
        const activities = await response.json();

        const container = document.getElementById('activities-list');
        container.innerHTML = '';

        activities.forEach(activity => {
            const card = document.createElement('div');
            card.className = 'activity-card';

            card.innerHTML = `
                <div class="activity-text">
                    <div class="activity-title">${activity.title}</div>
                    <div class="activity-description">${activity.description}</div>
                </div>
                <div class="activity-date">${activity.date}</div>
            `;
    
            container.appendChild(card);
        });

    } 
        catch (error) {
        console.error('Error loading activities:', error);}
}
