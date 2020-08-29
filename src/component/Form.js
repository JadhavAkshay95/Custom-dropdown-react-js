import React, { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage, Form, FieldArray } from "formik";
import * as Yup from "yup";
import ErrorMessagec from "./ErrorMessage";

const Forma = () => {
  const obj = {
    username: "Akshay",
    password: "Jadhav",
    address: {
      city: {
        fCity: "Pune",
      },
    },
  };

  const [state, setState] = useState({
    username: "",
    password: "",
    address: {
      city: {
        fCity: "",
      },
    },
    phoneNumbers: ["", ""],
    phoneNums: ["", ""],
  });

  const validate = Yup.object().shape({
    username: Yup.string()
      .trim()
      .min(2, "Too SHort")
      .max(8, "Too large")
      .required("Required"),
    password: Yup.string()
      .min(2, "Too SHort")
      .max(8, "Too large")
      .required("Required"),
    address: Yup.object().shape({
      city: Yup.object().shape({
        fCity: Yup.string().required("Required"),
      }),
    }),
  });

  return (
    <>
      <Formik
        initialValues={state}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));
          setSubmitting(false);
        }}
        enableReinitialize
      >
        <Form className="form-class">
          <h2>Login Form</h2>
          <div className="form-div">
            <label>Username</label>
            <Field type="text" name="username" />
          </div>
          <ErrorMessage name="username" component={ErrorMessagec} />
          <div className="form-div">
            <label>Password</label>
            <Field type="text" name="password" />
          </div>
          <ErrorMessage name="password" component={ErrorMessagec} />
          <div className="form-div">
            <label>City</label>
            <Field type="text" name="address.city.fCity" />
            <ErrorMessage name="address.city.fCity" component={ErrorMessagec} />
          </div>
          <div className="form-div">
            <label>Phone num 1</label>
            <Field type="text" name="phoneNumbers[0]" />
          </div>

          <div className="form-div">
            <label>Phone num 2</label>
            <Field type="text" name="phoneNumbers[1]" />
          </div>

          <div className="form-div">
            <label>Phone nums</label>
            <FieldArray>
              {(fieldArrayProps) => {
                console.log(fieldArrayProps);
                const { form, push, pop } = fieldArrayProps;
                const { values } = form;
                const { phoneNums } = values;

                return (
                  <div>
                    {phoneNums.map((element, index) => (
                      <div key={index}>
                        <Field name={`phoneNums[${index}]`} />
                        <button onClick={() => phoneNums.push("")}>Click</button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Forma;
