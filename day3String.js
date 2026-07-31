let word = "Hello World";

//1. Split the string into an array of words.
let splt = word.split(' ');
console.log(splt);
//2. Find the last word in the array.
let lastword = splt [splt.length-1];
//3. Calculate the length of this word.
console.log(lastword, lastword.length);



let s ="   fly me   to   the moon  ";

//1. Trim the String
let trm = s.trim();
console.log(trm);
//2. Split the String into Words
let spltwrd = trm.split(/\s+/);
console.log(spltwrd);
//3. Identify the Last Word and its length
let lstwrd= spltwrd[spltwrd.length-1];
console.log(lstwrd , lstwrd.length);



function isAnagram(word1, word2) {

    //1. Remove spaces and convert all letters to the same case
word1 = word1.replace(/\s/g,"").toLowerCase();
word2 = word2.replace(/\s/g,"").toLowerCase();
    //2. Sort the characters
word1 = word1.split("").sort().join("");
word2 = word2.split("").sort().join("");
    //3. Compare the sorted strings
return word1 === word2;
}
    //4. Return the result
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));  