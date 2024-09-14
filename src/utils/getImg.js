const modules = import.meta.glob('@/assets/images/*.png', { eager: true })

function getImg(iconName) {
  if (!iconName) return
  return modules[`/src/assets/images/${iconName}.png`].default
}

export { getImg }
