import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function redactDomains(text: string): string {
  // This regex matches domains including subdomains, but excludes paths and query parameters
  const domainRegex = /(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?=\/|\s|$|\?|:|,|;|\)|\]|>|"|')/g
  return text.replace(domainRegex, 'redacted.com')
}

export function redactAuthTokens(text: string): string {
  // Match Authorization headers with Bearer tokens
  const authHeaderRegex = /(Authorization:\s*Bearer\s+)[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.[A-Za-z0-9-_.+/=]*/gi
  // Match raw JWT tokens
  const jwtRegex = /eyJ[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.[A-Za-z0-9-_.+/=]*/g
  
  return text
    .replace(authHeaderRegex, '$1[REDACTED_TOKEN]')
    .replace(jwtRegex, '[REDACTED_TOKEN]')
}
