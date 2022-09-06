export default class RequestLog {
  constructor(
    statusCode,
    appStatusCode,
    isSuccess,
    message,
    data // with be of type 'RequestLogDataObject'!
  ) {
    this.statusCosde = statusCode;
    this.appStatusCode = appStatusCode;
    this.isSuccess = isSuccess;
    this.message = message;
    this.data = data;
  }
}
