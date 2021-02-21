import { ApiResponse } from "./getPlans";

export function getPlanData(plan: ApiResponse | undefined) {
  if (plan) {
    return { price: plan.yearly_rate, currency: plan.currency, language: plan.region };
  }
}
