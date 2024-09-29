document.addEventListener('DOMContentLoaded', function() {
    var svgObject = document.getElementById('svg-map');
    
    // List of available countries
    const availableCountries = ['us', 'fr', 'jp', 'gb']; 

    // Load the SVG
    svgObject.addEventListener('load', function() {
        var svgDoc = svgObject.contentDocument;

        if (!svgDoc) {
            console.error('Failed to load SVG content.');
            return;
        }

        var countries = svgDoc.querySelectorAll('path');
        
        // Popup element
        var popup = document.getElementById('custom-popup');
        var popupMessage = document.getElementById('popup-message');
        var closeBtn = document.querySelector('.close-btn');
        
        // Function to show the popup
        function showPopup(message) {
            popupMessage.textContent = message;
            popup.style.display = 'block';
        }
        
        // Function to hide the popup
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
        });
        
        // Close the popup if the user clicks outside of the popup content
        window.addEventListener('click', function(event) {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });

        countries.forEach(function(country) {
            country.addEventListener('click', function() {
                var countryID = this.id.toLowerCase();
                console.log('Country clicked:', countryID);
                
                // Redirects user to country specefic page
                if (availableCountries.includes(countryID)) {
                    window.location.href = 'locations/' + countryID + '.html';
                // If there is no availaible page
                } else {
                    showPopup('The country you have selected is unavailable. Please select a highlighted country.');
                }
            });
        });
    });
});
