/**
 * This function can be used anywhere in the app to greet the user
 * @param userName The user's first name
 * @returns A kind greeting message
 */
export const sayHello = (userName: string): string => {
  return 'Welcome ' + userName + '!';
};

export const getKeyValue = function <T extends object, U extends keyof T>(obj: T, key: U) { return obj[key]; };
