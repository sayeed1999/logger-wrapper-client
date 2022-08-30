export default class QueryObject {
    constructor(
        actionId,
        actionName,
        application,
        policyNumber,
        processId,
        query,
        requestId,
        requestMode,
        requestPath,
        requestStage,
        requestType
    ) {
        this.actionId = actionId;
        this.actionName = actionName;
        this.application = application;
        this.policyNumber = policyNumber;
        this.processId = processId;
        this.query = query;
        this.requestId = requestId;
        this.requestMode = requestMode;
        this.requestPath = requestPath;
        this.requestStage = requestStage;
        this.requestType = requestType;
    }
};