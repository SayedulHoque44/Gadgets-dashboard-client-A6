import { TSalesFull } from "../pages/SalesHistory/ChartContainer/SalesLineChart/SalesLineChart";

export const checkStringOrNumber = (value: any) => {
  if (typeof value === "number") {
    return "number";
  } else if (typeof value === "string") {
    return "text";
  }
  return "text";
};

export const compareObj = (matchObj: any, mainObj: any) => {
  const numberValueToBe = ["quantity", "price"];
  const reqObj: Record<string, unknown> = {};
  Object.keys(matchObj).forEach((key) => {
    // eslint-disable-next-line no-prototype-builtins
    if (mainObj.hasOwnProperty(key)) {
      if (numberValueToBe.find((ele) => ele === key)) {
        reqObj[`${key}`] = parseInt(mainObj[key]);
      } else {
        reqObj[`${key}`] = mainObj[key];
      }
    }
  });
  return reqObj;
};

export const ModifiedChartData = (sales: TSalesFull[]) => {
  return sales.map((ele) => ({
    soldDate: `${new Date(ele.createdAt).getDate()}/${
      new Date(ele.createdAt).getMonth() + 1
    }/${new Date(ele.createdAt).getFullYear()}`,
    SoldQuantity: ele.quantity,
    BuyerName: ele.buyerName,
    GadgetsName: ele?.productId?.name,
  }));
};
