function wtf() {
    let text = document.getElementById('text').value
    let res = ''
     for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
         if (text[i] === '[') {
              res += '('
        } else if (text[i] === ']') {
            res += ')'
         } else if (text[i] === 'Куплет 1') {
            res += 'Куплет'
         } else if (text[i] === 'Куплет 2') {
            res += 'Куплет'
         } else if (text[i] === 'Куплет 3') {
            res += 'Куплет'
         }
    }
    
    document.getElementById('output').innerText = res;
}
