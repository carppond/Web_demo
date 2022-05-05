// 存储模块

// 存储数据
export const setItem = (key, value) => {
  // 将数据或对象类型的数据，转换为 json 字符串
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 获取数据
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

// 删除数据
export const removeItem = key => {
  window.localStorage.removeItem(key)
}
