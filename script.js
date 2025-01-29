document.addEventListener("DOMContentLoaded", function () {
    // Vérification du statut du serveur Minecraft (remplace l'IP par celle de ton serveur)
    const serverIP = "your.server.ip"; // Remplace par l'IP de ton serveur
    const statusElement = document.createElement("p");
    statusElement.style.textAlign = "center";
    statusElement.style.marginTop = "10px";
    document.body.insertBefore(statusElement, document.body.firstChild);

    fetch(`https://api.mcsrvstat.us/2/${serverIP}`)
        .then(response => response.json())
        .then(data => {
            if (data.online) {
                statusElement.innerHTML = `🟢 Server Online - ${data.players.online} players connected`;
                statusElement.style.color = "#54c3ff";
            } else {
                statusElement.innerHTML = "🔴 Server Offline";
                statusElement.style.color = "red";
            }
        })
        .catch(error => {
            console.error("Erreur lors de la récupération du statut du serveur", error);
            statusElement.innerHTML = "⚠️ Impossible de récupérer le statut du serveur";
            statusElement.style.color = "orange";
        });

    // Animation du bouton "Join Now"
    const joinButton = document.querySelector(".join-button");
    joinButton.addEventListener("mouseover", function () {
        joinButton.style.transform = "scale(1.1)";
        joinButton.style.transition = "transform 0.3s ease-in-out";
    });
    joinButton.addEventListener("mouseleave", function () {
        joinButton.style.transform = "scale(1)";
    });

    // Affichage d'annonces dynamiques
    const announcements = [
        "🚀 Nouveau mod ajouté ! Découvrez-le dès maintenant !",
        "🎉 Événement spécial ce week-end ! Ne manquez pas ça !",
        "⚠️ Maintenance prévue demain à 20h UTC."
    ];
    
    const announcementElement = document.createElement("div");
    announcementElement.style.position = "fixed";
    announcementElement.style.bottom = "10px";
    announcementElement.style.right = "10px";
    announcementElement.style.padding = "10px";
    announcementElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    announcementElement.style.color = "white";
    announcementElement.style.borderRadius = "5px";
    announcementElement.style.fontSize = "1rem";
    announcementElement.style.display = "none";
    document.body.appendChild(announcementElement);

    let announcementIndex = 0;
    function showAnnouncement() {
        announcementElement.innerHTML = announcements[announcementIndex];
        announcementElement.style.display = "block";
        setTimeout(() => {
            announcementElement.style.display = "none";
            announcementIndex = (announcementIndex + 1) % announcements.length;
            setTimeout(showAnnouncement, 5000);
        }, 5000);
    }
    showAnnouncement();
});
