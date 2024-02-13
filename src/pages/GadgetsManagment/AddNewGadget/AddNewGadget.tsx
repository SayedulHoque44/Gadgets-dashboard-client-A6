import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { IoMdClose } from "react-icons/io";

import Form from "../../../components/Form/Form";
import FormInput from "../../../components/Form/FormInput";

import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useAddGadgetsMutation } from "../../../redux/features/gadgetsManagment/gadGetsManagmentApi";
import { checkStringOrNumber, compareObj } from "../../../utils/utils";
import { exampleGadget } from "./gadgets.const";

type TAddNewGadget = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddNewGadget = ({ open, setOpen }: TAddNewGadget) => {
  const { features, ...remainingInfo } = exampleGadget;
  const [addGadgets, { isLoading }] = useAddGadgetsMutation();
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const onSubmit = async (data: FieldValues) => {
    const gadgetsUpdateFeatures = compareObj(features, data);
    const gadgetsOtherUpdateFields = compareObj(remainingInfo, data);

    const gadgetsInfo = {
      ...gadgetsOtherUpdateFields,
      features: { ...gadgetsUpdateFeatures },
    };

    try {
      const res = await addGadgets(gadgetsInfo).unwrap();
      toast.success(res.message);
      handleClose();
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };
  return (
    <div>
      <button
        onClick={handleOpen}
        className="text-white  bg-blue-500 border-none py-3 rounded px-10 ">
        Add New Gadgets
      </button>
      <div>
        <Modal
          sx={{
            overflowY: "scroll",
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box
            sx={{
              position: "absolute" as const,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 750,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              maxHeight: "calc(100vh - 10%)",
              overflowY: "scroll",
              p: 4,
            }}
            width={700}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="flex justify-between">
              <span>Add Gadgets</span>
              <span
                onClick={handleClose}
                className="p-2 cursor-pointer bg-red-400 text-white">
                <IoMdClose size={20} />
              </span>
            </Typography>
            <Typography
              component={"div"}
              id="modal-modal-description"
              sx={{ mt: 2 }}>
              <Form
                onSubmit={onSubmit}
                defaultValues={{ ...remainingInfo, ...features }}>
                {Object.entries(remainingInfo).map((featureEleArray, index) => {
                  return (
                    <FormInput
                      key={index}
                      type={checkStringOrNumber(featureEleArray[1])}
                      name={featureEleArray[0]}
                      label={featureEleArray[0]}
                    />
                  );
                })}
                {features && (
                  <>
                    <h2 className="border-b-2 border-blue-400 text-blue-400">
                      Featurs :
                    </h2>
                    {Object.entries(features).map((featureEleArray, index) => {
                      return (
                        <FormInput
                          key={index}
                          type={checkStringOrNumber(featureEleArray[1])}
                          name={featureEleArray[0]}
                          label={featureEleArray[0]}
                        />
                      );
                    })}
                  </>
                )}
                <button
                  disabled={isLoading}
                  className="text-white disabled:bg-gray-500 w-full bg-blue-500 border-none p-2 "
                  type="submit">
                  Add
                </button>
              </Form>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AddNewGadget;
