export function generateSimpleRandomString(): string {
  const easyToTypeCharacters = 'abcdefghjkmnpqrstuvwxyz23456789' // Excluding easily confusable characters
  let randomString = ''

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * easyToTypeCharacters.length)
    randomString += easyToTypeCharacters.charAt(randomIndex)
  }

  return randomString
}

export const randomStringRegex = /^[a-zA-Z0-9]{6}$/
