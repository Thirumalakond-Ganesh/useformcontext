import React from "react";
import { useForm, Controller, useFormContext, FormProvider } from "react-hook-form";
import "./App.css"; 

const InputA = ({ name }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <input {...field} placeholder={`InputA`} />
      )}
    />
  );
};

const InputB = ({ name }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <input {...field} placeholder={`InputB`} />
      )}
    />
  );
};

const App = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
    <form onSubmit={methods.handleSubmit(onSubmit)}>
    <h2>UseFormContext</h2>
      <FormProvider {...methods}>
        <InputA name="inputA" />
        <InputB name="inputB" />
      </FormProvider>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default App;
