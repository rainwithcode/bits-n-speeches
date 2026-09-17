import { z } from "zod";
export default function validateFormData<T>(
  schema: z.ZodType<T>,
  rawData: unknown,
) {
  // Validate form data
  const result = schema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false as const,
      response: z.treeifyError(result.error),
    };
    {
      status: 400;
    }
  }
  return {
    success: true as const,
    data: result.data,
  };
}
