sap.ui.define([ 'incoteri/intern-app/constants/Constants' ], function(Constants) {
    'use strict';
    return {

        handleRESTError : function(jqXhr, sErrorType) {
            var sErrorCode = '', sErrorMessage = '', sErrorDetails = [], iStatus = jqXhr.status;

            if (sErrorType === 'parsererror') {
                iStatus = 0;
                sErrorCode = 'parsererror';
            } else if (jqXhr.responseJSON && jqXhr.responseJSON.error) {
                sErrorCode = jqXhr.responseJSON.error.code || "";
                sErrorMessage = jqXhr.responseJSON.error || "";
                sErrorDetails = jqXhr.responseJSON.errorDetails || [];
            }

            jQuery.sap.log.error("REST API call encountered an error of type '" + sErrorType + "' with HTTP status code " + jqXhr.status
                    + ':\n' + JSON.stringify(jqXhr.responseText));

            return {
                errorCode : sErrorCode,
                errorMessage : sErrorMessage,
                errorDetails : sErrorDetails,
                httpStatus : iStatus,
                jqXhr : jqXhr
            };
        }
    };
});
