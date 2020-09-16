  function decapilatize(str = '', restToLower = false) {
    const result = []
    const firstCharCode = str.charCodeAt(0)
  
    if (isLowerCase(firstCharCode)) {
      result[0] = String.fromCharCode(firstCharCode - 32)
    }
  
    for (let i = 1; i < str.length; i++) {
      result[i] = str[i]
    }
  
    return result.join('')
}
  
  const decapitalizeString = 
  decapitalize('Woonan')
  decapitalize('El Drago ')
  console.log(decapitalizeString)


