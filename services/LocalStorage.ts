class LocalStorage {
  get(key: string) {
    return window.localStorage.getItem(key)
  }

  set(key: string, value: any) {
    window.localStorage.setItem(key, value)
  }

  remove(key: string) {
    window.localStorage.removeItem(key)
  }

  clear() {
    window.localStorage.clear()
  }

  isEmpty() {
    return window.localStorage.length === 0
  }
}

export default new LocalStorage()
