import { site } from "@/content/site";

/** Lien mailto vers GHaas Management avec un sujet encodé. */
export function mailto(subject: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
