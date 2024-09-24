document.addEventListener('DOMContentLoaded', function() {
    var svgObject = document.getElementById('svg-map');
    
    // List of country IDs that have corresponding HTML pages
    const availableCountries = ['us', 'fr', 'jp', 'gb']; // Add the IDs of countries with pages

    svgObject.addEventListener('load', function() {
        var svgDoc = svgObject.contentDocument;

        // Ensure the SVG content is correctly selected
        if (!svgDoc) {
            console.error('Failed to load SVG content.');
            return;
        }

        // Select all countries (paths) within the SVG
        var countries = svgDoc.querySelectorAll('path');
        
        countries.forEach(function(country) {
            country.addEventListener('click', function() {
                var countryID = this.id.toLowerCase();  // Convert the ID to lowercase
                console.log('Country clicked:', countryID);

                // Check if the country has a corresponding HTML page
                if (availableCountries.includes(countryID)) {
                    window.location.href = 'locations/' + countryID + '.html';  // Redirect to the country-specific page
                } else {
                
                
                
//add a popup to replace the web pop up "please select a highlighteed country"              
                    alert('Page not available for ' + countryID.toUpperCase());  // Show an alert if the page doesn't exist
                }
            });
        });
    });
});
