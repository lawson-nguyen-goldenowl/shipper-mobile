const host = "http://192.168.3.147:8000/api/"
// const host = "http://192.168.1.3:8000/api/"

export function  request(url, options = {}) {
  const config = {
    method: 'GET',
    ...options,
  }
  const errors = []
  url = host + url

  if (!url) {
    errors.push('url')
  }

  if (
    !config.payload
    && config.method !== 'GET'
    && config.method !== 'DELETE'
  ) {
    errors.push('payload')
  }

  if (errors.length) {
    throw new Error(`Error! You must pass \`${errors.join('`, `')}\``)
  }

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...config.headers,
  }

  const params = {
    headers,
    method: config.method,
    body: null
  }

  if (params.method !== 'GET') {
    params.body = JSON.stringify(config.payload) 
  }

  return fetch(url, params).then( response => response.json())
}