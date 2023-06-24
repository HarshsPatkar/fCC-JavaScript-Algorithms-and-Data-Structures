function palindrome(str) {
    const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g);
        
    // 3) return string === reversedString
    return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('');
}
