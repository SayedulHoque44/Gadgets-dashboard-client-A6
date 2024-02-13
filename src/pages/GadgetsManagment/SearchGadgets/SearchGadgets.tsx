import { FieldValues } from "react-hook-form";
import Form from "../../../components/Form/Form";
import FormInput from "../../../components/Form/FormInput";

const SearchGadgets = ({
  onSubmit,
}: {
  onSubmit: (data: FieldValues) => void;
}) => {
  return (
    <Form
      className="xl:col-span-2 col-span-1 flex items-center gap-2"
      onSubmit={onSubmit}>
      <FormInput
        className="w-full m-0"
        type="text"
        name="searchTerm"
        label="Search Gadgets"
      />
      <button
        className="text-white  bg-blue-500 border-none py-3 rounded px-10 "
        type="submit">
        Search
      </button>
    </Form>
  );
};

export default SearchGadgets;
