import { validate } from "class-validator";
import { forEach, pick, forOwn } from "lodash";

export const validateRequest = async (validationSchema: any, reqObj: any) => {
  const validData = new validationSchema(reqObj);
  let validationResults = await validate(validData);
  const constraints: any[] = [];

  if (validationResults && validationResults.length > 0) {
    forEach(validationResults, (item) => {
      constraints.push(pick(item, "constraints", "property"));
    });
  }
  return constraints;
};
