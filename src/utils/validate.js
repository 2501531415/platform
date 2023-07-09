//判读是否为外链
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

//校验密码是否小于6位
export function isPassword(str) {
  return str.length >= 6
}

//判断是否是字符串
export function isString(str) {
  return typeof str === 'string' || str instanceof String
}

//判断是否是数组
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

//判断是否是手机号
export function isPhone(str) {
  const reg = /^1\d{10}$/
  return reg.test(str)
}
