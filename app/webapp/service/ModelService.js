sap.ui.define([ "incoteri/intern-app/constants/Constants"], function(Constants, ServiceUtil) {
    "use strict";

    return {

        importAttributes : function(attributeName, fnSuccess, fnError) {
            $.ajax({
                url : '/odata/v4/import/',
                type : "POST",
                dataType : "json",
                success : fnSuccess,
                error : function(jqXhr, sErrorType) {
                    var oError = ServiceUtil.handleRESTError(jqXhr, sErrorType);
                    fnError(oError);
                }
            });
        },

        getAttributes : function(fnSuccess, fnError) {
            $.ajax({
                url : '',
                dataType : "json",
                success : fnSuccess,
                error : function(jqXhr, sErrorType) {
                    var oError = ServiceUtil.handleRESTError(jqXhr, sErrorType);
                    fnError(oError);
                }
            });
        }
    };
});
