import HttpStatusCodes from "../constants/http-status-codes";

export interface ControllerReturnType<Data = any> {
  success: boolean;
  status: HttpStatusCodes;
  data?: Data;
  error?: {
    code: string;
    type: string;
    message: string;
  };
}
