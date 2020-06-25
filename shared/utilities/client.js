/**
 * Client
 * @module Client
 */

import axios from 'axios'

export class ServerError extends Error {
  response;

  constructor(message) {
    super(message)

    Error.captureStackTrace(this, ServerError)

    this.name = 'ServerError'

    return this
  }
}

export function parseError(error) {
  return error || 'Something went wrong'
}

/**
 * Fetch data
 *
 * @param {string} url
 * @param {Object} options
 * @param {string} [options.method] - Request method ( GET, POST, PUT, ... ).
 * @param {string} [options.payload] - Request body.
 * @param {Object} [options.headers]
 *
 * @returns {Promise}
 */
export function request(url, options = {}) {
  const config = {
    method: 'GET',
    ...options,
  }
  const errors = []

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
    url,
    headers,
    method: config.method,
  }

  if (params.method !== 'GET') {
    params.data = config.payload
  }

  return axios(url, params).then((response) => {
    if (response.status > 299) {
      const error = new ServerError(response.statusText)
      error.status = response.status
      error.response = response.data
      throw error
    } else {
      return response.data
    }
  })
}
