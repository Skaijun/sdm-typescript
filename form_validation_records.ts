type Form = {
  username: string;
  password: string;
  age: number;
};

type Validators<T> = {
  [K in keyof T]: (value: T[K]) => boolean;
};

const formValidators: Validators<Form> = {
  username: (value) => value.length > 0,
  password: (value) => value.length > 6,
  age: (value) => value >= 18,
};

function validateForm<T extends Record<string, unknown>>(
  form: T,
  validators: Validators<T>
): boolean {
  //   return Object.keys(form).every((key) =>
  //     validators[key as keyof T](form[key as keyof T])
  //   );
  return (Object.keys(form) as (keyof T)[]).every((key) =>
    validators[key](form[key])
  );
}

const validFormData: Form = {
  username: "John",
  password: "password",
  age: 20,
};
const validResult = validateForm(validFormData, formValidators);
console.log(validResult); // true

const invalidFormData: Form = {
  username: "",
  password: "pass",
  age: 15,
};
const invalidResult = validateForm(invalidFormData, formValidators);
console.log(invalidResult); // false
// In this example, we have a Form type that represents a form object with three fields: username, password, and age. We also have a Validators type that represents a map of validation functions for each field in the form object. The validateForm function takes a form object and a validators object and returns true if all fields pass the validation, and false otherwise. We use the keyof and Record types to ensure that the form object and validators object are compatible. We also use the in operator to iterate over the keys of the form object and apply the corresponding validation function from the validators object.
