import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { toast } from "sonner";
import Form from "../../../../../components/Form/Form";
import FormInput from "../../../../../components/Form/FormInput";
import { useAddSalesMutation } from "../../../../../redux/features/gadgetsManagment/gadGetsManagmentApi";
import { TGadgets, TSales } from "../../../../../types/Types";
import { checkStringOrNumber } from "../../../../../utils/utils";

type TSaleModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  salesInfo: TSales;
  gadgets: TGadgets;
};

const SaleModal = ({ setOpen, open, salesInfo, gadgets }: TSaleModalProps) => {
  const { quantity, productId, ...remainingInfo } = salesInfo;
  const [addSales] = useAddSalesMutation();

  const handleClose = () => setOpen(false);

  //
  const onSubmit = async (data: FieldValues) => {
    const salesInfos = {
      productId,
      quantity,
      ...data,
    };
    try {
      const res = await addSales(salesInfos).unwrap();
      toast.success(res.message);
      handleClose();
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };
  return (
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
          <span>Sell {gadgets.name}</span>
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
          <Form onSubmit={onSubmit} defaultValues={remainingInfo}>
            <div className="space-y-3">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {gadgets.name}
              </h5>
              <div className="flex justify-between">
                <span>Model Number:</span>
                <span>{gadgets.modelNumber}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity:</span>
                <span>{quantity}</span>
              </div>
            </div>
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

            <button
              // disabled={isLoading}
              className="text-white disabled:bg-gray-500 w-full bg-blue-500 border-none p-2 "
              type="submit">
              Sell
            </button>
          </Form>
        </Typography>
      </Box>
    </Modal>
  );
};

export default SaleModal;
