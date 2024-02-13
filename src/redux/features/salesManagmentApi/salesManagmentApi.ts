import { baseApi } from "../../api/baseApi";

const salesManagmentAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableGadgets: builder.query({
      query: () => {
        return {
          url: `/sales/forSales`,
          method: "GET",
        };
      },
      providesTags: ["gadgets"],
    }),
    getSalesHistory: builder.query({
      query: (history) => {
        return {
          url: `/sales?history=${history}`,
          method: "GET",
        };
      },
      providesTags: ["gadgets"],
    }),
    addSales: builder.mutation({
      query: (salesInfo) => {
        return {
          url: `/sales`,
          method: "POST",
          body: salesInfo,
        };
      },
      invalidatesTags: ["gadgets"],
    }),
  }),
});

export const {
  useAddSalesMutation,
  useGetAvailableGadgetsQuery,
  useGetSalesHistoryQuery,
} = salesManagmentAPi;
