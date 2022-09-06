export default class RequestLogDataObject {
  constructor(
    id,
    userId,
    applicationName,
    ipAddress,
    version,
    host,
    url,
    source,
    form,
    body,
    response,
    requestHeaders,
    responseHeaders,
    scheme,
    traceId,
    protocol,
    urlReferrer,
    area,
    controllerName,
    actionName,
    executionDuration,
    statusCode,
    appStatusCode,
    createdDateUtc
  ) {
    this.id = id;
    this.userId = userId;
    this.applicationName = applicationName;
    this.ipAddress = ipAddress;
    this.version = version;
    this.host = host;
    this.url = url;
    this.source = source;
    this.form = form;
    this.body = body;
    this.response = response;
    this.requestHeaders = requestHeaders;
    this.responseHeaders = responseHeaders;
    this.scheme = scheme;
    this.traceId = traceId;
    this.protocol = protocol;
    this.urlReferrer = urlReferrer;
    this.area = area;
    this.controllerName = controllerName;
    this.actionName = actionName;
    this.executionDuration = executionDuration;
    this.statusCode = statusCode;
    this.appStatusCode = appStatusCode;
    this.createdDateUtc = createdDateUtc;
  }
}
