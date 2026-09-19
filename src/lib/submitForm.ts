export async function submitForm(api: string, formData: FormData) {
  const response = await fetch(api, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }

  return response;
}
