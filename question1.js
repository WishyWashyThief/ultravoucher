function Anagrams(words){
    const anagrams = {};
    for (const word of words) {
        const key = word.split('').sort().join('');
        if (anagrams[key]) {
            anagrams[key].push(word);
        } else {
            anagrams[key] = [word];
        }
    }
    return anagrams;
}

const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(Anagrams(words));