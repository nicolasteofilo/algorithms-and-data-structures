function reverse(str){
    let reverseWord = '';
    const length = str.length - 1;
    
    function helper(num) {
        if(num === -1) return;
        reverseWord = reverseWord.concat(str[num])
        helper(num-1);
    }
    
    helper(length);
    return reverseWord;
}
