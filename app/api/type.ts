export interface CommonRequestType<T> {
  data: T;
  code: StatusCode;
  msg: string;
}

// 定义一个成功的响应类型
export interface SuccessResponse<T> extends CommonRequestType<T> {
  msg: "success";
}
// 定义一个失败的响应类型
export interface ErrorResponse<T> extends CommonRequestType<T> {
  msg: "error";
  error?: string; // 可选的错误信息
}
// 定义一个通用的响应类型，可以是成功的也可以是失败的
export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse<T>;
export enum StatusCode {
  Ok = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  Conflict = 409,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}
