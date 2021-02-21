import { getPlanData } from "./getPlanData";

export interface ApiResponse {
  id: number;
  plan: { id: number; name: string };
  currency: string;
  currency_symbol: string;
  yearly_rate: number;
  region: string;
  units_system: number;
}

export function getPlans(plans: ApiResponse[]) {
  const acceptedPlans = ["starter", "premium", "professional"];
  const filteredPlans = plans.filter((plan) => acceptedPlans.includes(plan.plan.name.toLowerCase()));
  const starterData = filteredPlans.find((plan) => plan.plan.name.toLowerCase() === "starter");
  const premiumData = filteredPlans.find((plan) => plan.plan.name.toLowerCase() === "premium");
  const professionalData = filteredPlans.find((plan) => plan.plan.name.toLowerCase() === "professional");
  const starter = getPlanData(starterData);
  const premium = getPlanData(premiumData);
  const professional = getPlanData(professionalData);
  return { starter, premium, professional };
}
