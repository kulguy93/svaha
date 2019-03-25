import getEnv from 'utils/getEnv'
import { createApiInstance, createUrl } from 'data-provider'
import * as R from 'ramda'

const defaultHeaders =  {
    'Accept'      : 'application/json',
    'Content-Type': 'application/json',
}

const withDefaultHeaders = R.mergeRight(defaultHeaders)

const MI = {
  
get_org_issue_type({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/organizations/{id}/issues/types',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_organizations({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/organizations',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_organisation({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/organizations',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_organization({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/organizations/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

update_organisation({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/organizations/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

delete_organisation({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/organizations/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_current_user({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/users/current',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_issues_accesses({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/accesses',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_issues_states({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/states',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

lock({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}/lock',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

unlock({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}/unlock',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

getActiveLocks({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}/locks',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

getLock({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/locks/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_issues({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

update_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

patch_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}',
        domain,
        params,
      }),
      method: 'patch',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

delete_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

mark_issue_viewed({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}/viewed',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_archived({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/archive',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

dublicate_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}/duplicate',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

add_file({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}/files',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_files({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}/files',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_file_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}/files/{fileId}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

delete_file({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}/files/{fileId}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_issue_type({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/types',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_issue_types({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/types',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_issue_type({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/types/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

update_issue_type({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/types/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

delete_issue_type({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/types/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_priority({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/priorities',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_priorities({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/priorities',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_priority({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/priorities/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

update_priority({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/priorities/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

delete_priority({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/priorities/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_all_transitions({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/all/transitions',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_transitions({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/{id}/transitions',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_statuses({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/statuses',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_status({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/statuses',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_comments({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{issueId}/comments',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

add_comment({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{issueId}/comments',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

remove_comment({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{issueId}/comments/{commentId}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_custom_fields({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/customfields',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_custom_field({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/customfields/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

update_custom_field({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/customfields/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_customers({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/customers',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_customer({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/customers',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_customers_by_org_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/organizations/{id}/customers',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

update_customer({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/customers/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

remove_customer({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/customers/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_issue_customer_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/customers/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

export_issues({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/export/{format}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

export_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}/export/{format}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_version({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/version',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_comment_groups({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/comments/groups',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

geIssueAccesses({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/{id}/accesses',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

getCommentAccesses({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/comments/{id}/accesses',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_workflows({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_workflow({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_status_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/statuses/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

update_status({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/statuses/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

warning({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/statuses/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_workflow_transitions({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/transitions',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_transition({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/transitions',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_workflow_statuses({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/statuses',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_workflowstatus({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/statuses',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_accessToken_by_code({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/oauth/code_flow/access_token',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

delete_transition({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/transitions/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_workflow_transition_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/transitions/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

update_transition_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/transitions/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

getScriptingPoints({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/scripting/points',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

getDroolsScripts({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/scripting/drools/',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

createDroolsScript({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/scripting/drools/',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

getDroolsScript({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/scripting/drools/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

updateDroolsScript({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/scripting/drools/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

deleteDroolsScript({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/scripting/drools/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

getDroolsScriptContent({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/scripting/drools/{id}/raw',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_audit_list({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/audit',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_audit_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/audit/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_audit_list_by_object_type_and_object_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/audit/{objectType}/{objectId}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_cf_for_type({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/{entityTypeCode}/customfields',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_cf_for_type_and_entity({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/{entityTypeCode}/{entityId}/customfields',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_custom_fields_by_entity_type_code_and_entity_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/{entityTypeCode}/{entityId}/customfields',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

delete_cf_for_type_and_entity({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/{entityTypeCode}/{entityId}/customfields/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

findSystemFields({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/metadata/issues/fields/system',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

findFieldEffects({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/metadata/issues/fields/effects',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

createFieldEffect({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/metadata/issues/fields/effects',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

getFieldEffect({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/metadata/issues/fields/effects/{fieldEffectId}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

updateFieldEffect({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/metadata/issues/fields/effects/{fieldEffectId}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

deleteFieldEffect({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/metadata/issues/fields/effects/{fieldEffectId}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

findIssueWidgets({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/metadata/issues/widgets',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

createIssueWidget({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/metadata/issues/widgets',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

getIssueWidget({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/metadata/issues/widgets/{issueWidgetId}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

updateIssueWidget({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/metadata/issues/widgets/{issueWidgetId}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

deleteIssueWidget({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/metadata/issues/widgets/{issueWidgetId}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_workflows_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

update_workflow({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

delete_workflow_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_status_mapping_list({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/approval/management/status-mapping',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_status_mapping({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/approval/management/status-mapping',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_status_mapping_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/approval/management/status-mapping/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

update_status_mapping_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/approval/management/status-mapping/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

delete_status_mapping_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/approval/management/status-mapping/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_all_issue_link_types({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/links/types',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_issue_link_type_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/links/types/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_all_issue_links({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/links',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

create_issue_link({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/links',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_issue_link_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/links/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

update_issue_link_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/links/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

delete_issues_link_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/links/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

batch_create_issue_links({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/links/batch',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

warning({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/comments/groups/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_workflow_status_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/statuses/{id}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

update_workflow_status({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/statuses/{id}',
        domain,
        params,
      }),
      method: 'put',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

delete_wokflow_status_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/workflows/statuses/{id}',
        domain,
        params,
      }),
      method: 'delete',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

issues_statuses_actions({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/statuses/actions',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_issues_accesses_by_name({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/accesses/{name}',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

get_issues_controlled_fields({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/controlled-fields',
        domain,
        params,
      }),
      method: 'get',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

issues_defaults({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters)
    const paramsIn = {
      path: ['id'],
      query: [],
      headers: [],
      body: []
    }

    const params = R.map(pickParams, paramsIn)

    const requestParams = {
      url: createUrl({
        path: '/issues/defaults',
        domain,
        params,
      }),
      method: 'post',
      headers: withDefaultHeaders(params.headers),
      body: params.body
    }

    return request(requestParams)
},

}

export default MI
