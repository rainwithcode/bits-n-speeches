export async function submitForm(api: string, formData: FormData) {
  const response = await fetch(api, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const data = await response.json().catch(() => null);

    throw new Error(data?.error || "Form submission failed");
  }

  return response;
}
