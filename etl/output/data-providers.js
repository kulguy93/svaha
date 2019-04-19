import {compose, defaultProps} from 'recompose'
import {MiRequests} from './mi-core-instance'
import DataProvider, {isExpire} from '../data-provider'

export const get_org_issue_typeDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_org_issue_type,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_organizationsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_organizations,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_organisationDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_organisation,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_organizationDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_organization,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const update_organisationDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.update_organisation,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const delete_organisationDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.delete_organisation,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_current_userDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_current_user,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_issues_accessesDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_issues_accesses,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_issues_statesDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_issues_states,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const lockDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.lock,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const unlockDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.unlock,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const getActiveLocksDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.getActiveLocks,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const getLockDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.getLock,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_issueDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_issue,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_issuesDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_issues,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_issueDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_issue,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const update_issueDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.update_issue,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const patch_issueDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.patch_issue,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const delete_issueDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.delete_issue,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const mark_issue_viewedDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.mark_issue_viewed,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_archivedDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_archived,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const dublicate_issueDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.dublicate_issue,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const add_fileDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.add_file,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_filesDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_files,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_file_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_file_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const delete_fileDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.delete_file,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_issue_typeDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_issue_type,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_issue_typesDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_issue_types,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_issue_typeDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_issue_type,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const update_issue_typeDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.update_issue_type,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const delete_issue_typeDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.delete_issue_type,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_priorityDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_priority,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_prioritiesDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_priorities,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_priorityDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_priority,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const update_priorityDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.update_priority,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const delete_priorityDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.delete_priority,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_all_transitionsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_all_transitions,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_transitionsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_transitions,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_statusesDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_statuses,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_statusDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_status,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_commentsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_comments,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const add_commentDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.add_comment,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const remove_commentDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.remove_comment,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_custom_fieldsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_custom_fields,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_custom_fieldDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_custom_field,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const update_custom_fieldDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.update_custom_field,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_customersDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_customers,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_customerDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_customer,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_customers_by_org_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_customers_by_org_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const update_customerDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.update_customer,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const remove_customerDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.remove_customer,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_issue_customer_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_issue_customer_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const export_issuesDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.export_issues,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const export_issueDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.export_issue,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_versionDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_version,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_comment_groupsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_comment_groups,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const geIssueAccessesDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.geIssueAccesses,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const getCommentAccessesDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.getCommentAccesses,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_workflowsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_workflows,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_workflowDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_workflow,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_status_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_status_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const update_statusDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.update_status,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_workflow_transitionsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_workflow_transitions,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_transitionDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_transition,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_workflow_statusesDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_workflow_statuses,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_workflowstatusDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_workflowstatus,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_accessToken_by_codeDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_accessToken_by_code,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const delete_transitionDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.delete_transition,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_workflow_transition_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_workflow_transition_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const update_transition_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.update_transition_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const getScriptingPointsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.getScriptingPoints,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const getDroolsScriptsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.getDroolsScripts,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const createDroolsScriptDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.createDroolsScript,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const getDroolsScriptDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.getDroolsScript,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const updateDroolsScriptDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.updateDroolsScript,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const deleteDroolsScriptDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.deleteDroolsScript,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const getDroolsScriptContentDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.getDroolsScriptContent,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_audit_listDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_audit_list,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_audit_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_audit_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_audit_list_by_object_type_and_object_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_audit_list_by_object_type_and_object_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_cf_for_typeDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_cf_for_type,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_cf_for_type_and_entityDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_cf_for_type_and_entity,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_custom_fields_by_entity_type_code_and_entity_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_custom_fields_by_entity_type_code_and_entity_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const delete_cf_for_type_and_entityDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.delete_cf_for_type_and_entity,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const findSystemFieldsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.findSystemFields,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const findFieldEffectsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.findFieldEffects,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const createFieldEffectDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.createFieldEffect,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const getFieldEffectDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.getFieldEffect,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const updateFieldEffectDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.updateFieldEffect,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const deleteFieldEffectDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.deleteFieldEffect,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const findIssueWidgetsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.findIssueWidgets,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const createIssueWidgetDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.createIssueWidget,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const getIssueWidgetDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.getIssueWidget,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const updateIssueWidgetDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.updateIssueWidget,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const deleteIssueWidgetDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.deleteIssueWidget,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_workflows_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_workflows_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const update_workflowDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.update_workflow,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const delete_workflow_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.delete_workflow_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_status_mapping_listDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_status_mapping_list,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_status_mappingDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_status_mapping,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_status_mapping_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_status_mapping_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const update_status_mapping_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.update_status_mapping_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const delete_status_mapping_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.delete_status_mapping_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_all_issue_link_typesDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_all_issue_link_types,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_issue_link_type_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_issue_link_type_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_all_issue_linksDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_all_issue_links,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const create_issue_linkDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.create_issue_link,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_issue_link_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_issue_link_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const update_issue_link_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.update_issue_link_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const delete_issues_link_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.delete_issues_link_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const batch_create_issue_linksDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.batch_create_issue_links,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_workflow_status_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_workflow_status_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const update_workflow_statusDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.update_workflow_status,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const delete_wokflow_status_by_idDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.delete_wokflow_status_by_id,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const issues_statuses_actionsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.issues_statuses_actions,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_issues_accesses_by_nameDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_issues_accesses_by_name,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const get_issues_controlled_fieldsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.get_issues_controlled_fields,
    isExpire: isExpire(10),
  }),
  DataProvider,
)

export const issues_defaultsDataProvider = compose(
  defaultProps({
    requestAction: MiRequests.issues_defaults,
    isExpire: isExpire(10),
  }),
  DataProvider,
)


