import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  title?: StringNullableFilter;
};
