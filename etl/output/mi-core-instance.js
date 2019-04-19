import getEnv from 'utils/getEnv';
import { createApiInstance, createUrl } from 'data-provider';
import * as R from 'ramda';

const defaultHeaders =  {
  'Accept'      : `application/json`,
  'Content-Type': `application/json`,
};

const withDefaultHeaders = R.mergeRight(defaultHeaders);



const DeletedId = ["id"];

const FileType = ["id","type"];

const Geometry = ["coordinates","type"];

const NewUserFilter = ["name","state"];

const RestError = ["status","exception","body"];

const UserFilter = ["name","state","id"];

const IssueFileInfo = ["id","uuid","name","geom","description","order","issueId","externalId"];

const CommentCoordinates = ["geom","address"];

const Comment = ["id","issueId","comment","date","files","coordinates","userInfo","userId","groupCode","externalId"];

const UserInfo = ["id","userGroupId","name","photo","fullName"];

const NewComment = ["issueId","comment","coordinates","files","referenceId","uuid","groupCode","externalId"];

const DeletedComment = ["id"];

const IssueLink = ["from","to","type","createdAt","typeDescription"];

const Transition = ["from","to","workflowId","name","id","fields","description","active","formActive","code"];

const TransitionInfo = ["workflowId","transitions","availableStatusIds","statusesWithColor"];

const Type = ["id","name","isDefault","workflowId","code","metadata","description","parentId","deleted"];

const TypeUpdate = ["name","isDefault","description","code","workflowId"];

const NewType = ["name","description","isDefault","organizationId","code","workflowId"];

const Report = ["id","name","parameters","createDate","templateUuid","userId"];

const WorkflowStatus = ["statusId","color","workflowId","initial","id","active"];

const Credentials = ["login","password","remember"];

const AccessToken = ["access_token","refresh_token","token_type","expires_in"];

const User = ["id","email","firstName","photo","identifier","organizationId","userGroupId","ldapDn","created","deleted","activated","blocked","phone","birthDate","lastName","patronymic","roleIds","homeTimeZone"];

const UserAppointment = ["code","name","additional"];

const UserPhoto = ["id","name"];

const Location = ["lon","lat","date"];

const UserGroup = ["id","uuid","email","businessEntity","name","shortName","fullName","address","juridicalAddress","ownershipForm","mapExtent","phones","organizationId","defaultGroup","parentGroupId","customFields","defaultUser"];

const MapExtent = ["id","name","geom"];

const UserGroupPhone = ["id","phoneNumber"];

const OrganizationInfo = ["id","name","mapExtent"];

const PushRule = ["issues","places","chat"];

const UserEvent = ["date","placeId","inside"];

const UserTrack = ["points","distance"];

const CarPoint = ["data","speed","direction","odometr","lat","lng","control","address","distance"];

const Issue = ["id","userId","text","summary","type","assignedUserId","updateDate","createDate","customers","assignedDateFrom","assignedDateTo","point","files","comments","workflowId","priorityId","typeId","assignedOrganizationId","statusId","childIds","customerNameString","organizationId","customFields","externalId","archived","viewedBy","parentId","issueLinksTo","issueLinksFrom"];

const NewIssue = ["typeId","assignedUserId","point","assignedDateFrom","assignedDateTo","createDate","summary","text","priorityId","customFields","parentId","customerIds","statusId","files","newCustomers","externalId"];

const Point = ["geom","address","addressFields"];

const IssueFile = ["id","issueId","order","description","uuid","updateDate","customFields","externalId"];

const Address = ["id","geom","address"];

const NamedEntity = ["id","name","deleted"];

const IssueUpdate = ["typeId","assignedUserId","point","assignedDateFrom","assignedDateTo","createDate","summary","text","priorityId","customFields","parentId","customerIds","statusId","files","newCustomers","externalId","id","updateDate"];

const Customer = ["id","name","phone","email","addresses","isSystem","issuesCount","organizationId"];

const Place = ["id","geom","address","radius"];

const PlaceForm = ["geom","address","radius","name"];

const GeoEvent = ["carId","userId","date","getInside"];

const CustomFieldMetadata = ["id","format","name","fieldCode","uniquenessGroup","ownerCode","groupName","defaultValue","isVisible","order","regexp","minLength","maxLength","isRequired","referencePath","referenceIdFieldName","dictionary"];

const NewCustomer = ["name","phone","email","comment","addresses"];

