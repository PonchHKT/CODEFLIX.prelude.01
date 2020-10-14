function isUpperCase(char) {
  return (char >= 97 && char <= 122)
}

  function decapilatize(str = '', restToLower = false) {
    const result = []
    const firstCharCode = str.charCodeAt(0)
  
    if (isUpperCase(firstCharCode)) {
      result[0] = String.fromCharCode(firstCharCode - 32)
    }
  
    for (let i = 1; i < str.length; i++) {
      result[i] = str[i]
    }
  X
    return result.join('')
}
  
console.log(decapilatize('WWooner, El Drago'))

