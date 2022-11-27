import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import LocalStorage from '../../services/LocalStorage'
import { isServer } from '../../utils/next'

export default function usePersistState<T>(
  initialValue: T,
  persistKey: string,
  json?: boolean
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(() =>
    isServer()
      ? initialValue
      : LocalStorage.get(persistKey)
      ? json
        ? JSON.parse(LocalStorage.get(persistKey) as string)
        : LocalStorage.get(persistKey)
      : initialValue
  )

  useEffect(() => {
    LocalStorage.set(persistKey, json ? JSON.stringify(state) : state)
  })

  return [state, setState]
}