const NewCustomField = ["type","title","code","required","order","uniquenessGroup","validation","validationErrorText","link","method","valueField","textField","default_value","ownerCode","params"];

const CustomFieldUpdate = ["title","defaultValue","order","code","validation","validationErrorText","required","uniquenessGroup","ownerCode","type"];

const CustomFieldFormat = ["name","value"];

const CustomFieldInfo = ["customFields","fieldsTypes"];

const VersionInfo = ["project.artifactId","project.version","build.time","git.revision"];

const Organization = ["id","name","fullName","ownershipForm","businessEntity","blocked","issuesMaxCount","usersMaxCount","smsMaxCount","placesMaxCount","customersMaxCount","partialBlocked","customFields","phones","subordinateOrgIds"];

const OrganizationPhone = ["id","phoneTypeKey","phoneNumber"];

const Status = ["id","name","namePlural","color","isDefault","code","organizationId","active","description"];

const Priority = ["id","name","order"];

const NewPriority = ["name","order"];

const DictionaryValue = ["key","value"];

const AccessInfo = ["id","role","states","fields","permissionCode","entityId","code","description"];

const State = ["id","name","sign","code","leftOperand","rightOperand","entityId"];

const ChangeInfo = ["id","entityName","entityId","date","changes","action","userId","userInfo"];

const FieldChange = ["fieldName","oldValue","newValue"];

const NewIssueFile = ["uuid","geom","description","order","customFields","externalId","id"];

const IssuePatch = ["text","priorityId","customFields","parentId","customerIds","statusId","summary","files","newCustomers","assignedUserId","assignedDateFrom","assignedDateTo","point","typeId","updateDate","archived"];

const IssueLockAction = ["type","reason"];

const IssueLock = ["id","lockTime","type","user","issueId","reason","unlock"];

const IssueUnlock = ["id","unlockTime","user"];

const IssueUnlockAction = ["type"];

const PointAddressFields = ["country","region","district","city","village","street","house","block","building","flat","entrance"];

const CommentGroup = ["id","code","name"];

const ObjectAccesses = ["fieldCapabilities","objectCapabilities"];

const GlobalAccesses = ["objectCapabilities"];

const NewIssueStatus = ["name","namePlural","color","organizationId","isDefault","code","description","active"];

const NewTransition = ["from","to","workflowId","name","fields","description","active","formActive"];

const NewWorkflowStatus = ["statusId","color","workflowId","initial","active"];

const Workflow = ["name","id","issueCategories","transitions","statuses","default","organizationId"];

const TransitionField = ["code","required"];

const ScriptingPoint = ["uniqueCode","description"];

const DroolsScript = [];

const NewDroolsScript = ["name","base64Content","executionPointCode"];

const CustomField = ["type","id","title","code","required","order","uniquenessGroup","validation","validationErrorText","params","default_value","ownerCode"];

const ObjectNode = [];

const AuditDiff = [];

const AuditDifferenceDto = ["id","operationTime","operation","revision","subjectId","objectId","objectType","diff"];

const mi_organization = ["id","customFields"];

const system_field_output = [];

const system_field_output_detailed = [];

const field_effect_common = ["mode","type","title","issueTypeId","fieldCode","roles"];

const field_effect_input = [];

const field_effect_output = [];

const field_effect_output_detailed = [];

const issue_widget_common = ["issueTypeId","type","title","params"];

const issue_widget_input = [];

const issue_widget_output = [];

const issue_widget_output_detailed = [];

const Status_mapping_dto = ["id","code","approvalPartsType","statusId","issueTypeId"];

const Input_status_mapping_dto = ["code","approvalPartsType","statusId","issueTypeId"];

const Issue_link_type_dto = ["id","code","name","description","outgoingLink","incomingLink"];

const Issue_link_dto = ["id","fromIssueId","toIssueId","comment","createDate","issueLinkTypeId"];

const Input_issue_link_dto = ["fromIssueId","toIssueId","comment","issueLinkTypeId"];

const Batch_input_issue_link_dto = ["items"];

const IssueTypeInfo = ["key","id","name","deleted"];

const NewWorflow = ["name","organizationId","default","code"];

const WorkflowEventDto = ["name","id","default","organizationId","code"];


