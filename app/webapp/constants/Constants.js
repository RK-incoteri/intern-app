sap.ui.define([], function() {
    "use strict";

    var mConstants = {
        SERVICE_URL : {
            ODATA : "/odata/v4"            
        },

        HTTP_ERRORS : {
            STATUS_FORBIDDEN : 403,
            STATUS_UNAUTHORIZED : 401,
            STATUS_LOCKED : 423,
            STATUS_CONFLICT : 409,
            STATUS_INTERNAL_SERVER_ERROR : 500
        },

        // Response type on fetching documents from API Hub
        RESPONSE_TYPES : {
            PDF : "application/pdf",
            TEXT : "text/plain"
        },

        DOLLAR_VALUE : "$value",

        FILTER_QUERY : "?filter=",

        EXPAND_FORMS_AND_VARIANTS : "&expand=forms,variants"

    };

    return mConstants;

});
