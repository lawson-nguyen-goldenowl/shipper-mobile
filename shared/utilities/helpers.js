import produce from 'immer'

/**
 * Convert data attributes to Object
 * @param {Element} elem
 * @returns {{}}
 */
export function datasetToObject(elem) {
  const data = {};
  [].forEach.call(elem.attributes, (attr) => {
    /* istanbul ignore else */
    if (/^data-/.test(attr.name)) {
      const camelCaseName = attr.name
        .substr(5)
        .replace(/-(.)/g, ($0, $1) => $1.toUpperCase())
      data[camelCaseName] = attr.value
    }
  })
  return data
}

// this function can replace handleActions of redux-actions module
// with the same params passed
export function handleActions(actionsMap, defaultState) {
  return (state = defaultState, {
    type,
    ...rest
  } = {}) => produce(state, (draft) => {
    const action = actionsMap[type]
    let newState

    if (action) {
      newState = action(draft, rest)
    }

    if (newState) {
      return newState
    }

    return draft
  })
}

export function keyMirror(obj) {
  const output = {}
  Object.keys(obj).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(output, key)) {
      output[key] = key
    }
  })

  return output
}
