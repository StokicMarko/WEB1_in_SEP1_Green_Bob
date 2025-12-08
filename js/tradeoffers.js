document.addEventListener("DOMContentLoaded", loadTradeOffers);

async function loadTradeOffers() {
    try {
        const response = await fetch('../json/jsontradeoffers.json');
        const data = await response.json();
        const tradeOffers = data.tradeoffers;

        const container = document.getElementById('trade-offers-list');
        container.innerHTML = '';

        tradeOffers.forEach(offer => {
            const card = document.createElement('div');
            card.className = 'trade-offer-card';

            const statusClass = `status-${offer.status}`;

            card.innerHTML = `
                <div class="offer-header">
                    <div class="offer-title">${offer.Title}</div>
                    <div class="offer-status ${statusClass}">${offer.status}</div>
                </div>
                <div class="offer-type">Type: ${offer.type}</div>
                <div class="offer-footer">
                    <div class="offer-points">Points: ${offer.points}</div>
                    <div class="offer-date">${offer.date ?? ''}</div>
                </div>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading trade offers:', error);
    }
}