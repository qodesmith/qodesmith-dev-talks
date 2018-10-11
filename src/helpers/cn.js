const cn = (...args) => {
  const classNames = args.reduce((arr, thing) => {
    if (typeof thing === 'string') return [...arr, thing] // Strings.
    if (({}).toString.call(thing) !== '[object Object]') return arr // Ignore everything else but objects.

    const subArr = Object
      .keys(thing)
      .reduce((arr2, key) => (thing[key] ? [...arr2, key] : arr2), [])

    return [...arr, ...subArr]
  }, [])

  // Avoid duplicate names.
  return [...new Set(classNames)].join(' ')
}

export default cn
