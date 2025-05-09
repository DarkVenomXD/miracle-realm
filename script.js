document.addEventListener("DOMContentLoaded", function () {
    // Example: Check if the user is an admin
    const isAdmin = false; // Change this based on your admin check logic (e.g., session, cookie, etc.)

    // Hide the link to map.html if the user is not an admin
    const mapLink = document.querySelector("a[href='map.html']");
    if (mapLink && !isAdmin) {
        mapLink.style.display = "none";  // Hides the map link
    }

    // Redirect non-admin users if they try to access map.html directly
    if (window.location.pathname === '/map.html' && !isAdmin) {
        window.location.href = 'index.html';  // Redirect to another page, like index.html
    }

    // Add the Login button if the user is not logged in
    const isLoggedIn = false; // Replace with your actual login check logic
    const header = document.querySelector("header"); // Assuming you want to place the button in the header
    if (!isLoggedIn && header) {
        const loginButton = document.createElement("button");
        loginButton.textContent = "Login";
        loginButton.classList.add("login-btn");
        loginButton.addEventListener("click", function() {
            // Your login logic goes here
            alert("Redirecting to login page...");
            window.location.href = 'login.html';  // Redirect to the login page (you can adjust the URL)
        });
        header.appendChild(loginButton); // Add the button to the header
    }

});

document.addEventListener("DOMContentLoaded", function () {
    // Checking Minecraft server status (replace the IP with your server's IP)
    const serverIP = "createfriendsmp.falixsrv.me"; // Replace with your server's IP
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
            console.error("Error fetching server status", error);
            statusElement.innerHTML = "⚠️ Unable to retrieve server status";
            statusElement.style.color = "orange";
        });

    // "Join Now" button animation
    const joinButton = document.querySelector(".join-button");
    joinButton.addEventListener("mouseover", function () {
        joinButton.style.transform = "scale(1.1)";
        joinButton.style.transition = "transform 0.3s ease-in-out";
    });
    joinButton.addEventListener("mouseleave", function () {
        joinButton.style.transform = "scale(1)";
    });

    // Dynamic announcements display
    const announcements = [
        "🚀 New mod added! Check it out now!",
        "🎉 Special event this weekend! Don't miss it!",
        "⚠️ Scheduled maintenance tomorrow at 8 PM UTC."
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
