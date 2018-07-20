import Ajv from 'ajv';
const ajv = Ajv({allErrors: true});

export function postValidate(scheme: object){
    return function (target: Function, key: string, value: any) {
      return {
        value: function (args: any) {
              const valid = ajv.validate(scheme, args);
              if(valid) return value.value.call(this, args);
              return Promise.reject('Wrong parameters');
          }
      };
    }
  }