const MI = {


  get_org_issue_type({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_organizations({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_organisation({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: mi_organization,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_organization({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  update_organisation({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: mi_organization,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  delete_organisation({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: ['body'],

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_current_user({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_issues_accesses({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_issues_states({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  lock({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: IssueLockAction,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  unlock({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: IssueUnlockAction,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  getActiveLocks({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  getLock({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewIssue,

      query: ['sandbox'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_issues({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  update_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: IssueUpdate,

      query: ['sandbox'],

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  patch_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: IssuePatch,

      query: ['force'],

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `patch`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  delete_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  mark_issue_viewed({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_archived({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  dublicate_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  add_file({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewIssueFile,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_files({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_file_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id','fileId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  delete_file({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id','fileId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_issue_type({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewType,

      query: ['autoCreateWorkflow'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_issue_types({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_issue_type({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  update_issue_type({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: TypeUpdate,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  delete_issue_type({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_priority({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewPriority,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_priorities({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_priority({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  update_priority({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewPriority,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  delete_priority({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_all_transitions({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_transitions({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_statuses({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_status({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewIssueStatus,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_comments({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['issueId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  add_comment({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewComment,

      path: ['issueId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  remove_comment({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['issueId','commentId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_custom_fields({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_custom_field({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  update_custom_field({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: CustomFieldUpdate,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_customers({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_customer({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewCustomer,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_customers_by_org_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  update_customer({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewCustomer,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  remove_customer({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_issue_customer_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  export_issues({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['token','issueIds'],

      path: ['format'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  export_issue({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['token'],

      path: ['id','format'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_version({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_comment_groups({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  geIssueAccesses({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id','id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  getCommentAccesses({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id','id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_workflows({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_workflow({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewWorflow,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_status_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id','id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  update_status({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewIssueStatus,

      path: ['id','id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_workflow_transitions({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_transition({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewTransition,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_workflow_statuses({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_workflowstatus({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewWorkflowStatus,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_accessToken_by_code({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: ['body'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  delete_transition({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id','id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_workflow_transition_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  update_transition_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewTransition,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  getScriptingPoints({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  getDroolsScripts({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  createDroolsScript({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewDroolsScript,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  getDroolsScript({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  updateDroolsScript({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewDroolsScript,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  deleteDroolsScript({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  getDroolsScriptContent({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_audit_list({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_audit_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_audit_list_by_object_type_and_object_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset'],

      path: ['objectType','objectId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_cf_for_type({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: CustomFieldUpdate,

      path: ['entityTypeCode','entityTypeCode'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_cf_for_type_and_entity({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewCustomField,

      path: ['entityTypeCode','entityId','entityTypeCode','entityId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_custom_fields_by_entity_type_code_and_entity_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['entityTypeCode','entityId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  delete_cf_for_type_and_entity({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['entityTypeCode','entityId','id','entityTypeCode','entityId','id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  findSystemFields({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  findFieldEffects({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  createFieldEffect({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: field_effect_input,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  getFieldEffect({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['fieldEffectId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  updateFieldEffect({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: field_effect_input,

      path: ['fieldEffectId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  deleteFieldEffect({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['fieldEffectId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  findIssueWidgets({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  createIssueWidget({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: issue_widget_input,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  getIssueWidget({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['issueWidgetId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  updateIssueWidget({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: issue_widget_input,

      path: ['issueWidgetId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  deleteIssueWidget({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['issueWidgetId'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_workflows_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  update_workflow({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewWorflow,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  delete_workflow_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_status_mapping_list({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_status_mapping({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: Input_status_mapping_dto,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_status_mapping_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  update_status_mapping_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: Input_status_mapping_dto,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  delete_status_mapping_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_all_issue_link_types({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_issue_link_type_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_all_issue_links({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  create_issue_link({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: Input_issue_link_dto,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_issue_link_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  update_issue_link_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: Input_issue_link_dto,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  delete_issues_link_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  batch_create_issue_links({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: Batch_input_issue_link_dto,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_workflow_status_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  update_workflow_status({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewWorkflowStatus,

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `put`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  delete_wokflow_status_by_id({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['id'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `delete`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  issues_statuses_actions({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      query: ['limit','offset','query'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_issues_accesses_by_name({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      path: ['name'],

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  get_issues_controlled_fields({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `get`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },

  issues_defaults({ request, domain }, parameters = {}) {
    const pickParams = R.pick(R.__, parameters);
    const paramsIn = {

      body: NewIssue,

    };
    const params = R.map(pickParams, paramsIn);

    const requestParams = {
      url: createUrl({
        path: ``,
        domain,
        params,
      }),
      method : `post`,
      headers: withDefaultHeaders(params.headers),
    };

    return request(requestParams);
  },


};


export default MI;
