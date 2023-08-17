import { IResponse } from "../interfaces/api/api.interface";

export const handleSuccessMessage = (res: IResponse, toast: any) => {
  if (res.code !== 200) {
    toast.error(res.message);

    return;
  }
  toast.success(res.message);
};

export const handleErrorMessage = (error: any, toast: any) => {
  const { message } = error.response.data;

  if (Array.isArray(message)) {
    message.forEach((element) => {
      toast.error(element);
    });
  }

  toast.error(message);
};
