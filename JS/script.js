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

function strip(tvShowNames) {
    return tvShowNames.replace(/^(a |the |an )/i, '').trim();
}

const sortedTvShows = tvShows.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

console.log(sortedTvShows);