import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { TextField, Typography, Button } from "@mui/material";
import NumberFormat from "react-number-format";
import { clearCartThunk } from "../../store/products/operations";
import { formTypes } from "./OrderFormTypes";
import { orderFormValidation } from "./OrderFormValidation";
import "./OrderForm.scss";

const OrderForm = ({ itemsInCart }) => {
  const dispatch = useDispatch();
  const OrderPhoneInput = ({ name, label }) => {
    const [field] = useField(name);
    return (
      <NumberFormat
        {...field}
        format="(###) ###-####"
        allowEmptyFormatting
        mask="_"
        customInput={TextField}
        label={label}
        variant="standard"
      />
    );
  };

  const handleFormSubmit = (values, { setSubmitting }) => {
    console.log("Customer information:");
    console.group();
    console.table(values);
    console.groupEnd();
    console.group("Order information:");
    console.table(itemsInCart);
    console.groupEnd();

    dispatch(clearCartThunk());
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        address: "",
        tel: "",
      }}
      validationSchema={orderFormValidation}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="order-form">
          <Typography className="cart-title" variant="h5" component="div">
            {" "}
            Confirm order:
          </Typography>
          {formTypes.map(({ id, name, label, type, isPhone }) => (
            <div key={id}>
              {isPhone ? (
                <OrderPhoneInput name={name} type={type} label={label} />
              ) : (
                <Field
                  name={name}
                  as={TextField}
                  label={label}
                  type={type}
                  variant="standard"
                />
              )}
              <ErrorMessage
                component="div"
                name={name}
                className="order-form__error"
              />
            </div>
          ))}
          <Button
            className="order-form__button"
            type="submit"
            disabled={isSubmitting}
            color="success"
            variant="contained"
          >
            Buy
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
