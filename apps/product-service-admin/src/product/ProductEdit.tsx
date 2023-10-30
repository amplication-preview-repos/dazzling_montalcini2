import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <NumberInput label="price" source="price" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
