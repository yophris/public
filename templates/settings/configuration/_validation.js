import * as Yup from "yup";
export const validation_station = Yup.object()
  .shape({
    station: Yup.object().shape({
      stationName: Yup.string().required("stationName"),
      isMainStation: Yup.string().required("select main station"),
    }),
  })
  .required();

export const validation_division = Yup.object()
  .shape({
    division: Yup.object().shape({
      divisionName: Yup.string().required(" name required."),
      divisionType: Yup.string().required("type required."),
      description: Yup.string().required("description required."),
    }),
  })
  .required();

export const validation_address = Yup.object()
  .shape({
    address: Yup.object().shape({
      addressLn1: Yup.string().required(" Line 1 required."),
      addressLn2: Yup.string(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      postalCode: Yup.string().required(),
      country: Yup.string().required(),
      phone1: Yup.string().required(),
    }),
  })
  .required();

  export const validation_company = Yup.object()
  .shape({
    company: Yup.object().shape({
      "companyName": Yup.string().required(),
      "industry": Yup.string().required(),
      "startYear":Yup.string().required(),
      "country": Yup.string(),
    }),
  })
  .required();