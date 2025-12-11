document.addEventListener("DOMContentLoaded", () => {
  loadActivities();
  loadCommunalRewards();
});

async function loadActivities() {
  try {
    const response = await fetch("../json/greenActivities.json");
    const activities = await response.json();
    let totalPoints = 0;

    activities.forEach((activity) => {
      totalPoints += activity.points;
    });
    document.getElementById("total-points").innerText = totalPoints;
  } catch (error) {
    console.error("Error loading activities:", error);
  }
}

async function loadCommunalRewards() {
  try {
    const response = await fetch("../json/communal-reward.json");
    const rewards = await response.json();

    rewards.sort((a, b) => a.pointsToUnlock - b.pointsToUnlock);

    const row = document.getElementById("rewards-row");
    row.innerHTML = "";

    rewards.forEach((reward) => {
      const card = document.createElement("div");
      card.className = "reward-card";
      if (!reward.isUnlocked) card.classList.add("locked");

      card.innerHTML = `
        <div class="reward-title">${reward.title}</div>

        <div class="reward-icon">
          <i class="${reward.isUnlocked 
            ? (reward.icon || "fa-solid fa-gift") 
            : "fa-solid fa-lock"}"></i>
        </div>

        <div class="reward-description">${reward.description}</div>

        <div class="reward-points">${reward.pointsToUnlock} pts</div>
      `;

      row.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading rewards:", error);
  }
}

