import Ajv from 'ajv';
const ajv = Ajv({allErrors: true});

export  const postValidate = (scheme: object) => {
    return  (target: Function, key: string, value: any) => {
      return {
        value:  (args: object) => {
              const valid = ajv.validate(scheme, args);
              if(valid) return value.value.call(target, args);
              return Promise.reject(`Wrong parameters in class "${target.name}" method "${key}"`);
          }
      };
    }
  }