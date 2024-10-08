
// generates a random string id
export const generateID = (): string => Math.random().toString(36).substring(2, 10);
