
import getEnv from 'utils/getEnv'
import { createApiInstance, createUrl } from 'data-provider'
import * as R from 'ramda'

const defaultHeaders =  {
    'Accept'      : application/json,
    'Content-Type': application/json,
}

const withDefaultHeaders = R.mergeRight(defaultHeaders)
