const tvShows = [
    "The Simpsons",
    "Family Guy",
    "Bobs Burgers",
    "Rick and Morty",
    "South Park",
    "American Dad",
    "Futurama",
    "Spongebob Squarepants",
    "Boy Meets World",
    "Friends",
    "How I Met Your Mother",
    "The Fresh Prince of Bel Air",
    "The Office"
];

const sortedTvShows = tvShows.sort(function(a, b) {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
})

console.log(sortedTvShows);