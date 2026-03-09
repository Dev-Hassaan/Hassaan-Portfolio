import { z } from "zod";
import { insertMessageSchema } from "./schema";

export const api = {
  messages: {
    create: {
      method: "POST" as const,
      path: "/api/messages" as const,
      input: insertMessageSchema,
      responses: {
        201: z.object({ success: z.boolean() }),
        400: z.object({ message: z.string() }),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
