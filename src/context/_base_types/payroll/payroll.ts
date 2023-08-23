const createActionTypes = (baseType: any) => ({
  LOADING: `${baseType}_LOADING`,
  SUCCESS: `${baseType}_SUCCESS`,
  FAILED: `${baseType}_FAILED`,
});

export const ADD_PAYROLL = createActionTypes("ADD_PAYROLL");
export const APPROVE_PAYROLL = createActionTypes("APPROVE_PAYROLL");
export const LOAD_PAYROLL = createActionTypes("LOAD_PAYROLL");
export const UPDATE_PAYROLL = createActionTypes("UPDATE_PAYROLL");
export const DELETE_PAYROLL = createActionTypes("DELETE_PAYROLL");

/*
// To use these action types to create action creators:
const createLoadingAction = (type) => ({
  type: type.LOADING,
});

const createSuccessAction = (type, data) => ({
  type: type.SUCCESS,
  payload: data,
});

const createFailedAction = (type, error) => ({
  type: type.FAILED,
  payload: error,
});

// Usage example
export const addPayrollLoading = createLoadingAction(ADD_PAYROLL);
export const addPayrollSuccess = createSuccessAction(ADD_PAYROLL);
export const addPayrollFailed = createFailedAction(ADD_PAYROLL);

*/
