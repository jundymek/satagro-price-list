import { getPlans } from "./getPlans";

const sampleProperApiResponse = [
  {
    id: 39,
    plan: {
      id: 13,
      name: "KR Kietrz",
    },
    currency: "PLN",
    currency_symbol: "zł",
    yearly_rate: 0.0,
    region: "PL",
    units_system: 3,
  },
  {
    id: 41,
    plan: {
      id: 20,
      name: "Enterprise BGŻ BNP Paribas",
    },
    currency: "PLN",
    currency_symbol: "zł",
    yearly_rate: 0.0,
    region: "PL",
    units_system: 3,
  },
  {
    id: 42,
    plan: {
      id: 20,
      name: "Enterprise BGŻ BNP Paribas",
    },
    currency: "PLN",
    currency_symbol: "zł",
    yearly_rate: 0.0,
    region: "PL",
    units_system: 4,
  },
  {
    id: 43,
    plan: {
      id: 8,
      name: "Inwestrol",
    },
    currency: "PLN",
    currency_symbol: "zł",
    yearly_rate: 0.0,
    region: "PL",
    units_system: 3,
  },

  {
    id: 45,
    plan: {
      id: 10,
      name: "Scholz E",
    },
    currency: "PLN",
    currency_symbol: "zł",
    yearly_rate: 0.0,
    region: "PL",
    units_system: 3,
  },
  {
    id: 46,
    plan: {
      id: 10,
      name: "Scholz E",
    },
    currency: "PLN",
    currency_symbol: "zł",
    yearly_rate: 0.0,
    region: "PL",
    units_system: 4,
  },
  {
    id: 47,
    plan: {
      id: 4,
      name: "Professional Old",
    },
    currency: "PLN",
    currency_symbol: "zł",
    yearly_rate: 0.0,
    region: "PL",
    units_system: 3,
  },
  {
    id: 49,
    plan: {
      id: 100,
      name: "Starter",
    },
    currency: "PLN",
    currency_symbol: "zł",
    yearly_rate: 0.0,
    region: "PL",
    units_system: 3,
  },

  {
    id: 51,
    plan: {
      id: 1,
      name: "Basic",
    },
    currency: "PLN",
    currency_symbol: "zł",
    yearly_rate: 0.0,
    region: "PL",
    units_system: 3,
  },
  {
    id: 53,
    plan: {
      id: 102,
      name: "Premium",
    },
    currency: "PLN",
    currency_symbol: "zł",
    yearly_rate: 15.0,
    region: "PL",
    units_system: 3,
  },

  {
    id: 55,
    plan: {
      id: 101,
      name: "Professional",
    },
    currency: "PLN",
    currency_symbol: "zł",
    yearly_rate: 10.0,
    region: "PL",
    dupa: "xxx",
    units_system: 3,
  },
];

const sampleInproperApiResponse = [
  {
    id: 55,
    plan: {
      id: 101,
      name: "Professional",
    },
    currency: "PLN",
    currency_symbol: "zł",
    yearly_rate: 10.0,
    region: "PL",
    dupa: "xxx",
    units_system: 3,
  },
];

const expected = {
  starter: {
    price: 0.0,
    currency: "PLN",
    language: "PL",
  },
  premium: {
    price: 15.0,
    currency: "PLN",
    language: "PL",
  },
  professional: {
    price: 10.0,
    currency: "PLN",
    language: "PL",
  },
};

it("should give proper result", () => {
  expect(getPlans(sampleProperApiResponse)).toEqual(expected);
});

it("should fill empty plans with undefined", () => {
  const expected = {
    starter: undefined,
    premium: undefined,
    professional: { price: 10.0, currency: "PLN", language: "PL" },
  };
  expect(getPlans(sampleInproperApiResponse)).toEqual(expected);
});
