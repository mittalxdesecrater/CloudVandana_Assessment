const str="This is a sunny day";

function reverseSentence(sentence){
    const words=sentence.split(' ');

    const reverseWords =words.map(word=>{
        return word.split('').reverse().join('');
    });

    return reverseWords.join(' ');
}
console.log(reverseSentence(str));
