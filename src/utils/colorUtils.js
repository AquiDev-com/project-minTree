/* eslint-disable no-use-before-define */
/* eslint-disable no-mixed-operators */
const componentToHex = (c) => {
    const hex = c.toString(16)
    return hex.length === 1 ? `0${hex}` : hex
  }
  
  const changeColorCss = (variation, type) => {
    for (let index = 0; index < variation.length; index++) {
      document.documentElement.style.setProperty(
        `--color-${(index + 1) * 100}-${type}`,
        variation[index]
      )
    }
  }
  
  const lightOrDark = (color) => {
    let r, g, b
    if (color.match(/^rgb/)) {
      color = color.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      )
      r = color[1]
      g = color[2]
      b = color[3]
    } else {
      color = +`0x${color.slice(1).replace(color.length < 5 && /./g, '$&$&')}`
      r = color >> 16
      g = (color >> 8) & 255
      b = color & 255
    }
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))
    if (hsp > 127.5) {
      return 'light'
    } else {
      return 'dark'
    }
  }
  
  export const generateColorVariations = (hexColor, type) => {
    const color = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor
  
    const red = parseInt(color.substr(0, 2), 16)
    const green = parseInt(color.substr(2, 2), 16)
    const blue = parseInt(color.substr(4, 2), 16)
  
    const variations = []
  
    for (let i = 3; i >= 1; i--) {
      const factor = i * 0.25
  
      const r = Math.round(red + (255 - red) * factor)
      const g = Math.round(green + (255 - green) * factor)
      const b = Math.round(blue + (255 - blue) * factor)
  
      const variation = `#${componentToHex(r)}${componentToHex(
        g
      )}${componentToHex(b)}`
      variations.push(variation)
    }
  
    variations.push(`#${color}`)
  
    for (let i = 1; i <= 3; i++) {
      const factor = i * 0.25
  
      const r = Math.round(red * (1 - factor))
      const g = Math.round(green * (1 - factor))
      const b = Math.round(blue * (1 - factor))
  
      const variation = `#${componentToHex(r)}${componentToHex(
        g
      )}${componentToHex(b)}`
      variations.push(variation)
    }
    changeColorCss(variations, type)
  
    if (type === 'primary') {
      const theme = lightOrDark(variations[4])
      if (theme === 'light') {
        document.documentElement.style.setProperty('--color-text', '#000000')
        document.documentElement.style.setProperty(
          '--color-text-primary',
          '#000000'
        )
        document.documentElement.style.setProperty(
          '--color-text-secondary',
          '#ffffff'
        )
      } else {
        document.documentElement.style.setProperty('--color-text', '#ffffff')
        document.documentElement.style.setProperty(
          '--color-text-primary',
          '#ffffff'
        )
  
        document.documentElement.style.setProperty(
          '--color-text-secondary',
          '#000000'
        )
      }
    }
  
    return variations
  }